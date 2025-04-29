import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.css";
import { useState } from "react";

  const ProductsList = ({ products, fullWidth, isPaginated }) => {
  const itemsPerPage = 12; 
  const [currentPage, setCurrentPage] = useState(1);
    // Tính tổng số trang
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Cắt danh sách sản phẩm dựa trên trang hiện tại (chỉ khi có phân trang)
  const displayedProducts = isPaginated
    ? products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : products;
    return (
      <div className="products-list-container">
        <div className={`products-list ${fullWidth ? "full-width" : "narrow-width"}`}>
          {displayedProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
  
        {isPaginated && totalPages > 1 && (
          <div className="pagination">
            <button
              className="pagination-btn"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Trang trước
            </button>
            <span>
              Trang {currentPage} / {totalPages}
            </span>
            <button
              className="pagination-btn"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Trang sau
            </button>
          </div>
        )}
      </div>
    );
  };

export default ProductsList;
