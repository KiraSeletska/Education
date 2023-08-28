import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { write } from "../util/LS"; 
export const folderSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {
    addFolder: (state, action) => {
      state.folders = state.folders = [...state.folders, action.payload];
    write('folders', state.folders)
    },
    checkFolder: (state, action) => {
      state.folders = [
        ...state.folders.map((el) =>
          el.id === action.payload ? { ...el, check: !el.check } : el
        ),
      ];
      write('folders', state.folders)
    },
    deletFolder: (state, action) => {
      state.folders = [
        ...state.folders.filter((el) => el.id !== action.payload),
      ];
      write('folders', state.folders)
    },
    addMainTotalTasks: (state, action) => {
      state.folders = [
        ...state.sifolders.filter((el) =>
          el.title === action.payload).length,
      ];
      write('folders', state.folders)
    },
  },
});

export const { addFolder, checkFolder, deletFolder } = folderSlice.actions;
