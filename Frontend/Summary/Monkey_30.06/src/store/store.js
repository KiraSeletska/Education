import { configureStore } from "@reduxjs/toolkit";
import { monkeyReducer } from "./slices/monkey";

export const store = configureStore({
    reducer: {
        monkey: monkeyReducer,
    }
});