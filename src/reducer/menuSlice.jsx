import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    successPopUp: false,
    menu:[]
};

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setMenu:(state,action)=>{
            state.menu=action.payload
        },
        setSuccessPopUp: (state, action) => {
            state.successPopUp = action.payload;
        },
    },
});

export const { setCategories, setSuccessPopUp,setMenu } = menuSlice.actions;

export default menuSlice.reducer;
