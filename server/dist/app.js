"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const auth_routes_1 = __importDefault(require("./routes/authentication/auth.routes"));
const rules_routes_1 = __importDefault(require("./routes/rules/rules.routes"));
const schedule_route_1 = __importDefault(require("./routes/schedule/schedule.route"));
const Blockedapp_route_1 = __importDefault(require("./routes/Blockedapp/Blockedapp.route"));
const youtube_route_1 = __importDefault(require("./routes/youtube/youtube.route"));
const sessions_routes_1 = __importDefault(require("./routes/sessions/sessions.routes"));
const strictness_route_1 = __importDefault(require("./routes/strictness/strictness.route"));
const themes_routes_1 = __importDefault(require("./routes/themes/themes.routes"));
const achievements_routes_1 = __importDefault(require("./routes/achievements/achievements.routes"));
const breaks_route_1 = __importDefault(require("./routes/breaks/breaks.route"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// routes
app.use("/api/auth", auth_routes_1.default);
app.use('/api/rules', rules_routes_1.default);
app.use('/api/schedules', schedule_route_1.default);
app.use('/api/blocked-apps', Blockedapp_route_1.default);
app.use('/api/youtube-allowlist', youtube_route_1.default);
app.use('/api/sessions', sessions_routes_1.default);
app.use('/api/strictness', strictness_route_1.default);
app.use('/api/themes', themes_routes_1.default);
app.use('/api/achievements', achievements_routes_1.default);
app.use('/api/breaks', breaks_route_1.default);
exports.default = app;
