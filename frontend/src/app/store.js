import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../../src/features/user/userSlice'; 
// import productsReducer from '../features/products/productsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    // products: productsReducer,
  },
});
