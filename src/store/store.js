import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/sales&payment/reducers/cartSlice";
import popupReducer from "../reducer/popupSlice";
import menuReducer from "../reducer/menuSlice";
import userReducer from "../reducer/userSlice"
import inventoryReducer from "../reducer/inventorySlice"
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        popup: popupReducer,
        menu: menuReducer,
        users:userReducer,
        inventory:inventoryReducer
    },
});
