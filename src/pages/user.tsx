import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserById } from "../hooks/useUser";

export default function User() {
  const { id } = useParams();
  const userId = id ? parseInt(id) : undefined;
  const user = useUserById(userId);
  useEffect(() => {
    if (id) {
      console.log("Usuário carregado:", user);
    }
  }, [id, user]);
  return (
    <main className="flex flex-col flex-grow items-center justify-center ">
      <h1 className="text-3xl font-semibold">{user?.name}</h1>
      <div className="flex gap-2">
        <p>{user?.phone}</p>|<a href={`mailto:${user?.email}`}>{user?.email}</a>|
        <a className="text-blue-500" href={`https://${user?.website}`} rel="noreferrer" target="_BLANK">{user?.website}</a>
      </div>
    </main>
  );
}
