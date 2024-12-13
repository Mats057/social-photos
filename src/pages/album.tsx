import { useParams } from "react-router-dom";
import PhotoCard from "../components/photo-card";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchPhotosByAlbumId, filterPhotoBySearch } from "../redux/photo/albumPhotosSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import { fetchAlbumById } from "../redux/album/albumSlice";

export default function Album() {
  const { id } = useParams();
  const { loading, error } = useAppSelector((state) => state.albumReducer);
  const dispatch = useAppDispatch();
  const albumId = id ? parseInt(id) : undefined;
  const { filteredPhotos } = useAppSelector((state) => state.photoReducer);
  const { album } = useAppSelector((state) => state.albumReducer);
  const searchPhoto = useRef<HTMLInputElement | null>(null);
  const handleSearch = () => {
    if (searchPhoto.current) {
      dispatch(filterPhotoBySearch(searchPhoto.current.value));
    }
  };
  const handleClear = () => {
    if (searchPhoto.current) {
      searchPhoto.current.value = "";
      handleSearch();
    }
  };

  useEffect(() => {
    dispatch(fetchAlbumById(albumId))
    dispatch(fetchPhotosByAlbumId(albumId));
  }, [dispatch, albumId]);

  console.log(filteredPhotos);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <main className="xl:w-2/3 py-6 mb-4">
      <div className="flex justify-between my-4 items-center">
        <h1 className="text-2xl font-bold">Photos from album {album?.title}</h1>
        <div className="border rounded-md flex items-center">
          <input
            type="text"
            ref={searchPhoto}
            className="p-2 rounded-md w-full text-sm"
            onChange={handleSearch}
          />
          <FaRegTrashAlt
            className="text-gray-300 size-6 mx-1"
            onClick={handleClear}
          />
        </div>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredPhotos && filteredPhotos.length > 0 ? (
          filteredPhotos.map((photo) => <PhotoCard key={photo.id} photo={photo} />)
        ) : (
          <p>No photos available</p>
        )}
      </section>
    </main>
  );
}
