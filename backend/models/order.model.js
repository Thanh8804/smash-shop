import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    order_id: { type: Number, required: true, unique: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    dateCreated: { type: Date, default: Date.now },
    total_price: { type: Number, required: true },
    status: { type: String },
    datePaid: { type: Date },
    pay_method: { type: String },
    location: { type: String }
}, 
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
// tạo virtual field
OrderSchema.virtual('order_details', {
    ref: 'OrderDetail',
    localField: '_id',
    foreignField: 'order_id',
  });
const Order = mongoose.model('Order', OrderSchema);

export default Order;