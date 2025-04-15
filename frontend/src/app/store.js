import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../../src/features/user/userSlice'; 
import productReducer from '../../src/features/product/productSlice'
import { productApi } from '../features/product/productApi';
// import productsReducer from '../features/products/productsSlice';

export const store = configureStore({ // Khai báo store để lưu trữ state 
  reducer: {
    user: userReducer,
    [productApi.reducerPath]: productApi.reducer
    // products: productsReducer,
  },  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
});
