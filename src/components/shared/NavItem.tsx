import Link from "next/link";
import { FC } from "react";

interface NavItemProps {
  label: string;
  href: string;
}

const NavItem: FC<NavItemProps> = ({ label, href }) => {
  return (
    <Link
      className="font-semibold text-teal-400 hover:text-teal-500 px-2 py-2 rounded-md cursor-pointer text-sm transition duration-200"
      href={href}
    >
      {label}
    </Link>
  );
};

export default NavItem;
