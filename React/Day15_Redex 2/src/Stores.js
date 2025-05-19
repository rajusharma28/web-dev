import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./Slicer1";

const store = configureStore({
  reducer: {
    slice1: cardReducer,
  },
});

export default stores;
