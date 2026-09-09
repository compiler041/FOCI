"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFromAllowlist = exports.addToAllowlist = exports.getAllowedList = void 0;
const prisma_1 = require("../../lib/prisma");
// ── helpers ─────────────────────────────────
function extractVideoId(url) {
    try {
        const u = new URL(url);
        return u.searchParams.get('v') || null;
    }
    catch {
        return null;
    }
}
function extractPlaylistId(url) {
    try {
        const u = new URL(url);
        return u.searchParams.get('list') || null;
    }
    catch {
        return null;
    }
}
function isPlaylistUrl(url) {
    return !!extractPlaylistId(url) && !extractVideoId(url);
}
// ── GET /api/youtube-allowlist ──────────────
const getAllowedList = async (req, res) => {
    try {
        const userId = req.user.id;
        const [allowlist, playlists] = await Promise.all([
            prisma_1.prisma.youtubeAllowlist.findMany({ where: { userId } }),
            prisma_1.prisma.youtubePlaylist.findMany({ where: { userId } })
        ]);
        res.json({ allowlist, playlists });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.getAllowedList = getAllowedList;
// ── POST /api/youtube-allowlist ─────────────
const addToAllowlist = async (req, res) => {
    try {
        const userId = req.user.id;
        const { url, title, thumbnail } = req.body;
        if (!url)
            return res.status(400).json({ message: 'URL is required' });
        // Check if this is a playlist URL
        if (isPlaylistUrl(url)) {
            const playlistId = extractPlaylistId(url);
            const playlist = await prisma_1.prisma.youtubePlaylist.create({
                data: { userId, playlistId, url, title: title || 'Playlist' }
            });
            return res.status(201).json({ playlist, type: 'playlist' });
        }
        // Otherwise it's a video URL
        const videoId = extractVideoId(url);
        if (!videoId)
            return res.status(400).json({ message: 'Invalid YouTube URL — no video ID found' });
        const video = await prisma_1.prisma.youtubeAllowlist.create({
            data: { userId, videoId, url, title, thumbnail }
        });
        res.status(201).json({ video, type: 'video' });
    }
    catch (error) {
        if (error.code === 'P2002') {
            return res.status(409).json({ message: 'Already in your allowlist' });
        }
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.addToAllowlist = addToAllowlist;
// ── DELETE /api/youtube-allowlist/:id ────────
const removeFromAllowlist = async (req, res) => {
    try {
        const id = req.params.id;
        const userId = req.user.id;
        // Try video first
        const video = await prisma_1.prisma.youtubeAllowlist.findUnique({ where: { id } });
        if (video) {
            if (video.userId !== userId)
                return res.status(403).json({ message: 'Unauthorized' });
            await prisma_1.prisma.youtubeAllowlist.delete({ where: { id } });
            return res.json({ message: 'Video removed from allowlist' });
        }
        // Try playlist
        const playlist = await prisma_1.prisma.youtubePlaylist.findUnique({ where: { id } });
        if (playlist) {
            if (playlist.userId !== userId)
                return res.status(403).json({ message: 'Unauthorized' });
            await prisma_1.prisma.youtubePlaylist.delete({ where: { id } });
            return res.json({ message: 'Playlist removed from allowlist' });
        }
        res.status(404).json({ message: 'Not found' });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
exports.removeFromAllowlist = removeFromAllowlist;
