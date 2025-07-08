import { configureStore } from "@reduxjs/toolkit";
import pollReducer from "../Features/PollSlice";

export const store = configureStore({
  reducer: {
    polls: pollReducer,
  },
});
