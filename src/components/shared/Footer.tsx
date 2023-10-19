import { ReactNode, ReactElement, FC } from "react";
import Link from "next/link";
import {
  BsGithub,
  BsFacebook,
  BsLinkedin,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="relative bg-blueGray-200 pt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-cyan-500 font-bold">
              Let&apos;s keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-teal-600-600">
              Find us on any time. We are open for every you for 24 / 7.
            </h5>
            <div className="flex flex-row justify-start gap-6 items-center">
              <Link href="/">
                <BsGithub className="text-3xl rounded-full hover:bg-teal-300 cursor-pointer" />
              </Link>
              <Link href="/">
                <BsFacebook className="text-3xl rounded-full hover:bg-teal-300 cursor-pointer" />
              </Link>
              <Link href="/">
                <BsLinkedin className="text-3xl rounded-full hover:bg-teal-300 cursor-pointer" />
              </Link>
              <Link href="/">
                <BsPinterest className="text-3xl rounded-full hover:bg-teal-300 cursor-pointer" />
              </Link>
              <Link href="/">
                <BsTwitter className="text-3xl rounded-full hover:bg-teal-300 cursor-pointer" />
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <div className="text-teal-300 font-bold hover:text-teal-400 transition duration-300 flex flex-col gap-1">
                  <Link href="/medical_specialist">Doctors</Link>
                  <Link href="/about">About</Link>
                  <Link href="/contact">Contact</Link>
                  <Link href="/blog">Blog</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2023 </span>
              <Link href="/" className="text-gray-500 hover:text-gray-800">
                Doxy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
