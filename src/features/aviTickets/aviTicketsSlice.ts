import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
};

export const aviTicketsSlice = createSlice({
  name: "aviTickets",
  initialState,
  reducers: {},
});

export default aviTicketsSlice.reducer;