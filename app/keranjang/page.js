"use client";
import { useEffect, useState } from "react";
import Cart from "../component/cart";
import Invoice from "../component/invoice";
import Axios from "../lib/axios";
import { authMiddleware } from "../middleware/authMiddleware";
function Page() {
  const axios = Axios;
  const [showInvoice, setShowInvoice] = useState(true);
  const [pending, setPending] = useState([]);
  const [invoice, setInvoice] = useState({});
  const [orderNumber, setorderNumber] = useState("");
  useEffect(() => {
    // Fetch data pending transactions
    axios
      .get("/transactions/pending")
      .then((response) => {
        setPending(response.data.data);
        setInvoice(response.data.to_be_paid);
        setorderNumber(response.data.order_number);
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
              <Cart
                data={pendat}
                setInvoice={setInvoice}
                setPending={setPending}
              />
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
        <Invoice indata={invoice} order_number={orderNumber} />
      </div>
    </div>
  );
}
export default authMiddleware(Page);
