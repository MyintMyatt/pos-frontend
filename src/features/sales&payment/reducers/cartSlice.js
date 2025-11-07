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
      const newItem = action.payload;
      console.log(newItem);
      
      const existItem = state.products.find((item) => item.id == newItem.menuId);
console.log(existItem);

      if (!existItem) {
        state.products.push({
          id: newItem.menuId,
          name: newItem.menuName,
          price: Number(newItem.price),
          category: newItem.category,
          qty: 1,
          totalPrice: Number(newItem.price),
        });
      } else {
        existItem.qty++;
        existItem.totalPrice = existItem.qty * existItem.price;
      }

      // Update cart totals
      state.totalItems++;
      state.totalAmt = state.products.reduce((sum, p) => sum + p.totalPrice, 0);
    },

    addQty: (state, action) => {
      const itemId = action.payload;
      const item = state.products.find((p) => p.id === itemId);

      if (item) {
        item.qty++;
        item.totalPrice = item.qty * item.price;
        state.totalItems++;
        state.totalAmt = state.products.reduce((sum, p) => sum + p.totalPrice, 0);
      }
    },

    removeQty: (state, action) => {
      const itemId = action.payload;
      const item = state.products.find((p) => p.id === itemId);

      if (item) {
        if (item.qty > 1) {
          item.qty--;
          item.totalPrice = item.qty * item.price;
          state.totalItems--;
        } else {
          // Remove item completely when qty hits 0
          state.products = state.products.filter((p) => p.id !== itemId);
          state.totalItems--;
        }
        state.totalAmt = state.products.reduce((sum, p) => sum + p.totalPrice, 0);
      }
    },
  },
});

export const { addToCart, addQty, removeQty } = cartSlice.actions;
export default cartSlice.reducer;
