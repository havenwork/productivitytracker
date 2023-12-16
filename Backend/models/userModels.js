const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minLength: [5, "name should be at least 5 characters long"],
      maxLength: [20, "Name should be within 20 characters"],
    },
    email: {
      type: String,
      required: [true, "email is mandatory"],
      unique: [true, "user already exists"],
      lowercase: true,
    },
    password: {
      required: true,
      type: String,
      select: false,
    },
    bio: {
      type: String,
      required: true,
      maxLength: [125, "Bio should be within 125 characters"],
    },
    username: {
      type: String,
      required: true,
      unique: [true, "username already exists"],
      minLength: [6, "username should be at least 6 characters long"],
    },
  },
  {
    timestamps: true,
  }
);

// hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  return next();
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
