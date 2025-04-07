import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCake } from "@fortawesome/free-solid-svg-icons";
import './ProductDetail.css';
import Header from '../../components/Header/Header';
import products from '../../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();

  if (!product) {
    return <div className="container">Không tìm thấy sản phẩm.</div>;
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="breadcrumb">
          TRANG CHỦ {'>'} {product.category} {'>'} {product.name}
        </div>

        <div className="product">
          <div className="images">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="info">
            <h1>{product.name}</h1>
            <div className="price">{product.price.toLocaleString('vi-VN')} ₫</div>
            <p>Đánh giá: {/* Chưa có dữ liệu */}</p>
            <p>Số lượng: {/* Chưa có dữ liệu */}</p>
            <p>Tình trạng: {/* Chưa có dữ liệu */}</p>
            <button className="btn">Thêm vào giỏ</button>
            <div className="note">
              Chia sẻ: 
            </div>
          </div>
        </div>

        <div className="section-title">THÔNG TIN CHI TIẾT</div>
        <div className="details">
          <ul>
            <li>{product.description || ''}</li>
            <li>{product.details || ''}</li>
          </ul>
          <ul>
            <li>Thương hiệu: {product.brand || ''}</li>
            <li>Danh mục: {product.category || ''}</li>
            <li>Mẫu mã: {/* Chưa có dữ liệu */}</li>
            <li>Xuất xứ: {/* Chưa có dữ liệu */}</li>
          </ul>
        </div>

        <div className="section-title">Sản phẩm tương tự</div>
        <div className="similar-products">
          {products
            .filter((p) => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
            .map((prod, i) => (
              <div key={i} className="product-item" onClick={() => navigate(`/product/${prod.id}`)}>
                <img src={prod.image} alt={prod.name} />
                <div>{prod.name}</div>
                <div className="price">{prod.price.toLocaleString('vi-VN')} ₫</div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
