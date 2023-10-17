import { FC } from "react";

interface InputProps {
  name: string;
  type: "text" | "email" | "password" | "number" | "file";
  placeholder: string;
  register?: any;
  errors?: any;
  error?: boolean;
  errorMessage: string;
}

const Input: FC<InputProps> = ({
  name,
  type,
  placeholder,
  register,
  errors,
  error,
  errorMessage,
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name as string, { required: errorMessage })}
        className={`px-4 py-2 border-b-2 bg-black autofill:bg-black placeholder-gray-400 focus:outline-none focus:border-teal-500 hover:border-teal-500 transition-colors duration-300 w-full text-neutral-400
   ${error ? "border-rose-400" : "border-neutral-400"}
   `}
      />
      {errors[name] && <p className="text-rose-400">{errors[name].message}</p>}
    </>
  );
};

export default Input;
