"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserAchievements = exports.getAllAchievements = void 0;
const prisma_1 = require("../../lib/prisma");
const getAllAchievements = async (req, res) => {
    try {
        const achievements = await prisma_1.prisma.achievement.findMany();
        res.json({ achievements });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.getAllAchievements = getAllAchievements;
const getUserAchievements = async (req, res) => {
    try {
        const userId = req.user.id;
        const achievements = await prisma_1.prisma.userAchievement.findMany({
            where: { userId },
            include: { achievement: true },
            orderBy: { unlockedAt: 'desc' }
        });
        res.json({ achievements });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.getUserAchievements = getUserAchievements;
