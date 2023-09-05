import Image from "next/image";
import Kategories from "./component/btn_kategories";
import Product_content from "./component/product_content";

export default function Home() {
  const categories = ["Semua", "Kategori 1", "Kategori 2", "Kategori 3"];
  const product = [
    {
      title: "kitten food",
      price: "15.000",
      disc: 10,
    },
    {
      title: "cat choise",
      price: "20.000",
      disc: 0,
    },
    {
      title: "dog food",
      price: "20.000",
      disc: 25,
    },
  ];
  return (
    <div>
      <div className="mt-5 mx-5 md:mx-5 flex flex-col">
        <div className="flex flex-col">
          <label className="text-lg font-bold text-black">Kategories</label>
          <div className="md:w-3/4  w-full flex-wrap flex justify-start">
            <Kategories categories_name={"semua"} status={true}></Kategories>
            <Kategories categories_name={"kandang"} status={false}></Kategories>
            <Kategories categories_name={"cat food"} status={false}></Kategories>
            <Kategories categories_name={"dog food"} status={false}></Kategories>
          </div>
        </div>
        <div className="mt-10">
          <label className="text-lg font-bold text-black ">Produk</label>
          <div className="grid grid-cols-3 md:grid-cols-4 mb-20 gap-2">
            {product.map((product, index) => {
              return (
                <Product_content
                  discount={product.disc}
                  title={product.title}
                  price={product.price}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="bottom-12 right-0 me-3 mb-10 fixed">
        <button className="h-[3.5rem] w-[3.5rem] rounded-full bg-primary">
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
        <span class="absolute -top-2 -right-1 h-6 w-6 rounded-full bg-[#ff0000] flex justify-center items-center items">
          <span className="text-white text-xs">10</span>
        </span>
      </div>
    </div>
  );
}
