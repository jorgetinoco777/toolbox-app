import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

const getAllFiles = createAsyncThunk(
  'files/data',
  async () => {
    const response = await axios.get("http://192.168.1.20:3000/files/data", {
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