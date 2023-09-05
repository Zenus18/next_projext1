import React from 'react'

export default function Invoice() {
  return (
    <div className="w-full bg-white border border-[#E5E4E4] rounded-xl bottom-0 absolute mb-20">
      <div className="mt-4 mx-8 flex-col ">
        <label className="text-xl font-bold">Order: #1001</label>
        <div className="flex flex-col mt-5">
          <div className="flex justify-between font-medium">
            <label className="text-sm text-black">Sub total</label>
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
            placeholder="Masukkan Nominal Uang"
            className="input input-bordered w-full max-w-xs bg-white border-gray-300 mt-6"
          />
        </div>
      </div>
    </div>
  );
}
