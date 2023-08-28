import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { write } from "../util/LS"; 

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = state.todos = [...state.todos, action.payload];
 write('todos', state.todos)
    },
    checkTodo: (state, action) => {
      state.todos = [
        ...state.todos.map((el) =>
          el.id === action.payload ? { ...el, check: !el.check } : el
        ),
      ];
      write('todos', state.todos)
    },
    deletTodo: (state, action) => {
      state.todos = [
        ...state.todos.filter((el) => el.id !== action.payload),
      ];
      write('todos', state.todos)
    },
  },
});

export const { addTodo, checkTodo, deletTodo} = todoSlice.actions;
