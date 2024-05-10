import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUrlService } from "../../utils";

const getAllFiles = createAsyncThunk(
  'files/data',
  async (fileName) => {
    const response = await axios.get(getUrlService(fileName), {
      headers: {
        "Content-Type": "application/json",
      }
    }).catch((e) => console.log("Error: ", encodeURIComponent) );
    
    return response.data;
  },
);

export {
  getAllFiles,
};