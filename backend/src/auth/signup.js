// signup.js
const express = require("express");
const argon2 = require("argon2");
const { users } = require("../model/usersModel");
const { UserValidation } = require("../Validations");
const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const validationResult = UserValidation.safeParse(req.body);
    if (!validationResult.success) {
      // Send the Zod validation errors back to the frontend
      return res.status(400).json({
        message: validationResult.error.errors.map((e) => e.message).join(", "),
      });
    }

    const { username, password } = req.body;
    const userExists = await users.findOne({ username });
    if (userExists) {
      return res.status(403).json({ message: "User already exists" });
    }

    const hashedPassword = await argon2.hash(password);
    const user = new users({ username, password: hashedPassword });
    await user.save();
    return res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
