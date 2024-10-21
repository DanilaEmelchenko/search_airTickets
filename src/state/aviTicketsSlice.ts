import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAviTickets } from "../api/aviTicketsThunks";

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
  visiblelimit: number;
  error: string;
  filter: string;
}

const initialState: AviTicketsState = {
  tickets: [],
  visiblelimit: 3,
  error: "",
  filter: "all",
};

export const aviTicketsSlice = createSlice({
  name: "aviTickets",
  initialState,
  reducers: {
    loadMoreTickets: (state) => {
      state.visiblelimit += 3;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAviTickets.pending, (state) => {
        state.error = "";
      })
      .addCase(
        fetchAviTickets.fulfilled,
        (state, action: PayloadAction<Ticket[]>) => {
          state.tickets = action.payload;
        }
      )
      .addCase(
        fetchAviTickets.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.error = action.payload;
        }
      );
  },
});

export const { loadMoreTickets, setFilter } = aviTicketsSlice.actions;
export default aviTicketsSlice.reducer;
