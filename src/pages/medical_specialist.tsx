import { DoctorCard } from "@/components/doctor";
import { RootLayout } from "@/components/layouts";
import { Spinner } from "@/components/ui";
import type { IDoctor } from "@/interfaces/doctor";
import { useGetDoctorsQuery } from "@/redux/api/doctorApi";
import { ReactNode } from "react";

const MedicalSpecialist = () => {
  const { data: doctors, isLoading: getDoctorsIsLoading } =
    useGetDoctorsQuery(undefined);

  if (getDoctorsIsLoading) return <Spinner />;

  return (
    <div className="ml-2">
      {doctors?.data && doctors?.data.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold text-left text-neutral-400">
            Medical Specialist
          </h2>
          <div className="flex flex-row flex-wrap gap-6">
            {doctors.data.map((doctor: IDoctor) => (
              <DoctorCard
                key={doctor?.id}
                id={doctor?.id}
                name={doctor?.name}
                speciality={doctor?.speciality}
                practicing_branch={doctor?.practicing_branch}
                profileImage={doctor?.profileImage}
                branch={doctor?.branch}
              />
            ))}
          </div>
        </>
      ) : (
        <h2 className="text-3xl text-center text-neutral-400 font-semibold mt-6">
          No Doctor&apos;s Abaileable Now
        </h2>
      )}
    </div>
  );
};

export default MedicalSpecialist;

MedicalSpecialist.getLayout = (page: ReactNode) => (
  <RootLayout>{page}</RootLayout>
);
