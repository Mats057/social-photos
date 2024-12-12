import { useParams } from "react-router-dom";
import AlbumCard from "../components/album-card";
import { FaRegTrashAlt } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  fetchAlbumsByUserId,
  filterAlbumBySearch,
} from "../redux/album/userAlbumsSlice";

export default function UserAlbums() {
  const { loading, error, filteredAlbums } = useAppSelector(
    (state) => state.albumsByUserReducer
  );
  const { id } = useParams();
  const userId = id ? parseInt(id) : undefined;
  const dispatch = useAppDispatch();
  const search = useRef<HTMLInputElement | null>(null);
  const handleSearch = () => {
    if (search.current) {
      dispatch(filterAlbumBySearch(search.current.value));
    }
  };
  const handleClear = () => {
    if (search.current) {
      search.current.value = "";
      handleSearch();
    }
  };

  useEffect(() => {
    dispatch(fetchAlbumsByUserId(userId));
  }, [dispatch, userId]);

  console.log(filteredAlbums);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <main className="xl:w-1/2">
      <section className="flex flex-col gap-4 my-4 min-w-full">
        <div className="border rounded-md flex items-center">
          <input
            type="text"
            ref={search}
            className="p-2 rounded-md w-full text-sm"
            onChange={handleSearch}
          />
          <FaRegTrashAlt
            className="text-gray-300 size-6 mx-1"
            onClick={handleClear}
          />
        </div>
        {filteredAlbums && filteredAlbums.length > 0 ? (
          filteredAlbums.map((album) => (
            <AlbumCard album={album} key={album.id} />
          ))
        ) : (
          <p>No albums found</p>
        )}
      </section>
    </main>
  );
}
