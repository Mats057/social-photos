import { useNavigate } from "react-router-dom"
import { useAlbumById } from "../hooks/useAlbum"

type AlbumCardProps = {
    albumId: number
  }
  

export default function AlbumCard({albumId}:AlbumCardProps){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/album/${albumId}`)
    }

    const album = useAlbumById(albumId)
    return(
        <div className="bg-gray-200 rounded-lg p-2 hover:bg-gray-100 cursor-pointer" onClick={handleClick}>
            <p className="text-black font-normal">{album?.id && album.id+1}. {album?.title}</p>
        </div>
    )
}