"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodayBreaks = exports.logBreak = void 0;
const prisma_1 = require("../../lib/prisma");
const logBreak = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const { duration } = req.body;
        // Create a new break associated with the user
        const newBreak = await prisma_1.prisma.break.create({
            data: {
                userId,
                adDuration: 0, // Placeholder until ad integration
                skipped: false
            }
        });
        res.status(200).json({ success: true, break: newBreak });
    }
    catch (error) {
        console.error('Error logging break:', error);
        // If DB is offline, we'll hit this catch block, return a success anyway so frontend doesn't crash
        res.status(500).json({ success: true, error: 'Database unavailable but proceeding' });
    }
};
exports.logBreak = logBreak;
const getTodayBreaks = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);
        const breaks = await prisma_1.prisma.break.count({
            where: {
                userId,
                takenAt: {
                    gte: startOfDay
                }
            }
        });
        res.status(200).json({ count: breaks });
    }
    catch (error) {
        console.error('Error fetching breaks:', error);
        res.status(500).json({ count: 0 });
    }
};
exports.getTodayBreaks = getTodayBreaks;
