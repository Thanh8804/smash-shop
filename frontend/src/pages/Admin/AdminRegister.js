import React, { useState } from 'react';
import './AdminAuth.css';

const AdminRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Mật khẩu xác nhận không khớp!');
      return;
    }

    console.log('Đăng ký:', { email, password });
    // Gọi API register ở đây
  };

  return (
    <div className="ad-auth-container">
      <h2 className="ad-title">Đăng ký</h2>
      <form className="ad-form" onSubmit={handleRegister}>
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
        <input
          type="password"
          placeholder="Xác nhận mật khẩu"
          className="ad-input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" className="ad-button">Đăng ký</button>
      </form>
      <p className="ad-footer">
        Đã có tài khoản? <a href="/admin-login" className="ad-link">Đăng nhập</a>
      </p>
    </div>
  );
};

export default AdminRegister;
