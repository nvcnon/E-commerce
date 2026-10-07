import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./EffectFade.module.css";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

import image1 from "../../assets/behrouz-sasani-6OGml3UomZw-unsplash.jpg";
import image2 from "../../assets/wp14058774-clothes-4k-wallpapers.jpg";
import image3 from "../../assets/tobias-van-schneider-gCeCpP15V1o-unsplash.jpg";

export default function EffectCoverFlow() {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="w-full"
      >
        <SwiperSlide className={styles.slide}>
          <img src={image1} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <img src={image2} alt="" />
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <img src={image3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
