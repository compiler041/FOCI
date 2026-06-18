import { Request, Response } from 'express'
import { prisma } from '../../lib/prisma'

export const getAllowedList = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id

    const allowlist = await prisma.youtubeAllowlist.findMany({
      where: { userId }
    })

    res.json({ allowlist })

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const addToAllowlist = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id
    const { url, title, thumbnail } = req.body

    if (!url) return res.status(400).json({ message: 'URL is required' })

    // extract videoId from URL
    const urlObj = new URL(url)
    const videoId = urlObj.searchParams.get('v')

    if (!videoId) return res.status(400).json({ message: 'Invalid YouTube URL' })

    const video = await prisma.youtubeAllowlist.create({
      data: { userId, videoId, url, title, thumbnail }
    })

    res.status(201).json({ video })

  } catch (error: any) {
    // unique constraint — same video added twice
    if (error.code === 'P2002') {
      return res.status(409).json({ message: 'Video already in allowlist' })
    }
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const removeFromAllowlist = async (req: Request, res: Response) => {
  try {
    const videoId = req.params.id
    const userId = req.user.id

    const video = await prisma.youtubeAllowlist.findUnique({ where: { id: videoId } })

    if (!video) return res.status(404).json({ message: 'Video not found' })
    if (video.userId !== userId) return res.status(403).json({ message: 'Unauthorized' })

    await prisma.youtubeAllowlist.delete({ where: { id: videoId } })

    res.json({ message: 'Video removed from allowlist' })

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}