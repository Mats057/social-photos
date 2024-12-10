import { useParams } from "react-router-dom";
import { useAlbumStates, useFilterAlbumByName } from "../hooks/useAlbum";
import AlbumCard from "../components/album-card";
import { IoSearch } from "react-icons/io5";
import { SEARCH_ALBUMS_NAME } from "../types/albumTypes";
import { ChangeEvent, useEffect } from "react";
import { fetchAlbums } from "../actions/albumActions";
import useAppDispatch from "../hooks/useAppDispatch";

export default function UserAlbums() {
  const { loading, error, search } = useAlbumStates();
  const { id } = useParams();
  const userId = id ? parseInt(id) : undefined;
  const userAlbums = useFilterAlbumByName(userId);
  const dispatch = useAppDispatch();
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: SEARCH_ALBUMS_NAME, payload: e.target.value });
  };

  useEffect(() => {
    if(!loading && userAlbums?.length === 0 && search == ''){
      dispatch(fetchAlbums())
    }
  },[dispatch, userAlbums, loading, search])

  console.log(userAlbums)

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <main className="xl:w-1/2">
      <section className="flex flex-col gap-4 my-4 min-w-full">
        <div className="border rounded-md flex items-center">
          <input
            type="text"
            value={search}
            className="p-2 rounded-md w-full text-sm"
            onChange={(e) => handleSearch(e)}
          />
          <IoSearch className="text-gray-300 size-6 mx-1" />
        </div>
        {userAlbums && userAlbums.length > 0 ? (
          userAlbums.map((album) => (
            <AlbumCard albumId={album.id} key={album.id} />
          ))
        ) : (
          <p>No albums found</p>
        )}
      </section>
    </main>
  );
}
