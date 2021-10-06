import { configureStore } from "@reduxjs/toolkit";
import count from "./countSlice";

export const store = configureStore({
  reducer: { count },
});
