import { doctor_avatar } from "@/assets/images";
import { RootLayout } from "@/components/layouts";
import { Button, Spinner } from "@/components/ui";
import { useGetDoctorQuery } from "@/redux/api/doctorApi";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const DoctorDetails = () => {
  const { push, query } = useRouter();
  const { data: doctor, isLoading: doctorIsLoading } = useGetDoctorQuery(
    query?.id
  );

  if (doctorIsLoading) return <Spinner />;

  return (
    <div className="flex flex-row justify-between mt-6 p-4">
      <div className="w-full">
        <Image
          src={
            doctor.data.profileImage
              ? doctor?.data?.profileImage
              : doctor_avatar
          }
          alt="doctor"
          width={400}
          height={400}
          layout="responseive"
        />
      </div>
      <div className="w-full text-gray-300">
        <div>
          <h2 className="text-3xl font-semibold text-teal-500">
            {doctor?.data?.name}
          </h2>
          <strong className="text-neutral-400">
            {doctor?.data?.experiences}
          </strong>
        </div>
        <div className="flex flex-col gap-1 my-4">
          <p>
            <span className="font-semibold">Speciality:</span>&nbsp;
            {doctor?.data?.speciality.slice(0, 1)}
            <span className="lowercase">
              {doctor?.data?.speciality.slice(1)}
            </span>
          </p>
          {doctor.data.contactNo && (
            <p>
              <span className="font-semibold">Contact No:</span>&nbsp; +88
              {doctor?.data?.contactNo}
            </p>
          )}
          <p>
            <span className="font-semibold">Branch:</span>&nbsp;
            {doctor?.data?.branch.slice(0, 1)}
            <span className="lowercase">{doctor?.data?.branch.slice(1)}</span>
          </p>
          <p>
            <span className="font-semibold">Practcing Branch:</span>&nbsp;
            {doctor?.data?.practicing_branch}
          </p>
        </div>
        <Button
          label="Take Appointment"
          size="md"
          variant="primary"
          disabled={doctorIsLoading}
          onClick={() => push("/")}
        />
      </div>
    </div>
  );
};

export default DoctorDetails;

DoctorDetails.getLayout = (page: ReactNode) => <RootLayout>{page}</RootLayout>;
