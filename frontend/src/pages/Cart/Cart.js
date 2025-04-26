import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import "./Cart.css";

export default function Cart({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();
  const initialCart = [
    { id: 1, name: 'LI-NING NO. 4 BOOST STRING', price: 900000, quantity: 1 },
    { id: 2, name: 'LI-NING NO. 4 BOOST STRING', price: 900000, quantity: 1 },
    { id: 3, name: 'LI-NING NO. 4 BOOST STRING', price: 900000, quantity: 1 },
    { id: 4, name: 'LI-NING NO. 4 BOOST STRING', price: 900000, quantity: 1 },
  ];

  const [cart, setCart] = useState(initialCart);

  const handleQuantityChange = (id, delta) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <>
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
      <div>
        <div className="user-container">
          <div className="user-header-container">
            <p className="user-header">TRANG CHỦ {'>'} GIỎ HÀNG</p>
          </div>
          <div className="cart-table">
            <div className="cart-header">
              <span>Sản phẩm</span>
              <span>Đơn giá</span>
              <span>Số lượng</span>
              <span>Thành tiền</span>
            </div>

            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                <div className="product-info">
                  <img src="https://product.hstatic.net/1000362402/product/z5903154352772_e316f4d35fb8aa9733840ff39c83230a_f06b599ce01b4de191960375a79cd7b9_master.jpg" alt="giay" />
                  <span>{item.name}</span>
                </div>
                <div>{item.price.toLocaleString()} đ</div>
                <div className="quantity-control">
                  <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </div>
                <div>{(item.price * item.quantity).toLocaleString()} đ</div>
                <button className="delete-button" onClick={() => handleRemove(item.id)}>Xóa</button>
              </div>
            ))}
            <div className="total-price">
              Tổng tiền: <strong>{totalPrice.toLocaleString()} đ</strong>
            </div>
          </div>
        </div>   
             
        <div className="summary-box">
          <p><strong>Số lượng:</strong> {totalQuantity}</p>
          <p><strong>Thành tiền:</strong> {totalPrice.toLocaleString()} đ</p>
          <button className="checkout-button"  onClick={() => navigate('/order')}>THANH TOÁN</button>
        </div>
      </div>
      <Footer/>
    </>
  );
}
