import { useNavigate } from "react-router-dom"
import { Album } from "../types/albumTypes";

type AlbumCardProps = {
    album: Album
  }
  

export default function AlbumCard({album}:AlbumCardProps){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/album/${album.id}`)
    }

    return(
        <div className="bg-gray-200 rounded-lg p-2 hover:bg-gray-100 cursor-pointer min-w-full" onClick={handleClick}>
            <p className="text-black font-normal">{album?.id && album.id+1}. {album?.title}</p>
        </div>
    )
}