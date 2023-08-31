import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import AdDetailReducer from "../Ad/AdDetail/AdDetail.Reducer";
import CartReducer from "../Cart/Cart.Reducer";

const reducers = combineReducers({
  adDetailState: AdDetailReducer,
  cartState: CartReducer,
});
const middleware = [thunk];
const InitState = {};
export const mergedStore = legacy_createStore(
  reducers,
  InitState,
  applyMiddleware(...middleware),
);
