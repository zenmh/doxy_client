import { FC, ReactNode } from "react";

interface ButtonProsp {
  label: string | ReactNode;
  size: "xs" | "sm" | "md" | "lg";
  variant: "primary" | "secondary" | "danger";
  type?: "button" | "submit" | "reset" | undefined;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FC<ButtonProsp> = ({
  label,
  size,
  variant,
  type,
  isLoading,
  disabled,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      type={type}
      className={`
      font-bold py-2 px-3 rounded-md shadow-md transition duration-300 transform border-none text-black dark:text-white
      ${size === "xs" && "scale-50"}
      ${size === "sm" && "scale-75"}
      ${size === "md" && "scale-100"}
      ${size === "lg" && "scale-105"}
      ${!disabled && variant === "primary" && "bg-cyan-500 hover:bg-cyan-600"}
      ${!disabled && variant === "secondary" && "bg-teal-500 hover:bg-teal-600"}
      ${!disabled && variant === "danger" && "bg-rose-500 hover:bg-rose-600"} ${
        isLoading && "w-20"
      }
    `}
    >
      {!isLoading ? (
        label
      ) : (
        <span
          className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        />
      )}
    </button>
  );
};

export default Button;
