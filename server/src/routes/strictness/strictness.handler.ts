import { Request, Response } from 'express'
import { prisma } from '../../lib/prisma'

export const getStrictness = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id

    const strictness = await prisma.strictness.findUnique({
      where: { userId }
    })

    if (!strictness) return res.status(404).json({ message: 'Strictness settings not found' })

    res.json({ strictness })

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const updateStrictness = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id
    const { maxBreaks, baseAdDuration, adIncreasePerBreak, noBreaksAllowed } = req.body

    // premium check
    if (noBreaksAllowed) {
      const user = await prisma.user.findUnique({ where: { id: userId } })
      if (!user?.isPremium) return res.status(403).json({ message: 'This is a premium feature' })
    }

    const strictness = await prisma.strictness.upsert({
      where: { userId },
      update: { maxBreaks, baseAdDuration, adIncreasePerBreak, noBreaksAllowed },
      create: { userId, maxBreaks, baseAdDuration, adIncreasePerBreak, noBreaksAllowed }
    })

    res.json({ strictness })

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}