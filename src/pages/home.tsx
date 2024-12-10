import { useEffect } from "react";
import UserCard from "../components/user-card";
import { fetchUsers } from "../actions/userActions";
import useAppDispatch from "../hooks/useAppDispatch";
import { useUserStates } from "../hooks/useUser";

export default function Home() {
  const dispatch = useAppDispatch();
  const { loading, users, error } = useUserStates();

  useEffect(() => {
    if (!loading && users.length === 0) {
      dispatch(fetchUsers());
    }
  },[dispatch, users, loading])

  console.log(users)

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <main className="grid grid-cols-3 xl:grid-cols-4 grow">
      {users.map((user) => (
        <UserCard key={user.id} userId={user.id}/>
      ))}
    </main>
  );
}
