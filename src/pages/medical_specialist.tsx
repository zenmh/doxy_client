import { DoctorCard } from "@/components/doctor";
import { RootLayout } from "@/components/layouts";
import { ReactNode } from "react";

const MedicalSpecialist = () => {
  return (
    <div className="ml-2">
      <h2 className="text-2xl font-bold text-left text-neutral-400">
        Medical Specialist
      </h2>
      <DoctorCard
        name="Dr. Beautiful Girl"
        speciality="EYE"
        practicing_branch="Doxy Center"
        branch="DHAKA"
        // profileImage="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
      />
    </div>
  );
};

export default MedicalSpecialist;

MedicalSpecialist.getLayout = (page: ReactNode) => (
  <RootLayout>{page}</RootLayout>
);
