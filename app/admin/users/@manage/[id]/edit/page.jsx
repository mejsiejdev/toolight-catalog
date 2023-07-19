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
          <p className="text-xl font-semibold text-center">
            Edycja danych użytkownika
          </p>
          <form action={handleSubmit}>
            <div className="flex flex-col gap-4 w-full">
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
              <div className="flex flex-col gap-2">
                <label htmlFor={`${id}-role`}>Rola</label>
                <select
                  defaultValue={searchParams.role}
                  id={`${id}-role`}
                  name="role"
                  className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
                >
                  <option>Obserwator</option>
                  <option value="Uzytkownik">Użytkownik</option>
                  <option>Moderator</option>
                  <option>Administrator</option>
                </select>
              </div>
              <button
                type="submit"
                className="mt-2 px-4 py-2 bg-toolight-success rounded font-semibold text-white w-full hover:bg-toolight-success-hover-dark transition"
              >
                Zapisz zmiany
              </button>
              <button
                onClick={() => {
                  // For some reason I have to do the same thing two times in a different way
                  router.back(); // this removes the modal
                  router.replace("/admin/users"); // this revalidates the page
                }}
                className="px-4 py-2 border rounded border-toolight-border-gray-light font-semibold w-full hover:bg-white-hover/50 transition text-center"
              >
                Anuluj
              </button>
            </div>
          </form>
        </>
      )}
    </Modal>
  );
};

export default Edit;
