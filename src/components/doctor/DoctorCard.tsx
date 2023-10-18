import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { doctor_avatar } from "@/assets/images";

interface DoctorCardProps {
  name: string;
  speciality:
    | "THYROID"
    | "EYE"
    | "NEUROLOGY"
    | "CARDIOLOGY"
    | "MEDICINE"
    | "PSYCHIATRY"
    | "DENTIST"
    | "ORTHOPEDICS"
    | "HAEMATOLOGY"
    | "GYNAECOLOGY";
  practicing_branch: string;
  branch:
    | "BARISHAL"
    | "CHATTOGRAM"
    | "DHAKA"
    | "KHULNA"
    | "RAJSHAHI"
    | "RANGPUR"
    | "MYMENSINGH"
    | "SYLHET";
  profileImage?: string;
}

const DoctorCard: FC<DoctorCardProps> = ({
  name,
  speciality,
  practicing_branch,
  branch,
  profileImage,
}) => {
  const { push } = useRouter();
  return (
    <div
      onClick={() => push("/")}
      className="border-2 border-neutral-700 hover:border-teal-700 h-[300px] w-[260px] rounded-lg text-neutral-300 cursor-pointer transition duration-300"
    >
      <figure className="flex flex-row justify-center">
        <Image
          src={profileImage ? profileImage : doctor_avatar}
          alt="doctor"
          width={profileImage ? 260 : 182}
          height={profileImage ? 260 : 182}
          className="rounded-t-lg"
        />
      </figure>
      <div className="m-2">
        <h4 className="text-lg font-semibold truncate capitalize">{name}</h4>
        <p>
          {speciality.slice(0, 1)}
          <span className="lowercase">{speciality.slice(1)}</span>
        </p>
        <p className="truncate">{practicing_branch}</p>
        <p>
          Branch: {branch.slice(0, 1)}
          <span className="lowercase">{branch.slice(1)}</span>
        </p>
      </div>
    </div>
  );
};

export default DoctorCard;
