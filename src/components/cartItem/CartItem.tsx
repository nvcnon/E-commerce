import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import type { IProduct } from "../../types/server";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";

interface ICartItem {
  id: number;
  qty: number;
}

const CartItem = ({ id, qty }: ICartItem) => {
  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    handleRemoveProduct,
  } = useShoppingCartContext();

  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    getProduct(id).then((result) => {
      setProduct(result);
    });
  }, []);

  return (
    <div className="my-3 flex h-30 flex-row-reverse items-center rounded-l-2xl pl-2 text-right shadow-xl sm:pl-5">
      <Link
        className="shrink-0"
        to={`/product/${id}`}
      >
        <img
          className="h-16 w-16 rounded object-cover sm:h-20 sm:w-20"
          src={product?.image}
          alt={product?.title}
        />
      </Link>

      <h3 className="w-25 truncate p-2 text-sm sm:w-50 sm:p-4 sm:text-lg lg:w-70 lg:text-xl">
        {product?.title}
      </h3>

      <button
        onClick={() => {
          handleIncreaseProductQty(id);
        }}
        className="mr-auto mx-1 h-7 w-7 rounded bg-gray-500 text-sm text-white sm:mx-3 sm:w-10 sm:text-base"
      >
        +
      </button>

      <span className="text-sm sm:text-base">
        {qty}
      </span>

      <button
        onClick={() => {
          handleDecreaseProductQty(id);
        }}
        className="mx-1 h-7 w-7 rounded bg-gray-500 text-sm text-white sm:mx-3 sm:w-10 sm:text-base"
      >
        -
      </button>

      <button
        onClick={() => {
          handleRemoveProduct(id);
        }}
        className="mx-1 flex h-8 w-10 items-center justify-center rounded-lg bg-red-700 sm:mx-3 sm:h-10 sm:w-16 sm:rounded-xl"
      >
        <svg
          className="h-5 w-5 fill-white sm:h-6 sm:w-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
        >
          <path d="M 28 7 C 25.243 7 23 9.243 23 12 L 23 15 L 13 15 C 11.896 15 11 15.896 11 17 C 11 18.104 11.896 19 13 19 L 15.109375 19 L 16.792969 49.332031 C 16.970969 52.510031 19.600203 55 22.783203 55 L 41.216797 55 C 44.398797 55 47.029031 52.510031 47.207031 49.332031 L 48.890625 19 L 51 19 C 52.104 19 53 18.104 53 17 C 53 15.896 52.104 15 51 15 L 41 15 L 41 12 C 41 9.243 38.757 7 36 7 L 28 7 z M 28 11 L 36 11 C 36.552 11 37 11.449 37 12 L 37 15 L 27 15 L 27 12 C 27 11.449 27.448 11 28 11 z M 32 23.25 C 32.967 23.25 33.75 24.034 33.75 25 L 33.75 45 C 33.75 45.966 32.967 46.75 32 46.75 C 31.033 46.75 30.25 45.966 30.25 45 L 30.25 25 C 30.25 24.034 31.033 23.25 32 23.25 z M 40.007812 23.25 C 40.972813 23.284 41.728313 24.094547 41.695312 25.060547 L 40.998047 45.146484 C 40.965047 46.092484 40.190953 46.836937 39.251953 46.835938 C 39.230953 46.835938 39.210453 46.833984 39.189453 46.833984 C 38.224453 46.799984 37.468953 45.989438 37.501953 45.023438 L 38.197266 24.9375 C 38.231266 23.9725 39.039813 23.223 40.007812 23.25 z M 23.990234 23.251953 C 24.954234 23.228953 25.766781 23.973453 25.800781 24.939453 L 26.498047 45.025391 C 26.532047 45.991391 25.776547 46.801938 24.810547 46.835938 C 24.790547 46.835937 24.769047 46.835938 24.748047 46.835938 C 23.810047 46.091484 23.033 46.091484 23 45.146484 L 22.302734 25.060547 C 22.268734 24.094547 23.024234 23.285953 23.990234 23.251953 z"></path>
        </svg>
      </button>

      <p className="mx-2 text-xs sm:mx-5 sm:text-sm lg:mx-10 lg:text-base">
        {product?.price
          ? (
              Number(product.price.replace(/,/g, "")) * qty
            ).toLocaleString()
          : 0}{" "}
        تومان
      </p>
    </div>
  );
};

export default CartItem;