const express = require("express");
const router = express.Router();

router.post("/signout", (req, res) => {
  res.clearCookie("jwt");
  return res.status(200).json({ message: "Sign out successful" });
});

module.exports = router;
