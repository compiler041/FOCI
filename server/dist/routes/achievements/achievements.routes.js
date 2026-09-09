"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const achievements_handler_1 = require("./achievements.handler");
const auth_middleware_1 = require("../../middleware/auth.middleware");
const router = (0, express_1.Router)();
router.get('/', auth_middleware_1.authMiddleware, achievements_handler_1.getAllAchievements);
router.get('/me', auth_middleware_1.authMiddleware, achievements_handler_1.getUserAchievements);
exports.default = router;
