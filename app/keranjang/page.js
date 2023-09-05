import React from 'react'
import Cart from '../component/cart'
import Invoice from '../component/invoice';
export default function page() {
  const cart = [
    {
      "title": "hyper 3kg",
      "image": "",
      "price": 20000,
      "discount": 20
    },
    {
      "title": "catto foodto",
      "image": "",
      "price": 15000,
      "discount": 10
    }
  ]
  return (
    <div className="flex md:mt-[2rem] mt-[1rem]  flex-col">
      <div className="mx-1 md:mx-[10rem]">
        {cart.map((data) => {
          return (
            <div className="my-1">
              <Cart
                title={data.title}
                image={data.image}
                price={data.price}
                discount={data.discount}
              ></Cart>
            </div>
          );
        })}
      </div>
      <Invoice></Invoice>
    </div>
  );
}
