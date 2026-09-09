"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../../middleware/auth.middleware");
const breaks_handler_1 = require("./breaks.handler");
const router = (0, express_1.Router)();
router.post('/', auth_middleware_1.authMiddleware, breaks_handler_1.logBreak);
router.get('/today', auth_middleware_1.authMiddleware, breaks_handler_1.getTodayBreaks);
exports.default = router;
