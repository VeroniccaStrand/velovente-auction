import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
import User from '../models/userModel.js'
// @desc    Get all Listings
// @route   GET /api/listings
// @access  Public

export const getAllProducts = asyncHandler(async(req,res) => {
  try {
    const products = await Product.find({})

    res.json(products)
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Internal Server Error' });
    
  }
})

// @desc    Add Product
// @route   GET /api/products
// @access  private

export const addProduct = async (req, res) => {
  try {
    const { title, description, category, brand, image, startingBid, auctionEndDate, seller } = req.body;
    
    const user = await User.findById(req.user._id).select('-password')
    // Om brand är ett objekt med fälten name och model
      // Hämta modellen på märket från req.body

    // Skapa en ny produkt baserat på inkommande data inklusive brand-namn och -modell
    const newProduct = await Product.create({
      id:Product._id,
      title,
      description,
      category,
      brand,
      image,
      startingBid,
      auctionEndDate,
      seller: user._id,
      currentBid: 0,
      bids: [],
      isActive: true
    });

    
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    // Om det uppstår ett fel, skicka en felrespons till klienten
    console.error('Error adding product:', error);
    res.status(500).json({ success: false, error: 'Could not add product' });
  }
};

// @desc    Get all products user has bid on
// @route   GET /api/products/bidding
// @access  Private
export const getProductsByUserBids = asyncHandler(async (req, res) => {
  const userId = req.user._id
  
  try {
   

    if (!userId) {
      return res.status(404).json({ message: 'User not found' });
    }

    
    const products = await Product.find({
      'bids.bidder': userId
    });
    
   
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// @desc    Get all products from one seller
// @route   GET /api/products/selling
// @access  Private
export const getProductsBySeller = asyncHandler(async (req, res) => {
  const userId = req.user._id
 
  try {
   

    if (!userId) {
      return res.status(404).json({ message: 'User not found' });
    }

    
    const products = await Product.find({
      'seller': userId
    });
    
   
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});