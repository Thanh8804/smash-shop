import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="product-card"  onClick={() => navigate("/products/1")}>
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">{product.price.toLocaleString()} đ</p>
    </div>
  );
};

export default ProductCard;
