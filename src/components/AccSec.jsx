import React, { useState } from "react";
import { Accordionbtn } from "./Iconimg";

const AccSec = () => {
  const [openAccordion, setOpenAccordion] = useState(true);
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  const accordionData = [
    {
      title: "Maecenas laoreet, sapien vel cursus ultricies?",
      content:
        "Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies?",
    },
    {
      title: "Maecenas laoreet, sapien vel cursus ultricies?",
      content:
        "Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies?",
    },
    {
      title: "Maecenas laoreet, sapien vel cursus ultricies?",
      content:
        "Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies?",
    },
    {
      title: "Maecenas laoreet, sapien vel cursus ultricies?",
      content:
        "Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies?",
    },
    {
      title: "Maecenas laoreet, sapien vel cursus ultricies?",
      content:
        "Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus ultricies?",
    },
  ];
  return (
    <>
      <div className="container mx-auto xl:max-w-[1164px] xl:px-3 px-6 pt-16">
        {accordionData.map((item, index) => (
          <div
            className="accordion-item md:pt-[23px] md:pb-[22px] md:px-[50px] px-[20px] py-[20px] md:mb-[26px] mb-[18px] md:rounded-[40.5px] rounded-[20.5px] !transition-all !duration-700 !ease-in-out"
            key={index}
          >
            <div
              className="accordion-title flex justify-between items-center text-white"
              onClick={() => toggleAccordion(index)}
            >
              <p className="sm:text-[20px] text-[16px] font-bold text-white leading-[121%] mr-[20px]">
                {item.title}
              </p>
              <div>
                {" "}
                <div
                  className={`${
                    openAccordion === index ? "rotate-[-180deg]" : ""
                  } rounded-[50%] w-[36px] h-[36px] flex items-center justify-center bg-white transition-all duration-300 ease-linear`}
                >
                  <Accordionbtn />
                </div>
              </div>
            </div>
            <div
              className={`accordion-content ${
                openAccordion === index ? "open" : ""
              }`}
              transition={{ duration: 0.5 }}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AccSec;
