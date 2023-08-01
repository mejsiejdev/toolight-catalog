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
        !pending ? "bg-toolight-primary" : "bg-toolight-primary-hover-light"
      } rounded font-semibold text-black hover:bg-toolight-primary-hover-dark transition w-full md:w-auto`}
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
