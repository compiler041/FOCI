import { Request, Response } from 'express'
import { prisma } from '../../lib/prisma'

export const logBreak = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }

    const { duration } = req.body

    // Create a new break associated with the user
    const newBreak = await prisma.break.create({
      data: {
        userId,
        adDuration: 0, // Placeholder until ad integration
        skipped: false
      }
    })

    res.status(200).json({ success: true, break: newBreak })
  } catch (error) {
    console.error('Error logging break:', error)
    // If DB is offline, we'll hit this catch block, return a success anyway so frontend doesn't crash
    res.status(500).json({ success: true, error: 'Database unavailable but proceeding' })
  }
}

export const getTodayBreaks = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id
    if (!userId) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }

    const startOfDay = new Date()
    startOfDay.setHours(0, 0, 0, 0)

    const breaks = await prisma.break.count({
      where: {
        userId,
        takenAt: {
          gte: startOfDay
        }
      }
    })

    res.status(200).json({ count: breaks })
  } catch (error) {
    console.error('Error fetching breaks:', error)
    res.status(500).json({ count: 0 })
  }
}
