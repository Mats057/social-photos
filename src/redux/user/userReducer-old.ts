// import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, UserActionTypes, UserState } from "../../types/userTypes";


// const initialState: UserState = {
//   loading: false,
//   user: null,
//   error: null,
// };

// export default function userReducer(state = initialState, action: UserActionTypes): UserState {
//   switch (action.type) {
//     case FETCH_USERS_REQUEST:
//       return { ...state, loading: true, error: null };
//     case FETCH_USERS_SUCCESS:
//       return { ...state, loading: false, users: action.payload };
//     case FETCH_USERS_FAILURE:
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// }
