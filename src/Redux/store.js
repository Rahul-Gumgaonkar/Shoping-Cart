import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Slices/ProductSlice";
import AddToCartSlice from "./Slices/AddToCartSlice";

export default configureStore({
  reducer: {
    ProductReducer: ProductSlice,
    AddToCartReducer: AddToCartSlice,
  },
});
