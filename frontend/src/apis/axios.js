import axios from 'axios';

// Tạo instance chung
const api = axios.create({
baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5001/api/v1',
timeout: 10000,            // 10s timeout
headers: {
    'Content-Type': 'application/json',
},
});

// Request interceptor: tự động đính token
api.interceptors.request.use(
config => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
},
error => Promise.reject(error)
);

// Response interceptor: xử lý lỗi chung
api.interceptors.response.use(
res => res.data, // trả luôn res.data
err => {
    // ví dụ: tự động redirect khi 401
    if (err.response?.status === 401) {
    window.location.href = '/login';
    }
    return Promise.reject(err);
}
);

export default api;
