const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const dbConnect = require('./config/db'); // Assuming you have this dbConnect function to handle MongoDB connection
const categoryRouter = require('./routes/category.routes'); // Import the router

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json()); // This is necessary to parse JSON request bodies

// Routes
app.use('/api/categories', categoryRouter); // Attach the category router to the /api/categories path

// MongoDB connection (replace with your actual connection logic)
dbConnect();

const PORT = process.env.PORT || 4000; // Set the port, default to 4000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
