import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import { connectDB } from "./lib/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
