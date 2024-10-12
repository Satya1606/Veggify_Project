// signin.js
const express = require("express");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const { users } = require("../model/usersModel");
const { UserValidation } = require("../Validations"); // Ensure UserValidation is imported
const router = express.Router();

router.post("/signin", async (req, res) => {
  try {
    const validationResult = UserValidation.safeParse(req.body);
    if (!validationResult.success) {
      return res.status(400).json({
        message: validationResult.error.errors.map((e) => e.message).join(", "),
      });
    }

    const { username, password } = req.body; // Match with username
    const user = await users.findOne({ username });

    if (!user) {
      return res.status(403).json({ message: "User not found" });
    }

    const validPassword = await argon2.verify(user.password, password);
    if (!validPassword) {
      return res.status(403).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 3600000,
    });

    return res.status(200).json({ message: "Sign in successful" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
