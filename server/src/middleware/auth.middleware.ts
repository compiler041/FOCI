import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../lib/jwt";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    const user = verifyToken(token);
    req.user = user;
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
};