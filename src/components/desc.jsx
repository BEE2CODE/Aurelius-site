import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";

const desc = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

//   relative
  return (
    <div className=" relative md:mb-5 mt-3">
        <div className='flex items-center text-black justify-between'>
            <p>Description</p>
      <button onClick={toggleDropdown} className=" px-4 py-2 flex items-center justify-between">
      <span className={`flex-grow ml-2 transform ${isOpen ? 'rotate-90' : ''}`}> <IoIosArrowForward /> </span>
      </button>
        </div>
      {isOpen && (
        <ul className="absolute w-48 grid rounded mt-8 text-nowrap gap-3 text-[#525151]">
          <li><a href="#" className="block  ">Size and Detail</a></li>
          <li><a href="#" className="block  "> Stay Hydrated With Herschel Drinkware</a></li>
          <li><a href="#" className="block  ">Water Bottle Insulated 19oz/530ml</a></li>
          <li><a href="#" className="block  ">$25.00</a></li>
          <li><a href="#" className="block  ">Color:Woodland Camo</a></li>
        </ul>
      )}
    </div>
  );
};

export default desc;
