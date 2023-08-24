"use client";
import { useEffect, useState } from "react";
import CustomNavbar from "../CustomNavbar";
import axios from "axios";

const page = () => {
  const API_URL = "http://127.0.0.1:8000/api/user";
  const [UserData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setUserData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 ">
      {UserData.map((item) => (
        <div className="card w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{item.username}</h2>
            <p>{item.email}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default page;
