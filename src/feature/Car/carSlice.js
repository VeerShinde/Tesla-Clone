import { createSlice } from "@reduxjs/toolkit";
// imagine redux has 1 object which contains all state, in that object we are making a simple separete slice which will contain all car detail.

const initialState = {
  cars: ["Model S", "Model Y", "Model 3", "Model X"],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;
