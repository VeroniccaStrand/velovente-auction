import express from 'express'
import { protect } from '../middleware/authmiddleware.js'
import { registerUser,loginUser,getUserProfile,updateUser,logoutUser } from '../controllers/userControllers.js'

const router = express.Router()

router.route('/').post(registerUser)
router.route('/login').post(loginUser)
router.route('/profile').get(protect,getUserProfile).put(protect, updateUser)
router.route('/logout').post(logoutUser)


export default router