import express from 'express'
import { health } from '../../controllers/index.js'

const router = express.Router()

router.get('/', health)

export default router
