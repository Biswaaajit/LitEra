import { createSlice } from "@reduxjs/toolkit";
import data from "./data";

const initial = {
  bookData: data,
};

const dataSlice = createSlice({
  name: "book",
  initialState: initial,
  reducers: {
    addBook(state, action) {
      state.bookData = [...state.bookData, action.payload];
    },
  },
});

export const { addBook } = dataSlice.actions;
export default dataSlice.reducer;
