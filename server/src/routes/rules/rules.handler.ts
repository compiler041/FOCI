import { Request, Response } from 'express'
import { prisma } from '../../lib/prisma'

export const getRules = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id  // set by your auth middleware
    
    const rules = await prisma.blockRule.findMany({
      where: { userId }
    }) 

    res.json({ rules })

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' } )
  }
}


export const setRules = async (req: Request, res: Response) => {
  try {
    const { name, urlPattern, category } = req.body
    const userId = req.user.id

    const rule = await prisma.blockRule.create({
      data: {
        userId,
        name,
        urlPattern,
        category
      }
    })

    res.status(201).json({ rule })

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export const updateRule = async (req: Request, res: Response) => {
  try {
    const ruleId = req.params.id
    const userId = req.user.id

    const rule = await prisma.blockRule.findUnique({ where: { id: ruleId } })

    if (!rule) return res.status(404).json({ message: 'Rule not found' })
    if (rule.userId !== userId) return res.status(403).json({ message: 'Unauthorized' })

    const updated = await prisma.blockRule.update({
      where: { id: ruleId },
      data: req.body
    })

    res.json({ rule: updated })

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}


export const deleteRule = async (req: Request, res: Response) => {
  try {
    const ruleId = req.params.id
    const userId = req.user.id

    const rule = await prisma.blockRule.findUnique({ where: { id: ruleId } })

    if (!rule) return res.status(404).json({ message: 'Rule not found' })
    if (rule.userId !== userId) return res.status(403).json({ message: 'Unauthorized' })

    await prisma.blockRule.delete({ where: { id: ruleId } })

    res.json({ message: 'Rule deleted successfully' })

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}


export const syncRules = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id

    const rules = await prisma.blockRule.findMany({
      where: { 
        userId,
        isActive: true
      },
      select: {
        urlPattern: true,
        category: true
      }
    })

    res.json({ rules })

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}