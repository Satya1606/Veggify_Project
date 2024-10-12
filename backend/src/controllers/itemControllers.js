const project_data = require("../model/itemModel");

const getAllItems = async (req, res) => {
  try {
    const result = await project_data.find().sort({ createdAt: -1 });
    res.status(200).json({ items: result });
  } catch (error) {
    console.error("Error fetching all items:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get items based on search query

// Get items based on search query
const getSearchedItems = async (req, res) => {
  const { q } = req.query; // Extract query parameter
  console.log("Search query received:", q); // Log the incoming query
  try {
    const items = q
      ? await project_data.find({ name: { $regex: q, $options: "i" } }) // Case-insensitive search
      : await project_data.find(); // Return all if no query
    console.log("Items fetched:", items); // Log fetched items
    res.status(200).json({ items }); // Return items in JSON format
  } catch (error) {
    console.error("Error fetching searched items:", error); // Log errors
    res.status(500).json({ message: "Server error" });
  }
};
const getSingleItem = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await project_data.findById({ _id: id });
    res.json(item);
  } catch (error) {
    console.error("Error fetching item:", error.message);
    res.status(500).send("Item not found");
  }
};

module.exports = {
  getAllItems,
  getSearchedItems,
  getSingleItem,
};
