import { useSelector } from "react-redux";
import { RootState } from "../redux/root-reducer";
import { Photo, PhotoState } from "../types/photoTypes";

export const usePhotoState = <T extends keyof RootState["photoReducer"]>(
  key: T
): PhotoState[T] => {
  return useSelector((rootState: RootState) => rootState.photoReducer[key]);
};

export const usePhotoStates = (): PhotoState => {
  return useSelector((state: RootState) => state.photoReducer);
};

export const usePhotoById = (id: number | undefined): Photo | null => {
    const photos = usePhotoState("photos");
    if (id === undefined) {
      return null;
    }
    const photo = photos.find((user) => user.id === id);
    return photo || null;
  };
  

export const usePhotosByAlbumId = (albumId: number | undefined): Photo[] | null => {
  const photos = usePhotoState("photos");
  const album = usePhotoById(albumId);
  if (album === undefined) {
    return null;
  }
  const userAlbums = photos.filter(photo => photo.albumId == albumId)
  return userAlbums || null;
};

export const useFilterPhotoByTitle = (albumId: number | undefined): Photo[] | null => {
  const photos = usePhotosByAlbumId(albumId);
  const search = usePhotoState("search");

  if (!photos) return null;
  return photos.filter(photo => 
    photo.title.toLowerCase().includes(search.toLowerCase())
  );
};
