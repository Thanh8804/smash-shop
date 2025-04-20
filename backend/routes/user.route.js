import express from "express";
import { getProfile, RefreshToken, fetchOneUser, fetchAllUsers, updateUsers, createUsers, register, login, logout } from "../controllers/user.controller.js";
import authMiddleware from "../middleware/auth.js";

const userRouter = express.Router();

// Đăng ký
userRouter.post("/register", register);

// Đăng nhập
userRouter.post("/login", login);

//Refresh token
userRouter.post("/refreshtoken",RefreshToken);

// Đăng xuất
userRouter.post("/logout",logout);

// Lấy thông tin user
userRouter.get("/profile",authMiddleware, getProfile);
// or
userRouter.get("/:id", fetchOneUser)

// Lấy danh sách tất cả user
userRouter.get("/", fetchAllUsers) 

// Cập nhật thông tin user
userRouter.put("/:id", updateUsers)

userRouter.post("/", createUsers )
export default userRouter;
