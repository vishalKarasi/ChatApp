import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  username: { type: String, required: true },
  gender: { type: String, required: true, enum: ["male", "female"] },
  password: { type: String, required: true, minlength: 6 },
  profilePic: { type: String, required: true },
});

export const User = mongoose.model("User", userSchema);
