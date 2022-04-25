import { Router } from 'express';
import main from '../controllers/main.js';
import auth from '../controllers/auth.js'
const router = Router()

router.get('/', main)
router.post('/auth', auth)

export default router

