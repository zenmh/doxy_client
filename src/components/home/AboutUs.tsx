import Image from "next/image";
import { doctor_animated } from "@/assets/images";

const AboutUs = () => {
  return (
    <section className="my-10">
      <h2 className="text-3xl font-bold text-gray-400 text-center">
        Why Choose Us
      </h2>
      <h5 className="text-center">
        We have introduced the principle of family medicine, which means that
        the family practitioner will handle <br /> the majority of medical
        requests, with a specialists involved only if necessary.
      </h5>
      <div className="flex flex-row justify-center items-center mt-6">
        <div className="text-right flex flex-col justify-center gap-60">
          <div>
            <h4 className="text-cyan-400 font-bold">OPTIMAL PRICE</h4>
            <p className="text-slate-300">
              In order to obtain operational and <br /> accurate results, our
              Clinic s with <br /> which entered into contractual
            </p>
          </div>
          <div>
            <h4 className="text-cyan-400 font-bold">QUALIFIED STUFF</h4>
            <p className="text-slate-300">
              We are not just a regular clinic,
              <br /> but a medical service provider, <br /> with which you can
              share any
            </p>
          </div>
        </div>
        <Image src={doctor_animated} alt="doctor" height={700} width={700} />
        <div className="text-left flex flex-col justify-center gap-60">
          <div>
            <h4 className="text-cyan-400 font-bold">MODERN EQUIPMENT</h4>
            <p className="text-slate-300">
              We are not just a regular clinic, <br /> but a medical service
              provider, <br /> with modern cutting edge technology
            </p>
          </div>
          <div>
            <h4 className="text-cyan-400 font-bold">PROFESSIONAL DOCTORS</h4>
            <p className="text-slate-300">
              In order to obtain operational and <br /> accurate results, our
              Clinic s with <br />
              which entered into contractual
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
