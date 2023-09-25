import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  data: {},
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action) {
      state.data = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    clearUserData(state) {
      state.data = {};
    },
    clearToken(state) {
      state.token = '';
    },
  },
});

export const { setUserData, setToken, clearUserData, clearToken } = userSlice.actions;
export default userSlice.reducer;
