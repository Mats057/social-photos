import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import albumReducer from "./album/reducer";

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({ userReducer, albumReducer });