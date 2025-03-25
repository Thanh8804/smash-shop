import express from 'express';
import mongoose from 'mongoose';
import User from "../model/user.model.js"
import { createUsers, getUser, getUsers, updateUsers } from './user.controller.js';
const router = express.Router();

router.get("/", getUsers) 
router.get("/:id", getUser)
router.post("/", createUsers )
router.put("/:id", updateUsers)
export default router