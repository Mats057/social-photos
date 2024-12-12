// actions/userActions.ts
// import { Dispatch } from "redux";
// import {
//   User,
//   UserActionTypes,
//   FETCH_USERS_REQUEST,
//   FETCH_USERS_SUCCESS,
//   FETCH_USERS_FAILURE,
// } from "../types/userTypes";

// export const fetchUsers = () => {
//   return async (dispatch: Dispatch<UserActionTypes>): Promise<void> => {
//     dispatch({ type: FETCH_USERS_REQUEST });
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       const data: User[] = await response.json();
//       dispatch({ type: FETCH_USERS_SUCCESS, payload: data });
//     } catch (error: unknown) {
//       if (error instanceof Error) {
//         dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
//       } else {
//         dispatch({
//           type: FETCH_USERS_FAILURE,
//           payload: "Erro",
//         });
//       }
//     }
//   };
// };
