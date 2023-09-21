import React from "react";
import { useState } from "react";
import axios from "axios";
export default function Invoice() {
  const [inputValue, setInputValue] = useState("");
  const url = "";
  const [IsLoading, setIsLoading] = useState(true);
  const [data, setdata] = useState({
    cashier_id: "1",
    customer: "",
    paid: "",
  });
  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  const SubmitHandler = () => {
    axios
      .post("http://127.0.0.1:8000/transactions/checkout", data)
      .then((response) => {
        console.log("Response data:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const ChangeHandler = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setdata(newdata);
  };
  function handleInputChange(event) {
    const rawValue = event.target.value;
    const formattedValue = formatNumberWithCommas(rawValue.replace(/\./g, "")); // Hapus titik yang sudah ada
    setInputValue(formattedValue);
  }
  return (
    <div className="w-full bg-white border border-[#E5E4E4] rounded-xl">
      <div className="mt-4 mx-8 flex-col ">
        <label className="text-xl font-bold border-b-[1px] border-black text-black">
          Order: #0XXX
        </label>
        <div className="flex flex-col mt-5">
          <div className="flex justify-between font-medium">
            <label className="text-sm text-black ">Sub total</label>
            <label className="text-sm text-black font-bold"> Rp 720.000</label>
          </div>
          <div className="flex justify-between font-medium">
            <label className="text-sm text-black">Discount:</label>
            <label className="text-sm text-black font-bold"> 20%</label>
          </div>
          <div className="w-full border-dotted border border-black mt-2"></div>
          <div className="flex justify-between font-medium mt-4">
            <label className="text-sm text-black">Total:</label>
            <label className="text-md text-primary font-bold mt-1">
              Rp 120.000
            </label>
          </div>
          <input
            type="text"
            placeholder="Masukkan Nama Customer"
            id="customer"
            onChange={(e) => ChangeHandler(e)}
            value={data.customer}
            className="input input-bordered w-full max-w-xs bg-white border-gray-300 mt-6"
          />
          <input
            type="text"
            placeholder="Masukkan Nominal Uang"
            id="paid"
            onChange={(e) => ChangeHandler(e)}
            value={data.paid}
            className="input input-bordered w-full max-w-xs bg-white border-gray-300 mt-6"
          />
          <button
            className="p-4 w-full bg-primary text-white text-sm font-semibold my-5 rounded-xl"
            onClick={SubmitHandler}
          >
            bayar
          </button>
        </div>
      </div>
    </div>
  );
}
