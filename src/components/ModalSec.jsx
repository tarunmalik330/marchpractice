import React, { useState } from "react";

const ModalSec = () => {
  const [openmodal, setOpenmodal] = useState(false);
  return (
    <div className="bg-slate-400 min-h-screen">
      <div className="container mx-auto xl:px-3 xl:max-w-[1120px] px-6 pt-[50px] flex flex-col justify-start items-center">
        <h2 className="text-[50px] font-normal text-amber-200 text-center">
          MODAL
        </h2>
        <p className="text-[30px] font-normal text-amber-100 text-center mt-20 mb-20">
          Open It
        </p>
        <button
          onClick={() => setOpenmodal(!openmodal)}
          className="py-[12px] px-[50px] bg-[#00972A] text-white rounded-[12px]"
        >
          Modal Button
        </button>
        {openmodal ? (
          <div
            onClick={() => setOpenmodal(false)}
            className="fixed top-0 left-0 right-0 bg-slate-500 w-full h-full min-h-screen flex items-center justify-center z-50"
          >
            <div
              onClick={() => setOpenmodal(true)}
              className="w-[400px] text-[60px] flex items-center justify-center text-white h-[400px] rounded-[20px] bg-black"
            >
              Modal
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ModalSec;
