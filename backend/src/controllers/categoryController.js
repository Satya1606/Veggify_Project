const Category = require("../model/CategoryModel");
const Item = require("../model/itemModel");

const getCategory = async (req, res) => {
  const { category } = req.params;
  try {
    // Use case-insensitive search
    const categorydata = await Category.findOne({
      name: { $regex: new RegExp(`^${category}$`, "i") },
    });
    if (!categorydata) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Fetch items based on menuId from the found category
    const items = await Item.find({
      menuId: categorydata.menuId,
    });

    console.log("Category Data:", categorydata); // Debug log
    console.log("Items fetched:", items); // Debug log

    res.status(200).json({ items });
  } catch (error) {
    console.error("Error fetching category:", error); // Log error for debugging
    res.status(500).json({ message: "No category specified" });
  }
};

module.exports = {
  getCategory,
};
