import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/sales&payment/reducers/cartSlice";
import popupReducer from "../reducer/popupSlice";
import menuReducer from "../reducer/menuSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        popup: popupReducer,
        menu: menuReducer,
    },
});
