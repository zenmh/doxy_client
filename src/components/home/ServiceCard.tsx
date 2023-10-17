import { logo } from "@/assets/images";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";

interface ServiceCardProps {
  image: StaticImageData;
  title: string;
  desc: string;
  path: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ image, title, desc, path }) => {
  const { push } = useRouter();

  return (
    <div
      onClick={() => push(path)}
      className="border-2 border-neutral-600 hover:border-teal-500 h-[200px] w-[340px] rounded-lg p-2 transition duration-200 hover:scale-105 cursor-pointer flex flex-col items-center"
    >
      <Image src={image} alt="logo" width={100} height={100} />
      <h3 className="text-xl font-semibold text-teal-500 mt-2">{title}</h3>
      <p className="text-gray-800 dark:text-gray-400 truncate">{desc}</p>
    </div>
  );
};

export default ServiceCard;
