"use client";

import useSWRInfinite from "swr/infinite";
import Link from "next/link";
import IconLink from "../components/IconLink";
// Icons
import { MdClear, MdEdit, MdPassword, MdRefresh } from "react-icons/md";
import fetcher from "@/app/lib/fetcher";
import { useEffect, useRef, useState } from "react";
import useOnScreen from "@/hooks/useOnScreen";
import { AnimatePresence, motion } from "framer-motion";

const Users = () => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  // Fitlers
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [role, setRole] = useState();

  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    return `/api/user?page=${pageIndex}&limit=15&name=${name}&surname=${surname}&email=${email}&role=${role}`;
  };

  const { data, error, isLoading, size, setSize } = useSWRInfinite(
    getKey,
    fetcher,
    { refreshInterval: 2000 }
  );

  useEffect(() => {
    console.log("Is visible?", isVisible);
    if (isVisible && data) {
      setSize(size + 1);
    }
  }, [isVisible]);

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
          className="bg-toolight-primary hover:bg-toolight-primary-hover-dark transition py-2 px-4 cursor-pointer flex flex-col items-center rounded font-semibold"
        >
          Dodaj użytkownika
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <form className="flex flex-row justify-end gap-4 items-center">
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="Imię"
            className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
          />
          <input
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Nazwisko"
            className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
          />
          <select
            required
            onChange={(e) => setRole(e.target.value)}
            className="invalid:text-toolight-border-gray-dark border border-toolight-border-gray-light py-1 rounded"
          >
            <option value="" selected></option>
            <option>Obserwator</option>
            <option value="Uzytkownik">Użytkownik</option>
            <option>Moderator</option>
            <option>Administrator</option>
          </select>
          <input
            type="reset"
            onClick={() => {
              setName();
              setSurname();
              setEmail();
              setRole();
            }}
            value="Wyczyść filtry"
            className="border text-toolight-secondary border-toolight-border-gray-light hover:bg-white-hover/50 transition py-1 px-4 rounded"
          />
        </form>
        <AnimatePresence>
          {data && (
            <motion.table
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="shadow table-auto border border-toolight-border-gray-light rounded border-separate border-spacing-0 w-full"
            >
              <thead>
                <tr align="left" className="bg-white-hover/50">
                  <th className="first:pl-4 py-4 last:pr-4 border-b border-toolight-border-gray-light">
                    Imię i nazwisko
                  </th>
                  <th className="first:pl-4 py-4 last:pr-4 border-b border-toolight-border-gray-light">
                    Email
                  </th>
                  <th className="first:pl-4 py-4 last:pr-4 border-b border-toolight-border-gray-light">
                    Rola
                  </th>
                  <th className="first:pl-4 py-4 last:pr-4 border-b border-toolight-border-gray-light" />
                </tr>
              </thead>
              <tbody>
                {data.map((users) =>
                  users.map((user, key) => (
                    <>
                      <tr
                        key={key}
                        className="group hover:bg-white-hover/20 transition"
                      >
                        <td className="first:pl-4 py-4 last:pr-4 border-b border-toolight-border-gray-light group-last:border-none">{`${user.name} ${user.surName}`}</td>
                        <td className="first:pl-4 py-4 last:pr-4 border-b border-toolight-border-gray-light group-last:border-none">
                          {user.email}
                        </td>
                        <td className="first:pl-4 py-4 last:pr-4 border-b border-toolight-border-gray-light group-last:border-none">
                          <p
                            className={`${
                              user.role === "Obserwator"
                                ? "bg-white-hover text-toolight-paragraph"
                                : user.role === "Uzytkownik"
                                ? "bg-[#3b82f6] text-white"
                                : user.role === "Moderator"
                                ? "bg-[#8b5cf6] text-white"
                                : "bg-[#ef4444] text-white"
                            } font-semibold px-2 py-1 w-min rounded`}
                          >
                            {user.role === "Uzytkownik"
                              ? "Użytkownik"
                              : user.role}
                          </p>
                        </td>
                        <td className="first:pl-4 py-4 last:pr-4 border-b border-toolight-border-gray-light group-last:border-none flex flex-row justify-end gap-2">
                          <IconLink
                            href={`/admin/users/${user.id}/edit?name=${user.name}&surname=${user.surName}&email=${user.email}&role=${user.role}`}
                            icon={<MdEdit />}
                          />
                          <IconLink
                            href={`/admin/users/${user.id}/password`}
                            icon={<MdPassword />}
                          />
                          <IconLink
                            href={`/admin/users/${user.id}/delete`}
                            icon={<MdClear />}
                          />
                        </td>
                      </tr>
                    </>
                  ))
                )}
              </tbody>
            </motion.table>
          )}
        </AnimatePresence>
      </div>
      <div ref={ref} className="-mt-8" />
      {isLoading && (
        <div
          className={`w-full ${
            !data ? "h-full" : ""
          } flex flex-row gap-2 items-center text-toolight-secondary justify-center`}
        >
          <MdRefresh className="text-4xl animate-spin" />
          <p className="font-semibold">Wczytywanie użytkowników...</p>
        </div>
      )}
    </>
  );
};

export default Users;
