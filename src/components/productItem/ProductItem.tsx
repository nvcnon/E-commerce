import type { IProduct } from "../../types/server";

type TProductItem = IProduct;

const ProductItem = ({ image, title, price }: TProductItem) => {
  return (
    <div
      className="shadow-2xl rounded-br-2xl hover:opacity-80"
      style={{
        // boxShadow: "1px 1px 1px #495057",
        // backgroundColor: "#FFFFFF",
        color: "#343A40",
      }}
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
