import { FC } from "react";

interface InputProps {
  label?: string;
  name: string;
  type: "text" | "email" | "password" | "number" | "file";
  placeholder: string;
  register?: any;
  error?: boolean;
  errorMessage: string;
}

const Input: FC<InputProps> = ({
  label,
  name,
  type,
  placeholder,
  register,
  error,
  errorMessage,
}) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        className={`px-4 py-2 rounded-md border-2 bg-black autofill:bg-black placeholder-gray-400 focus:outline-none focus:border-teal-500 hover:border-teal-500 transition-colors duration-300 w-full text-neutral-400
      ${error ? "border-rose-400" : "border-neutral-400"}
      `}
      />
    </>
  );
};

export default Input;
