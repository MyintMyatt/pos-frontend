import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
};

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
    },
});

export const { setCategories } = menuSlice.actions;

export default menuSlice.reducer;
