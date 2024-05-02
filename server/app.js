import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import bidRoutes from './routes/bidRoutes.js';




// Create Express app
const app = express();
app.use(express.static('dist'));
dotenv.config();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// Connect to MongoDB
connectDB();

// Serve static files in production


// API Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/bids', bidRoutes);

// Error handling middleware
app.use(notFound); // Catch 404 errors
app.use(errorHandler); // General error handler

// Export the Express app
export default app;
