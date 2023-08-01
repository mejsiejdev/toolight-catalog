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
import Table from "../components/Table/Table";

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
      <div className="w-full flex flex-col gap-4">
        <form className="flex flex-row gap-4 items-center">
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
          <input
            type="reset"
            onClick={() => {
              setName();
              setSurname();
              setEmail();
            }}
            value="Wyczyść filtry"
            className="border text-toolight-secondary border-toolight-border-gray-light hover:border-toolight-border-gray-light/50 transition py-1 px-4 rounded"
          />
        </form>
        <AnimatePresence>
          {data && (
            <Table
              headings={["Imię i nazwisko", "Email", ""]}
              rows={data.flatMap((users) =>
                users.map((user, key) => [
                  `${user.name} ${user.surName}`,
                  user.email,
                  <div className="flex flex-row justify-end gap-2" key={key}>
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
                  </div>,
                ])
              )}
            />
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
