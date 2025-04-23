// server.js
import express from "express";
import { connectDB } from "./db.js";
import cors from "cors";
import bodyparser from "body-parser";
import router from "./Routes/index.js";
const app = express();
app.use(cors({
  origin: "http://localhost:3000", // Frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(bodyparser.json({ limit: "50mb" }));
app.use(bodyparser.urlencoded({ extended: true, limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("Hello from ESM-based MongoDB backend!");
});
app.use("/api",router);
// Connect to MongoDB
connectDB();

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
