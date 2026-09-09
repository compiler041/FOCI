"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUserTheme = exports.getUserTheme = exports.getAllThemes = void 0;
const prisma_1 = require("../../lib/prisma");
const getAllThemes = async (req, res) => {
    try {
        const themes = await prisma_1.prisma.theme.findMany();
        res.json({ themes });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.getAllThemes = getAllThemes;
const getUserTheme = async (req, res) => {
    try {
        const userId = req.user.id;
        const userTheme = await prisma_1.prisma.userTheme.findUnique({
            where: { userId },
            include: { theme: true }
        });
        if (!userTheme)
            return res.status(404).json({ message: 'No theme set' });
        res.json({ theme: userTheme.theme });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.getUserTheme = getUserTheme;
const setUserTheme = async (req, res) => {
    try {
        const userId = req.user.id;
        const { themeId } = req.body;
        // check theme exists
        const theme = await prisma_1.prisma.theme.findUnique({ where: { id: themeId } });
        if (!theme)
            return res.status(404).json({ message: 'Theme not found' });
        // check if premium theme
        if (theme.isPremiun) {
            const user = await prisma_1.prisma.user.findUnique({ where: { id: userId } });
            if (!user?.isPremium)
                return res.status(403).json({ message: 'This is a premium theme' });
        }
        const userTheme = await prisma_1.prisma.userTheme.upsert({
            where: { userId },
            update: { themeId },
            create: { userId, themeId }
        });
        res.json({ userTheme });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.setUserTheme = setUserTheme;
