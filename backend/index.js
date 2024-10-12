const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
app.use(cookieParser());

async function main() {
  try {
    await mongoose.connect(process.env.MONGODB_URI); // Removed deprecated options
    console.log("MongoDB connected successfully!");

    app.get("/", (req, res) => {
      res.send("Hi there");
    });
    const SignupRoute = require("./src/auth/signup");
    const SigninRoute = require("./src/auth/signin");
    const SignoutRoute = require("./src/auth/signout");
    app.use("/api/auth", SignupRoute);
    app.use("/api/auth", SigninRoute);
    app.use("/api/auth", SignoutRoute);
    // Item routes
    const ItemRoute = require("./src/routes/itemRoutes");
    app.use("/api", ItemRoute);
    const CategoryRoutes = require("../backend/src/routes/categoryRoute");
    app.use("/api", CategoryRoutes);

    // Start the server
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

main();
