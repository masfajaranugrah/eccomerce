

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true,"name is reqired"],
      unique: true,
      trim: true,
      lowercase:true,
    },
    email: {
      type: String,
      required: [true,"name is reqired"],
      unique: true,
      trim: true,
      lowercase:true,
    },
    password: {
      type: String,
      required: [true,"name is reqired"],
    },

    photo: {
      type: String,
    },

    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);