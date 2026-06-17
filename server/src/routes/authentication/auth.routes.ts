import { Router } from "express";
import { googleLogin, logout, getMe } from "./auth.handler";
import { authMiddleware } from "../../middleware/auth.middleware";

const router = Router();

router.post("/google", googleLogin);
router.post("/logout", authMiddleware, logout);
router.get("/me", authMiddleware, getMe);

export default router;