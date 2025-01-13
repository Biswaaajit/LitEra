import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";

const store = configureStore({
  reducer: {
    book: dataSlice,
  },
});

export default store;
