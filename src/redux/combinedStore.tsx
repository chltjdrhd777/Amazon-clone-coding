import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";
import { homeReducer, HomeState } from "../redux/homeReducer";

export interface CombineState {
  homeReducer: HomeState;
}

const combine = combineReducers({ homeReducer });
const middleware = [logger, ReduxThunk];

export const createStore = () => {
  const store = configureStore({
    reducer: combine,
    middleware,
  });
  return store;
};
