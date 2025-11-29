import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inventory: [],
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    setInventory: (state, action) => {
      state.categories = action.payload;
    },
  
    triggerRefresh: (state) => {
      state.needsRefresh = true;
    },
    clearRefresh: (state) => {
      state.needsRefresh = false;
    }
  },
});

export const { setInventory,triggerRefresh,clearRefresh } = inventorySlice.actions;

export default inventorySlice.reducer;
