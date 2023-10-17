import { FC } from "react";
import { Controller } from "react-hook-form";

interface TextareaProps {
  name: string;
  control: any;
}

const Textarea: FC<TextareaProps> = ({ name, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <textarea
          {...field}
          placeholder="Ex. House - 3; Road - 3; State - xyz;"
          className="w-full p-3 bg-gray-800 border-2 border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 resize-none"
        />
      )}
    />
  );
};

export default Textarea;
