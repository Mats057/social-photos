import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import albumReducer from "./album/albumReducer";
import photoReducer from "./photo/photoReducer";

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({ userReducer, albumReducer, photoReducer });