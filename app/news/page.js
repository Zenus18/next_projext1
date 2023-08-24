"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomNavbar from "./CustomNavbar";

//function untuk fetch data api
const Page = () => {
  const API_URL = "http://127.0.0.1:8000/api/posts";
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <CustomNavbar />
      <div className="grid md:grid-cols-4 grid-cols-1 mt-12 mb-48 ">
        {data.map((dat) => (
          <div className="card w-3/4 bg-base-100 shadow-xl mx-auto my-10">
            {/* <figure>
              <img
                className="object-cover w-full"
                src={"https://image.tmdb.org/t/p/w500/" + dat.poster_path}
                alt="Shoes"
              />
            </figure> */}
            <div className="card-body">
              <h2 className="card-title w-full h-[8rem]">{dat.title}</h2>
              <p className="w-full h-[7rem] overflow-hidden ...">
                {dat.news_content}
              </p>
              <p className="w-full truncate overflow-hidden ...">
                {dat.user.username}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .card {
          position: relative;
          cursor: pointer;
        }

        .card:hover .card-body {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default Page;
