"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

const Input = ({ id, defaultValue, type, name, placeholder }) => {
  const { pending } = useFormStatus();
  return (
    <input
      id={id}
      placeholder={placeholder}
      defaultValue={defaultValue}
      type={type}
      name={name}
      disabled={pending}
      className="placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-2 py-1 rounded disabled:cursor-not-allowed disabled:bg-toolight-border-gray-light/25 disabled:text-toolight-secondary/75 transition"
    />
  );
};

export default Input;
