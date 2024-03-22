import React, { useState } from "react";

const Header = () => {
  const [opentab, setOpentab] = useState(1);
  return (
    <>
      <div className="container mx-auto xl:max-w-[1164px] xl:px-3 px6">
        <ul className="flex items-center justify-center mb-12 gap-5 mt-5">
          <li>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setOpentab(1);
              }}
              className="text-[30px] font-normal text-black"
            >
              Tab1
            </a>
          </li>
          <li>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setOpentab(2);
              }}
              className="text-[30px] font-normal text-black"
            >
              Tab2
            </a>
          </li>
          <li>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setOpentab(3);
              }}
              className="text-[30px] font-normal text-black"
            >
              Tab3
            </a>
          </li>
          <li>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setOpentab(4);
              }}
              className="text-[30px] font-normal text-black"
            >
              Tab4
            </a>
          </li>
          <li>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setOpentab(5);
              }}
              className="text-[30px] font-normal text-black"
            >
              Tab5
            </a>
          </li>
        </ul>
        <div className={opentab === 1 ? "block" : "hidden"}>
          <div className="w-full h-[100px] bg-slate-100 rounded-sm flex items-center justify-center">
            <p className="text-center">Tab-1</p>
          </div>
        </div>
        <div className={opentab === 2 ? "block" : "hidden"}>
          <div className="w-full h-[100px] bg-slate-200 rounded-sm flex items-center justify-center">
            <p className="text-center">Tab-2</p>
          </div>
        </div>
        <div className={opentab === 3 ? "block" : "hidden"}>
          <div className="w-full h-[100px] bg-slate-300 rounded-sm flex items-center justify-center">
            <p className="text-center">Tab-3</p>
          </div>
        </div>
        <div className={opentab === 4 ? "block" : "hidden"}>
          <div className="w-full h-[100px] bg-slate-400 rounded-sm flex items-center justify-center">
            <p className="text-center">Tab-4</p>
          </div>
        </div>
        <div className={opentab === 5 ? "block" : "hidden"}>
          <div className="w-full h-[100px] bg-slate-500 rounded-sm flex items-center justify-center">
            <p className="text-center">Tab-5</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
