const { z } = require("zod");

// User validation schema
const UserValidation = z.object({
  username: z.string().email(),
  password: z.string().min(6).max(15),
});

module.exports = {
  UserValidation,
};
