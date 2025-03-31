import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCake } from "@fortawesome/free-solid-svg-icons";
import './ProductDetail.css';
import Header from '../../components/Header/Header'
import { useNavigate} from 'react-router-dom';

const product={
    id: 1,
    name: "Yonex Astrox 99 Pro",
    category: "Vợt cầu lông",
    brand: "Yonex",
    price: 4390000,
    image: "https://cdn.shopvnb.com/uploads/gallery/vot-cau-long-yonex-astrox-99-pro-do-chinh-hang_1735064653.jpg",
    description: "Vợt chuyên công, smash cực mạnh, kiểm soát tốt.",
    details:
    "Yonex Astrox 99 Pro là dòng vợt cao cấp dành cho người chơi tấn công mạnh mẽ. Công nghệ Rotational Generator System giúp cân bằng trọng lượng hoàn hảo, phù hợp cho những cú đập cầu uy lực.",
}

function ProductDetail({ isAuthenticated, setIsAuthenticated }){
    return(
    <>
        <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
        <div className="product-detail-container">
            {/* <div className="breadcrumb">TRANG CHỦ {'>'} VỢT CẦU LÔNG {'>'} {product.name}</div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                    <img src={product.image} alt={product.name} className="product-image" />
                    </div>
                    <div className="product-info">
                    <h1 className="product-name">{product.name}</h1>
                    <div className="product-views">
                        <FontAwesomeIcon icon={faCake} className="mr-1" /> {product.views} người xem
                    </div>
                    <div className="product-price">{product.price} ₫</div>
                    <p>{product.description}</p>
                    <div className="quantity-selector">
                        <label>Số lượng:</label>
                        <input type="number" min="1" defaultValue="1" className="quantity-input" />
                    </div>
                    <button className="add-to-cart-btn">Thêm vào giỏ</button>
                    <p className="product-stock">Tình trạng: {product.stock} sản phẩm có sẵn</p>
                    <div className="share-icons">
                        <span>Chia sẻ:</span>
                        <FontAwesomeIcon icon={faCake} className="share-icon" />
                        <FontAwesomeIcon icon={faCake} className="share-icon" />
                    </div>
                    </div>
                </div>
            <div className="detail-header">THÔNG TIN CHI TIẾT</div>
                <div className="product-details">
                    {product.details.map((detail, index) => (
                    <p key={index} className="product-detail">{index + 1}. {detail}</p>
                    ))}
                </div> */}
        </div>
        
    </>
    );
}

export default ProductDetail;