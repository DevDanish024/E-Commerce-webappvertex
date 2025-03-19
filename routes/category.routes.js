const express = require('express');
const {createCategory,getAllCategories } = require('../controller/category.controller'); // Import the controller


const router = express.Router(); // Correct usage of Router

// Define the POST route for creating a category
router.post('/createCategory', createCategory); // Using the corrected controller
router.get('/getAllCategory',getAllCategories);

module.exports = router; // Correct export
