import { configureStore } from "@reduxjs/toolkit";
import { sliceApi } from "./apiSlice";
import { basketReducer } from "./basketSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: 'root',
  storage,
  blackList: [sliceApi.reducer]
}

const persistedReducer = persistReducer(persistConfig, basketReducer)

export const store = configureStore({
  reducer: {
    basket: persistedReducer,
    [sliceApi.reducerPath]: sliceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>//возбмт дефщдтный Middleware и доавть sliceApi.middleware
    getDefaultMiddleware(
      {
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      
    }).concat(sliceApi.middleware),
});

export const persistor = persistStore(store)