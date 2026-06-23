import { Request, Response } from 'express'
import { prisma } from '../../lib/prisma'

export const getAllAchievements = async (req: Request, res: Response) => {
  try {
    const achievements = await prisma.achievement.findMany()
    res.json({ achievements })

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const getUserAchievements = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id

    const achievements = await prisma.userAchievement.findMany({
      where: { userId },
      include: { achievement: true },
      orderBy: { unlockedAt: 'desc' }
    })

    res.json({ achievements })

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}