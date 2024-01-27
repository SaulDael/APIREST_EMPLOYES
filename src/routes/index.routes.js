import { Router } from 'express'
import { getPing } from '../controllers/index.controllers.js'

const router = Router()

router.get('/getPing', getPing);

export default router;
