import express from "express";
import { fetchAllProducts, fetchOneProduct } from "../controllers/product.controller.js";

const productRouter = express.Router();

// Lấy thông tin 1 sản phẩm
productRouter.get("/:id", fetchOneProduct);

// Lấy danh sách tất cả sản phẩm
productRouter.get("/", fetchAllProducts);

export default productRouter;