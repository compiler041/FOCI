import { Router } from 'express'
import { getStrictness, updateStrictness } from './strictness.handler'
import { authMiddleware } from '../../middleware/auth.middleware'

const router = Router()

router.get('/', authMiddleware, getStrictness)
router.put('/', authMiddleware, updateStrictness)

export default router