import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImg1 from "../assets/images/SliderImg1.png";
import sliderImg2 from "../assets/images/SliderImg2.png";
import sliderImg3 from "../assets/images/SliderImg3.png";
import sliderImg4 from "../assets/images/SliderImg4.png";
import sliderImg5 from "../assets/images/SliderImg5.png";
import sliderImg6 from "../assets/images/SliderImg6.png";
import sliderImg7 from "../assets/images/SliderImg7.png";
import sliderImg8 from "../assets/images/SliderImg8.png";
import sliderImg9 from "../assets/images/SliderImg9.png";
import "swiper/css";
import { EffectFade, Autoplay } from "swiper/modules";

const SwipeSlider = () => {
  return (
    <>
      <div className="mx-auto container xl:max-w-[1164px] xl:px-3 px-6 pt-[50px]">
        <h2 className="text-[50px] font-normal text-lime-950 text-center pb-5">
          SWIPER SLIDER
        </h2>
        <Swiper
          modules={[EffectFade, Autoplay]}
          //   effect="fade"
          loop={true}
          autoplay={{ delay: 3000 }}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            639: {
              slidesPerView: 3,
            },
          }}
        >
          
          <SwiperSlide>
            <img src={sliderImg1} alt="sliderImg1" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImg2} alt="sliderImg2" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImg3} alt="sliderImg3" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImg4} alt="sliderImg4" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImg5} alt="sliderImg5" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImg6} alt="sliderImg6" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImg7} alt="sliderImg7" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImg8} alt="sliderImg8" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderImg9} alt="sliderImg9" className="w-full" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SwipeSlider;
