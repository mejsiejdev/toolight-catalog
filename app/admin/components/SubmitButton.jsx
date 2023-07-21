"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { MdRefresh } from "react-icons/md";

const SubmitButton = ({ text }) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={`px-4 py-2 ${
        !pending ? "bg-toolight-success" : "bg-toolight-success-hover-light"
      } rounded font-semibold text-white hover:bg-toolight-success-hover-dark transition`}
    >
      {!pending ? (
        <p>{text}</p>
      ) : (
        <MdRefresh className="animate-spin text-2xl" />
      )}
    </button>
  );
};

export default SubmitButton;
