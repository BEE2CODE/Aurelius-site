import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";


const SizeDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className='relative md:mb-4 mt-3'>
    <div className="flex text-customMarsland items-center justify-between">
      <p>Size & Details</p>
      <button onClick={toggleDropdown} className=" px-4 py-2 rounded">
         <span className={`flex-grow ml-2 transform ${isOpen ? 'rotate-180' : ''}`}> <IoIosArrowForward /></span>
      </button>
      </div>
      {isOpen && (
        <ol className="absolute grid  mt-2 w-48 p-2 rounded text-nowrap gap-3 text-[#525151]">
          <li className="block ">Dimension: 6.75"(H) x 2.00"(W)</li>
          <li className="block ">Ecosystem™ Liner made from 100% recycled post-consumer water bottles</li>
          <li className="block ">Tonal stripe Ecosystem™ Liner made from 100%  recycled post-consumer </li>
          <li className="block ">Zippered closure wth pruisk cord pull</li>
          <li className="block  ">Smooth webbing strap adjusts for comfortable hands-free journeys</li>
          <li className="block  ">Front sleeve pocket</li>
          <li className="block  ">Internal storage sleeve</li>
          <li className="block ">Put Yourself  out There internal label</li>
        </ol>
      )}
    </div>
  );
};

export default SizeDetails;
