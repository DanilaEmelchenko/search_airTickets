import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAviTickets } from "./aviTicketsThunks";

interface Ticket {
  id: number;
  price: string;
  time: string;
  duration: string;
  transferCount: string;
  logo: string;
}

interface AviTicketsState {
  tickets: Ticket[];
  isLoading: boolean;
  error: string;
}

const initialState: AviTicketsState = {
  tickets: [],
  isLoading: false,
  error: "",
};

export const aviTicketsSlice = createSlice({
  name: "aviTickets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAviTickets.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(
        fetchAviTickets.fulfilled,
        (state, action: PayloadAction<Ticket[]>) => {
          state.isLoading = false;
          state.tickets = action.payload;
        }
      )
      .addCase(
        fetchAviTickets.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export default aviTicketsSlice.reducer;
