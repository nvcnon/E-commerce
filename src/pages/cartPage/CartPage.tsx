import CartItem from "../../components/cartItem/CartItem";
import Container from "../../components/container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { getProduct } from "../../services/api";
import type { IProduct } from "../../types/server";
import { useEffect, useState } from "react";

const CartPage = () => {
  const { cartItem } = useShoppingCartContext();

  const [products, setProducts] = useState<IProduct[]>([]);

  const discount = 3000000;

  useEffect(() => {
    Promise.all(cartItem.map((item) => getProduct(item.id))).then((result) => {
      setProducts(result);
    });
  }, [cartItem]);

  const totalPrice = cartItem.reduce((total, item) => {
    const product = products.find(
      (product) => Number(product.id) === item.id
    );

    if (!product) {
      return total;
    }

    return (
      total +
      Number(String(product.price).replace(/,/g, "")) * item.qty
    );
  }, 0);

  const payablePrice = totalPrice - discount;

  return (
    <Container>
      <div className="mt-10 flex flex-col gap-8 lg:mt-15 lg:grid lg:grid-cols-12 lg:gap-0 mx-5 sm:">
        
        {/* لیست محصولات */}
        <div className="order-1 lg:order-2 lg:col-span-7">
          {cartItem.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>

        {/* خلاصه سفارش */}
        <div className="order-2 lg:order-1 lg:col-span-5 lg:mr-10">
          <div className="rounded-2xl p-4 text-right text-gray-700 shadow-xl sm:p-5">
            <p className="border-b border-b-gray-300 py-4 sm:py-5">
              قیمت کالا ها: {totalPrice.toLocaleString()} تومان
            </p>

            <p className="border-b border-b-gray-300 py-4 sm:py-5">
              تخفیف: {discount.toLocaleString()} تومان
            </p>

            <p className="border-b border-b-gray-300 py-4 sm:py-5">
              مبلغ قابل پرداخت: {payablePrice.toLocaleString()} تومان
            </p>

            <button className="my-5 h-13 w-full rounded-xl bg-gray-700 text-white transition-colors hover:bg-gray-600 sm:my-7">
              ادامه فرایند خرید
            </button>
          </div>
        </div>

      </div>
    </Container>
  );
};

export default CartPage;