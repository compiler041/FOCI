import { Request } from "express";

export interface AuthUser {
  id: string;
  email: string;
  isPremium: boolean;
}

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string
        email: string
      }
    }
  }
}