"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllSessions = exports.getSessionHistory = exports.takeBreak = exports.endSession = exports.getActiveSession = exports.startSession = void 0;
const prisma_1 = require("../../lib/prisma");
const achievements_seed_1 = require("../achievements/achievements.seed");
const startSession = async (req, res) => {
    try {
        const userId = req.user.id;
        const existing = await prisma_1.prisma.focusSession.findFirst({
            where: { userId, status: 'ACTIVE' }
        });
        if (existing)
            return res.status(400).json({ message: 'You already have an active session' });
        const session = await prisma_1.prisma.focusSession.create({
            data: { userId }
        });
        res.status(201).json({ session });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.startSession = startSession;
const getActiveSession = async (req, res) => {
    try {
        const userId = req.user.id;
        const session = await prisma_1.prisma.focusSession.findFirst({
            where: { userId, status: 'ACTIVE' },
            include: { breaks: true }
        });
        if (!session)
            return res.status(404).json({ message: 'No active session' });
        res.json({ session });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.getActiveSession = getActiveSession;
const endSession = async (req, res) => {
    try {
        const userId = req.user.id;
        const sessionId = req.params.id;
        const session = await prisma_1.prisma.focusSession.findUnique({
            where: { id: sessionId }
        });
        if (!session)
            return res.status(404).json({ message: 'Session not found' });
        if (session.userId !== userId)
            return res.status(403).json({ message: 'Unauthorized' });
        if (session.status !== 'ACTIVE')
            return res.status(400).json({ message: 'Session is not active' });
        const endTime = new Date();
        const duration = Math.floor((endTime.getTime() - session.startTime.getTime()) / 1000);
        const updated = await prisma_1.prisma.focusSession.update({
            where: { id: sessionId },
            data: {
                status: 'COMPLETED',
                endTime,
                duration
            }
        });
        await prisma_1.prisma.user.update({
            where: { id: userId },
            data: {
                totalFocusSeconds: {
                    increment: duration
                }
            }
        });
        // Check for newly unlocked achievements
        const newAchievements = await (0, achievements_seed_1.checkAndUnlockAchievements)(userId);
        res.json({ session: updated, newAchievements });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.endSession = endSession;
const takeBreak = async (req, res) => {
    try {
        const userId = req.user.id;
        const sessionId = req.params.id;
        const session = await prisma_1.prisma.focusSession.findUnique({
            where: { id: sessionId },
            include: { breaks: true }
        });
        if (!session)
            return res.status(404).json({ message: 'Session not found' });
        if (session.userId !== userId)
            return res.status(403).json({ message: 'Unauthorized' });
        if (session.status !== 'ACTIVE')
            return res.status(400).json({ message: 'Session is not active' });
        const user = await prisma_1.prisma.user.findUnique({
            where: { id: userId },
            select: { strictnessLevel: true }
        });
        const strictnessLevel = user?.strictnessLevel ?? 1;
        const breakCount = session.breaks.length;
        let adDuration = 15;
        if (strictnessLevel === 1) {
            adDuration = 15;
        }
        else if (strictnessLevel === 2) {
            adDuration = Math.min(15 + breakCount * 15, 60);
        }
        else if (strictnessLevel === 3) {
            if (breakCount === 0)
                adDuration = 15;
            else if (breakCount === 1)
                adDuration = 30;
            else if (breakCount === 2)
                adDuration = 60;
            else
                adDuration = 300;
        }
        const newBreak = await prisma_1.prisma.break.create({
            data: {
                sessionId,
                adDuration
            }
        });
        res.status(201).json({ break: newBreak, adDuration });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.takeBreak = takeBreak;
const getSessionHistory = async (req, res) => {
    try {
        const userId = req.user.id;
        const sessions = await prisma_1.prisma.focusSession.findMany({
            where: {
                userId,
                status: { not: 'ACTIVE' }
            },
            include: { breaks: true },
            orderBy: { createdAt: 'desc' }
        });
        res.json({ sessions });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.getSessionHistory = getSessionHistory;
const getAllSessions = async (req, res) => {
    try {
        const userId = req.user.id;
        const sessions = await prisma_1.prisma.focusSession.findMany({
            where: { userId },
            include: { breaks: true },
            orderBy: { createdAt: 'desc' }
        });
        res.json({ sessions });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.getAllSessions = getAllSessions;
