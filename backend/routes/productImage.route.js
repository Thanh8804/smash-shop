import express from "express";
import { uploadImage } from "../controllers/productImage.controller.js";
import parser from '../utils/multer.js'
const productImageRouter = express.Router();


productImageRouter.post('/upload', parser.single('image'), uploadImage)
// productImageRouter.get("/:id", fetchImagesByProductId);
export default productImageRouter;