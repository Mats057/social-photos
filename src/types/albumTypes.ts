export interface Album {
    id: number;
    userId: number;
    title: string;
  }
  
  export interface AlbumState {
    loading: boolean;
    albums: Album[];
    error: string | null;
  }
  
export const FETCH_ALBUMS_REQUEST = 'FETCH_ALBUMS_REQUEST';
export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_ALBUMS_FAILURE = 'FETCH_ALBUMS_FAILURE';

interface FetchAlbumsRequestAction {
  type: typeof FETCH_ALBUMS_REQUEST;
}

interface FetchAlbumsSuccessAction {
  type: typeof FETCH_ALBUMS_SUCCESS;
  payload: Album[];
}

interface FetchAlbumsFailureAction {
  type: typeof FETCH_ALBUMS_FAILURE;
  payload: string;
}

export type AlbumActionTypes =
  | FetchAlbumsRequestAction
  | FetchAlbumsSuccessAction
  | FetchAlbumsFailureAction;

