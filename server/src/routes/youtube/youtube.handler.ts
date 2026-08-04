import { Request, Response } from 'express'
import { prisma } from '../../lib/prisma'

// ── helpers ─────────────────────────────────
function extractVideoId(url: string): string | null {
  try {
    const u = new URL(url)
    return u.searchParams.get('v') || null
  } catch { return null }
}

function extractPlaylistId(url: string): string | null {
  try {
    const u = new URL(url)
    return u.searchParams.get('list') || null
  } catch { return null }
}

function isPlaylistUrl(url: string): boolean {
  return !!extractPlaylistId(url) && !extractVideoId(url)
}

// ── GET /api/youtube-allowlist ──────────────
export const getAllowedList = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id

    const [allowlist, playlists] = await Promise.all([
      prisma.youtubeAllowlist.findMany({ where: { userId } }),
      prisma.youtubePlaylist.findMany({ where: { userId } })
    ])

    res.json({ allowlist, playlists })

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

// ── POST /api/youtube-allowlist ─────────────
export const addToAllowlist = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id
    const { url, title, thumbnail } = req.body

    if (!url) return res.status(400).json({ message: 'URL is required' })

    // Check if this is a playlist URL
    if (isPlaylistUrl(url)) {
      const playlistId = extractPlaylistId(url)!
      const playlist = await prisma.youtubePlaylist.create({
        data: { userId, playlistId, url, title: title || 'Playlist' }
      })
      return res.status(201).json({ playlist, type: 'playlist' })
    }

    // Otherwise it's a video URL
    const videoId = extractVideoId(url)
    if (!videoId) return res.status(400).json({ message: 'Invalid YouTube URL — no video ID found' })

    const video = await prisma.youtubeAllowlist.create({
      data: { userId, videoId, url, title, thumbnail }
    })

    res.status(201).json({ video, type: 'video' })

  } catch (error: any) {
    if (error.code === 'P2002') {
      return res.status(409).json({ message: 'Already in your allowlist' })
    }
    res.status(500).json({ message: 'Something went wrong' })
  }
}

// ── DELETE /api/youtube-allowlist/:id ────────
export const removeFromAllowlist = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const userId = req.user.id

    // Try video first
    const video = await prisma.youtubeAllowlist.findUnique({ where: { id } })
    if (video) {
      if (video.userId !== userId) return res.status(403).json({ message: 'Unauthorized' })
      await prisma.youtubeAllowlist.delete({ where: { id } })
      return res.json({ message: 'Video removed from allowlist' })
    }

    // Try playlist
    const playlist = await prisma.youtubePlaylist.findUnique({ where: { id } })
    if (playlist) {
      if (playlist.userId !== userId) return res.status(403).json({ message: 'Unauthorized' })
      await prisma.youtubePlaylist.delete({ where: { id } })
      return res.json({ message: 'Playlist removed from allowlist' })
    }

    res.status(404).json({ message: 'Not found' })

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}