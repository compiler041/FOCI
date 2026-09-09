"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncRules = exports.deleteRule = exports.updateRule = exports.setRules = exports.getRules = void 0;
const prisma_1 = require("../../lib/prisma");
const getRules = async (req, res) => {
    try {
        const userId = req.user.id; // set by your auth middleware
        const rules = await prisma_1.prisma.blockRule.findMany({
            where: { userId }
        });
        res.json({ rules });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.getRules = getRules;
const setRules = async (req, res) => {
    try {
        const { name, urlPattern, category } = req.body;
        const userId = req.user.id;
        const rule = await prisma_1.prisma.blockRule.create({
            data: {
                userId,
                name,
                urlPattern,
                category
            }
        });
        res.status(201).json({ rule });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.setRules = setRules;
const updateRule = async (req, res) => {
    try {
        const ruleId = req.params.id;
        const userId = req.user.id;
        const rule = await prisma_1.prisma.blockRule.findUnique({ where: { id: ruleId } });
        if (!rule)
            return res.status(404).json({ message: 'Rule not found' });
        if (rule.userId !== userId)
            return res.status(403).json({ message: 'Unauthorized' });
        const updated = await prisma_1.prisma.blockRule.update({
            where: { id: ruleId },
            data: req.body
        });
        res.json({ rule: updated });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.updateRule = updateRule;
const deleteRule = async (req, res) => {
    try {
        const ruleId = req.params.id;
        const userId = req.user.id;
        const rule = await prisma_1.prisma.blockRule.findUnique({ where: { id: ruleId } });
        if (!rule)
            return res.status(404).json({ message: 'Rule not found' });
        if (rule.userId !== userId)
            return res.status(403).json({ message: 'Unauthorized' });
        await prisma_1.prisma.blockRule.delete({ where: { id: ruleId } });
        res.json({ message: 'Rule deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.deleteRule = deleteRule;
const syncRules = async (req, res) => {
    try {
        const userId = req.user.id;
        const rules = await prisma_1.prisma.blockRule.findMany({
            where: {
                userId,
                isActive: true
            },
            select: {
                urlPattern: true,
                category: true
            }
        });
        res.json({ rules });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.syncRules = syncRules;
