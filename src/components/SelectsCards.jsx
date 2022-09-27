import React from "react";

const SelectsCards = (props) => {
  return (
    <div className="relative hover:scale-105 duration-300">
      <img className="w-full h-full object-cover" src={props.img} alt="/" />
      {/* overlay */}
      <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
        <p className="left-4 bottom-4 text-2xl text-white absolute font-bold">
          {props.name}
        </p>
      </div>
    </div>
  );
};

export default SelectsCards;
