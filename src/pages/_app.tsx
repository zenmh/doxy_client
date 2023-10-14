import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  const getLayout = (Component as any).getLayout || ((page: any) => page);

  return getLayout(<Component {...pageProps} />);
};

export default App;
