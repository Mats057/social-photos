import { useNavigate } from "react-router-dom";
import { User } from "../types/userTypes";

type UserCardProps = {
  user: User;
};

export default function UserCard({ user }: UserCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`user/${user.id}`);
  };

  return (
    <div
      className="bg-red-600 m-8 p-4 flex flex-col items-center justify-center
     rounded-xl hover:bg-red-700 cursor-pointer select-none shadow-xl"
      onClick={handleClick}
    >
      <h2 className="flex gap-1 flex-wrap font-medium text-white">
        {user?.name}
      </h2>
      <p className="text-gray-200">({user?.username})</p>
    </div>
  );
}
