const mongo = require("mongoose");

const { Schema } = mongo;

const User = new Schema(
  {
    profile_photo: { type: String },
    wall_photo: { type: String },
    first_name: { type: String, required: true, trim: true },
    last_name: { type: String, required: true, trim: true },
    username: { type: String, unique: true, required: true, trim: true },
    password: { type: String,  required: true },
    role: { type: String, enum: ["ADMIN", "USER"], default: "USER" },
  },
  { timestamps: true }
);

module.exports = mongo.model("users", User);
