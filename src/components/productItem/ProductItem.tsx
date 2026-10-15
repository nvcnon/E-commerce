import type { IProduct } from "../../types/server";

type TProductItem = IProduct;

const ProductItem = ({ image, title, price }: TProductItem) => {
  return (
    <div
      className="shadow-2xl rounded-br-2xl hover:opacity-80 dark:bg-mist-900 dark:text-gray-100"
    >
      <img className="h-100 w-full" src={image} alt="" />

      <div className="text-right p-2">
        <h3 className="line-clamp-1 my-3">{title}</h3>
        <span className="my-5">تومان {price}</span>
      </div>
    </div>
  );
};

export default ProductItem;
