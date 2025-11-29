import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    
    triggerRefresh: (state) => {
      state.needsRefresh = true;
    },
    clearRefresh: (state) => {
      state.needsRefresh = false;
    }
  },
});

export const {triggerRefresh,clearRefresh } = userSlice.actions;

export default userSlice.reducer;
