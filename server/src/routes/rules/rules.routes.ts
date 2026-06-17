import { Router } from 'express'
import { getRules, setRules, updateRule, deleteRule, syncRules } from './rules.handler'
import { authMiddleware } from '../../middleware/auth.middleware'

const router = Router()

router.get('/', authMiddleware, getRules)
router.post('/', authMiddleware, setRules)
router.put('/:id', authMiddleware, updateRule)
router.delete('/:id', authMiddleware, deleteRule)
router.get('/sync', authMiddleware, syncRules)



export default router