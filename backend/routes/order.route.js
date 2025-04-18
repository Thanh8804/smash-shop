import {fetchOrderHistory} from '../controllers/order.controller.js'
import express from 'express'

const orderRoutes = express.Router();

orderRoutes.get('/order_history', fetchOrderHistory)

export default orderRoutes