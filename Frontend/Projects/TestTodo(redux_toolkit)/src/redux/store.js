import { configureStore } from "@reduxjs/toolkit";
//import { categoriesApi } from "./categoriesApi";
import { todoSlice } from "./todoSlice";
import { folderSlice } from "./folderSlice";

export const store = configureStore({
  reducer: {
    [todoSlice.name]: todoSlice.reducer,
    [folderSlice.name]: folderSlice.reducer,
  },
  /*
  middleware: (
    getDefaultMiddleware //возьмет дефолтный Middleware и доавть sliceApi.middleware
  ) => getDefaultMiddleware().concat(categoriesApi.middleware),*/
});