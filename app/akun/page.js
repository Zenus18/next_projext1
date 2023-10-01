"use client";
import React from "react";
import Image from "next/image";
import handleLogout from "../controller/logoutController";
import { authMiddleware } from "../middleware/authMiddleware";
function Page() {
  return (
    <div className="h-screen w-full ">
      <div className="flex flex-col mx-5 mt-14 gap-5">
        <div className="relative pt-20 w-full">
          <div className="absolute z-10 top-0 inset-x-0 grid justify-items-center">
            <Image
              src={
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              }
              alt="avatar"
              width={100}
              height={100}
              className="object-cover w-[6rem] h-[6rem] rounded-full border-4 border-primary"
            />
          </div>
          <div className="w-full bg-white rounded-md border-gray-400 border-[1px] shadow-sm relative">
            <div className="flex flex-col mx-3 my-3 gap-1">
              <label className="text-sm text-black ">Nama</label>
              <label className="text-md text-black font-bold">John Doe</label>
              <label className="text-sm text-black ">Jabatan</label>
              <label className="text-md text-black font-bold">kasir</label>
            </div>
            <button className="text-white bg-secondary rounded-md absolute top-0 right-0 me-1 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 m-[2px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="bg-white rounded-md border-[1px] border-gray-400 ">
          <div className="flex justify-between m-3 text-black">
            <div className="flex gap-2 align-middle">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.1}
                stroke="currentColor"
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.55 15.2H10.45V13.3H8.55V15.2ZM9.5 0C4.256 0 0 4.256 0 9.5C0 14.744 4.256 19 9.5 19C14.744 19 19 14.744 19 9.5C19 4.256 14.744 0 9.5 0ZM9.5 17.1C5.3105 17.1 1.9 13.6895 1.9 9.5C1.9 5.3105 5.3105 1.9 9.5 1.9C13.6895 1.9 17.1 5.3105 17.1 9.5C17.1 13.6895 13.6895 17.1 9.5 17.1ZM9.5 3.8C7.4005 3.8 5.7 5.5005 5.7 7.6H7.6C7.6 6.555 8.455 5.7 9.5 5.7C10.545 5.7 11.4 6.555 11.4 7.6C11.4 9.5 8.55 9.2625 8.55 12.35H10.45C10.45 10.2125 13.3 9.975 13.3 7.6C13.3 5.5005 11.5995 3.8 9.5 3.8Z"
                  fill="#746D6D"
                />
              </svg>

              <label>Help</label>
            </div>
            <div>
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
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md border-[1px] border-gray-400 ">
          <div className="flex justify-between m-3 text-black">
            <div className="flex gap-2 align-middle">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.1}
                stroke="currentColor"
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.36 12.5C14.44 11.84 14.5 11.18 14.5 10.5C14.5 9.82 14.44 9.16 14.36 8.5H17.74C17.9 9.14 18 9.81 18 10.5C18 11.19 17.9 11.86 17.74 12.5M12.59 18.06C13.19 16.95 13.65 15.75 13.97 14.5H16.92C15.96 16.15 14.43 17.43 12.59 18.06ZM12.34 12.5H7.66C7.56 11.84 7.5 11.18 7.5 10.5C7.5 9.82 7.56 9.15 7.66 8.5H12.34C12.43 9.15 12.5 9.82 12.5 10.5C12.5 11.18 12.43 11.84 12.34 12.5ZM10 18.46C9.17 17.26 8.5 15.93 8.09 14.5H11.91C11.5 15.93 10.83 17.26 10 18.46ZM6 6.5H3.08C4.03 4.84 5.57 3.56 7.4 2.94C6.8 4.05 6.35 5.25 6 6.5ZM3.08 14.5H6C6.35 15.75 6.8 16.95 7.4 18.06C5.57 17.43 4.03 16.15 3.08 14.5ZM2.26 12.5C2.1 11.86 2 11.19 2 10.5C2 9.81 2.1 9.14 2.26 8.5H5.64C5.56 9.16 5.5 9.82 5.5 10.5C5.5 11.18 5.56 11.84 5.64 12.5M10 2.53C10.83 3.73 11.5 5.07 11.91 6.5H8.09C8.5 5.07 9.17 3.73 10 2.53ZM16.92 6.5H13.97C13.65 5.25 13.19 4.05 12.59 2.94C14.43 3.57 15.96 4.84 16.92 6.5ZM10 0.5C4.47 0.5 0 5 0 10.5C0 13.1522 1.05357 15.6957 2.92893 17.5711C3.85752 18.4997 4.95991 19.2362 6.17317 19.7388C7.38642 20.2413 8.68678 20.5 10 20.5C12.6522 20.5 15.1957 19.4464 17.0711 17.5711C18.9464 15.6957 20 13.1522 20 10.5C20 9.18678 19.7413 7.88642 19.2388 6.67317C18.7362 5.45991 17.9997 4.35752 17.0711 3.42893C16.1425 2.50035 15.0401 1.76375 13.8268 1.2612C12.6136 0.758658 11.3132 0.5 10 0.5Z"
                  fill="#746D6D"
                />
              </svg>
              <label>Ganti Bahasa</label>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-md border-[1px] border-gray-400 ">
          <div className="flex justify-between m-3 text-black">
            <div className="flex gap-2 align-middle">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.1}
                stroke="currentColor"
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 15V9.8C15.5 9.9 15 10 14.5 10H14V16H4V9C4 6.2 6.2 4 9 4C9.1 2.7 9.7 1.6 10.5 0.7C10.2 0.3 9.6 0 9 0C7.9 0 7 0.9 7 2V2.3C4 3.2 2 5.9 2 9V15L0 17V18H18V17L16 15ZM7 19C7 20.1 7.9 21 9 21C10.1 21 11 20.1 11 19H7ZM18 4.5C18 6.4 16.4 8 14.5 8C12.6 8 11 6.4 11 4.5C11 2.6 12.6 1 14.5 1C16.4 1 18 2.6 18 4.5Z"
                  fill="#746D6D"
                />
              </svg>
              <label>Notifikasi</label>
            </div>
            <div>
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
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-md border-[1px] border-gray-400 ">
          <div className="flex justify-between m-3 text-black">
            <div className="flex gap-2 align-middle">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.1}
                stroke="currentColor"
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2.71C11.24 3.22 12.65 3.5 14 3.5C15.05 3.5 16.1 3.34 17.08 3.04C16.5 4 16 5.21 16 6.5C16 7.82 16.54 9.43 17.1 11.13C17.5 12.33 18 13.83 18 14.5C18 15.53 14.47 17.5 10 18.46C5.54 17.5 2 15.53 2 14.5C2 13.83 2.5 12.33 2.9 11.13C3.46 9.43 4 7.82 4 6.5C4 5.21 3.5 4 2.92 3.04C3.9 3.34 4.96 3.5 6 3.5C7.35 3.5 8.76 3.22 10 2.71ZM18 0.5C16.85 1.14 15.4 1.5 14 1.5C12.6 1.5 11.14 1.13 10 0.5C8.86 1.13 7.4 1.5 6 1.5C4.6 1.5 3.15 1.14 2 0.5L0 2.5C0 2.5 2 4.5 2 6.5C2 8.5 0 12.5 0 14.5C0 18.5 10 20.5 10 20.5C10 20.5 20 18.5 20 14.5C20 12.5 18 8.5 18 6.5C18 4.5 20 2.5 20 2.5L18 0.5ZM13.05 14.95L9.97 13.09L6.9 14.95L7.72 11.45L5 9.11L8.58 8.8L9.97 5.5L11.37 8.79L14.95 9.1L12.23 11.44L13.05 14.95Z"
                  fill="#746D6D"
                />
              </svg>

              <label>Kebijakan Privasi</label>
            </div>
            <div>
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
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>

        <button
          className="btn bg-[#FF2F2F] text-white capitalize mt-12"
          onClick={() => handleLogout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
export default authMiddleware(Page);
