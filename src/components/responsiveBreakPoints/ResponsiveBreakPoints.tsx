import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./ResponsiveBreakPoints.module.css";
import { Pagination, Autoplay } from "swiper/modules";
import type { IProduct } from "../../types/server";
import { useEffect, useState } from "react";
import { getProductsByCategory } from "../../services/api";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";

interface ResponsiveBreakPointsProps {
  category: "Tshirt" | "Shoes" | "Hat";
}

function ResponsiveBreakPoints({ category }: ResponsiveBreakPointsProps) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getProductsByCategory(category)
      .then((result) => {
        setProducts(result);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [category]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className="py-10 text-center text-red-500">
        دریافت محصولات با خطا مواجه شد.
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="py-10 text-center text-gray-500">
        محصولی در این دسته‌بندی وجود ندارد.
      </div>
    );
  }

  return (
    <div className="my-10">
      <Swiper
        wrapperClass="!flex-nowrap"
        loop={true}
        effect="slide"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Autoplay]}
        className={styles.mySwiper}
      >
        {products.map((product) => (
          <SwiperSlide className={styles.slide} key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="h-60 w-full rounded-xl object-cover"
              />

              <h3 className="my-3 mx-2 line-clamp-2">{product.title}</h3>

              <p className="my-3 mx-2">{product.price} تومان</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ResponsiveBreakPoints;