import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

export default mongoose.model("users", userModel);
