"use client";

import Modal from "../../components/Modal";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect, useTransition } from "react";
import { MdRefresh, MdWarning } from "react-icons/md";

import { deleteUser } from "./actions";
import Success from "../../components/Success";

const Delete = () => {
  const router = useRouter();
  // Get user's id from params
  const { id } = useParams();
  const [loading, startTransition] = useTransition();
  const [completed, setCompleted] = useState(false);
  useEffect(() => {
    if (completed !== loading && completed !== true) {
      setCompleted(loading);
    }
  }, [loading, completed]);
  return (
    <Modal>
      {!loading ? (
        completed ? (
          <Success message="Pomyślnie usunięto użytkownika z bazy danych" />
        ) : (
          <>
            <div className="flex flex-col">
              <div className="flex flex-col items-center gap-2">
                <MdWarning className="text-5xl text-toolight-danger" />
                <p className="text-3xl">Ostrzeżenie</p>
              </div>
              <p className="text-toolight-secondary text-center w-full">
                Czy napewno chcesz usunąć użytkownika?
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => router.back()}
                className="px-4 py-2 border rounded border-toolight-border-gray-light font-semibold w-full hover:bg-white-hover/50 transition"
              >
                Nie
              </button>
              <button
                onClick={() => startTransition(() => deleteUser(id))}
                className="px-4 py-2 bg-toolight-danger rounded font-semibold text-white w-full hover:bg-toolight-danger-hover-dark transition"
              >
                Tak
              </button>
            </div>
          </>
        )
      ) : (
        <div className="w-full flex flex-col items-center">
          <MdRefresh className="text-6xl animate-spin" />
        </div>
      )}
    </Modal>
  );
};

export default Delete;
