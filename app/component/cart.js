"use client";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";

export default function Cart({ data, setInvoice, baseURL }) {
  const baseImgUrl =
    "http://127.0.0.1:8000/storage/images/" + data.product.image;
  const [button_value, setButtonValue] = useState(data.qty);
  const [isLoading, setIsLoading] = useState(false);

  function discount_handler() {
    if (data.product.discount === 0) {
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

  const button_plus = () => {
    setButtonValue(button_value + 1);
  };

  const button_minus = () => {
    if (button_value > 0) {
      setButtonValue(button_value - 1);
    }
  };

  const dataPost = async () => {
    const qty_data = button_value + 1;
    const postData = {
      product_id: data.product.id,
      qty: qty_data,
    };

    try {
      const response = await axios.post(baseURL + "/carts/update", postData);
      console.log("Response data:", response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
    }

    // Update invoice data
    try {
      const invoiceResponse = await axios.get(
        baseURL + "/transactions/pending"
      );
      setInvoice(invoiceResponse.data.to_be_paid);
    } catch (error) {
      console.error(error);
    }
  };

  const dataDel = async () => {
    const qty_data = button_value - 1;
    const postData = {
      product_id: data.product.id,
      qty: qty_data,
    };

    if (qty_data > 0) {
      try {
        const response = await axios.post(baseURL + "/carts/update", postData);
        console.log("Response data:", response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    } else if (qty_data === 0) {
      try {
        const response = await axios.post(baseURL + "/carts/delete", postData);
        console.log("Response data:", response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    // Update invoice data
    try {
      const invoiceResponse = await axios.get(
        baseURL + "/transactions/pending"
      );
      setInvoice(invoiceResponse.data.to_be_paid);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex w-full h-[7rem] border-b-[1px] border-primary pb-2">
      <div className="w-[25%] p-1">
        <div className="w-full h-full rounded-lg  bg-white shadow-md">
          <Image
            src={baseImgUrl}
            className="h-[100%] w-[100%] object-contain"
            alt={data.product.name}
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="w-[50%] flex-col my-auto">
        <div className="text-md text-black font-semibold mx-2">
          {data.product.name}
        </div>
        <div className="text-lg text-primary font-bold mx-2">
          Rp {data.price}
        </div>
        <div className={discount_handler()}>
          disc{" "}
          {data.product.is_discount_percentage === 1
            ? `${data.discount} %`
            : `Rp ${data.discount}`}
        </div>
      </div>
      <div className="w-25% mt-auto mb-5 md:mx-auto md:my-auto">
        <div className="mx-2 mt-2 flex justify-between w-full">
          <button
            onClick={() => {
              button_minus();
              dataDel();
            }}
            className="p-1 border-secondary text-sm border-2 rounded-md hover:bg-accent text-secondary"
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
            onClick={() => {
              button_plus();
              dataPost();
            }}
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
