import {createOrder} from '../controllers/order.controller.js'
import express from 'express'
import {adminMiddleware,authMiddleware} from "../middleware/auth.js";


const orderRoutes = express.Router();

orderRoutes.post('/',authMiddleware, createOrder)

export default orderRoutes