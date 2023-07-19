"use client";

import { MdError } from "react-icons/md";
import { useRouter } from "next/navigation";

const Error = ({ name, message }) => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col items-center gap-2">
          <MdError className="text-5xl text-toolight-danger" />
          <p className="text-3xl">Błąd!</p>
        </div>
        <p className="text-toolight-secondary text-center w-full">{message}</p>
        <p className="text-toolight-border-gray-dark text-center w-full">{`Nazwa błędu: ${name}`}</p>
      </div>
      <button
        onClick={() => {
          // For some reason I have to do the same thing two times in a different way
          router.back(); // this removes the modal
          router.replace("/admin/users"); // this revalidates the page
        }}
        className="px-4 py-2 border rounded border-toolight-border-gray-light font-semibold w-full hover:bg-white-hover/50 transition text-center"
      >
        Powrót
      </button>
    </>
  );
};

export default Error;
