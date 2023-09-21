"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Product_content from "./component/product_content";
import { usePathname, useRouter } from "next/navigation";

export default function () {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setproducts] = useState([]);
  const [categories, setcategories] = useState([]);
  const [cart, setcart] = useState([]);
  const [cat_select, setcat_select] = useState("semua");
  const [search, setsearch] = useState("");
  const baseURL = "http://127.0.0.1:8000/api";
  const router = useRouter();
  const pathname = usePathname();
  const cartBadge = () => {
    if (cart.length == 0) {
      return "hidden";
    } else {
      return "absolute -top-2 -right-1 h-6 w-6 rounded-full bg-[#ff0000] flex justify-center items-center items";
    }
  };
  useEffect(() => {
    axios
      .get(baseURL + "/categories")
      .then((response) => {
        setcategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    //tambahkan if statement untuk index di dashboard
    axios
      .get(baseURL + "/products")
      .then((response) => {
        setproducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(baseURL + "/carts/pending")
      .then((response) => {
        setcart(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <div className="flex flex-col h-screen">
        <div className="h-20 w-full bg-primary flex gap-2 p-5">
          <div className="rounded-lg bg-gray-100 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="#FF9738"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
              />
            </svg>
          </div>
          <div className="w-full rounded-lg bg-white flex gap-1 items-center px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#FF9738"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              className="form-control input bg-transparent text-primary w-full h-full rounded-lg"
              onChange={(e) => setsearch(e.target.value)}
            ></input>
          </div>
        </div>

        <div className="flex flex-col mt-5 mx-5">
          <label className="text-lg font-bold text-black">Kategories</label>
          <div className="md:w-3/4  w-full flex-wrap flex justify-start">
            <button
              onClick={() => setcat_select("semua")}
              className={`text-md px-5 py-0.5 rounded-lg me-5 mt-2 flex-wrap stroke-secondary border
                  ${
                    cat_select == "semua"
                      ? "text-white bg-secondary"
                      : "bg-accent text-secondary"
                  }`}
            >
              semua
            </button>
            {categories.map((categories, index) => {
              return (
                <button
                  key={categories.id}
                  onClick={() => setcat_select(categories.name)}
                  className={`text-md px-5 py-0.5 rounded-lg me-5 mt-2 flex-wrap stroke-secondary border
                  ${
                    cat_select == categories.name
                      ? "text-white bg-secondary"
                      : "bg-accent text-secondary"
                  }`}
                >
                  {categories.name}
                </button>
              );
            })}
          </div>
        </div>
        <div className="mt-10 mx-5">
          <label className="text-lg font-bold text-black ">Produk</label>
          <div className="grid grid-cols-3 md:grid-cols-4 mb-20 gap-2">
            {products
              .filter((product) => {
                return search.toLowerCase === "" &&
                  cat_select.toLowerCase === "semua"
                  ? product
                  : search && cat_select != "semua"
                  ? product.name.toLowerCase().includes(search.toLowerCase()) &&
                    product.category.name
                      .toLowerCase()
                      .includes(cat_select.toLowerCase())
                  : !search && cat_select != "semua"
                  ? product.category.name
                      .toLowerCase()
                      .includes(cat_select.toLowerCase())
                  : product.name.toLowerCase().includes(search.toLowerCase());
              })
              .map((product, index) => {
                return <Product_content data={product} key={product.id} />;
              })}
          </div>
        </div>
      </div>
      <div className="bottom-12 right-0 me-3 mb-10 fixed">
        <button
          className="h-[3.5rem] w-[3.5rem] rounded-full bg-primary"
          onClick={() => router.push("/keranjang")}
        >
          <svg
            className="m-auto"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 16C16.5304 16 17.0391 16.2107 17.4142 16.5858C17.7893 16.9609 18 17.4696 18 18C18 18.5304 17.7893 19.0391 17.4142 19.4142C17.0391 19.7893 16.5304 20 16 20C14.89 20 14 19.1 14 18C14 16.89 14.89 16 16 16ZM0 0H3.27L4.21 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3C20 3.17 19.95 3.34 19.88 3.5L16.3 9.97C15.96 10.58 15.3 11 14.55 11H7.1L6.2 12.63L6.17 12.75C6.17 12.8163 6.19634 12.8799 6.24322 12.9268C6.29011 12.9737 6.3537 13 6.42 13H18V15H6C4.89 15 4 14.1 4 13C4 12.65 4.09 12.32 4.24 12.04L5.6 9.59L2 2H0V0ZM6 16C6.53043 16 7.03914 16.2107 7.41421 16.5858C7.78929 16.9609 8 17.4696 8 18C8 18.5304 7.78929 19.0391 7.41421 19.4142C7.03914 19.7893 6.53043 20 6 20C4.89 20 4 19.1 4 18C4 16.89 4.89 16 6 16ZM15 9L17.78 4H5.14L7.5 9H15Z"
              fill="white"
            />
          </svg>
        </button>
        <span className={cartBadge()}>
          <span className="text-white text-xs">{cart.length}</span>
        </span>
      </div>
    </div>
  );
}
