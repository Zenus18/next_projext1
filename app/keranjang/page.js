"use client"
import { useEffect, useState } from "react";
import Cart from "../component/cart";
import Invoice from "../component/invoice";

export default function Page() {
  const [showInvoice, setShowInvoice] = useState(true);

  const cart = [
    {
      title: "hyper 3kg",
      image: "",
      price: 20000,
      discount: 20,
    },
    {
      title: "catto foodto",
      image: "",
      price: 15000,
      discount: 10,
    },
  ];
  useEffect(() => {
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

  return (
    <div className="flex md:mt-[2rem] mt-[1rem] flex-col h-screen">
      <div className="mx-1 md:mx-[10rem]">
        {cart.map((data) => {
          return (
            <div className="my-1" key={data.title}>
              <Cart
                title={data.title}
                image={data.image}
                price={data.price}
                discount={data.discount}
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
        } transition-all duration-1000 ease-in-out w-full fixed bottom-0 mb-20`}
      >
        <Invoice />
      </div>
    </div>
  );
}
