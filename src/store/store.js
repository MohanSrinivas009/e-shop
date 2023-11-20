import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import  userLoginSlice  from "./userLoginSlice";

const store=configureStore({
    reducer:{
        cart:cartSlice,
        Login:userLoginSlice,
    }
})

export default store;