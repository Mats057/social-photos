export interface Photo {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
  }
  
  export interface PhotoState {
    loading: boolean;
    photos: Photo[];
    filteredPhotos: Photo[];
    error: string | null;
  }
  
// export const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
// export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
// export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';
// export const SEARCH_PHOTOS_NAME = 'SEARCH_PHOTOS_NAME';


// interface FetchPhotosRequestAction {
//   type: typeof FETCH_PHOTOS_REQUEST;
// }

// interface FetchPhotosSuccessAction {
//   type: typeof FETCH_PHOTOS_SUCCESS;
//   payload: Photo[];
// }

// interface FetchPhotosFailureAction {
//   type: typeof FETCH_PHOTOS_FAILURE;
//   payload: string;
// }

// interface SearchPhotosNameAction {
//   type: typeof SEARCH_PHOTOS_NAME;
//   payload: string;
// }


// export type PhotoActionTypes =
//   | FetchPhotosRequestAction
//   | FetchPhotosSuccessAction
//   | FetchPhotosFailureAction
//   | SearchPhotosNameAction;

