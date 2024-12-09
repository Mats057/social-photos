import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserById } from "../hooks/useUser";
import { useAlbumByUserId } from "../hooks/useAlbum";
import AlbumCard from "../components/album-card";
import { Link } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  const userId = id ? parseInt(id) : undefined;
  const user = useUserById(userId);
  const userAlbums = useAlbumByUserId(userId);
  useEffect(() => {
    if (id && user) {
      console.log("Usuário carregado:", user);
    }
  }, [id, user]);
  return (
    <main className="flex flex-col flex-grow items-center justify-center px-12 xl:w-2/3 py-12">
      <h1 className="text-3xl font-semibold">{user?.name}</h1>
      <section className="flex gap-2">
        <a href={`tel:${user?.phone && formatPhoneNumber(user?.phone)}`}>
          {user?.phone && formatPhoneNumber(user?.phone)}
        </a>
        |<a href={`mailto:${user?.email}`}>{user?.email}</a>|
        <a
          className="text-blue-500"
          href={`https://${user?.website}`}
          rel="noreferrer"
          target="_BLANK"
        >
          {user?.website}
        </a>
      </section>
      <section className="mt-16 xl:flex">
        <div className="text-left [&_th]:pr-4">
          <title>Infos</title>
          <table>
            <thead>
              <tr>
                <th colSpan={2} className="text-lg">
                  Infos
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{user?.name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{user?.email}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>{user?.phone && formatPhoneNumber(user?.phone)}</td>
              </tr>
              <tr>
                <th>Username</th>
                <td>{user?.username}</td>
              </tr>
              <tr>
                <th>Website</th>
                <td>
                  {" "}
                  <a
                    className="text-blue-500"
                    href={`https://${user?.website}`}
                    rel="noreferrer"
                    target="_BLANK"
                  >
                    {user?.website}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan={2} className="text-lg pt-4">
                  Address
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>City</th>
                <td>{user?.address.city}</td>
              </tr>
              <tr>
                <th>Street</th>
                <td>{user?.address.street}</td>
              </tr>
              <tr>
                <th>Suite</th>
                <td>{user?.address.suite}</td>
              </tr>
              <tr>
                <th>Zipcode</th>
                <td>{user?.address.zipcode}</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th colSpan={2} className="text-lg pt-4">
                  Company
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{user?.company.name}</td>
              </tr>
              <tr>
                <th>Catch Phrase</th>
                <td>{user?.company.catchPhrase}</td>
              </tr>
              <tr>
                <th>Business Services</th>
                <td>{user?.company.bs.replace(/ /g, ", ")}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <div className="flex justify-between w-full mt-4 xl:mt-0">
            <h1 className="font-bold text-lg">Albums</h1>
            <Link to={`albums`}>Ver todos</Link>
          </div>
          <div className="flex flex-col gap-2 pt-2">
            {userAlbums?.length ? (
              userAlbums
                .slice(0, 4)
                .map((album) => <AlbumCard key={album.id} albumId={album.id} />)
            ) : (
              <p>No album found</p>
            )}
            <Link to={`albums`} className="text-2xl -mt-4 self-center">...</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const formatPhoneNumber = (value: string): string => {
  value = value.replace(/\D/g, "");
  if (value.length <= 3) {
    return `(${value}`;
  } else if (value.length <= 6) {
    return `(${value.slice(0, 3)}) ${value.slice(3)}`;
  } else {
    return `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
  }
};
