import { createSlice } from "@reduxjs/toolkit";

const slice1 = createSlice({
  name: "slice1",
  initialState: { count: 0 },
  reducers: {
    Increment: (state) => {
      state.count += 1;
    },
    Decrement: (state) => {
      state.count -= 1;
    },
    Reset: (state) => {
      state.count = 0;
    },
    CustomIncreaser:(state,action)=>{state.count+=action.payload},
  }
});

// payload-> argument

export const { Increment, Decrement, Reset,CustomIncreaser } = slice1.actions;
export default slice1.reducer;
