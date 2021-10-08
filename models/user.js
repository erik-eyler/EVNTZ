import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("users", User);
