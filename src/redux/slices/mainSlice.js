import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  tab: '',
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setTab(state, action) {
      state.tab = action.payload;
    },
  },
});

export const { setSearch, setTab } = mainSlice.actions;
export default mainSlice.reducer;
