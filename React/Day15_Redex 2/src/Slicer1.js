import { createSlice } from "@reduxjs/toolkit";

const foodSlicer = createSlice({
  name: "slice1",
  initialState: { count: 0 },
  reducers: {
    addItem: (state) => {
      state.count += 1;
    },
    removeItem: (state) => {
      state.count -= 1;
    },
   
   
  }
});

// payload-> argument

export const {  addItem,removeItem} = foodSlicer.actions;
export default foodSlicer.reducer;
