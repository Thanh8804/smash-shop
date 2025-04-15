import express from "express";
import { fetchImagesByProductId } from "../controllers/productImage.controller.js";
const productImageRouter = express.Router();

productImageRouter.get("/:id", fetchImagesByProductId);
export default productImageRouter;