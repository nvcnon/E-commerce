import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { getProduct } from "../services/api";
import { useCartContext } from "../features/cart/context/CartContext";
import Container from "../components/layout/Container";
import CartItem from "../features/cart/components/CartItem";

const CartPage = () => {
  const { cartItem } = useCartContext();

  const [products, setProducts] = useState<Product[]>([]);

  const discount = 3000000;

  useEffect(() => {
    Promise.all(cartItem.map((item) => getProduct(String(item.id)))).then(
      (result) => {
        setProducts(result);
      },
    );
  }, [cartItem]);

  const totalPrice = cartItem.reduce((total, item) => {
    const product = products.find((product) => Number(product.id) === item.id);

    if (!product) {
      return total;
    }

    return total + Number(String(product.price).replace(/,/g, "")) * item.qty;
  }, 0);

  const payablePrice = totalPrice - discount;

  return (
    <Container>
      <div className="mx-5 mt-10 flex flex-col gap-8 lg:mt-15 lg:grid lg:grid-cols-12 lg:gap-5">
        <div className="lg:col-span-7">
          {cartItem.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <div className="rounded-2xl p-4 text-right text-gray-700 shadow-xl sm:p-5">
            <p className="border-b border-b-gray-300 py-4 sm:py-5">
              قیمت کالاها: {totalPrice.toLocaleString()} تومان
            </p>

            <p className="border-b border-b-gray-300 py-4 sm:py-5">
              تخفیف: {discount.toLocaleString()} تومان
            </p>

            <p className="border-b border-b-gray-300 py-4 sm:py-5">
              مبلغ قابل پرداخت: {payablePrice.toLocaleString()} تومان
            </p>

            <button className="my-5 h-11 w-full rounded-xl bg-gray-500 text-white transition-colors hover:bg-gray-600 sm:my-7">
              ادامه فرایند خرید
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
