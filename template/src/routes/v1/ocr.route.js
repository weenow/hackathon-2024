import express from 'express'
import { cnh, rg } from '../../controllers/index.js'

const router = express.Router()

router.post('/cnh', cnh)
router.post('/rg', rg)

export default router
