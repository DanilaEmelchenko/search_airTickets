import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAviTickets = createAsyncThunk(
  "aviTickets/fetchAviTickets",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/data/db.json");
      return response.data.tickets;
    } catch(e) {
      return thunkAPI.rejectWithValue((e as Error).message);
    }
  }
);

