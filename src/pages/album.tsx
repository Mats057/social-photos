import { useParams } from "react-router-dom";
import { useFilterPhotoByTitle, usePhotoStates } from "../hooks/usePhoto";
import PhotoCard from "../components/photo-card";
import { IoSearch } from "react-icons/io5";
import { SEARCH_PHOTOS_NAME } from "../types/photoTypes";
import { ChangeEvent, useEffect } from "react";
import useAppDispatch from "../hooks/useAppDispatch";
import { fetchPhotos } from "../actions/photoActions";

export default function Album() {
  const { id } = useParams();
  const { loading, error, search } = usePhotoStates();
  const dispatch = useAppDispatch();
  const albumId = id ? parseInt(id) : undefined;
  const photos = useFilterPhotoByTitle(albumId);
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: SEARCH_PHOTOS_NAME, payload: e.target.value });
  };

  useEffect(() => {
    if(!loading && photos?.length === 0 && search == ''){
      dispatch(fetchPhotos())
    }
  },[dispatch, photos, loading, search])

  console.log(photos)

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <main className="xl:w-2/3 py-6 mb-4">
      <div className="flex justify-between my-4 items-center">
        <h1 className="text-2xl font-bold">Photos from album {albumId}</h1>
        <div className="border rounded-md flex items-center">
          <input
            type="text"
            value={search}
            className="p-2 rounded-md w-full text-sm"
            onChange={(e) => handleSearch(e)}
          />
          <IoSearch className="text-gray-300 size-6 mx-1" />
        </div>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {photos && photos.length > 0 ? (
          photos.map((photo) => <PhotoCard key={photo.id} photoId={photo.id} />)
        ) : (
          <p>No photos available</p>
        )}
      </section>
    </main>
  );
}
