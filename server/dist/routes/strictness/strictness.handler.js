"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStrictness = exports.getStrictness = void 0;
const prisma_1 = require("../../lib/prisma");
const getStrictness = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await prisma_1.prisma.user.findUnique({
            where: { id: userId },
            select: { strictnessLevel: true }
        });
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        const strictnessLevel = user.strictnessLevel;
        let computedAdDurations;
        if (strictnessLevel === 1)
            computedAdDurations = [15, 15, 15, 15];
        else if (strictnessLevel === 2)
            computedAdDurations = [15, 30, 45, 60];
        else if (strictnessLevel === 3)
            computedAdDurations = [15, 30, 60, 300];
        res.json({ strictnessLevel, computedAdDurations });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.getStrictness = getStrictness;
const updateStrictness = async (req, res) => {
    try {
        const userId = req.user.id;
        const { level } = req.body;
        if (![1, 2, 3].includes(level)) {
            return res.status(400).json({ message: 'Invalid strictness level' });
        }
        if (level === 3) {
            const user = await prisma_1.prisma.user.findUnique({ where: { id: userId } });
            if (!user?.isPremium)
                return res.status(403).json({ message: 'This is a premium feature' });
        }
        await prisma_1.prisma.user.update({
            where: { id: userId },
            data: { strictnessLevel: level }
        });
        res.json({ strictnessLevel: level });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.updateStrictness = updateStrictness;
