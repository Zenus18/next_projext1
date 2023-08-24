"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomNavbar from "../../news/CustomNavbar";

const Page = () => {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=a76bee06956c9a4cfd14133c1f84dec0&language=en-US&page=1";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setData(response.data.results);
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
          // <div className="card w-3/4 bg-base-100 shadow-xl image-full mx-auto my-10">
          //   <figure>
          //     <img
          //       src={"https://image.tmdb.org/t/p/w500/" + dat.poster_path}
          //       alt="Shoes"
          //     />
          //   </figure>
          //   <div className="card-body hidden">
          //     <h2 className="card-title w-full h-[8rem]">{dat.title}</h2>
          //     <p className="w-full h-[7rem] overflow-hidden ...">
          //       {dat.overview}
          //     </p>
          //     <div className="card-actions justify-end">
          //       <button className="btn btn-primary">Buy Now</button>
          //     </div>
          //   </div>
          // </div>
          <div className="card card-side w-3/4 bg-base-100 shadow-xl image-full mx-auto my-10">
            <figure>
              <img
                src={"https://image.tmdb.org/t/p/w500/" + dat.poster_path}
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title w-full h-[8rem]">{dat.title}</h2>
              <p className="w-full h-[7rem] overflow-hidden ...">
                {dat.overview}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
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
