import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="product-card"  onClick={() => navigate(`/product/${product.id}`)}>
      <img src={`${product.images.filter(prod => prod.is_primary_image)[0]?.image}`} loading='lazy' alt={product.prod_name} className="product-image" />
      <h3 className="product-name">{product.prod_name}</h3>
      <p className="product-price">{product.price.toLocaleString()} đ</p>
    </div>
  );
};

export default ProductCard;
