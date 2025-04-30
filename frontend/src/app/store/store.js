import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../../features/user/userSlice'; 
import productReducer from '../../features/product/productSlice'
import { productApi } from '../../features/product/productApi';
import { orderApi } from '../../features/order/orderApi.js';
import { statisticsApi } from '../../features/statistics/statisticsApi.js';
import searchReducer from '../../features/search/searchSlice';
// import productsReducer from '../features/products/productsSlice';
import cartReducer from '../store/cartSlice.js'
export const store = configureStore({ // Khai báo store để lưu trữ state 
  reducer: {
    user: userReducer,
    [productApi.reducerPath]: productApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [statisticsApi.reducerPath]: statisticsApi.reducer,
    cart: cartReducer,
    search: searchReducer,
    // products: productsReducer,
  },  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(productApi.middleware)
  .concat(orderApi.middleware)
  .concat(statisticsApi.middleware)
});
