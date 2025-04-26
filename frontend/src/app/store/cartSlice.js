// store/cartSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {apiAddItem} from '../../apis/cart.js'; // giả sử bạn export apiAddItem từ đây
import { apiLogin } from '../../apis/user.js';

// 1. Tạo async thunk để gọi API và dispatch kết quả
export const addItemToCart = createAsyncThunk(
    'cart/',
    async ({ product_id, quantity }, { rejectWithValue }) => {
        try {
            
            const response = await apiAddItem({ product_id, quantity });
            console.log("result: ",response.data);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);


const cartSlice = createSlice({
name: 'cart',
initialState: { items: [], status: 'idle', error: null,totalQuantity: 0},
reducers: {
    setCartCount: (state, action) => {
        state.totalQuantity = action.payload;
    }
},

extraReducers: builder => {
builder
    .addCase(addItemToCart.pending, state => {
    state.status = 'loading';
    state.error = null;
    })
    .addCase(addItemToCart.fulfilled, (state, action) => {
    state.status = 'succeeded';
    // Cập nhật item từ server
    console.log("action: ",action.payload);
    state.item = action.payload;
    console.log("total: ",state.totalQuantity);
    console.log("item: ",state.item);
    // Tính tổng số lượng sản phẩm trong giỏ
    state.totalQuantity += state.item.quantity;
    console.log(state.totalQuantity);
    })
    .addCase(addItemToCart.rejected, (state, action) => {
    state.status = 'failed';
    state.error = action.payload;
    });
}
});

export const { setCartCount } = cartSlice.actions;
export default cartSlice.reducer;
