import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  content: null,
};

const popupSlice = createSlice({
  name: "popup",
  initialState, 
  reducers: {
    openPopup: (state, action) => {
      state.content = action.payload;
      state.isOpen = true;
    },
    closePopup: (state) => {
      state.isOpen = false;
      state.content = null;
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;
