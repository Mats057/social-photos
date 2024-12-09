import { useSelector } from "react-redux";
import { RootState } from "../redux/root-reducer";
import { Album, AlbumState } from "../types/albumTypes";
import useAppDispatch from "./useAppDispatch";
import { useUserById } from "./useUser";
import { fetchAlbums } from "../actions/albumActions";

export const useAlbumState = <T extends keyof RootState["albumReducer"]>(
  key: T
): AlbumState[T] => {
  return useSelector((rootState: RootState) => rootState.albumReducer[key]);
};

export const useAlbumStates = (): AlbumState => {
  return useSelector((state: RootState) => state.albumReducer);
};

export const useAlbumById = (id: number | undefined): Album | null => {
    const albums = useAlbumState("albums");
    const dispatch = useAppDispatch();
    if (id === undefined) {
      return null;
    }
    if (albums.length === 0) {
      dispatch(fetchAlbums());
    }
    const album = albums.find((user) => user.id === id);
    return album || null;
  };
  

export const useAlbumByUserId = (userId: number | undefined): Album[] | null => {
  const albums = useAlbumState("albums");
  const user = useUserById(userId);
  const dispatch = useAppDispatch();
  if(albums.length == 0){
    dispatch(fetchAlbums());
  }
  if (user === undefined) {
    return null;
  }
  const userAlbums = albums.filter(album => album.userId == userId)
  return userAlbums || null;
};
