"use client";

import { useState, useId } from "react";
import Modal from "../../components/Modal";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { editUser } from "./actions";
import Success from "../../components/Success";

const Edit = ({ params, searchParams }) => {
  const router = useRouter();
  const id = useId();
  const [completed, setCompleted] = useState(false);
  const handleSubmit = async (data) => {
    await editUser(data, params.id);
    setCompleted(true);
  };
  return (
    <Modal>
      {completed ? (
        <Success message="Pomyślnie zaktualizowano dane użytkownika!" />
      ) : (
        <>
          <p className="text-2xl font-semibold">Edycja danych użytkownika</p>
          <form action={handleSubmit}>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-row gap-4 w-full">
                <div className="flex flex-col gap-2">
                  <label htmlFor={`${id}-name`}>Imię</label>
                  <input
                    id={`${id}-name`}
                    defaultValue={searchParams.name}
                    type="text"
                    name="name"
                    className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor={`${id}-surname`}>Nazwisko</label>
                  <input
                    id={`${id}-surname`}
                    defaultValue={searchParams.surname}
                    type="text"
                    name="surname"
                    className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor={`${id}-email`}>Email</label>
                <input
                  id={`${id}-email`}
                  defaultValue={searchParams.email}
                  type="email"
                  name="email"
                  className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
                />
              </div>
              <div className="flex flex-row justify-end gap-2">
                <label htmlFor={`${id}-admin`}>Admin?</label>
                <input
                  id={`${id}-admin`}
                  checked={searchParams.isAdmin}
                  type="checkbox"
                  name="admin"
                  className="text-2xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/admin/users"
                  onClick={() => router.back()}
                  className="px-4 py-2 border rounded border-toolight-border-gray-light font-semibold w-full hover:bg-white-hover/50 transition text-center"
                >
                  Anuluj
                </Link>
                <button
                  type="submit"
                  className="px-4 py-2 bg-toolight-success rounded font-semibold text-white w-full hover:bg-toolight-success-hover-dark transition"
                >
                  Zapisz zmiany
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </Modal>
  );
};

export default Edit;
