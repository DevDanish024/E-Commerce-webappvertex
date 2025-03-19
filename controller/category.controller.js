const dotenv = require('dotenv');  // Correct CommonJS import for dotenv
const Category = require('../models/category.models.js');  // Correct CommonJS import for the model

dotenv.config();  // Ensure the environment variables are loaded

 const createCategory = async (req, res) => {
  try {
    const {slug, categoryName, image, categoryType, description, metaDescription, metaTitle } = req.body;

    const newCategory = new Category({
        slug,
      categoryName,
      image,
      categoryType,
      description,
      metaDescription,
      metaTitle,
    });

    const savedCategory = await newCategory.save();
    // console.log(savedCategory);

    res.status(201).json({
      success: true,
      data: savedCategory,
      message: "Category created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create category",
    });
  }
};


 const getAllCategories = async(req, res)=>{
    try{
        const categories = await Category.find()
        res.status(200).json({
            success: true,
            data: categories,
            message: "Categories retrieved successfully",
            })
            }catch(error){
                console.error(error);
                res.status(500).json({
                    success: false,
                    message: "Failed to retrieve categories",
            });
    }
}

module.exports = {
    createCategory,
    getAllCategories,
  };