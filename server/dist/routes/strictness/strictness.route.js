"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const strictness_handler_1 = require("./strictness.handler");
const auth_middleware_1 = require("../../middleware/auth.middleware");
const router = (0, express_1.Router)();
router.get('/', auth_middleware_1.authMiddleware, strictness_handler_1.getStrictness);
router.put('/', auth_middleware_1.authMiddleware, strictness_handler_1.updateStrictness);
exports.default = router;
