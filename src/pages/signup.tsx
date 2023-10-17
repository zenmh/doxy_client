import { sign_up_image } from "@/assets/images";
import { AuthLayout } from "@/components/layouts";
import { Button, IconButton, Input, Textarea } from "@/components/ui";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible, AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useSignUpMutation } from "@/redux/api/authApi";
import { useRouter } from "next/router";
import { storeUserInfoInLocalStorage } from "@/utils/localStorage";

type SignUpDate = {
  name: string;
  email: string;
  password: string;
  role?: string;
  contactNo?: string;
  address?: string;
  profileImage?: string;
};

const SignUp = () => {
  const [passType, setPassType] = useState<"password" | "text">("password");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<SignUpDate>();

  const { push } = useRouter();

  const [signUp, { isLoading: signUpIsLoading }] = useSignUpMutation();

  const onClick = () => {
    if (passType === "password") setPassType("text");
    else setPassType("password");
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);

      const res = await signUp(data).unwrap();

      storeUserInfoInLocalStorage("accessToken", res?.data?.accessToken);
    } catch (err) {
      console.log("Error From User Sign Up -->", err);
    } finally {
      reset();
      setIsLoading(false);
      push("/");
    }
  });

  return (
    <section className="flex flex-row items-center justify-center min-h-screen">
      <div className="grid grid-cols-2 ">
        <div className="">
          <Image
            src={sign_up_image}
            alt="sign_up_image"
            width={600}
            height={600}
            layout="responsive"
            className="rounded-md"
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="border-2 border-dashed border-neutral-600 p-4 rounded-md w-full">
            <h2 className="text-2xl font-semibold text-teal-500 text-center mb-6">
              Sign Up To Get Connected
            </h2>
            <form onSubmit={onSubmit} className="flex flex-col gap-6 w-full">
              <Input
                name="name"
                type="text"
                placeholder="Ex. John Doe"
                register={register}
                errors={errors}
                errorMessage="name is required"
              />
              <Input
                name="email"
                type="email"
                placeholder="Ex. john@doe.com"
                register={register}
                errors={errors}
                errorMessage="email is required"
              />
              <Input
                name="contactNo"
                type="text"
                placeholder="Ex. 01x xxxx xxxx"
                register={register}
                errors={errors}
                errorMessage="contactNo is required"
              />
              <div className="relative">
                <Input
                  name="password"
                  type={passType}
                  placeholder="Set Strong Password"
                  register={register}
                  errors={errors}
                  errorMessage="password is required"
                />
                <button
                  type="button"
                  onClick={onClick}
                  className="absolute top-0 right-0 transform z-10 cursor-default text-gray-500 hover:text-gray-600 py-2 px-3 text-xl"
                >
                  {passType === "password" ? (
                    <AiFillEye />
                  ) : (
                    <AiFillEyeInvisible />
                  )}
                </button>
              </div>
              <Textarea control={control} name="address" />
              <Button
                isLoading={isLoading || signUpIsLoading}
                type="submit"
                label="Sign Up"
                size="md"
                variant="primary"
              />
            </form>
            <p className="text-right text-sky-500 font-medium transition duration-200 hover:text-sky-400 mt-1">
              Already have an account!&nbsp;
              <Link href="/signin" className="hover:underline">
                Sign In
              </Link>
            </p>
            <hr className="h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50 my-5" />
            <div className="flex flex-row gap-4">
              <IconButton onClick={() => {}} label="Google">
                <FcGoogle />
              </IconButton>
              <IconButton onClick={() => {}} label="GigHub">
                <AiFillGithub />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

SignUp.getLayout = (page: ReactNode) => <AuthLayout>{page}</AuthLayout>;
