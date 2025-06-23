import { configureStore, compose } from "@reduxjs/toolkit";
import homeReducer from "../slice/home";
import { rootReducer } from "./rootReducer";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import apiSlice from "src/redux/api/index";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "ui", "entities"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware);
  },
  composeEnhancers: composeEnhancers(),
});

export const persistor = persistStore(Store);

export function purge() {
  return persistor.purge();
}

export default Store;
