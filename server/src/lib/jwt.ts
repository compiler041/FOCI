import jwt from "jsonwebtoken";
import { AuthUser } from "../types";

const SECRET = process.env.JWT_SECRET!;

export const signToken = (user: AuthUser): string => {
  return jwt.sign(user, SECRET, { expiresIn: "7d" });
};

export const verifyToken = (token: string): AuthUser => {
  return jwt.verify(token, SECRET) as AuthUser;
};