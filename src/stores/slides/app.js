import { createSlice } from '@reduxjs/toolkit';
import { getAllFiles } from '../thunks/app';
import { buildDataUtil } from '../../utils';

const initialState = {
    data: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  extraReducers: (builder) => {
    // Success
    builder.addCase(getAllFiles.fulfilled, (state, action) => {
      state.data = buildDataUtil(action.payload);
    });
    // Error
    builder.addCase(getAllFiles.rejected, (state) => {
      state.data = [
        {"file":"test2.csv","lines":[{"text":"ztfCQqQnNimERht","number":"39671103","hex":"af20abe957757ad92fc714cc13c53f4d"}]}
      ];
    });
  },
  reducers: {
  },
})

export default appSlice.reducer;