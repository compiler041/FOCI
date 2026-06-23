import { Router } from 'express'
import { startSession, getActiveSession, endSession, takeBreak, getSessionHistory } from './sessions.handler'
import { authMiddleware } from '../../middleware/auth.middleware'

const router = Router()

router.post('/start', authMiddleware, startSession)
router.get('/active', authMiddleware, getActiveSession)
router.post('/:id/end', authMiddleware, endSession)
router.post('/:id/break', authMiddleware, takeBreak)
router.get('/history', authMiddleware, getSessionHistory)

export default router