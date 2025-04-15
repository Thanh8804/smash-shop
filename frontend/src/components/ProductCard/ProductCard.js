import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="product-card"  onClick={() => navigate(`/product/${product.id}`)}>
      <img src={`${process.env.REACT_APP_API_URL}/image/${product.images.find((prod)=> prod.is_primary_image).image}`} alt={product.prod_name} className="product-image" />
      <h3 className="product-name">{product.prod_name}</h3>
      <p className="product-price">{product.price.toLocaleString()} đ</p>
    </div>
  );
};

export default ProductCard;
