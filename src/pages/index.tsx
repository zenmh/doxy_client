import { ReactNode } from "react";
import { RootLayout } from "@/components/layouts";
import { AboutUs, Services, Testimonials } from "@/components/home";
import {
  abmulance_service_icon,
  health_assurance_icon,
  health_consultaion_icon,
  medical_checkup_icon,
  medical_specialist_icon,
  pharmacy_service_icon,
} from "@/assets/icons/services";

const services = [
  {
    image: medical_specialist_icon,
    title: "Medical Specialist",
    desc: "...",
    path: "/medical_specialist",
  },
  {
    image: pharmacy_service_icon,
    title: "Pharmacy Service",
    desc: "...",
    path: "/pharmacy_service",
  },
  {
    image: health_consultaion_icon,
    title: "Health Consultation",
    desc: "...",
    path: "/health_consultation",
  },
  {
    image: medical_checkup_icon,
    title: "Medical Checkup",
    desc: "...",
    path: "/medical_specialist",
  },
  {
    image: abmulance_service_icon,
    title: "Ambulance Service",
    desc: "...",
    path: "/ambulance_service",
  },
  {
    image: health_assurance_icon,
    title: "Health Assurance",
    desc: "...",
    path: "/health_assurance",
  },
];

const Home = () => {
  return (
    <div>
      <Services services={services} />
      <Testimonials />
      <AboutUs />
    </div>
  );
};

export default Home;

Home.getLayout = (page: ReactNode) => <RootLayout>{page}</RootLayout>;
