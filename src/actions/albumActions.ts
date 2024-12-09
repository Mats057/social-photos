import { Dispatch } from "redux";
import { Album, FETCH_ALBUMS_FAILURE, FETCH_ALBUMS_REQUEST, FETCH_ALBUMS_SUCCESS, AlbumActionTypes } from "../types/albumTypes";

export const fetchAlbums = () => {
    return async (dispatch: Dispatch<AlbumActionTypes>): Promise<void> => {
      dispatch({ type: FETCH_ALBUMS_REQUEST });
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/albums"
        );
        const data: Album[] = await response.json();
        dispatch({ type: FETCH_ALBUMS_SUCCESS, payload: data });
      } catch (error: unknown) {
        if (error instanceof Error) {
          dispatch({ type: FETCH_ALBUMS_FAILURE, payload: error.message });
        } else {
          dispatch({
            type: FETCH_ALBUMS_FAILURE,
            payload: "Erro",
          });
        }
      }
    };
  };
  