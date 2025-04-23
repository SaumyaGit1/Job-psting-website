import mongoose from "mongoose";
const Applicationipschema = new mongoose.Schema({
  company: String,
  category: String,
  coverLetter: String,
  user: Object,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["accepted", "pending", "rejected"],
    default: "pending",
  },
  Application: Object,
});
const Application = mongoose.model("Application", Applicationipschema);
export default Application;