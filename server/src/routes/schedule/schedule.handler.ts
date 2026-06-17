import { Request, Response } from 'express'
import { prisma } from '../../lib/prisma'

export const getSchedules = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id

    const schedules = await prisma.schedule.findMany({
      where: { userId }
    })

    res.json({ schedules })

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const createSchedule = async (req: Request, res: Response) => {
  try {
    const { label, startTime, endTime, daysOfWeek, timezone } = req.body
    const userId = req.user.id

    const schedule = await prisma.schedule.create({
      data: {
        userId,
        label,
        startTime,
        endTime,
        daysOfWeek,
        timezone
      }
    })

    res.status(201).json({ schedule })

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const updateSchedule = async (req: Request, res: Response) => {
  try {
    const scheduleId = req.params.id
    const userId = req.user.id
    const { label, startTime, endTime, daysOfWeek, timezone } = req.body

    const schedule = await prisma.schedule.findUnique({ where: { id: scheduleId } })

    if (!schedule) return res.status(404).json({ message: 'Schedule not found' })
    if (schedule.userId !== userId) return res.status(403).json({ message: 'Unauthorized' })

    const updated = await prisma.schedule.update({
      where: { id: scheduleId },
      data: { label, startTime, endTime, daysOfWeek, timezone }
    })

    res.json({ schedule: updated })

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const deleteSchedule = async (req: Request, res: Response) => {
  try {
    const scheduleId = req.params.id
    const userId = req.user.id

    const schedule = await prisma.schedule.findUnique({ where: { id: scheduleId } })

    if (!schedule) return res.status(404).json({ message: 'Schedule not found' })
    if (schedule.userId !== userId) return res.status(403).json({ message: 'Unauthorized' })

    await prisma.schedule.delete({ where: { id: scheduleId } })

    res.json({ message: 'Schedule deleted successfully' })

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}