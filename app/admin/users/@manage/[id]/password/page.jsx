"use client";

import Modal from "../../components/Modal";
import Success from "../../components/Success";
import { useRouter } from "next/navigation";
import { useId, useState } from "react";
import { changePassword } from "./actions";

const Password = ({ params }) => {
  const router = useRouter();
  const id = useId();
  const [completed, setCompleted] = useState(false);
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const handleSubmit = async (data) => {
    await changePassword(data, params.id);
    setCompleted(true);
  };
  return (
    <Modal>
      {completed ? (
        <Success message="Pomyślnie zaktualizowano dane użytkownika!" />
      ) : (
        <>
          <p className="text-xl font-semibold text-center">Zmiana hasła</p>
          <form action={handleSubmit}>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col gap-2">
                <label htmlFor={`${id}-password`}>Nowe hasło</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  id={`${id}-password`}
                  type="password"
                  required
                  name="password"
                  className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor={`${id}-password`}>Powtórz hasło</label>
                <input
                  id={`${id}-passwordrepeat`}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  type="password"
                  required
                  name="passwordrepeat"
                  className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded"
                />
              </div>
              {repeatPassword && password && password !== repeatPassword && (
                <p className="text-toolight-danger">Hasła się różnią.</p>
              )}
              <button
                type="submit"
                className="mt-2 px-4 py-2 bg-toolight-success rounded font-semibold text-white w-full hover:bg-toolight-success-hover-dark transition"
              >
                Zmień hasło
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

export default Password;
