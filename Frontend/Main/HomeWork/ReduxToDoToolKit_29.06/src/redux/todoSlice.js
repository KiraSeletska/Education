import { createSlice } from "@reduxjs/toolkit";
//import { getRandomID } from "../App";

const getRandomID = () => {
  const min = 0;
  const max = 1679615;
  let int = Math.floor(Math.random() * (max - min + 1)) + min;
  return int.toString(36);
}

const initialState = {
  todos: [
    {
      id: getRandomID(),
      text: "clean room",
      completed: false,
    },
    {
      id: getRandomID(),
      text: "go to shop",
      completed: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: getRandomID(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },

    deletTodo: (state, action) => {
          state.todos = state.todos.filter(el => el.id !== action.payload)
    },
  },
});

export const { addTodo, toggleTodo, deletTodo } = todoSlice.actions;

export default todoSlice.reducer;
