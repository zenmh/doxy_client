import { ReactElement, ReactNode } from "react";
import { Footer, Navbar } from "../shared";
import useDarkMode from "@/hooks/theme";

const RootLayout = ({ children }: { children: ReactNode | ReactElement }) => {
  const [isDarkMode] = useDarkMode();

  return (
    <div
      className={`max-w-[1444px] mx-auto`}
      style={{ color: isDarkMode ? "var(--text-color)" : "var(--text-color)" }}
    >
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
