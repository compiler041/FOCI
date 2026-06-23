import { Request, Response } from 'express'
import { prisma } from '../../lib/prisma'

export const getAllThemes = async (req: Request, res: Response) => {
  try {
    const themes = await prisma.theme.findMany()
    res.json({ themes })

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const getUserTheme = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id

    const userTheme = await prisma.userTheme.findUnique({
      where: { userId },
      include: { theme: true }
    })

    if (!userTheme) return res.status(404).json({ message: 'No theme set' })

    res.json({ theme: userTheme.theme })

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const setUserTheme = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id
    const { themeId } = req.body

    // check theme exists
    const theme = await prisma.theme.findUnique({ where: { id: themeId } })
    if (!theme) return res.status(404).json({ message: 'Theme not found' })

    // check if premium theme
    if (theme.isPremiun) {
      const user = await prisma.user.findUnique({ where: { id: userId } })
      if (!user?.isPremium) return res.status(403).json({ message: 'This is a premium theme' })
    }

    const userTheme = await prisma.userTheme.upsert({
      where: { userId },
      update: { themeId },
      create: { userId, themeId }
    })

    res.json({ userTheme })

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}