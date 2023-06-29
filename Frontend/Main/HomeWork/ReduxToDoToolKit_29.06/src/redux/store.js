import counterReducer from './counterSlice';
import todoReducer from './todoSlice'
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
reducer:{
    counter: counterReducer,
   todos: todoReducer
}
});
