import type { Product } from "../../types/product";

type ProductCard = Product

const ProductCard = ({image1, title, price} : ProductCard) => {
  return (
    <section className="shadow-xl hover:opacity-95">
      <img
        src={image1}
        alt="product"
      />
      <div className="h-34 my-3 flex justify-between p-3 sm:p-4 lg:p-5">
        <div className="min-w-0">
          <h2 className="mb-2 font-medium truncate">{title}</h2>
          <p className="my-2">{price} تومان</p>
        </div>
        <svg
          className="w-12 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g clipPath="url(#clip0_15_35)">
              {" "}
              <rect fill="white"></rect>{" "}
              <path
                d="M5.33331 6H19.8672C20.4687 6 20.9341 6.52718 20.8595 7.12403L20.1095 13.124C20.0469 13.6245 19.6215 14 19.1172 14H16.5555H9.44442H7.99998"
                stroke="#000000"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M2 4H4.23362C4.68578 4 5.08169 4.30341 5.19924 4.74003L8.30076 16.26C8.41831 16.6966 8.81422 17 9.26638 17H19"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <circle
                cx="10"
                cy="20"
                r="1"
                stroke="#000000"
                strokeLinejoin="round"
              ></circle>{" "}
              <circle
                cx="17.5"
                cy="20"
                r="1"
                stroke="#000000"
                strokeLinejoin="round"
              ></circle>{" "}
            </g>{" "}
            <defs>
              {" "}
              <clipPath id="clip0_15_35">
                {" "}
                <rect width="24" height="24" fill="white"></rect>{" "}
              </clipPath>{" "}
            </defs>{" "}
          </g>
        </svg>
      </div>
    </section>
  );
};

export default ProductCard;
