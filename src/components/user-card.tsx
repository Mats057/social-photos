import { useNavigate } from "react-router-dom";
import { useUserById } from "../hooks/useUser";

type UserCardProps = {
  userId: number
}

export default function UserCard({userId}:UserCardProps) {
  const user = useUserById(userId)
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`user/${userId}`);
  }

  return (
    <div className="bg-red-600 m-8 p-4 flex flex-col items-center justify-center
     rounded-xl hover:bg-red-700 cursor-pointer select-none shadow-xl" onClick={handleClick}>
      <h2 className="flex gap-1 flex-wrap font-medium text-white">
        {user?.name}
      </h2>
      <p className="text-gray-200">({user?.username})</p>
    </div>
  );
}
