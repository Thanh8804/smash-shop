import Order from '../models/order.model.js'
import OrderDetail from '../models/order_detail.js';
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