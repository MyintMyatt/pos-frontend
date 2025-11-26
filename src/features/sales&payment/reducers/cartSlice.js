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

      const stockQty = newItem.inventory?.quantity ?? 0;

      const existItem = state.products.find(
        (item) => item.id === newItem.menuId
      );

      // If no existing item → create new
      if (!existItem) {
        // If no stock → Cannot add
        if (stockQty < 1) return;

        state.products.push({
          id: newItem.menuId,
          name: newItem.menuName,
          price: Number(newItem.price),
          category: newItem.category,
          qty: 1,
          stock: stockQty, // store stock
          totalPrice: Number(newItem.price),
        });
      } else {
        // If qty already equals stock → stop
        if (existItem.qty >= existItem.stock) return;

        existItem.qty++;
        existItem.totalPrice = existItem.qty * existItem.price;
      }

      state.totalItems++;
      state.totalAmt = state.products.reduce(
        (sum, p) => sum + p.totalPrice,
        0
      );
    },

    addQty: (state, action) => {
      const itemId = action.payload;
      const item = state.products.find((p) => p.id === itemId);

      if (item) {
        // Prevent exceeding stock
        if (item.qty >= item.stock) return;

        item.qty++;
        item.totalPrice = item.qty * item.price;
        state.totalItems++;
        state.totalAmt = state.products.reduce(
          (sum, p) => sum + p.totalPrice,
          0
        );
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
          // Remove when qty = 0
          state.products = state.products.filter((p) => p.id !== itemId);
          state.totalItems--;
        }

        state.totalAmt = state.products.reduce(
          (sum, p) => sum + p.totalPrice,
          0
        );
      }
    },

    clearCart: (state) => {
      state.products = [];
      state.totalItems = 0;
      state.totalAmt = 0;
    },
  },
});

export const { addToCart, addQty, removeQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
