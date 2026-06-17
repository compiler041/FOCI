import { Request, Response } from "express";
import { OAuth2Client } from "google-auth-library";
import { prisma } from "../../lib/prisma";
import { signToken } from "../../lib/jwt";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// POST /auth/google
export const googleLogin = async (req: Request, res: Response) => {
  try {
    const { idToken } = req.body;

    // verify google token
    const ticket = await client.verifyIdToken({
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
    let user = await prisma.user.findUnique({ where: { email } });

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
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.json({ user, token });
  } catch (err) {
    res.status(500).json({ error: "Google login failed" });
  }
};

// POST /auth/logout
export const logout = (req: Request, res: Response) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
};

// GET /auth/me
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
      },
    });
    res.json(user);
  } catch {
    res.status(500).json({ error: "Failed to fetch user" });
  }
};