import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAviTickets } from "../api/aviTicketsThunks";

export interface Ticket {
  id: number;
  price: string;
  time: string;
  duration: string;
  transferCount: string;
  logo: string;
  company: string;
}

interface AviTicketsState {
  tickets: Ticket[];
  visiblelimit: number;
  error: string;
  filter: string[];
}

const initialState: AviTicketsState = {
  tickets: [],
  visiblelimit: 3,
  error: "",
  filter: [],
};

export const aviTicketsSlice = createSlice({
  name: "aviTickets",
  initialState,
  reducers: {
    loadMoreTickets: (state) => {
      state.visiblelimit += 3;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      if (!state.filter.includes(action.payload)) {
        state.filter.push(action.payload);
      }
    },
    removeFilter: (state, action: PayloadAction<string>) => {
      state.filter = state.filter.filter((i) => i !== action.payload);
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

export const { loadMoreTickets, setFilter, removeFilter } = aviTicketsSlice.actions;
export default aviTicketsSlice.reducer;
