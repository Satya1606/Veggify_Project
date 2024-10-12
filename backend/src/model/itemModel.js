const mongoose = require("mongoose");
const { Schema } = mongoose;

// Ingredient Schema
const ingredientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
});

// Comment Schema
const CommentSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

// More Schema
const moreSchema = new Schema({
  prep_time: { type: String, required: true },
  cook_time: { type: String, required: true }, // Changed 'cooking_time' to 'cook_time'
  servings: { type: String, required: true },
  difficulty: { type: String, required: true },
  source: { type: String, required: true },
});

// Item Schema
const ItemSchema = new Schema({
  menuId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  thumbnail_image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  instructions: {
    // Changed 'instruction' to 'instructions'
    type: String,
    required: true,
  },
  tags: [String],
  ingredients: {
    type: [ingredientSchema],
    required: true,
  },
  comments: {
    type: [CommentSchema],
    required: true,
  },
  more: {
    type: moreSchema,
    required: true, // Changed to single instance since 'more' is an object
  },
});

// Create the model
const project_data = mongoose.model("project_data", ItemSchema); // Corrected model name
module.exports = project_data; // Fixed 'model.exports' to 'module.exports'
