import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/product.model.js";
import Brand from "./models/brand.model.js";
import Category from "./models/category.model.js";
import Type from "./models/type.model.js";
import connectDB from "./config/database.js";
import productData from "./data/product.js";
import brandData from "./data/brand.js";
import categoryData from "./data/category.js";
import typeData from "./data/type.js";
dotenv.config();
connectDB();

const seedData = async () => {
    try {
        // Xóa dữ liệu cũ 
        await Product.deleteMany();
        await Brand.deleteMany();
        await Category.deleteMany();
        await Type.deleteMany();

        // Tạo dữ liệu mới
        const createBrand = await Brand.insertMany([
            { brand_id: 1, brand_name: "Yonex" },
            { brand_id: 2, brand_name: "Lining" },
            { brand_id: 3, brand_name: "Victor" }
        ]);

        const createCategory = await Category.insertMany([
            { category_id: 1, category_name: "Vợt cầu lông" },
            { category_id: 2, category_name: "Quấn cán vợt" },
            { category_id: 3, category_name: "Giày cầu lông" }
        ]);

        const createType = await Type.insertMany([
            { type_id: 1, type_name: "Premium" },
            { type_id: 2, type_name: "Standard" },
            { type_id: 3, type_name: "Beginner" }
        ]);

        const createProduct = await Product.insertMany([
            { prod_id: 1, prod_name: "Yonex Astrox 99 Pro", price: 4500000, stock: 10, description: "Vợt cao cấp cho tuyển thủ chuyên nghiệp.", category_id: createCategory[0]._id, brand_id: createBrand[0]._id, type_id: createType[0]._id, discount: 10 },
            { prod_id: 2, prod_name: "Lining N90 IV", price: 3900000, stock: 15, description: "Dòng vợt cao cấp của Lining, phù hợp cho vận động viên chuyên nghiệp.", category_id: createCategory[0]._id, brand_id: createBrand[1]._id, type_id: createType[0]._id, discount: 5 },
            { prod_id: 3, prod_name: "Victor Thruster K 9900", price: 4200000, stock: 8, description: "Vợt chuyên công dành cho các tay vợt chuyên nghiệp.", category_id: createCategory[0]._id, brand_id: createBrand[2]._id, type_id: createType[0]._id, discount: 8 },
            { prod_id: 4, prod_name: "Quấn cán Yonex AC102", price: 50000, stock: 100, description: "Quấn cán vợt êm ái, độ bám tốt.", category_id: createCategory[1]._id, brand_id: createBrand[0]._id, type_id: createType[1]._id, discount: 0 },
            { prod_id: 5, prod_name: "Giày cầu lông Yonex Power Cushion 65 Z", price: 2500000, stock: 20, description: "Giày cầu lông nhẹ, êm ái, bảo vệ chân tối đa.", category_id: createCategory[2]._id, brand_id: createBrand[0]._id, type_id: createType[0]._id, discount: 15 }
        ]);
        console.log("Data Imported!");
        process.exit();
    } catch (e) {
        console.error(`Error: ${e.message}`);
        process.exit(1);
    }
}
seedData();