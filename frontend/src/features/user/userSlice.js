// src/features/user/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// --- Async thunk: lấy profile từ server ---
export const fetchProfile = createAsyncThunk(
  'user/fetchProfile',
  async (userId, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/users/${userId}`);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const initialState = {
  profile: {
    name: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    address: "",
    avatar: "",
  },
  isEditing: false,
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsEditing(state, action) {
      state.isEditing = action.payload;
    },
    updateProfileField(state, action) {
      const { name, value } = action.payload;
      state.profile[name] = value;
    },
    updateAvatar(state, action) {
      state.profile.avatar = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProfile.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profile = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export const { setIsEditing, updateProfileField, updateAvatar } = userSlice.actions;
export default userSlice.reducer;
