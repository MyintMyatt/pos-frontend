import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    successPopUp: false,
};

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setSuccessPopUp: (state, action) => {
            state.successPopUp = action.payload;
        },
    },
});

export const { setCategories, setSuccessPopUp } = menuSlice.actions;

export default menuSlice.reducer;
