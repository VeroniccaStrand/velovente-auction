import express from 'express'
import { placeBid } from '../controllers/bidControllers.js'

import { protect } from '../middleware/authmiddleware.js'
const router = express.Router()

router.route('/').post(protect, placeBid)

export default router