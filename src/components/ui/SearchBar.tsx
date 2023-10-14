import { ChangeEvent, FC, MouseEvent } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface SearchBarProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onChange, onClick }) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        name="search"
        type="text"
        placeholder="Search"
        className={`px-4 py-1 rounded-full border-2 border-neutral-800 dark:border-neutral-400 bg-neutral-200 autofill:bg-black placeholder-gray-400 focus:outline-none focus:border-teal-500 hover:border-teal-500 transition-colors duration-300 w-full text-neutral-600`}
      />
      <button
        onClick={onClick}
        className={`font-bold py-[5.5px] px-4 shadow-md transition duration-300 border-non dark:text-white absolute top-0 right-0 transform z-10 cursor-pointer text-neutral-800 text-2xl bg-teal-500 hover:bg-teal-600 rounded-r-full`}
      >
        <AiOutlineSearch />
      </button>
    </div>
  );
};

export default SearchBar;
