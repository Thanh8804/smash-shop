// import mongoose from "mongoose";
import User from "../model/user.model.js"

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({success: true, data: users})
    } catch (e) {
        console.log("error in fetching users", e.message)
        res.status(500).json({success: false, message: "Server Error"})
    }
};

export const getUser = async (req, res) => {
    const user_id = Number(req.params.id)

    try {
        const user = await User.findOne({user_id: user_id})

        if (!user){
            return res.status(404).json({success: false, message: "User not found"})
        }

        res.status(200).json({success: true, data: user})
    } catch (e){
        console.error("Error in fetching user:", e.mesage)
        res.status(500).json({success: false, message: "Server Error"})
    }

}

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

export const updateUsers = async (req,res) => {
    const user_id = req.params.id;
    const user = req.body;
    try {
        
        if (!user.name?.trim() || !user.email?.trim() || !user.password?.trim()){
            return res.status(400).json({success: false, message: "Please provide all field"})
        }

        if (user.user_id && user.user_id != String(user_id)){
            return res.status(400).json({success: false, message: "Cannot update user_id"})
        }

        const updateUser = await User.findOneAndUpdate({user_id: user_id}, user, {new: true})

        if (!updateUser){
            return res.status(400).json({success: false, mesage: "Invalid User ID"})
        }

        res.status(200).json({success: true, message: updateUser})
    } catch (e) {
        console.error("Error in Update user:", e.message)
        res.status(500).json({success: false, message: "Server Error"})
    }

};