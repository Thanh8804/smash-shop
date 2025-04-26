import express from "express";

import {authMiddleware} from "../middleware/auth.js";
import { addCart, deleteCart } from "../controllers/cart.controller.js";

const cartRouter = express.Router();

//Xác thực người dùng
cartRouter.use(authMiddleware);        

// Thêm sản phẩm mới trong giỏ hàng
cartRouter.post("/", addCart);

// Thêm/số số lượng sản phẩm trong giỏ hàng
cartRouter.patch("/", addCart);

// Xóa sản phẩm trong giỏ hàng
cartRouter.delete("/", deleteCart);

export default cartRouter;
