import Product from '../models/product.model.js';
import Category from '../models/category.model.js';
import Brand from '../models/brand.model.js';
import Type from '../models/type.model.js';


export const fetchOneProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await Product
                                    .findOne({ prod_id: productId })
                                    .populate({
                                        path: 'category_id',
                                        model: Category,
                                        localField: 'category_id',
                                        foreignField: 'category_id',
                                     })
                                    .populate({
                                        path: 'brand_id',
                                        model: Brand,
                                        localField: 'brand_id',
                                        foreignField: 'brand_id',
                                    })
                                    .populate({
                                        path: 'type_id',
                                        model: Type,
                                        localField: 'type_id',
                                        foreignField: 'type_id',
                                    })
        if(!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        return res.status(200).json({success: true, data: product});
    } catch(e) {
        console.error("Error in fetching product:", e.message);
        return res.status(500).json({success: false, message: "Server Error"});
    }
}
export const fetchAllProducts = async (req, res) => {
    try {
        const products = await Product
                                    .find({})
                                    .populate({
                                        path: 'category_id',
                                        model: Category,
                                        localField: 'category_id',
                                        foreignField: 'category_id',
                                     })
                                    .populate({
                                        path: 'brand_id',
                                        model: Brand,
                                        localField: 'brand_id',
                                        foreignField: 'brand_id',
                                    })
                                    .populate({
                                        path: 'type_id',
                                        model: Type,
                                        localField: 'type_id',
                                        foreignField: 'type_id',
                                    })
        res.status(200).json({success: true, data: products});
    } catch(e) {
        console.error("Error in fetching products:", e.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
}
