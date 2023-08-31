import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import AdListReducer from "./AdList.Reducer";

const reducers = combineReducers({ adListState: AdListReducer });
const middleware = [thunk];
const thisState = {};
export const adListStore = legacy_createStore(
  reducers,
  thisState,
  applyMiddleware(...middleware),
);
