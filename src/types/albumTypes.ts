export interface Album {
    id: number;
    userId: number;
    title: string;
  }

  export interface AlbumListState {
    loading: boolean;
    albums: Album[];
    filteredAlbums: Album[];
    error: string | null;
  }
  
  export interface AlbumState {
    loading: boolean;
    album: Album | null;
    error: string | null;
  }
  
// export const FETCH_ALBUMS_REQUEST = 'FETCH_ALBUMS_REQUEST';
// export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
// export const FETCH_ALBUMS_FAILURE = 'FETCH_ALBUMS_FAILURE';
// export const SEARCH_ALBUMS_NAME = 'SEARCH_ALBUMS_NAME';


// interface FetchAlbumsRequestAction {
//   type: typeof FETCH_ALBUMS_REQUEST;
// }

// interface FetchAlbumsSuccessAction {
//   type: typeof FETCH_ALBUMS_SUCCESS;
//   payload: Album[];
// }

// interface FetchAlbumsFailureAction {
//   type: typeof FETCH_ALBUMS_FAILURE;
//   payload: string;
// }

// interface SearchAlbumsNameAction {
//   type: typeof SEARCH_ALBUMS_NAME;
//   payload: string;
// }


// export type AlbumActionTypes =
//   | FetchAlbumsRequestAction
//   | FetchAlbumsSuccessAction
//   | FetchAlbumsFailureAction
//   | SearchAlbumsNameAction;

