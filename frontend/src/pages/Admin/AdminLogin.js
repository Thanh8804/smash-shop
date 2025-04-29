import React, { useState } from 'react';
import './AdminAuth.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Đăng nhập:', { email, password });
    // Gọi API login ở đây
  };

  return (
    <div className="ad-auth-container">
      <h2 className="ad-title">Đăng nhập</h2>
      <form className="ad-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="ad-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          className="ad-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="ad-button">Đăng nhập</button>
      </form>
      <p className="ad-footer">
        Bạn chưa có tài khoản? <a href="/admin-register" className="ad-link">Đăng ký</a>
      </p>
    </div>
  );
};

export default AdminLogin;
