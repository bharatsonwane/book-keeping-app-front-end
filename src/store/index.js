import { configureStore, compose } from "@reduxjs/toolkit";
import homeReducer from "../slice/home";
import { rootReducer } from "./rootReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = configureStore({
  reducer: rootReducer,
  composeEnhancers: composeEnhancers(),
});
export default Store;
