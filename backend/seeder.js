import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/product.model.js";
import Brand from "./models/brand.model.js";
import Category from "./models/category.model.js";
import ProductImage from "./models/productImage.model.js";
import Type from "./models/type.model.js";
import connectDB from "./config/database.js";
// import productData from "./data/product.js";
import brandData from "./data/brand.js";
import categoryData from "./data/category.js";
import typeData from "./data/type.js";
dotenv.config();
connectDB();

const seedData = async () => {
    try {
        // Xóa dữ liệu cũ 
        await ProductImage.deleteMany();
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
            { category_id: 3, category_name: "Giày cầu lông" },
            { category_id: 4, category_name: "Túi cầu lông" },
            { category_id: 5, category_name: "Lưới cầu lông" }
        ]);

        const createType = await Type.insertMany([
            { type_id: 1, type_name: "Premium" },
            { type_id: 2, type_name: "Standard" },
            { type_id: 3, type_name: "Beginner" }
        ]);

        const createProduct = await Product.insertMany([
            { prod_id: 1, prod_name: "Yonex Astrox 99 Pro", price: 4500000, stock: 10, description: "Vợt cao cấp cho tuyển thủ chuyên nghiệp.", category_id: createCategory[0]._id, brand_id: createBrand[0]._id, type_id: createType[0]._id, discount: 10, update_at: Date.now() },
            { prod_id: 2, prod_name: "Lining N90 IV", price: 3900000, stock: 15, description: "Dòng vợt cao cấp của Lining, phù hợp cho vận động viên chuyên nghiệp.", category_id: createCategory[0]._id, brand_id: createBrand[1]._id, type_id: createType[0]._id, discount: 5, update_at: Date.now() },
            { prod_id: 3, prod_name: "Victor Thruster K 9900", price: 4200000, stock: 8, description: "Vợt chuyên công dành cho các tay vợt chuyên nghiệp.", category_id: createCategory[0]._id, brand_id: createBrand[2]._id, type_id: createType[0]._id, discount: 8, update_at: Date.now() },
            { prod_id: 4, prod_name: "Quấn cán Yonex AC102", price: 50000, stock: 100, description: "Quấn cán vợt êm ái, độ bám tốt.", category_id: createCategory[1]._id, brand_id: createBrand[0]._id, type_id: createType[1]._id, discount: 0, update_at: Date.now() },
            { prod_id: 5, prod_name: "Giày cầu lông Yonex Power Cushion 65Z4", price: 2500000, stock: 20, description: "Giày cầu lông nhẹ, êm ái, bảo vệ chân tối đa.", category_id: createCategory[2]._id, brand_id: createBrand[0]._id, type_id: createType[0]._id, discount: 15, update_at: Date.now() },
            { prod_id: 6, prod_name: "Yonex Expert Tournament Bag BAG022331W", price: 3000000, stock: 15, description: "Túi cầu lông cao cấp Yonex, thiết kế rộng rãi, bền bỉ, phù hợp cho các giải đấu.", category_id: createCategory[3]._id, brand_id: createBrand[0]._id, type_id: createType[0]._id, discount: 10, update_at: Date.now()},
            { prod_id: 7, prod_name: "Yonex Power Cushion Sonicage Plus", price: 2800000, stock: 25, description: "Giày cầu lông nhẹ, êm ái với công nghệ Power Cushion tăng cường khả năng hấp thụ lực và bảo vệ chân.", category_id: createCategory[2]._id, brand_id: createBrand[0]._id, type_id: createType[0]._id, discount: 10, update_at: Date.now() },
            { prod_id: 8, prod_name: "Yonex Women’s Power Cushion Sonicage 3", price: 2700000, stock: 30, description: "Giày cầu lông dành cho nữ với thiết kế thời trang, nhẹ nhàng, hỗ trợ tối ưu cho người chơi.", category_id: createCategory[2]._id, brand_id: createBrand[0]._id, type_id: createType[0]._id, discount: 12, update_at: Date.now() },
            { prod_id: 9, prod_name: "Yonex Expert Racquet Bag BA02526EX", price: 3200000, stock: 10, description: "Túi vợt cầu lông cao cấp với nhiều ngăn tiện dụng, phù hợp cho vận động viên chuyên nghiệp.", category_id: createCategory[3]._id, brand_id: createBrand[0]._id, type_id: createType[1]._id, discount: 15, update_at: Date.now() },
            { prod_id: 10, prod_name: "Victor Bravesword 12 SE", price: 4500000, stock: 8, description: "Vợt cầu lông cao cấp từ Victor, nổi bật với công nghệ tăng lực và kiểm soát tuyệt vời.", category_id: createCategory[0]._id, brand_id: createBrand[2]._id, type_id: createType[2]._id, discount: 5, update_at: Date.now() },
            { prod_id: 11, prod_name: "Yonex Astrox 7DG", price: 2000000, stock: 12, description: "Vợt cầu lông Yonex Astrox 7DG với thiết kế hơi nặng đầu, thân trung bình, phù hợp cho lối chơi công thủ toàn diện. Công nghệ Durable Grade (DG) tăng độ bền và hiệu suất.", category_id: createCategory[0]._id, brand_id: createBrand[0]._id, type_id: createType[2]._id, discount: 8, update_at: Date.now() },
            { prod_id: 12, prod_name: "Yonex Power Cushion Eclipsion Z3 Men", price: 3200000, stock: 20, description: "Giày cầu lông cao cấp dành cho nam với công nghệ Power Cushion tăng cường khả năng hấp thụ lực và độ bền.", category_id: createCategory[2]._id, brand_id: createBrand[0]._id, type_id: createType[0]._id, discount: 10, update_at: Date.now() },
            { prod_id: 13, prod_name: "Yonex 7526 Badminton Bag", price: 2700000, stock: 15, description: "Túi cầu lông Yonex 7526 tiện dụng với thiết kế thời trang, nhiều ngăn lưu trữ cho vợt và phụ kiện.", category_id: createCategory[3]._id, brand_id: createBrand[0]._id, type_id: createType[1]._id, discount: 12, update_at: Date.now() },
            { prod_id: 14, prod_name: "Yonex Astrox 66", price: 2900000, stock: 10, description: "Vợt cầu lông Yonex Astrox 66 với trọng lượng nhẹ và thiết kế nặng đầu, lý tưởng cho lối chơi tấn công.", category_id: createCategory[0]._id, brand_id: createBrand[0]._id, type_id: createType[2]._id, discount: 8, update_at: Date.now() }
            
        ]);

        const createProductImage = await ProductImage.insertMany([
            { prod_image_id: 1, prod_id: createProduct[0]._id, image: "YonexAstrox99Pro.webp", is_primary_image: true },
            { prod_image_id: 2, prod_id: createProduct[1]._id, image: "LiningN90IV.webp", is_primary_image: true},
            { prod_image_id: 3, prod_id: createProduct[2]._id, image: "VictorThrusterK9900.webp", is_primary_image: true },
            { prod_image_id: 4, prod_id: createProduct[3]._id, image: "YonexAC102.jpg", is_primary_image: true },
            { prod_image_id: 5, prod_id: createProduct[4]._id, image: "YonexPowerCushion65Z4.jpg", is_primary_image: true },
            { prod_image_id: 6, prod_id: createProduct[5]._id, image: "YonexExpertTournamentBagBAG022331W.jpg", is_primary_image: true },
            { prod_image_id: 7, prod_id: createProduct[6]._id, image: "YonexPowerCushionSonicagePlus.jpg", is_primary_image: true },
            { prod_image_id: 8, prod_id: createProduct[7]._id, image: "YonexWomenPowerCushionSonicage3.jpg", is_primary_image: true },
            { prod_image_id: 9, prod_id: createProduct[8]._id, image: "YonexExpertRacquetBagBA02526EX.jpg", is_primary_image: true },
            { prod_image_id: 10, prod_id: createProduct[9]._id, image: "VictorBravesword12SE.jpg", is_primary_image: true },
            { prod_image_id: 11, prod_id: createProduct[10]._id, image: "YonexAstrox7DG.jpg", is_primary_image: true },
            { prod_image_id: 12, prod_id: createProduct[11]._id, image: "YonexPowerCushionEclipsionZ3Men.jpg", is_primary_image: true },
            { prod_image_id: 13, prod_id: createProduct[12]._id, image: "Yonex7526BadmintonBag.jpg", is_primary_image: true },
            { prod_image_id: 14, prod_id: createProduct[13]._id, image: "YonexAstrox66.jpg", is_primary_image: true }
        ]);
        console.log("Data Imported!");
        process.exit();
    } catch (e) {
        console.error(`Error: ${e.message}`);
        process.exit(1);
    }
}
seedData();