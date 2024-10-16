import { configureStore } from "@reduxjs/toolkit";
import aviTicketsReducer from "../../features/aviTickets/aviTicketsSlice";

export const store = configureStore({
  reducer: {
    aviTickets: aviTicketsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
