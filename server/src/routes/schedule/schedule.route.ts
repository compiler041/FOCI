import { Router } from 'express'
import { getSchedules, createSchedule, updateSchedule, deleteSchedule } from './schedule.handler'
import { authMiddleware } from '../../middleware/auth.middleware'

const router = Router()

router.get('/', authMiddleware, getSchedules)
router.post('/', authMiddleware, createSchedule)
router.put('/:id', authMiddleware, updateSchedule)
router.delete('/:id', authMiddleware, deleteSchedule)

export default router