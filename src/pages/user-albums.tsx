import { useParams } from "react-router-dom";
import { useAlbumByUserId } from "../hooks/useAlbum";
import AlbumCard from "../components/album-card";
import { IoSearch } from "react-icons/io5";

export default function UserAlbums() {
  const { id } = useParams();
  const userId = id ? parseInt(id) : undefined;
  const userAlbums = useAlbumByUserId(userId);
  return (
    <main>
      <section className="flex flex-col gap-4 my-4">
        <div className="border rounded-md flex items-center">
          <input type="text" className="p-2 rounded-md w-full text-sm" />
          <IoSearch className="text-gray-300 size-6 mx-1"/>
        </div>
        {userAlbums?.map((album) => (
          <AlbumCard albumId={album.id} key={album.id} />
        ))}
      </section>
    </main>
  );
}
