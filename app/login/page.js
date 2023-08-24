import Image from "next/image";
import Customform from "./customform";

export default function page() {
  return (
    <div className="flex justify-center relative h-full">
      <div className="absolute bg-[#EFF3DD] -z-10 h-[27rem] w-full md:hidden">
        <Image src="login.svg" layout="fill" objectFit="contain"></Image>
      </div>
      <div className="w-full border rounded-2xl bg-white md:mt-32 mt-64 p-4 bg-opacity-90">
        <label className="text-2xl font-bold  ">Hello</label>
        <br />
        <label className="font-medium">please login to your account</label>
        <Customform />
      </div>
    </div>
  );
}
