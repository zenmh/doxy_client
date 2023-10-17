import { useEffect, useRef, useState } from "react";
import { Button } from ".";
import Image from "next/image";
import { avater } from "@/assets/images";
import { removeUserFromLocalStorage } from "@/utils/localStorage";
import { useRouter } from "next/router";

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { push } = useRouter();

  const handleClickOutside = (event: { target: any }) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleLogout = () => {
    removeUserFromLocalStorage("accessToken");
    push("/");
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-40" ref={dropdownRef}>
      <div
        className="rounded-lg cursor-pointer flex flex-row justify-end"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src={avater} alt="avater" height={40} width={40} />
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-2 py-2 w-full bg-gray-800 text-white rounded-lg shadow-lg flex flex-col p-1">
          <Button
            onClick={handleLogout}
            label="Logout"
            size="md"
            variant="danger"
            type="button"
          />
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
