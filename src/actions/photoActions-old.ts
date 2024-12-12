// import { Dispatch } from "redux";
// import { FETCH_PHOTOS_FAILURE, FETCH_PHOTOS_REQUEST, FETCH_PHOTOS_SUCCESS, Photo, PhotoActionTypes } from "../types/photoTypes";

// export const fetchPhotos = () => {
//   return async (dispatch: Dispatch<PhotoActionTypes>): Promise<void> => {
//     dispatch({ type: FETCH_PHOTOS_REQUEST });
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/photos"
//       );
//       const data: Photo[] = await response.json();
//       dispatch({ type: FETCH_PHOTOS_SUCCESS, payload: data });
//     } catch (error: unknown) {
//       if (error instanceof Error) {
//         dispatch({ type: FETCH_PHOTOS_FAILURE, payload: error.message });
//       } else {
//         dispatch({
//           type: FETCH_PHOTOS_FAILURE,
//           payload: "Erro",
//         });
//       }
//     }
//   };
// };

