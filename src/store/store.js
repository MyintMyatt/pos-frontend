import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/sales&payment/reducers/cartSlice'
import popupReducer from '../reducer/popupSlice'

export const store= configureStore({
    reducer:{
        cart:cartReducer,
        popup:popupReducer
    }
})