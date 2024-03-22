import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="mx-auto container xl:max-w-[1164px] xl:px-3 px-6">
      <h2 className="text-[50px] font-normal text-lime-950 text-center pb-5">
        SLICK SLIDER
      </h2>
      <Slider {...settings}>
        <div className="p-32 bg-slate-400">
          <h3 className="text-center">1</h3>
        </div>
        <div className="p-32 bg-slate-400">
          <h3 className="text-center">2</h3>
        </div>
        <div className="p-32 bg-slate-400">
          <h3 className="text-center">3</h3>
        </div>
        <div className="p-32 bg-slate-400">
          <h3 className="text-center">4</h3>
        </div>
        <div className="p-32 bg-slate-400">
          <h3 className="text-center">5</h3>
        </div>
        <div className="p-32 bg-slate-400">
          <h3 className="text-center">6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SlickSlider;
