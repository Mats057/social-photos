import { useEffect } from "react";
import UserCard from "../components/user-card";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchUsers } from "../redux/user/userListSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  const { loading, users, error } = useAppSelector(state => state.userListReducer);

  useEffect(() => {
    dispatch(fetchUsers());
  },[dispatch])

  console.log(users)

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <main className="grid grid-cols-3 xl:grid-cols-4 grow">
      {users.map((user) => (
        <UserCard key={user.id} user={user}/>
      ))}
    </main>
  );
}
