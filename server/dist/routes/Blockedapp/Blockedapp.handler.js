"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlockedApp = exports.updateBlockedApp = exports.addBlockedApp = exports.getBlockedApps = void 0;
const prisma_1 = require("../../lib/prisma");
const getBlockedApps = async (req, res) => {
    try {
        const userId = req.user.id;
        const apps = await prisma_1.prisma.blockedApp.findMany({
            where: { userId }
        });
        res.json({ apps });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.getBlockedApps = getBlockedApps;
const addBlockedApp = async (req, res) => {
    try {
        const userId = req.user.id;
        const { appName, browserUrl } = req.body;
        if (!appName)
            return res.status(400).json({ message: 'appName is required' });
        const app = await prisma_1.prisma.blockedApp.upsert({
            where: { userId_appName: { userId, appName } },
            update: { isBlocked: true },
            create: { userId, appName, browserUrl }
        });
        res.status(201).json({ app });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.addBlockedApp = addBlockedApp;
const updateBlockedApp = async (req, res) => {
    try {
        const appId = req.params.id;
        const userId = req.user.id;
        const { isBlocked } = req.body;
        const app = await prisma_1.prisma.blockedApp.findUnique({ where: { id: appId } });
        if (!app)
            return res.status(404).json({ message: 'App not found' });
        if (app.userId !== userId)
            return res.status(403).json({ message: 'Unauthorized' });
        const updated = await prisma_1.prisma.blockedApp.update({
            where: { id: appId },
            data: { isBlocked }
        });
        res.json({ app: updated });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.updateBlockedApp = updateBlockedApp;
const deleteBlockedApp = async (req, res) => {
    try {
        const appId = req.params.id;
        const userId = req.user.id;
        const app = await prisma_1.prisma.blockedApp.findUnique({ where: { id: appId } });
        if (!app)
            return res.status(404).json({ message: 'App not found' });
        if (app.userId !== userId)
            return res.status(403).json({ message: 'Unauthorized' });
        await prisma_1.prisma.blockedApp.delete({ where: { id: appId } });
        res.json({ message: 'App removed successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.deleteBlockedApp = deleteBlockedApp;
