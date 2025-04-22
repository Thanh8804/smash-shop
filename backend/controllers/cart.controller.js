import User from '../models/user.model.js';

//thêm/giảm sản phẩm trong giỏ hàng
export const addCart = async (req, res) => {
    //Lấy userid từ token
    const user_id = req.user._id;
    const {product_id,quantity} = req.body;
    const user_cart = await User.findById(user_id);
    const product_in_cart = await user_cart.cart.find(item => item.product.toString() === product_id.toString());

    try {
        // Nếu không có sản phẩm thì thêm mới sản phẩm vào giỏ hàng
        if (!product_in_cart) {
            if (quantity < 0) {
                return res.status(200).json({
                    success: true, 
                    message: "No product to delete",
                });
            }
            await User.updateOne(
                { _id: user_id },
                {
                    $push: {
                        cart: { product: product_id, quantity: quantity }
                    }
                },
                {new : true}
            );
            return res.status(200).json({
                success: true, 
                message: "Product have been added"
            });
            }
        // Nếu có sản phẩm phẩm trong giỏ hàng và đang muốn giảm số lượng sản phẩm với điều kiện số lượng giảm là hết sản phẩm trong giỏ hàng -> xóa sản phẩm
        if (quantity <0 && product_in_cart.quantity + quantity <=0) {
            await User.updateOne(
            { _id: user_id }, // tìm User theo ID
            {
                $pull: { "cart": { product: product_id } } // Xóa sản phẩm có product_id trong giỏ
            }
            );
            return res.status(200).json({
                success: true,
                message: "product delete"
            })
        }
        // ngược lại thêm/xóa số lượng sản phẩm 
        await User.updateOne(
            { _id: user_id, "cart.product": product_id },
            {
            $inc: { "cart.$.quantity": quantity } // nếu đã có thì tăng số lượng
            }
        );
        res.status(201).json({success: true, message: "Product quantity have change"});
    } catch (e) {
        console.error("Error in cart:", e.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
}

//xóa sản phẩm trong giỏ hàng
export const deleteCart = async (req, res) => {
    //Lấy userid từ token
    const user_id = req.user._id;
    const {product_id} = req.body;

    try {
        //Xóa sản phẩm trong cart của User
        await User.updateOne(
            { _id: user_id }, // tìm User theo ID
            {
                $pull: { "cart": { product: product_id } } // Xóa sản phẩm có product_id trong giỏ
            }
        );
        res.status(201).json({success: true, message: "Product have been deleted"});
    } catch (e) {
        console.error("Error in delete product:", e.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
}
