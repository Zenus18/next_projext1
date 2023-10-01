"use client";
import Image from "next/image";
import Customform from "./customform";
import { loginMiddleware } from "../middleware/loginMiddleware";
function page() {
  return (
    <div className="flex justify-center relative h-full bg-blue-50">
      <div className="absolute bg-[#EFF3DD] h-[27rem] w-full md:hidden top-0">
        <Image
          src="login.svg"
          layout="fill"
          objectFit="contain"
          loading="lazy"
          alt="loading image"
        ></Image>
      </div>
      <div className="w-full border rounded-2xl  fixed bg-white md:mt-32 mt-64 p-4">
        <label className="text-2xl font-bold  ">Hello</label>
        <br />
        <label className="font-medium">please login to your account</label>
        <Customform />
      </div>
    </div>
  );
}
export default loginMiddleware(page);
