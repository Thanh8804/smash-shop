import express from "express";
import { register, login } from "../controllers/Auth.js";
import { getProfile, getUser, getUsers, updateUsers, createUsers } from "../controllers/user.controller.js";
import authMiddleware from "../middleware/auth.js";

const userRouter = express.Router();

// Đăng ký
userRouter.post("/register", register);

// Đăng nhập
userRouter.post("/login", login);

// Lấy thông tin user
userRouter.get("/profile", getProfile);


userRouter.get("/", getUsers) 
userRouter.get("/:id", getUser)
userRouter.post("/", createUsers )
userRouter.put("/:id", updateUsers)
export default userRouter;
