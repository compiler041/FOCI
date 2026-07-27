import { Request, Response } from "express";
import { OAuth2Client } from "google-auth-library";
import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma";
import { signToken } from "../../lib/jwt";

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// ─── POST /auth/signup ────────────────────────────
export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required" });
      return;
    }

    if (password.length < 6) {
      res.status(400).json({ error: "Password must be at least 6 characters" });
      return;
    }

    // Check if user already exists
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      res.status(409).json({ error: "An account with this email already exists" });
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        name: name || "User",
        password: hashedPassword,
      },
    });

    const token = signToken({
      id: user.id,
      email: user.email,
      isPremium: user.isPremium,
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
        isPremium: user.isPremium,
        schedules: [],
      },
      token,
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Signup failed" });
  }
};

// ─── POST /auth/login ─────────────────────────────
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required" });
      return;
    }

    const user = await prisma.user.findUnique({ 
      where: { email },
      include: { schedules: { select: { id: true } } }
    });
    if (!user) {
      res.status(401).json({ error: "Invalid email or password" });
      return;
    }

    // If user signed up via OAuth only (no password set)
    if (!user.password) {
      res
        .status(401)
        .json({ error: "This account uses Google sign-in. Please use Google to log in." });
      return;
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      res.status(401).json({ error: "Invalid email or password" });
      return;
    }

    const token = signToken({
      id: user.id,
      email: user.email,
      isPremium: user.isPremium,
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
        isPremium: user.isPremium,
        schedules: user.schedules,
      },
      token,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Login failed" });
  }
};

// ─── POST /auth/google ────────────────────────────
export const googleLogin = async (req: Request, res: Response) => {
  try {
    const { idToken } = req.body;

    // verify google token
    const ticket = await googleClient.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (!payload || !payload.email) {
      res.status(400).json({ error: "Invalid Google token" });
      return;
    }

    const { email, name, picture, sub: googleId } = payload;

    // find or create user
    let user = await prisma.user.findUnique({ 
      where: { email },
      include: { schedules: { select: { id: true } } }
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          name: name ?? "User",
          avatar: picture,
          oauthAccounts: {
            create: {
              provider: "google",
              providerAccountId: googleId,
            },
          },
        },
        include: { schedules: { select: { id: true } } }
      });
    } else {
      // check if oauth account exists, if not create it
      const existing = await prisma.oAuthAccount.findUnique({
        where: {
          provider_providerAccountId: {
            provider: "google",
            providerAccountId: googleId,
          },
        },
      });

      if (!existing) {
        await prisma.oAuthAccount.create({
          data: {
            provider: "google",
            providerAccountId: googleId,
            userId: user.id,
          },
        });
      }
    }

    const token = signToken({
      id: user.id,
      email: user.email,
      isPremium: user.isPremium,
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
        isPremium: user.isPremium,
        schedules: user.schedules,
      },
      token,
    });
  } catch (err) {
    console.error("Google login error:", err);
    res.status(500).json({ error: "Google login failed" });
  }
};

// ─── POST /auth/logout ────────────────────────────
export const logout = (req: Request, res: Response) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
};

// ─── GET /auth/me ─────────────────────────────────
export const getMe = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user!.id },
      select: {
        id: true,
        email: true,
        name: true,
        avatar: true,
        isPremium: true,
        createdAt: true,
        schedules: { select: { id: true } },
      },
    });
    res.json({ user });
  } catch {
    res.status(500).json({ error: "Failed to fetch user" });
  }
};