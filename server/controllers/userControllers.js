import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';

 
// @desc    Register a new user
// @route   POST /api/users
// @access  Public
 
export const registerUser = asyncHandler(async(req,res) => {
  const {firstName, lastName, username,email,password} = req.body
 
  const userExists = await User.findOne({email})
  
  if(userExists){
    res.status(400)
    throw new Error('User with this email already exists')

  }

  const user = await User.create({
    firstName,
    lastName,
    username,
    email,
    password
  })

  if(user) {
    res.status(201).json({
      firstName:user.firstName,
      lastName:user.lastName,
      _id: user._id,
      username:user.username,
      email: user.email,
    })
  }
  else {
    res.status(400)
    throw new Error(
      'Invalid User data'
    )
  }
})

// @desc    Login & get token
// @route   POST /api/users/login
// @access  Public

export const loginUser = asyncHandler(async (req,res) => {
  const {email, password} = req.body
 
  const user = await User.findOne({email})
 
  if(user && (await user.matchPassword(password))){
   const token = generateToken(res,user._id)
  
   
   res.json({
     _id:user._id,
     username: user.username,
     email: user.email,
    })
  
     
  }else {
   res.status(401)
   throw new Error('invalid email or password')
  }
})
 
// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private

export const getUserProfile = asyncHandler(async(req,res) => {
  const user = await User.findById(req.user._id).select('-password')
  
  if(user) {
    res.json(user)
    console.log(user)
  }else {
    res.status(404)
    throw new Error('User not found')
  }
}) 

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private

export const updateUser = asyncHandler(async(req,res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    // Loop through the keys in req.body and update corresponding attributes in user object
    for (let key in req.body) {
      if (key in user && key !== 'password') {
        user[key] = req.body[key];
      }
    }

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    const updatedUserWithoutPassword = { ...updatedUser.toObject() };
    delete updatedUserWithoutPassword.password;
    res.json(updatedUserWithoutPassword);
}else {
  res.status(404);
  throw new Error('User not found');
}})


// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
export const logoutUser = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  
  res.status(200).json({ message: 'Logged out successfully' });
};