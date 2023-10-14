import { ReactNode } from "react";
import { RootLayout } from "@/components/layouts";
import { Carousel } from "@/components/ui";

const Home = () => {
  return (
    <div>
      THIS IS HOME
      <Carousel />
    </div>
  );
};

export default Home;

Home.getLayout = (page: ReactNode) => <RootLayout>{page}</RootLayout>;
