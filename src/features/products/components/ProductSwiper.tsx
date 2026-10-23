import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";
import type { Product } from "../../../types/product";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

interface ProductSwiperProps {
  products: Product[];
}

const ProductSwiper = ({ products }: ProductSwiperProps) => {
  return (
    <Swiper
      className="my-7"
      modules={[Autoplay]}
      slidesPerView={2}
      spaceBetween={10}
      breakpoints={{
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
      }}
      loop
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <Link className="" to={`/product/${product.id}`}>
            <ProductCard {...product} />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSwiper;
