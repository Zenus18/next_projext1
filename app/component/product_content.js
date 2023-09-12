"use client";
import Image from "next/image";
import React, { useState } from "react";
export default function Product_content({discount, title, price, index, is_discount_percent}) {
  const [button_value, setbutton_value] = useState(0)
    function discount_handler(){
      if (discount == 0){
        return "invisible"
      }else{
        return "text-xs text-primary mt-auto self-end"
      }
    }
    function validate_discount () {
      if(is_discount_percent == 1){
        return "` ${discount} %`";
      }else{
        return "` Rp ${discount}`";
      }
    }
    function button_state(){
        if(button_value > 0){
            return "bg-secondary text-white p-1 border-secondary text-sm border-2 rounded-lg";
        }else{
            return "text-secondary p-1 border-secondary text-sm border-2 rounded-lg hover:bg-accent hover:text-secondary";
        }
    }
  return (
    <div>
      <div className="flex flex-col my-2">
        <div className="card w-full bg-white shadow-xl p-3 h-[10rem] md:h-[18rem] rounded-md">
          <figure className="w-full h-full my-auto">
            <Image
              src={
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              }
              width={100}
              height={100}
              className="object-cover"
            />
          </figure>
          <p className={discount_handler()}>disc {is_discount_percent === 1 ? discount + " %" : "Rp " + discount}</p>
        </div>
        <label className="text-black text-sm mx-2 mt-2">{title}</label>
        <label className="text-primary text-sm font-bold mx-2 mt-1">
          Rp {price}
        </label>
        <div className="mx-2 mt-2 flex justify-between w-3/4">
          <button
            onClick={() => {
              if(button_value > 0){
                setbutton_value(button_value-1)
              }
            }}
            className="p-1 border-secondary text-sm border-2 rounded-lg hover:bg-accent text-secondary "
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
