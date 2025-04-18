import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCake } from "@fortawesome/free-solid-svg-icons";
import './ProductDetail.css';
import Header from '../../components/Header/Header';
// import products from '../../data/products';
import { useGetProductsQuery } from "../../features/product/productApi.js";
const ProductDetail = () => {
  const { id } = useParams();
  const {data: products = [], isLoading} = useGetProductsQuery();
  const product = products.find((p) => p._id === id);
  const navigate = useNavigate();

  if (!product) {
    return <div className="container">Không tìm thấy sản phẩm.</div>;
  }
  console.log(`${process.env.REACT_APP_API_URL}/image/${product.images.image}`)
  return (
    <>
      <Header />
      <div className="container">
        <div className="breadcrumb">
          TRANG CHỦ {'>'} {product.category_id.category_name} {'>'} {product.prod_name}
        </div>

        <div className="product">
          <div className="images">
            <img src={`${process.env.REACT_APP_API_URL}/image/${product.images.find(img => img.is_primary_image)?.image}`} alt={product.prod_name} />
          </div>

          <div className="info">
            <h1>{product.prod_name}</h1>
            <div className="price">{product.price.toLocaleString('vi-VN')} ₫</div>
            <p>Đánh giá: {/* Chưa có dữ liệu */}</p>

            <div className="quantity">
              <label>Số lượng: </label>
              <button className="qty-btn">-</button>
              <input type="number" min="1" value={1} readOnly />
              <button className="qty-btn">+</button>
              <button className="btn">Thêm vào giỏ</button>
            </div>
            <p>Số lượng trong kho: {product.stock}</p>
            <p>Tình trạng: {/* Chưa có dữ liệu */}</p>
            
            <div className="note">Chia sẻ:</div>
          </div>
        </div>

        <div className="section-heading">THÔNG TIN CHI TIẾT</div>
        <div className="details">
          <ul>
            <li>{product.description || ''}</li>
            <li>{product.details || ''}</li>
          </ul>
          <ul>
            <li>Thương hiệu: {product.brand_id.brand_name || ''}</li>
            <li>Danh mục: {product.category_id.category_name || ''}</li>
            <li>Mẫu mã: {/* Chưa có dữ liệu */}</li>
            <li>Xuất xứ: {/* Chưa có dữ liệu */}</li>
          </ul>
        </div>

        <div className="home-section-title">Sản phẩm tương tự</div>
        <div className="similar-products">
          {products
            .filter((p) => p.category_id.category_name === product.category_id.category_name && p._id !== product._id)
            .slice(0, 4)
            .map((prod, i) => (
              <div key={i} className="product-item" onClick={() => navigate(`/product/${prod.id}`)}>
                <img src={`${process.env.REACT_APP_API_URL}/image/${prod.images.find(img => img.is_primary_image)?.image}`} alt={prod.name} />
                <div>{prod.prod_name}</div>
                <div className="price">{prod.price.toLocaleString('vi-VN')} ₫</div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
