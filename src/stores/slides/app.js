import { createSlice } from '@reduxjs/toolkit';
import { getAllFiles } from '../thunks/app';
import { buildDataUtil } from '../../utils';

const initialState = {
    data: [],
    isLoading: true,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  extraReducers: (builder) => {
    // Success
    builder.addCase(getAllFiles.fulfilled, (state, action) => {
      state.data = buildDataUtil(action.payload);
      state.isLoading = false;
    });
    // Pending
    builder.addCase(getAllFiles.pending, (state) => {
      state.isLoading = true;
    });
    // Error
    builder.addCase(getAllFiles.rejected, (state) => {
      state.data = [];
      state.isLoading = false;
    });
  },
  reducers: {
  },
})

export default appSlice.reducer;