import mongoose from 'mongoose';
import bcrypt from 'bcrypt'
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: {
      street: {
        type: String,
        default: '123 Default Street' // Default street address
      },
      city: {
        type: String,
        default: 'Default City' // Default city
      },
      state: {
        type: String,
        default: 'Default State' // Default state
      },
      zipCode: {
        type: String,
        default: '00000' // Default zip code
      },
      country: {
        type: String,
        default: 'Default Country' // Default country
      }
    }
  },
  phoneNumber: {
    type: String
  },
  profilePicture: {
    type: String // URL till profile pic
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  registrationDate: {
    type: Date,
    default: Date.now
  }
});

// * Verifiera användarens angivna lösenord mot det hashade lösenordet i databasen.

userSchema.methods.matchPassword = async function (enteredPassword) {
  console.log(enteredPassword)
  console.log(await bcrypt.compare(enteredPassword, this.password))
  return await bcrypt.compare(enteredPassword, this.password);
};

// * Kryptera Lösenord

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);
export default User
