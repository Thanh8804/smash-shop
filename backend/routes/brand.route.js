import mongoose from "mongoose";
import express from "express"
import {createBrands} from "./brand.controller.js"

const router = express.Router();

router.post('/',createBrands)

export default router