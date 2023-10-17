import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { logo } from "@/assets/images";
import { NavItem } from ".";
import { Button, Dropdown, SearchBar } from "../ui";
import { getUserInfoFromLocalStorage } from "@/utils/localStorage";

interface NavbarProps {}

const items = [
  { label: "Contact +", href: "/contact" },
  { label: "About +", href: "/about" },
  { label: "Medicine +", href: "/medicine" },
];

const Navbar: FC<NavbarProps> = () => {
  const { push } = useRouter();

  const user = getUserInfoFromLocalStorage("accessToken");

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
        {user ? (
          <Dropdown />
        ) : (
          <Button
            variant="secondary"
            size="md"
            label="Sign In"
            onClick={() => push("/signin")}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
