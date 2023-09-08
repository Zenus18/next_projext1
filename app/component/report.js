import React from "react";

export default function Report({ date, transaction }) {
  return (
    <div className="flex-col flex text-black">
      <label className="text-sm m-1">tanggal</label>
      <label className="text-lg font-bold m-1">18 Agustus 2023</label>
      <div className="w-full border bg-white rounded-md flex flex-col p-2 gap-[17px]">
        <div className="flex flex-col border-b-[1px] border-gray-400">
          <label>18:00</label>
          <div className="flex justify-between text-black font-semibold">
            <label>Total Pembelian</label>
            <label>Rp 70.000</label>
          </div>
        </div>
        <div className="flex flex-col border-b-[1px] border-gray-400">
          <label>19:00</label>
          <div className="flex justify-between text-black font-semibold">
            <label>Total Pembelian</label>
            <label>Rp 80.000</label>
          </div>
        </div>
        <div className="flex flex-col border-b-[1px] border-gray-400">
          <label>19:46</label>
          <div className="flex justify-between text-black font-semibold">
            <label>Total Pembelian</label>
            <label>Rp 170.000</label>
          </div>
        </div>
        <div className="flex justify-between text-primary font-semibold">
          <label>Total Keseluruhan</label>
          <label>Rp 320.000</label>
        </div>
      </div>
    </div>
  );
}
