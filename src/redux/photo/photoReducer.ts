import { FETCH_PHOTOS_FAILURE, FETCH_PHOTOS_REQUEST, FETCH_PHOTOS_SUCCESS, PhotoActionTypes, PhotoState, SEARCH_PHOTOS_NAME } from "../../types/photoTypes";

const initialState: PhotoState = {
  loading: false,
  photos: [],
  error: null,
  search: ""
};

export default function photoReducer(state = initialState, action:PhotoActionTypes): PhotoState {
  switch (action.type) {
    case FETCH_PHOTOS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_PHOTOS_SUCCESS:
      return { ...state, loading: false, photos: action.payload };
    case FETCH_PHOTOS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SEARCH_PHOTOS_NAME:
      return { ...state, search: action.payload};
    default:
      return state;
  }
}
