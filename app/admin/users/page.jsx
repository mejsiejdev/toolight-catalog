import prisma from "@/dp";
import Link from "next/link";
import IconLink from "../components/IconLink";
// Icons
import { MdClear, MdEdit } from "react-icons/md";

const getUsers = async () => {
  const users = prisma.user.findMany();
  return users;
};

const Users = async () => {
  const users = await getUsers();
  return (
    <>
      <div className="w-full flex flex-row gap-8 justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl">Użytkownicy</h1>
          <h2 className="text-toolight-border-gray-dark">
            Lista wszystkich użytkowników.
          </h2>
        </div>
        <Link
          href="/admin/users/add"
          className="bg-toolight-primary hover:bg-toolight-primary-hover-dark transition py-2 px-4 cursor-pointer flex flex-col items-center rounded"
        >
          Dodaj użytkownika
        </Link>
      </div>
      <table className="table-auto border border-toolight-border-gray-light rounded border-separate border-spacing-0">
        <thead>
          <tr align="left" className="bg-white-hover/50">
            <th className="first:pl-4 py-4 last:pr-4 border-b border-toolight-border-gray-light">
              Imię i nazwisko
            </th>
            <th className="first:pl-4 py-4 last:pr-4 border-b border-toolight-border-gray-light">
              Email
            </th>
            <th className="first:pl-4 py-4 last:pr-4 border-b border-toolight-border-gray-light" />
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) => (
            <tr key={key} className="group">
              <td className="first:pl-4 py-4 last:pr-4 border-b border-toolight-border-gray-light group-last:border-none">{`${user.name} ${user.surName}`}</td>
              <td className="first:pl-4 py-4 last:pr-4 border-b border-toolight-border-gray-light group-last:border-none">
                {user.email}
              </td>
              <td className="first:pl-4 py-4 last:pr-4 border-b border-toolight-border-gray-light group-last:border-none flex flex-row justify-end gap-2">
                <IconLink
                  href={`/admin/users/${user.id}/edit?name=${user.name}&surname=${user.surName}&email=${user.email}&isAdmin=${user.isAdmin}`}
                  icon={<MdEdit />}
                />
                <IconLink
                  href={`/admin/users/${user.id}/delete`}
                  icon={<MdClear />}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
