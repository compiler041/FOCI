"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMe = exports.logout = exports.googleLogin = exports.login = exports.signup = void 0;
const google_auth_library_1 = require("google-auth-library");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma_1 = require("../../lib/prisma");
const jwt_1 = require("../../lib/jwt");
const googleClient = new google_auth_library_1.OAuth2Client(process.env.GOOGLE_CLIENT_ID);
// ─── POST /auth/signup ────────────────────────────
const signup = async (req, res) => {
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
        const existing = await prisma_1.prisma.user.findUnique({ where: { email } });
        if (existing) {
            res.status(409).json({ error: "An account with this email already exists" });
            return;
        }
        // Hash password
        const hashedPassword = await bcryptjs_1.default.hash(password, 12);
        // Create user
        const user = await prisma_1.prisma.user.create({
            data: {
                email,
                name: name || "User",
                password: hashedPassword,
            },
        });
        const token = (0, jwt_1.signToken)({
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
    }
    catch (err) {
        console.error("Signup error:", err);
        res.status(500).json({ error: "Signup failed" });
    }
};
exports.signup = signup;
// ─── POST /auth/login ─────────────────────────────
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ error: "Email and password are required" });
            return;
        }
        const user = await prisma_1.prisma.user.findUnique({
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
        const valid = await bcryptjs_1.default.compare(password, user.password);
        if (!valid) {
            res.status(401).json({ error: "Invalid email or password" });
            return;
        }
        const token = (0, jwt_1.signToken)({
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
    }
    catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ error: "Login failed" });
    }
};
exports.login = login;
// ─── POST /auth/google ────────────────────────────
const googleLogin = async (req, res) => {
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
        let user = await prisma_1.prisma.user.findUnique({
            where: { email },
            include: { schedules: { select: { id: true } } }
        });
        if (!user) {
            user = await prisma_1.prisma.user.create({
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
        }
        else {
            // check if oauth account exists, if not create it
            const existing = await prisma_1.prisma.oAuthAccount.findUnique({
                where: {
                    provider_providerAccountId: {
                        provider: "google",
                        providerAccountId: googleId,
                    },
                },
            });
            if (!existing) {
                await prisma_1.prisma.oAuthAccount.create({
                    data: {
                        provider: "google",
                        providerAccountId: googleId,
                        userId: user.id,
                    },
                });
            }
        }
        const token = (0, jwt_1.signToken)({
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
    }
    catch (err) {
        console.error("Google login error:", err);
        res.status(500).json({ error: "Google login failed" });
    }
};
exports.googleLogin = googleLogin;
// ─── POST /auth/logout ────────────────────────────
const logout = (req, res) => {
    res.clearCookie("token");
    res.json({ message: "Logged out" });
};
exports.logout = logout;
// ─── GET /auth/me ─────────────────────────────────
const getMe = async (req, res) => {
    try {
        const user = await prisma_1.prisma.user.findUnique({
            where: { id: req.user.id },
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
    }
    catch {
        res.status(500).json({ error: "Failed to fetch user" });
    }
};
exports.getMe = getMe;
