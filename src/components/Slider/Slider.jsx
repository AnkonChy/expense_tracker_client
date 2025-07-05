import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <img
          className="w-full h-96 lg:h-[600px] object-cover"
          src="https://i.ibb.co/k6qzdNyj/pexels-n-voitkevich-8927687.jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black/40 to-transparent"></div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-96 lg:h-[600px] object-cover"
          src="https://i.ibb.co/67JLgL36/pexels-olia-danilevich-5466793.jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black/40 to-transparent"></div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-96 lg:h-[600px] object-cover"
          src="https://i.ibb.co/67JLgL36/pexels-olia-danilevich-5466793.jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black/40 to-transparent"></div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
