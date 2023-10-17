import { FC } from "react";

export interface IOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: IOption[];
  value: any;
  onChange: any;
  name: string;
  register: any;
}

const Select: FC<SelectProps> = ({
  options,
  value,
  onChange,
  register,
  name,
}) => {
  return (
    <select
      value={value.value}
      onChange={(e) => {
        onChange(options.find((option) => option.value === e.target.value));
      }}
      {...register(name as string)}
      className="cursor-pointer py-2 pl-3 pr-10 text-left border-b-2 border-gray-600 bg-black focus:outline-none focus:border-teal-500 text-neutral-400 w-full hover:border-teal-500"
    >
      {options.map(({ value, label }) => (
        <option
          key={value}
          value={value}
          className="px-4 py-2 text-md text-neutral-400 w-full"
        >
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;

/* const options = [
      { value: "PATIENT", label: "Patient" },
      { value: "DOCTOR", label: "Doctor" },
      { value: "ADMIN", label: "Admin" },
    ];
    
    
    const [selectedOption, setSelectedOption] = useState(options[0]);
    
    const handleSelectChange = (option: IOption) => {
      setSelectedOption(option);
    };
    
    <Select
    options={options}
    value={selectedOption}
    onChange={handleSelectChange}
    register={register}
    name="role"
    /> */
