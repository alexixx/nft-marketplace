import { configureStore } from '@reduxjs/toolkit';
import user from './slices/userSlice';
import main from './slices/mainSlice';

export const store = configureStore({
  reducer: {
    main,
    user,
  },
});

export default store;
