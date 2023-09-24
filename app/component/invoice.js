import React from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
export default function Invoice({ indata }) {
  const url = "";
  const [IsLoading, setIsLoading] = useState(true);
  const routes = useRouter();
  const [data, setdata] = useState({
    cashier_id: "1",
    customer: "",
    paid: "",
  });
  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  const SubmitHandler = () => {
    Swal.fire({
      title: "Konfirmasi Pembayaran",
      text: "Apakah Anda yakin ingin melanjutkan pembayaran?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
      confirmButtonColor: "#007BFF",
      cancelButtonColor: "#DC3545",
    }).then((result) => {
      if (result.isConfirmed) {
        // Lanjutkan dengan pembayaran
        axios
          .post("http://127.0.0.1:8000/api/transactions/checkout", data)
          .then((response) => {
            if (response.status === 201) {
              Swal.fire({
                title: "success",
                text: response.message,
                icon: "success",
                confirmButtonText: "OK",
                confirmButtonColor: "#007BFF",
              }).then(result.isConfirmed ? routes.push("/") : null);
            } else {
              Swal.fire({
                title: "failed",
                text: response.message,
                icon: "error",
                confirmButtonText: "OK",
                confirmButtonColor: "#DC3545",
              });
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire({
              title: "Pembayaran Gagal",
              text: "Terjadi kesalahan saat melakukan pembayaran.",
              icon: "error",
              confirmButtonText: "OK",
              confirmButtonColor: "#DC3545",
            });
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
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
            <label className="text-sm text-black font-bold">
              {indata.subtotal}
            </label>
          </div>
          <div className="flex justify-between font-medium">
            <label className="text-sm text-black">Discount:</label>
            <label className="text-sm text-black font-bold">
              {indata.discount}
            </label>
          </div>
          <div className="w-full border-dotted border border-black mt-2"></div>
          <div className="flex justify-between font-medium mt-4">
            <label className="text-sm text-black">Total:</label>
            <label className="text-md text-primary font-bold mt-1">
              {indata.total}
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
