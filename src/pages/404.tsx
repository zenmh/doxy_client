import { useRouter } from "next/router";

const NotFound = () => {
  const { push } = useRouter();

  setTimeout(() => {
    push("/");
  }, 3000);

  return <div>Page not found</div>;
};

export default NotFound;
