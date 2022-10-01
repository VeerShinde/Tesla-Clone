import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../feature/Car/carSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
