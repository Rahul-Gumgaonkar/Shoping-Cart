import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    Item: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.Item.push(action.payload);
    },
    removeItem: (state, action) => {
      state.Item = state.Item.filter((item) => item.id !== action.payload);
    },
  },
});

export default ProductSlice.reducer;

export const { addItem, removeItem } = ProductSlice.actions;
