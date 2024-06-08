import { configureStore } from "@reduxjs/toolkit";
import animeName from "./slices/animeName";

const store = configureStore( {
    reducer: {
        animeName
    }
})

export default store;