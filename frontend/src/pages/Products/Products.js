  import ProductsList from "../../components/ProductsList/ProductsList";
  // import products from "../../data/products";
  import "./Products.css";
  import Header from "../../components/Header/Header";
  import { useState, useEffect, use } from "react";
  import { useParams, useNavigate } from "react-router-dom";
  import routes from "../../configs/routes.config";
  import axios from "axios";
  import { useDispatch, useSelector } from "react-redux";

  import {fetchAllProducts} from '../../features/product/productSlice.js'
  import { useGetProductsQuery } from "../../features/product/productApi.js";
  const Products = ({isAuthenticated}) => {
    const { category } = useParams();
    const navigate = useNavigate();
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortOption, setSortOption] = useState('popular');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //   const fetchProducts = async () => {
    //     try {
    //       const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/products`);
    //       setProducts(response.data.data);
    //       setFilteredProducts(response.data.data);
    //       console.log('Response Data:', response.data.data);
    //     } catch (error) { 
    //       console.error("Error fetching products:", error);
    //     }
    //   };
    //     fetchProducts();},[]);
    const {data: products = [], isLoading} = useGetProductsQuery();

    // const products = data || [];  // if (isLoading) return <p>Loading...</p>;
    // if (error) return <p>Failed to load products</p>;
    // const products = data
  //
    // const dispatch = useDispatch();

    // useEffect(()=>{
    //     dispatch(fetchAllProducts()); //gọi thunk 
    // }, [dispatch]);

    // const products = useSelector(state => state.products.items);

    // useEffect(() => {
    //   setFilteredProducts(products); // cập nhật khi redux cập nhật
    // }, [products]);

    const applyFilter = () => {
      if (!products.length) return;

      let filtered = [...products];
      if (minPrice || maxPrice) {
        filtered = filtered.filter(product => {
          const price = parseFloat(product.price);
          return (!minPrice || price >= minPrice) && (!maxPrice || price <= maxPrice);
        });
      }
      if (category) {
        filtered = filtered.filter(product => product.category_id.category_name === category);
      }
      setFilteredProducts(filtered);
    };
    useEffect(() => {
      applyFilter();
    }, [minPrice, maxPrice, category, products]);

    const handleCategoryClick = (selectedCategory) => {
      if (category === "Tất cả" ) {
        if (window.location.pathname !== routes.products) {
          navigate(routes.products); 
      } else {
          navigate(routes.products, { replace: true });
          window.location.reload(); 
      }
          
      } else {
        navigate(`/products/${selectedCategory}`);
      }
    };
    //// SORT - HEADER
    const sortMap = {
      'Phổ biến': 'popular',
      'Mới nhất': 'newest',
      'Bán chạy': 'best_selling',
      'Giá tăng dần': 'price_asc',
      'Giá giảm dần': 'price_desc'
    };
    const handleSortChange = (value) => {
      setSortOption(value);
      // dispatch(fetchAllProducts({ sort: sortMap[value] }));
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
                    <button key={option} className={sortOption === option ? 'active' : ''} onClick={() => handleSortChange(option)}>
                      {option}
                    </button>
                  ))}
                  <select value={sortOption} onChange={(e) => handleSortChange(e.target.value)}>
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
            {["Vợt cầu lông", "Giày cầu lông", "Túi cầu lông", "Quấn cán vợt", "Lưới cầu lông"].map((category) => (
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
