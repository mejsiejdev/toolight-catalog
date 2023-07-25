"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

const Input = ({
  id,
  defaultValue,
  type,
  name,
  placeholder,
  onChange,
  value,
  required,
}) => {
  const { pending } = useFormStatus();
  return type !== "textarea" ? (
    <input
      id={id}
      required={required}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
      type={type}
      name={name}
      value={value}
      disabled={pending}
      className="focus:ring-toolight-primary focus:border-toolight-primary placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-3 py-2 rounded disabled:cursor-not-allowed disabled:bg-toolight-border-gray-light/25 disabled:text-toolight-secondary/75 transition"
    />
  ) : (
    <textarea
      id={id}
      required={required}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
      name={name}
      value={value}
      disabled={pending}
      rows={4}
      className="focus:ring-toolight-primary focus:border-toolight-primary placeholder:text-toolight-border-gray-dark border border-toolight-border-gray-light px-3 py-2 rounded disabled:cursor-not-allowed disabled:bg-toolight-border-gray-light/25 disabled:text-toolight-secondary/75 transition"
    />
  );
};

export default Input;
