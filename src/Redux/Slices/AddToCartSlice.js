import { createSlice } from "@reduxjs/toolkit";

const AddToCartSlice = createSlice({
  name: "AddToCartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.quantity += 1;
        return;
      }
      state.cart.push({
        quantity: 1,
        id: action.payload,
      });
    },
    removeFromCart: (state, action) => {
      const existingItem = state.cart.find((item) => item.id == action.payload);
      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity === 0) {
          state.cart = state.cart.filter((item) => item.id !== action.payload);
        }
      }
    },
    remove: (state, action) => {
      const existingItem = state.cart.find((item) => item.id == action.payload);
      if (existingItem) {
        existingItem.quantity = 0;
        if (existingItem.quantity === 0) {
          state.cart = state.cart.filter((item) => item.id !== action.payload);
        }
      }
    },
  },
});

export default AddToCartSlice.reducer;

export const { addToCart, removeFromCart, remove } = AddToCartSlice.actions;
