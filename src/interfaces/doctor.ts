type IBranch = {
  slice: any;
  branch:
    | "BARISHAL"
    | "CHATTOGRAM"
    | "DHAKA"
    | "KHULNA"
    | "RAJSHAHI"
    | "RANGPUR"
    | "MYMENSINGH"
    | "SYLHET";
};

type ISpeciality = {
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
};

type IDoctor = {
  address?: string;
  branch: IBranch;
  contactNo?: string;
  createdAt: string;
  email: string;
  experiences: string;
  id: string;
  name: string;
  practicing_branch: string;
  profileImage?: string;
  role: string;
  speciality: ISpeciality;
  treatmentId: string;
  updatedAt: string;
};

export type { IBranch, ISpeciality, IDoctor };
