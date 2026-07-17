import { Router } from "express";
import { signup, login, googleLogin, logout, getMe } from "./auth.handler";
import { authMiddleware } from "../../middleware/auth.middleware";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/google", googleLogin);
router.post("/logout", authMiddleware, logout);
router.get("/me", authMiddleware, getMe);

export default router;