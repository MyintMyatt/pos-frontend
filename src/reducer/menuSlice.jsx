import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  successPopUp: false,
  menu: [],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
    triggerRefresh: (state) => {
      state.needsRefresh = true;
    },
    clearRefresh: (state) => {
      state.needsRefresh = false;
    },

    setSuccessPopUp: (state, action) => {
      state.successPopUp = action.payload;
    },
  },
});

export const { setCategories, setSuccessPopUp, setMenu,triggerRefresh,clearRefresh } = menuSlice.actions;

export default menuSlice.reducer;
