import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const url = process.env.DATABASE_URL;

export const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};