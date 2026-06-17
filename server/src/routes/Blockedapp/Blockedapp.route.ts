import { Router } from 'express'
import { getBlockedApps, addBlockedApp, updateBlockedApp, deleteBlockedApp } from './Blockedapp.handler'
import { authMiddleware } from '../../middleware/auth.middleware'

const router = Router()

router.get('/', authMiddleware, getBlockedApps)
router.post('/', authMiddleware, addBlockedApp)
router.put('/:id', authMiddleware, updateBlockedApp)
router.delete('/:id', authMiddleware, deleteBlockedApp)

export default router