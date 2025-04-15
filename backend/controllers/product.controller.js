import Product from '../models/product.model.js';
import Category from '../models/category.model.js';
import Brand from '../models/brand.model.js';
import ProductImage from '../models/productImage.model.js';
import Type from '../models/type.model.js'
export const fetchProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await Product
                                    .findOne({ prod_id: productId })
                                    .populate('category_id')
                                    .populate('brand_id')
                                    .populate('type_id')
                                    .populate('images')
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
        const products = await Product.find({})
                                    .populate('category_id')
                                    .populate('brand_id')
                                    .populate('type_id')
                                    .populate({
                                        path:'images',
                                        select: 'image is_primary_image -prod_id',
                                        match: {is_primary_image: true}
                                    });
        if(!products) {
            return res.status(404).json({ success: false, message: "Products not found" });
        }
        res.status(200).json({success: true, data: products});
    } catch(e) {
        console.error("Error in fetching products:", e.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
}

export const fetchProductsDetail = async (req, res) => {
    try {
        const products = await Product.find({})
                                    .populate('category_id')
                                    .populate('brand_id')
                                    .populate('type_id')
                                    .populate('images');
        if (!products) {
            return res.status(404).json({ success: false, message: "Products not found" });
        }
        res.status(200).json({success: true, data: products});
    } catch (e) {
        console.error("Error in fetching products:", e.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
}
