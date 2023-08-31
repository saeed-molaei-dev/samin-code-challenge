import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import CartReducer from "./Cart.Reducer";

const reducers = combineReducers({ cartState: CartReducer });
const middleware = [thunk];
const InitState = {};
export const cartStore = legacy_createStore(
  reducers,
  InitState,
  applyMiddleware(...middleware),
);
