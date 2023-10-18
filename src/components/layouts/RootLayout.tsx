import { ReactElement, ReactNode } from "react";
import { Footer, Navbar } from "../shared";

const RootLayout = ({ children }: { children: ReactNode | ReactElement }) => {
  return (
    <div className="max-w-[1444px] mx-auto">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
