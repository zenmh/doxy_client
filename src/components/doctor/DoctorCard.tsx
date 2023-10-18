import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { doctor_avatar } from "@/assets/images";
import type { IBranch, ISpeciality } from "@/interfaces/doctor";

interface DoctorCardProps {
  id: string;
  name: string;
  speciality: ISpeciality;
  practicing_branch: string;
  branch: IBranch;
  profileImage?: string;
}

const DoctorCard: FC<DoctorCardProps> = ({
  id,
  name,
  speciality,
  practicing_branch,
  branch,
  profileImage,
}) => {
  const { push } = useRouter();
  return (
    <div
      onClick={() => push(`/doctors/${id}`)}
      className="border-2 border-neutral-700 hover:border-teal-700 h-[300px] w-[260px] rounded-lg text-gray-300 cursor-pointer transition duration-300"
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
          {
            // @ts-ignore
            speciality.slice(0, 1)
          }
          <span className="lowercase">
            {
              //@ts-ignore
              speciality.slice(1)
            }
          </span>
        </p>
        <p className="truncate">{practicing_branch}</p>
        <p className="font-semibold">
          Branch: {branch.slice(0, 1)}
          <span className="lowercase">{branch.slice(1)}</span>
        </p>
      </div>
    </div>
  );
};

export default DoctorCard;
