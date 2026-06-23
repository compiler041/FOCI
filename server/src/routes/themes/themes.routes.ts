import { Router } from 'express'
import { getAllThemes, getUserTheme, setUserTheme } from './themes.handler'
import { authMiddleware } from '../../middleware/auth.middleware'

const router = Router()

router.get('/', authMiddleware, getAllThemes)
router.get('/me', authMiddleware, getUserTheme)
router.put('/me', authMiddleware, setUserTheme)

export default router