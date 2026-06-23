import { Request, Response } from 'express'
import { prisma } from '../../lib/prisma'

export const startSession = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id

    const existing = await prisma.focusSession.findFirst({
      where: { userId, status: 'ACTIVE' }
    })

    if (existing) return res.status(400).json({ message: 'You already have an active session' })

    const session = await prisma.focusSession.create({
      data: { userId }
    })

    res.status(201).json({ session })

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const getActiveSession = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id

    const session = await prisma.focusSession.findFirst({
      where: { userId, status: 'ACTIVE' },
      include: { breaks: true }
    })

    if (!session) return res.status(404).json({ message: 'No active session' })

    res.json({ session })

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const endSession = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id
    const sessionId = req.params.id

    const session = await prisma.focusSession.findUnique({
      where: { id: sessionId }
    })

    if (!session) return res.status(404).json({ message: 'Session not found' })
    if (session.userId !== userId) return res.status(403).json({ message: 'Unauthorized' })
    if (session.status !== 'ACTIVE') return res.status(400).json({ message: 'Session is not active' })

    const endTime = new Date()
    const duration = Math.floor((endTime.getTime() - session.startTime.getTime()) / 1000)

    const updated = await prisma.focusSession.update({
      where: { id: sessionId },
      data: {
        status: 'COMPLETED',
        endTime,
        duration
      }
    })

    res.json({ session: updated })

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const takeBreak = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id
    const sessionId = req.params.id

    const session = await prisma.focusSession.findUnique({
      where: { id: sessionId },
      include: { breaks: true }
    })

    if (!session) return res.status(404).json({ message: 'Session not found' })
    if (session.userId !== userId) return res.status(403).json({ message: 'Unauthorized' })
    if (session.status !== 'ACTIVE') return res.status(400).json({ message: 'Session is not active' })

    const strictness = await prisma.strictness.findUnique({
      where: { userId }
    })

    const baseAd = strictness?.baseAdDuration ?? 30
    const adIncrease = strictness?.adIncreasePerBreak ?? 10
    const breakCount = session.breaks.length
    const adDuration = baseAd + (breakCount * adIncrease)

    const newBreak = await prisma.break.create({
      data: {
        sessionId,
        adDuration
      }
    })

    res.status(201).json({ break: newBreak, adDuration })

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const getSessionHistory = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id

    const sessions = await prisma.focusSession.findMany({
      where: {
        userId,
        status: { not: 'ACTIVE' }
      },
      include: { breaks: true },
      orderBy: { createdAt: 'desc' }
    })

    res.json({ sessions })

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}