import express from 'express'
import { addProduct, getAllProducts, getProductsByUserBids, getProductsBySeller } from '../controllers/productControllers.js'
import { protect } from '../middleware/authmiddleware.js'
const router = express.Router()

router.route('/').get(getAllProducts).post(protect, addProduct)
router.route('/bidding').get(protect,getProductsByUserBids)
router.route('/selling').get(protect,getProductsBySeller)
export default router