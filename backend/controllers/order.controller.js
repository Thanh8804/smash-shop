import Order from '../models/order.model.js'
import OrderDetail from '../models/order_detail.js';
import User from '../models/user.model.js';


export const fetchOrderHistory = async (req, res) => {
    const userId = req.query.user_id || '';
    const query = (userId) ? {user_id: userId } : {};

    try {
        const order = await Order.find(query)
            .populate({
                path: 'order_details'
            })
            .populate('user_id')
            .sort({dateCreated: -1})

        res.status(200).json({success: true, data: order})
    } catch(e) {
        res.status(500).json({success: false, error: e.message})
    }
}

export const createOrder = async (req, res) => {
    const {_id} = req.user;
    const userCard = await User.findById(_id).select("cart");
    if (!req.body.total_price || !req.body || !req.body.pay_mehtod) {
        return res.status(400).json({success: false, message: "Please provide all fields"});
    }
    const {total_price, pay_method} = req.body;
    const newOrder = new Order({
        pay_method,
        total_price,
        dateCreated: new Date(),
        status: "pending",
    });

    try {
        const savedOrder = await newOrder.save();
        res.status(201).json({success: true, data: savedOrder});
    } catch (e) {
        console.error("Error in Create Order:", e.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
}