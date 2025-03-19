const mongoose = require('mongoose');

// Define the category schema
const categorySchema = new mongoose.Schema({
  slug: { 
    type: String, 
    required: true, 
    unique: true 
  },
  categoryName: { 
    type: String, 
    required: true, 
    unique: true 
  },
  image: { 
    type: String, 
    required: true 
  },
  categoryType: {
    type: String,
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  metaDescription: { 
    type: String, 
    required: true 
  },
  metaTitle: { 
    type: String, 
    required: true 
  },
});

// Create and export the model using CommonJS syntax
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;  // Make sure to export the model
