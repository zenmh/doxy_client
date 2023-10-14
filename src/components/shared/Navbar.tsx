import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { logo } from "@/assets/images";
import { NavItem } from ".";
import { Button, SearchBar } from "../ui";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import useDarkMode from "@/hooks/theme";

interface NavbarProps {}

const items = [
  { label: "Contact +", href: "/contact" },
  { label: "About +", href: "/about" },
  { label: "Medicine +", href: "/medicine" },
];

const Navbar: FC<NavbarProps> = () => {
  const { push } = useRouter();
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  const toggleDarkMode = () => {
    if (typeof setIsDarkMode === "function") setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="flex flex-row justify-between items-center">
      <Image
        src={logo}
        alt="doc savvy logo"
        height={80}
        width={80}
        onClick={() => push("/")}
        className="flex flex-row items-center justify-start cursor-pointer hover:opacity-80 transition duration-200"
      />
      <SearchBar />
      <div className="flex flex-row items-center justify-between gap-3">
        {items.map(({ label, href }) => (
          <NavItem key={label} label={label} href={href} />
        ))}
        <div
          onClick={toggleDarkMode}
          className="p-2 rounded-md transition duration-300 cursor-pointer"
        >
          {isDarkMode ? (
            <BsFillSunFill fill="white" />
          ) : (
            <BsFillMoonFill fill="black" />
          )}
        </div>
        <Button variant="secondary" size="md" label="Sign Up" />
      </div>
    </nav>
  );
};

export default Navbar;
