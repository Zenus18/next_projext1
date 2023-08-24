"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Customform() {
  const  route = useRouter()
  const [TypePassword, setTypePassword] = useState(true);
  const [IconPassword, SetIconPassword] = useState(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );

  function handlepassword() {
    if (TypePassword) {
      SetIconPassword(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      );
    } else {
      SetIconPassword(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
          />
        </svg>
      );
    }
    setTypePassword(!TypePassword);
  }

  return (
    <div className="form-control w-full md:mt-32 mt-16">
      <label className="label">
        <span className="label-text">Email or Username</span>
      </label>
      <input
        type="text"
        placeholder="Username"
        className="input input-bordered w-full input-warning bg-white"
      />
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <div className="join">
        <input
          className="input input-bordered join-item w-full input-warning bg-white"
          type={TypePassword ? "password" : "text"}
          placeholder="Password"
        />
        <button className="btn join-item btn-warning" onClick={handlepassword}>
          {IconPassword}
        </button>
      </div>
      <label className="font-medium self-end my-3">
        <a>Forgot password?</a>
      </label>
      <div className="mt-5 w-3/4 self-center">
        <button className="btn bg-[#FF9738] text-lime-50 hover:bg-black w-full rounded-full" onClick={() => {
            route.push('/')
        }}>
          Sign In
        </button>
      </div>
      <label className="font-medium self-center mt-5 mb-2">OR</label>
      <div className=" flex mt-3">
        <button className="btn bg-blue-600 text-blue-500 w-24 mx-auto font-bold rounded-3xl">
          <svg
            width="14"
            height="25"
            viewBox="0 0 14 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5122 14.0625L13.2065 9.53809H8.86523V6.60205C8.86523 5.36426 9.47168 4.15771 11.416 4.15771H13.3896V0.305664C13.3896 0.305664 11.5986 0 9.88623 0C6.31104 0 3.97412 2.16699 3.97412 6.08984V9.53809H0V14.0625H3.97412V25H8.86523V14.0625H12.5122Z"
              fill="white"
            />
          </svg>
        </button>
        <button className="btn bg-red-500 text-blue-500 w-24 mx-auto font-bold rounded-3xl">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.8281 12.3926C23.8281 19.3018 19.0967 24.2188 12.1094 24.2188C5.41016 24.2188 0 18.8086 0 12.1094C0 5.41016 5.41016 0 12.1094 0C15.3711 0 18.1152 1.19629 20.2295 3.16895L16.9336 6.33789C12.6221 2.17773 4.60449 5.30273 4.60449 12.1094C4.60449 16.333 7.97852 19.7559 12.1094 19.7559C16.9043 19.7559 18.7012 16.3184 18.9844 14.5361H12.1094V10.3711H23.6377C23.75 10.9912 23.8281 11.5869 23.8281 12.3926Z"
              fill="white"
            />
          </svg>
        </button>
        <button className="btn bg-[#0177B5] text-blue-500 w-24 mx-auto font-bold rounded-3xl">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.89648 21.8745H0.361328V7.27002H4.89648V21.8745ZM2.62646 5.27783C1.17627 5.27783 0 4.07666 0 2.62646C1.03799e-08 1.92988 0.276716 1.26183 0.769274 0.769274C1.26183 0.276716 1.92988 0 2.62646 0C3.32305 0 3.9911 0.276716 4.48366 0.769274C4.97621 1.26183 5.25293 1.92988 5.25293 2.62646C5.25293 4.07666 4.07617 5.27783 2.62646 5.27783ZM21.8701 21.8745H17.3447V14.7651C17.3447 13.0708 17.3105 10.8979 14.9868 10.8979C12.6289 10.8979 12.2676 12.7388 12.2676 14.6431V21.8745H7.73731V7.27002H12.0869V9.26221H12.1504C12.7559 8.11475 14.2349 6.90381 16.4414 6.90381C21.0312 6.90381 21.875 9.92627 21.875 13.8521V21.8745H21.8701Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <label className="font-medium self-center py-5">
        Don't have an account? <a className="text-orange-300">Register</a>
      </label>
    </div>
  );
}
