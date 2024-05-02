import mongoose from 'mongoose';



const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    overview: {
      type: String,
      required: true
    },
    spec:{
      frame: { type: String, required: true },
      fork: { type: String, required: true },
      gears: { type: String, required: true },
      brakes: { type: String, required: true },
      tires: { type: String, required: true },
      saddle: { type: String, required: true },
      handlebar: { type: String, required: true }
    },
    
      
  
  },
  category: {
    type: String,
    required: true,
    enum: ['Racer', 'MTB', 'Gravel', 'Beginner']
  },
  brand: {
    type:String,
    required:true
   
  
  },
  image: {
    type: String, 
    required: true
  },
  startingBid: {
    type: Number,
    required: true,
    min: 0
  },
  currentBid: {
    amount: {
      type: Number,
      default: 0,
      min: 0
    },
    userId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      
    }
  
   
  },
  auctionEndDate: {
    type: Date,
    required: true
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  bids: [{
    amount: {
      type: Number,
      required: true,
      
    },
    bidder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
  }],
  isActive: {
    type: Boolean,
    default: true
  }
});

// Skapa en metod för att kontrollera auktionens status och uppdatera isActive
productSchema.methods.updateAuctionStatus = function() {
  const currentDate = new Date();
  if (currentDate > this.auctionEndDate) {
    this.isActive = false;
  }
};



// Pre-hook för att automatiskt uppdatera isActive innan varje sparning eller uppdatering
productSchema.pre('save', function(next) {
  this.updateAuctionStatus();
  next();
});

// Skapa en modell baserad på produktschemat
const Product = mongoose.model('Product', productSchema);

export default Product