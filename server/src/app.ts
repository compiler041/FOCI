import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authentication/auth.routes";
import rulesRouter from "./routes/rules/rules.routes";
import schedulesRouter from './routes/schedule/schedule.route'
import blockedAppsRouter from './routes/Blockedapp/Blockedapp.route'
import youtubeRouter from './routes/youtube/youtube.route'
import sessionsRouter from './routes/sessions/sessions.routes'
import strictnessRouter from './routes/strictness/strictness.route'
import themesRouter from './routes/themes/themes.routes'
import achievementsRouter from './routes/achievements/achievements.routes'
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

app.use('/api/schedules', schedulesRouter);

app.use('/api/blocked-apps', blockedAppsRouter);

app.use('/api/youtube-allowlist', youtubeRouter);

app.use('/api/sessions', sessionsRouter)

app.use('/api/strictness', strictnessRouter)

app.use('/api/themes', themesRouter)

app.use('/api/achievements', achievementsRouter)

export default app;