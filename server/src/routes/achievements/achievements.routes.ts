import { Router } from 'express'
import { getAllAchievements, getUserAchievements } from './achievements.handler'
import { authMiddleware } from '../../middleware/auth.middleware'

const router = Router()

router.get('/', authMiddleware, getAllAchievements)
router.get('/me', authMiddleware, getUserAchievements)

export default router