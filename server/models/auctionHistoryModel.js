import mongoose from 'mongoose';

const auctionHistorySchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  buyerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  winningBid: {
    type: Number,
    required: true
  },
  auctionEndDate: {
    type: Date,
    required: true
  }
});

const AuctionHistory = mongoose.model('AuctionHistory', auctionHistorySchema);

module.exports = AuctionHistory;
