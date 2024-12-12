// import { useAppSelector } from "../redux/hooks";
// import { Album } from "../types/albumTypes";
// import { useUserById } from "./useUser";


// export const useAlbumById = (id: number | undefined): Album | null => {
//     const { albums } = useAppSelector(state => state.albumReducer);
//     if (id === undefined) {
//       return null;
//     }
//     const album = albums.find((user) => user.id === id);
//     return album || null;
//   };
  

// export const useAlbumByUserId = (userId: number | undefined): Album[] | null => {
//   const albums = useAlbumState("albums");
//   const user = useUserById(userId);
//   if (user === undefined) {
//     return null;
//   }
//   const userAlbums = albums.filter(album => album.userId == userId)
//   return userAlbums || null;
// };

// export const useFilterAlbumByName = (userId: number | undefined): Album[] | null => {
//   const albums = useAlbumByUserId(userId);
//   const search = useAlbumState("search");

//   if (!albums) return null;
//   return albums.filter(album => 
//     album.title.toLowerCase().includes(search.toLowerCase())
//   );
// };
