import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Register.css";

export default function Register() {
  return (
    <div className="container">
        <Header/>
        <div className="register-container">
        <div className="register-box">
            <h2>Đăng Ký</h2>
            <form>
                <input type="text" placeholder="Họ và Tên" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Mật khẩu" required />
                <button type="submit" className="register-btn">Đăng Ký</button>
            </form>
            <p className="login-link">
            Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
            </p>
        </div>
        </div>
    </div>
  );
}
