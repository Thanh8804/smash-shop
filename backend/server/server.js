import 'dotenv/config'; // Thay vì require('dotenv').config();
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import movies from '../api/movies.route.js';

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use(cors());
app.use(express.json());

app.use('/api/v1/movies', movies);
app.use('*', (req, res) => res.status(404).json({ error: 'not found' }));

// Tạo API test
app.get("/", (req, res) => {
    res.send("🚀 API đang chạy trên server!");
});

export default app;