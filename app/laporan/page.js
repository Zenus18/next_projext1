"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Page() {
  const [data, setData] = useState([]);
  const baseURL = "http://127.0.0.1:8000/api/";

  useEffect(() => {
    axios
      .get(baseURL + "transactions")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // function formatDate(inputDate) {
  //   const date = new Date(inputDate);
  //   const monthNames = [
  //     "Januari",
  //     "Februari",
  //     "Maret",
  //     "April",
  //     "Mei",
  //     "Juni",
  //     "Juli",
  //     "Agustus",
  //     "September",
  //     "Oktober",
  //     "November",
  //     "Desember",
  //   ];

  //   const month = monthNames[date.getMonth()];
  //   const day = date.getDate();
  //   const year = date.getFullYear();
  //   const formattedDate = `${day} ${month} ${year}`;
  //   return formattedDate;
  // }

  const formatClock = (inputDateTime) => {
    const dateTime = new Date(inputDateTime);
    const hours = dateTime.getUTCHours();
    const minutes = dateTime.getUTCMinutes();
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
    return formattedTime;
  };

  // const groupDataByDate = () => {
  //   const groupedData = {};

  //   data.forEach((transaction) => {
  //     const currentDate = transaction.date;
  //     if (!groupedData[currentDate]) {
  //       groupedData[currentDate] = [];
  //     }
  //     groupedData[currentDate].push(transaction);
  //   });

  //   return groupedData;
  // };

  // const groupedData = groupDataByDate();

  return (
    <div className="flex flex-col mt-5  mx-6 bg-[#F9FAFF] gap-4 mb-28">
      {data.map((transaction, index) => (
        <div key={index} className="flex-col flex text-black">
          <label className="text-sm m-1">Tanggal</label>
          <label className="text-lg font-bold m-1">{transaction.date}</label>
          <div className="w-full border bg-white rounded-md flex flex-col p-2 gap-[17px]">
            {transaction.data.map((transactionItem) => (
              <div
                className="flex flex-col border-b-[1px] border-gray-400"
                key={transactionItem.id}
              >
                <label>{formatClock(transactionItem.created_at)}</label>
                <div className="flex justify-between text-black font-semibold">
                  <label>Total Pembelian</label>
                  <label>{transactionItem.total.toLocaleString("id-ID")}</label>
                </div>
              </div>
            ))}
            <div className="flex justify-between text-primary font-semibold">
              <label>Total Keseluruhan</label>
              <label>{transaction.total.toLocaleString("id-ID")}</label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
