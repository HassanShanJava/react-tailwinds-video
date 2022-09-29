import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];

const Slider = () => {
  const [slide, setSlide] = useState(0);
  const lenth=sliderData.length;

  const nextSlide=()=>{setSlide(slide===0?lenth-1:slide-1)}
  const prevSlide=()=>{setSlide(slide===lenth-1?0:slide+1)}

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
      <BsArrowRightSquareFill onClick={nextSlide} className="absolute top-[50%] text-3xl text-white cursor-pointer right-8 " />
      <BsArrowLeftSquareFill onClick={prevSlide} className="absolute top-[50%] text-3xl text-white cursor-pointer left-8 " />
      {sliderData.map((data, index) => (
        <div className={index === slide ? "opacity-100 ease-linear" : "opacity-0"}>
          {/* need 1 pic at a time, so to do it we need to toggle the array */}
          {index === slide && (
            <img className="w-full h-full object-cover rounded-md" src={data.url} alt="/" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Slider;
