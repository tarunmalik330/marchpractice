import React, { useState } from "react";
import { NavbtnArrow } from "./Iconimg";
import { Link } from "react-router-dom";

const Nav = () => {
  const [nav, setNav] = useState(true);
  return (
    <div>
      <div className="container mx-auto xl:max-w-[1164px] xl:px-3 px-6">
        <div className="flex items-center justify-between py-[24px]">
          <Link
            to="/"
            className="text-[40px] font-bold text-[#00972A] leading-[130%] ff_k2d"
          >
            Logo
          </Link>
          <ul
            className={`${
              nav
                ? "flex lg:flex-row items-center flex-col justify-center sm:gap-[52px] gap-[30px] bg-white max-lg:min-h-screen transition-all duration-300 ease-linear max-lg:fixed top-0 bottom-0 max-lg:h-full left-[-100%] max-lg:w-full z-[5]"
                : "flex transition-all bg-white duration-300 ease-linear flex-row max-lg:flex-col items-center sm:gap-[52px] gap-[30px] justify-center max-lg:min-h-screen max-lg:fixed top-0 bottom-0 max-lg:h-full left-0 max-lg:w-full z-[5]"
            }`}
          >
            <Link
              to="/"
              className="text-[16px] font-normal text-[#010101] leading-[100%] hover:font-semibold transition-all duration-300 ease-linear"
            >
              Tabs
            </Link>
            <Link
              to="/FormPage"
              className="text-[16px] font-normal text-[#010101] leading-[100%] hover:font-semibold transition-all duration-300 ease-linear"
            >
              Form
            </Link>
            <Link
              to="/Modal"
              className="text-[16px] font-normal text-[#010101] leading-[100%] hover:font-semibold transition-all duration-300 ease-linear"
            >
              Modal
            </Link>
            <Link
              to="/AccSec"
              className="text-[16px] font-normal text-[#010101] leading-[100%] hover:font-semibold transition-all duration-300 ease-linear"
            >
              Accordian
            </Link>
            <Link
              to="/SliderSec"
              className="text-[16px] font-normal text-[#010101] leading-[100%] hover:font-semibold transition-all duration-300 ease-linear"
            >
              SliderSec
            </Link>
            <Link
              to="/ReducerCounter"
              className="text-[16px] font-normal text-[#010101] leading-[100%] hover:font-semibold transition-all duration-300 ease-linear"
            >
              ReducerCounter
            </Link>
          </ul>
          <div className="flex items-center gap-[16px]">
            <div
              onClick={() => setNav(!nav)}
              className="lg:hidden w-[28px] h-[20px] relative z-[6] flex justify-between flex-col"
            >
              <span
                className={`${
                  nav
                    ? "bg-[#025066] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                    : "bg-[#025066] transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[50deg] translate-y-[14px]"
                }`}
              ></span>
              <span
                className={`${
                  nav
                    ? "bg-[#025066] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                    : "duration-300 rounded-[3px] ease-linear transition-all hidden"
                }`}
              ></span>
              <span
                className={`${
                  nav
                    ? "bg-[#025066] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                    : "bg-[#025066] transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[-50deg] translate-y-[-50%]"
                }`}
              ></span>
            </div>
            <button
              className={`${
                nav ? "" : "max-lg:hidden"
              } bg-[#00972A] sm:py-[16px] sm:px-[32px] py-[12px] px-[25px] flex items-center justify-center text-[16px] font-bold sm:gap-[10px] gap-[7px] text-white rounded-[12px]`}
            >
              Sign Up <NavbtnArrow />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
