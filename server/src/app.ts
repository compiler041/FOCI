import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authentication/auth.routes";
import rulesRouter from "./routes/rules/rules.routes";

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/auth", authRoutes);

app.use('/api/rules', rulesRouter);

app.use('/api/schedules', schedulesRouter)

app.use('/api/blocked-apps', blockedAppsRouter)

export default app;