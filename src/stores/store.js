import { configureStore } from '@reduxjs/toolkit';

// Slices
import appSlice from './slides/app';

export const store = configureStore({
  devTools: true,
  reducer: {
    app: appSlice,
  },
})