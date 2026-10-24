import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import slide1 from "../../../assets/images/home/بنر-اصلی-سایت-پاییزی-و-زمستانی-01.webp";
import slide2 from "../../../assets/images/home/بنر-اصلی-سایت-پاییزی-و-زمستانی-03.webp";
import slide3 from "../../../assets/images/home/بنر-اصلی-سایت-پاییزی-و-زمستانی-07-1.webp";

const HeroBanner = () => {
  return (
    <section>
      <Swiper
        className="h-48 sm:h-72 md:h-96 lg:h-130"
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
      >
        <SwiperSlide>
          <img
            className="h-full w-full object-cover"
            src={slide3}
            alt="مجموعه پاییزی و زمستانی"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="h-full w-full object-cover"
            src={slide2}
            alt="مجموعه پاییزی و زمستانی"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="h-full w-full object-cover"
            src={slide1}
            alt="مجموعه پاییزی و زمستانی"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroBanner;