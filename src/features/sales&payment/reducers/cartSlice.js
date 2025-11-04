import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalItems: 0,
  totalAmt: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      state.products.push(item);
      state.totalItems++;
      state.totalAmt += item.qty * item.price;
    },
  },
});
export const {addToCart}=cartSlice.actions;
export default cartSlice.reducer;