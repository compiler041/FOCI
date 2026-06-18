import { Router } from 'express'
import { getAllowedList, addToAllowlist, removeFromAllowlist } from './youtube.handler'
import { authMiddleware } from '../../middleware/auth.middleware'

const router = Router()

router.get('/', authMiddleware, getAllowedList)
router.post('/', authMiddleware, addToAllowlist)
router.delete('/:id', authMiddleware, removeFromAllowlist)

export default router