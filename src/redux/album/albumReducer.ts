import { AlbumActionTypes, AlbumState, FETCH_ALBUMS_FAILURE, FETCH_ALBUMS_REQUEST, FETCH_ALBUMS_SUCCESS, SEARCH_ALBUMS_NAME } from "../../types/albumTypes";

const initialState: AlbumState = {
  loading: false,
  albums: [],
  error: null,
  search: ""
};

export default function albumReducer(state = initialState, action: AlbumActionTypes): AlbumState {
  switch (action.type) {
    case FETCH_ALBUMS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_ALBUMS_SUCCESS:
      return { ...state, loading: false, albums: action.payload };
    case FETCH_ALBUMS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SEARCH_ALBUMS_NAME:
      return { ...state, search: action.payload};
    default:
      return state;
  }
}
