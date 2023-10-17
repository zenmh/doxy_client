import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={`bg-gray-800 ${
        isOpen ? "w-64" : "w-16"
      } h-screen fixed left-0 top-0 transition-all ease-in-out duration-300 z-10`}
    >
      <button className="p-4" onClick={toggleSidebar}>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
      <nav className="flex flex-col items-center p-4 space-y-4">
        <a href="#" className="text-white hover:text-blue-400">
          Link 1
        </a>
        <a href="#" className="text-white hover:text-blue-400">
          Link 2
        </a>
        <a href="#" className="text-white hover:text-blue-400">
          Link 3
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
