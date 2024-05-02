import Product from '../models/productModel.js';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler'


// @desc    Place Bid
// @route   POST /api/bids
// @access  private


export const placeBid = asyncHandler(async (req, res) => {
  const { productId, amount } = req.body;
  const userId = req.user._id;
 
  // Hitta den inloggade användaren
  const user = await User.findById(userId);

  // Hitta produkten med det angivna productId
  const product = await Product.findById(productId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  if (!product.isActive) {
    return res.status(400).json({ message: 'Auction is not active' });
  }

  // Skapa ett nytt budobjekt
  const newBid = {
    amount,
    bidder: userId,
    timestamp: new Date(),
  };
  const newCurrent = {
    amount,
    userId,
  }

  // Uppdatera produkten med det nya budet
  product.bids.push(newBid);
  product.currentBid = newCurrent;

  // Spara den uppdaterade produkten till databasen
  await product.save();

  res.status(200).json({ message: 'Bid placed successfully', product });
});

