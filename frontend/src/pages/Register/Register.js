import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Register.css";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";

export default function Register({ setIsAuthenticated }) {

  const navigate = useNavigate();
  const handleGoogleLoginSuccess = (response) => {
    console.log('Login Success:', response);
    setIsAuthenticated(true);
    navigate("/");
  };

  const handleGoogleLoginError = () => {
    console.log('Login Failed');
  };

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
            <GoogleOAuthProvider clientId="345620387766-4f1bndku1jnobkb6316heea4kfe0369b.apps.googleusercontent.com">
              <div className="App">
                <GoogleLogin
                  onSuccess={handleGoogleLoginSuccess}
                  onError={handleGoogleLoginError}
                />
              </div>
            </GoogleOAuthProvider>
            <p className="login-link">
            Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
            </p>
        </div>
        </div>
    </div>
  );
}
