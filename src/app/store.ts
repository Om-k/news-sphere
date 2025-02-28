import { configureStore } from "@reduxjs/toolkit";
import  preferenceReducer  from "./features/preferenceSlice";

export const store = configureStore({
    reducer: preferenceReducer
})

