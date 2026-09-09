"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSchedule = exports.updateSchedule = exports.createSchedule = exports.getSchedules = void 0;
const prisma_1 = require("../../lib/prisma");
const getSchedules = async (req, res) => {
    try {
        const userId = req.user.id;
        const schedules = await prisma_1.prisma.schedule.findMany({
            where: { userId }
        });
        res.json({ schedules });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.getSchedules = getSchedules;
const createSchedule = async (req, res) => {
    try {
        const { label, startTime, endTime, daysOfWeek, timezone } = req.body;
        const userId = req.user.id;
        const schedule = await prisma_1.prisma.schedule.create({
            data: {
                userId,
                label,
                startTime,
                endTime,
                daysOfWeek,
                timezone
            }
        });
        res.status(201).json({ schedule });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.createSchedule = createSchedule;
const updateSchedule = async (req, res) => {
    try {
        const scheduleId = req.params.id;
        const userId = req.user.id;
        const { label, startTime, endTime, daysOfWeek, timezone } = req.body;
        const schedule = await prisma_1.prisma.schedule.findUnique({ where: { id: scheduleId } });
        if (!schedule)
            return res.status(404).json({ message: 'Schedule not found' });
        if (schedule.userId !== userId)
            return res.status(403).json({ message: 'Unauthorized' });
        const updated = await prisma_1.prisma.schedule.update({
            where: { id: scheduleId },
            data: { label, startTime, endTime, daysOfWeek, timezone }
        });
        res.json({ schedule: updated });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.updateSchedule = updateSchedule;
const deleteSchedule = async (req, res) => {
    try {
        const scheduleId = req.params.id;
        const userId = req.user.id;
        const schedule = await prisma_1.prisma.schedule.findUnique({ where: { id: scheduleId } });
        if (!schedule)
            return res.status(404).json({ message: 'Schedule not found' });
        if (schedule.userId !== userId)
            return res.status(403).json({ message: 'Unauthorized' });
        await prisma_1.prisma.schedule.delete({ where: { id: scheduleId } });
        res.json({ message: 'Schedule deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.deleteSchedule = deleteSchedule;
