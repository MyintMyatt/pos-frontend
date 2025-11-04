import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/sales&payment/reducers/cartSlice'

export const store= configureStore({
    reducer:{
        cart:cartReducer
    }
})