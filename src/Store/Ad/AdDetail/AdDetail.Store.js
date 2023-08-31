import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import AdDetailReducer from "./AdDetail.Reducer";

const reducers = combineReducers({ adDetailState: AdDetailReducer });
const middleware = [thunk];
const InitState = {};
export const adDetailStore = legacy_createStore(
  reducers,
  InitState,
  applyMiddleware(...middleware),
);
