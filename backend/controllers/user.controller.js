import { response } from "express";
import User from "../models/user.model.js";
export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password"); // Không trả về password
        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json(user);
    } catch (error) {
        console.error("Error in fetching user:", error.mesage)
        res.status(500).json({success: false,  message: "Error retrieving user data", error });
    }
};

//Lấy thông tin tất cả tài khoản
export const fetchAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).select("-password -refreshToken -passwordResetToken -passwordResetExpires").sort({user_id: 1});
        res.status(200).json({success: true, data: users})
    } catch (e) {
        console.log("error in fetching users", e.message)
        res.status(500).json({success: false, message: "Server Error"})
    }
};

//Lấy thông tin tài khoản theo id
export const fetchOneUser = async (req, res) => {
    const user_id = Number(req.params.id)

    try {
        const user = await User.findOne({user_id: user_id}).select("-password -refreshToken -passwordResetToken -passwordResetExpires");

        if (!user){
            return res.status(404).json({success: false, message: "User not found"})
        }

        res.status(200).json({success: true, data: user})
    } catch (e){
        console.error("Error in fetching user:", e.mesage)
        res.status(500).json({success: false, message: "Server Error"})
    }
}

//Tạo tài khoản mới
export const createUsers = async (req, res) => {
    const user = req.body;

    if(!user.user_id || !user.name || !user.email || !user.password) {
        return res.status(400).json({success: false, message: "Please provide all fields"});
    }
    user.user_id = Number(user.user_id)
    const newUser = new User(user)

    try {
        await newUser.save();
        res.status(201).json({success: true, data: newUser});
    } catch (e) {
        console.error("Error in Create user:", e.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
};

//Update tài khoản
export const updateUsers = async (req,res) => {
    const user_id = req.params.id;
    const user = req.body;
    console.log("User ID:", user_id)
    console.log("User data:", user)
    try {
        const updateUser = await User.findOneAndUpdate({_id: user_id}, user, {new: true})

        if (!updateUser){
            return res.status(400).json({success: false, mesage: "Invalid User ID"})
        }

        res.status(200).json({success: true, message: updateUser})
    } catch (e) {
        console.error("Error in Update user:", e.message)
        res.status(500).json({success: false, message: "Server Error"})
    }
}

//Xóa tài khoản
export const deleteUsers = async (req, res) => {
    const user_id = req.params.id;
    try {
        const deleteUser = await User.findOneAndDelete({_id: user_id})
        if (!deleteUser) {
            return res.status(400).json({ success: false, message: "Invalid User ID" });
        }
        res.status(200).json({ success: true, message: "User deleted successfully" });
    }
    catch (e) {
        console.error("Error in Delete user:", e.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}
