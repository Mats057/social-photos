import { Photo } from "../types/photoTypes"

type PhotoCardProps = {
    photo: Photo
  }

export default function PhotoCard({photo}:PhotoCardProps){
    return (
        <div className="bg-gray-100 rounded-lg hover:scale-125 transition-all shadow-lg">
            <img src={photo?.url} alt={photo?.title} className="rounded-t-lg" />
            <p className="p-2">{photo?.title}</p>
        </div>
    )
}