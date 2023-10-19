import { FC } from "react";
import { ServiceCard } from ".";
import { StaticImageData } from "next/image";

interface IService {
  image: StaticImageData;
  title: string;
  desc: string;
  path: string;
}

interface ServicesProps {
  services: IService[];
}

const Services: FC<ServicesProps> = ({ services }) => {
  return (
    <section className="mb-10">
      <h2 className="text-3xl font-semibold text-center text-neutral-400 mb-4">
        Our Services
      </h2>
      <div className="flex flex-row justify-center flex-wrap gap-8">
        {services &&
          services.map(({ image, title, desc, path }, i) => (
            <ServiceCard
              key={i}
              image={image}
              title={title}
              desc={desc}
              path={path}
            />
          ))}
      </div>
    </section>
  );
};

export default Services;
