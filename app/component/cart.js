"use client"
import Image from 'next/image'
import React from 'react'
import { useState } from 'react';

export default function Cart({image, title, price, discount}) {
  const [button_value, setbutton_value] = useState(0);
    function discount_handler() {
      if (discount == 0) {
        return "invisible";
      } else {
        return "text-sm mx-2";
      }
    }
   function button_state() {
     if (button_value > 0) {
       return "bg-secondary text-white p-1 border-secondary text-sm border-2 rounded-md";
     } else {
       return "text-secondary p-1 border-secondary text-sm border-2 rounded-md hover:bg-accent hover:text-secondary";
     }
   }
  return (
    <div className="flex w-full h-[7rem] border-b-[1px] border-primary pb-2">
      <div className="w-[25%] p-1">
        <div className="w-full h-full rounded-lg  bg-white shadow-md">
          <Image
            src={
              "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            }
            className="h-[100%] w-[100%] object-contain "
            alt='ini gambar'
            width={100}
            height={100}
          ></Image>
        </div>
      </div>
      <div className="w-[50%] flex-col my-auto">
        <div className="text-md text-black font-semibold mx-2 ">{title}</div>
        <div className="text-lg text-primary font-bold mx-2 ">Rp {price}</div>
        <div className={discount_handler()}>disc {discount} %</div>
      </div>
      <div className="w-25% mt-auto mb-5 md:mx-auto md:my-auto">
        <div className="mx-2 mt-2 flex justify-between w-full">
          <button
            onClick={() => {
              if (button_value > 0) {
                setbutton_value(button_value - 1);
              }
            }}
            className="p-1 border-secondary text-sm border-2 rounded-md hover:bg-accent text-secondary "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </button>
          <label className="text-black font-bold text-md bg-transparent">
            {button_value}
          </label>
          <button
            onClick={() => setbutton_value(button_value + 1)}
            className={button_state()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
