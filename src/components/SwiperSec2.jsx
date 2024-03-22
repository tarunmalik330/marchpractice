import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

export default function SwiperSec2() {
  return (
    <>
      <div className="pt-[50px] container mx-auto xl:max-w-[1164px] xl:px-3 px-6">
        <h2 className="text-[45px] font-normal text-lime-950 text-center py-5">
          SWIPER SLIDER
        </h2>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper my_swiper"
        >
          <SwiperSlide className="slidercards">Slide 1</SwiperSlide>
          <SwiperSlide className="slidercards">Slide 2</SwiperSlide>
          <SwiperSlide className="slidercards">Slide 3</SwiperSlide>
          <SwiperSlide className="slidercards">Slide 4</SwiperSlide>
          <SwiperSlide className="slidercards">Slide 5</SwiperSlide>
          <SwiperSlide className="slidercards">Slide 6</SwiperSlide>
          <SwiperSlide className="slidercards">Slide 7</SwiperSlide>
          <SwiperSlide className="slidercards">Slide 8</SwiperSlide>
          <SwiperSlide className="slidercards">Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
