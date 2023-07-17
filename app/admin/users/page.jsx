import prisma from "@/dp";
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
        <button className="bg-toolight-primary hover:bg-toolight-primary-hover-dark transition py-2 px-4 font-semibold cursor-pointer flex flex-col items-center rounded">
          Dodaj użytkownika
        </button>
      </div>
      <div className="border border-toolight-border-gray-light rounded">
        {users.map((user, key) => (
          <div
            key={key}
            className="flex flex-row justify-between p-4 items-center gap-8 border-b border-toolight-border-gray-light last:border-none"
          >
            <div>
              <p className="font-semibold">{`${user.name} ${user.surName}`}</p>
              <p>{user.email}</p>
            </div>
            <div className="flex flex-row gap-2">
              <IconLink href={`/admin/users/${user.id}`} icon={<MdEdit />} />
              <IconLink icon={<MdClear />} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
