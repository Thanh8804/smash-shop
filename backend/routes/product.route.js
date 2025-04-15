import express from "express";
import { fetchAllProducts, fetchProductById } from "../controllers/product.controller.js";

const productRouter = express.Router();

// Lấy thông tin 1 sản phẩm
productRouter.get("/:id", fetchProductById);

// Lấy danh sách tất cả sản phẩm
productRouter.get("/", fetchAllProducts);

export default productRouter;