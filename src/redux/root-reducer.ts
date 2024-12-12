import { combineReducers } from "redux";

import photoReducer from "./photo/albumPhotosSlice";
import albumReducer from "./album/albumSlice";
import albumListReducer from "./album/albumSlice";
import userReducer from "./user/userSlice";
import albumsByUserReducer from "./album/userAlbumsSlice";
import userListReducer from "./user/userListSlice";

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  userReducer,
  userListReducer,
  albumReducer,
  albumListReducer,
  albumsByUserReducer,
  photoReducer,
});
