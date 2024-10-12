const express = require("express");
const categoryController = require("../controllers/categoryController");
const router = express.Router();
router.get("/categories/:category", categoryController.getCategory);
module.exports = router;
