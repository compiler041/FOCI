import { Router } from 'express'
import { authMiddleware as protect } from '../../middleware/auth.middleware'
import { logBreak, getTodayBreaks } from './breaks.handler'

const router = Router()

router.post('/', protect, logBreak)
router.get('/today', protect, getTodayBreaks)

export default router
