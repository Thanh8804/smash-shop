import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/database.js"; // Import file kết nối MongoDB
import userRoutes from "./routes/user.route.js"; // Đảm bảo đường dẫn đúng

dotenv.config();
const PORT = process.env.PORT || 5001;
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Quan trọng để đọc dữ liệu JSON từ request
app.use(cors());

// Routes
app.use("/api/v1/users", userRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Server is running!");
});


app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));

export default app;
