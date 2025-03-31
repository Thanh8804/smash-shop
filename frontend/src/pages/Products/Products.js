import ProductsList from "../../components/ProductsList/ProductsList";
import products from "../../data/products";
import "./Products.css";
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import routes from "../../configs/routes.config";

const Products = ({isAuthenticated}) => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortOption, setSortOption] = useState('popular');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('');
  const applyFilter = () => {
    let filtered = products;
    if (minPrice || maxPrice) {
      filtered = filtered.filter(product => {
        const price = parseFloat(product.price);
        return (!minPrice || price >= minPrice) && (!maxPrice || price <= maxPrice);
      });
    }
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }
    setFilteredProducts(filtered);
  };
  useEffect(() => {
    applyFilter();
  }, [minPrice, maxPrice, category]);

  const handleCategoryClick = (selectedCategory) => {
    if (category === "Tất cả" ) {
      if (window.location.pathname !== routes.products) {
        navigate(routes.products); // Điều hướng đến trang gốc
    } else {
        navigate(routes.products, { replace: true });
        window.location.reload(); // Cách đơn giản để làm mới trang
    }
        
    } else {
      navigate(`/products/${selectedCategory}`);
    }
  };
  
  return (
    <>
    <Header isAuthenticated={isAuthenticated}/>
    {/* HEADER - FILTER */}

    <div className="products-header-container">
          <p className="products-header"> SẢN PHẨM</p>
          <div className="products-filter-top"> 
            <div className="category-filter">
              <div className="sort-options">
                <label>Sắp xếp theo:</label>
                {['Phổ biến', 'Mới nhất', 'Bán chạy'].map((option) => (
                  <button key={option} className={sortOption === option ? 'active' : ''} onClick={() => setSortOption(option)}>
                    {option}
                  </button>
                ))}
                <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                  <option value="Giá tăng dần">Giá tăng dần</option>
                  <option value="Giá giảm dần">Giá giảm dần</option>
                </select>
              </div>
            </div>
          </div>

    </div>
    <div className="product-page">


      <aside className="filter-section">
        {/* SIDEBAR - FILTER */}
        <div className="price-filter">
          <h3>Chọn mức giá</h3>
          <label>Từ:</label>
          <input type="number" placeholder="Nhập giá" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
          <label>Đến:</label>
          <input type="number" placeholder="Nhập giá" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
        </div>

        <div className="category-filter">
          <h3>Thể loại</h3>
          <ul>
           {["Vợt cầu lông", "Giày cầu lông", "Túi cầu lông", "Quấn cán", "Lưới cầu lông"].map((category) => (
                <li key={category} onClick={() => handleCategoryClick(category)}>
                  {category}
                </li>
              ))}
          </ul>
        </div>
      </aside>
      <ProductsList products={filteredProducts} fullWidth={false} isPaginated={true} />
    </div>
    </>
  );
};

export default Products;
