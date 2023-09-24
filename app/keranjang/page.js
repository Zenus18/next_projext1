"use client";
import { useEffect, useState } from "react";
import Cart from "../component/cart";
import Invoice from "../component/invoice";
import axios from "axios";

export default function Page() {
  const [showInvoice, setShowInvoice] = useState(true);
  const [pending, setPending] = useState([]);
  const [invoice, setInvoice] = useState({});
  const baseURL = "http://127.0.0.1:8000/api";

  useEffect(() => {
    // Fetch data pending transactions
    axios
      .get(baseURL + "/transactions/pending")
      .then((response) => {
        setPending(response.data.data);
        setInvoice(response.data.to_be_paid);
      })
      .catch((error) => {
        console.error(error);
      });

    // Fungsi untuk menampilkan atau menyembunyikan invoice berdasarkan posisi scroll
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowInvoice(false);
      } else {
        setShowInvoice(true);
      }
    };

    // Menambahkan event listener untuk mendeteksi perubahan posisi scroll
    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener saat komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCartVisibility = () => {
    if (pending.length === 0) return "hidden";
    return ""; // Tampilkan invoice jika ada transaksi tertunda
  };

  return (
    <div className="flex md:mt-[2rem] mt-[1rem] flex-col ">
      <div className="mx-1 md:mx-[10rem]">
        {pending.map((pendat) => {
          return (
            <div className="my-1" key={pendat.id}>
              <Cart data={pendat} setInvoice={setInvoice} baseURL={baseURL} />
            </div>
          );
        })}
      </div>
      <div
        className={`${
          showInvoice
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-full"
        } transition-all duration-1000 ease-in-out w-full fixed bottom-0 mb-20 ${handleCartVisibility()}`}
      >
        <Invoice indata={invoice} />
      </div>
    </div>
  );
}
