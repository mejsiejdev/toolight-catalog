"use client";

import { useState, useId } from "react";
import Modal from "@/app/admin/components/Modal";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { addUser } from "./actions";
import Success from "@/app/admin/components/Success";
import Error from "@/app/admin/components/Error";

const Add = () => {
  const router = useRouter();
  const id = useId();
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState();
  const handleSubmit = async (data) => {
    const error = await addUser(data);
    if (error) {
      setError(error);
    }
    setCompleted(true);
  };
  return (
    <Modal>
      {completed ? (
        error ? (
          <Error
            name={error}
            message="Wystąpił błąd w trakcie dodawania użytkownika."
          />
        ) : (
          <Success message="Pomyślnie dodano użytkownika do bazy danych!" />
        )
      ) : (
        <>
          <p className="text-xl text-center font-semibold">
            Dodaj nowego użytkownika
          </p>
          <form action={handleSubmit}>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col gap-2">
                <label htmlFor={`${id}-name`}>Imię</label>
                <input
                  id={`${id}-name`}
                  type="text"
                  name="name"
                  className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor={`${id}-surname`}>Nazwisko</label>
                <input
                  id={`${id}-surname`}
                  type="text"
                  name="surname"
                  className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor={`${id}-email`}>Email</label>
                <input
                  id={`${id}-email`}
                  type="email"
                  name="email"
                  className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor={`${id}-password`}>Hasło</label>
                <input
                  id={`${id}-password`}
                  type="password"
                  name="password"
                  className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
                />
              </div>
              <button
                type="submit"
                className="mt-2 px-4 py-2 bg-toolight-success rounded font-semibold text-white w-full hover:bg-toolight-success-hover-dark transition"
              >
                Zapisz zmiany
              </button>
              <Link
                href="/admin/users"
                onClick={() => router.back()}
                className="px-4 py-2 border rounded border-toolight-border-gray-light font-semibold w-full hover:bg-white-hover/50 transition text-center"
              >
                Anuluj
              </Link>
            </div>
          </form>
        </>
      )}
    </Modal>
  );
};

export default Add;
