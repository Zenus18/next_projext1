"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Product_content({ data, setCart, baseURL }) {
  const baseImgUrl = "http://127.0.0.1:8000/storage/images/" + data.image;
  const [button_value, setbutton_value] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/carts/pending")
      .then((response) => {
        // Mencari produk yang memiliki nama yang sesuai dengan data.name
        const matchingProduct = response.data.find((cart) => {
          return cart.product.name === data.name ? cart : null;
        });

        // Mengatur nilai tombol berdasarkan jumlah produk dalam keranjang
        if (matchingProduct) {
          setbutton_value(matchingProduct.qty);
        } else {
          setbutton_value(0);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [data.name]);

  //function untuk menampilkan discount
  function discount_handler() {
    if (data.discount == 0) {
      return "invisible";
    } else {
      return "text-xs text-primary mt-auto self-end";
    }
  }

  //function untuk button +
  function button_state() {
    if (button_value > 0) {
      return "bg-secondary text-white p-1 border-secondary text-sm border-2 rounded-lg";
    } else {
      return "text-secondary p-1 border-secondary text-sm border-2 rounded-lg hover:bg-accent hover:text-secondary";
    }
  }
  const button_plus = () => {
    setbutton_value(button_value + 1);
  };

  //function untuk button minus
  const button_minus = () => {
    button_value > 0 ? setbutton_value(button_value - 1) : null;
  };

  //function untuk post/menambah jumlah product
  const dataPost = async () => {
    const qty_data = button_value + 1;
    const postData = {
      product_id: data.id,
      qty: qty_data,
    };
    try {
      qty_data == 1
        ? axios
            .post("http://127.0.0.1:8000/api/carts/post", postData)
            .then((response) => {
              console.log("Response data:", response.data);
            })
            .catch((error) => {
              console.error("Error:", error);
            })
            .finally(() => {
              setIsLoading(false);
            })
        : axios
            .post("http://127.0.0.1:8000/api/carts/update", postData)
            .then((response) => {
              console.log("Response data:", response.data);
            })
            .catch((error) => {
              console.error("Error:", error);
            })
            .finally(() => {
              setIsLoading(false);
            });
    } catch (error) {
      console.error("Error:", error);
    }

    try {
      const cartResponse = await axios.get(baseURL + "/carts/pending");
      const cart = cartResponse.data;
      setCart(cart.length);
    } catch (error) {
      console.error(error);
    }
  };

  //function untuk mengurangi/menghapus product
  const dataDel = async () => {
    const qty_data = button_value - 1;
    const postData = {
      product_id: data.id,
      qty: qty_data,
    };
    try {
      if (qty_data > 0) {
        axios
          .post("http://127.0.0.1:8000/api/carts/update", postData)
          .then((response) => {
            console.log("Response data:", response.data);
          })
          .catch((error) => {
            console.error("Error:", error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } else if (qty_data == 0) {
        axios
          .post("http://127.0.0.1:8000/api/carts/delete", postData)
          .then((response) => {
            console.log("Response data:", response.data);
          })
          .catch((error) => {
            console.error("Error:", error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } else {
        null;
      }
    } catch (error) {
      console.error(error);
    }

    try {
      const cartResponse = await axios.get(baseURL + "/carts/pending");
      const cart = cartResponse.data;
      setCart(cart.length);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex flex-col my-2">
        <div className="card w-full bg-white shadow-xl p-3 h-[10rem] md:h-[18rem] rounded-md">
          <figure className="w-full h-full my-auto">
            <Image
              src={baseImgUrl}
              alt={data.name}
              priority={false}
              width={100}
              height={100}
              className="object-cover"
            />
          </figure>
          <p className={discount_handler()}>
            disc{" "}
            {data.is_discount_percentage == 1
              ? data.discount
              : "Rp " + data.discount}
          </p>
        </div>
        <label className="text-black text-sm mx-2 mt-2">{data.name}</label>
        <label className="text-primary text-sm font-bold mx-2 mt-1">
          {data.price}
        </label>
        <div className="mx-2 mt-2 flex justify-between w-3/4">
          <button
            className="p-1 border-secondary text-sm border-2 rounded-lg hover:bg-accent text-secondary "
            onClick={() => {
              button_minus();
              dataDel();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </button>
          <label className="text-black font-bold text-md bg-transparent">
            {button_value}
          </label>
          <button
            onClick={() => {
              button_plus();
              dataPost();
            }}
            className={button_state()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
