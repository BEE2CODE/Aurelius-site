import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Shoppingcard = ({ image, text, rating, price,length,index }) => {
  return (
    <Link to ='shop' className={`p-2 ${length && index && length== index && "hidden"} lg:block`}>
      <div className=" rounded-lg overflow-hidden  items-center justify-center">
        <img className="w-full h-50% object-cover object-center" src={image} alt={image} />
        <div className="p-4 flex flex-col gap-[14px]">
          <h2 className="text-lg ">{text}</h2>
          <div className="flex items-center">
            <span className="text-[#BD4423]">
              <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 15.563l-5.26 2.51a.917.917 0 0 1-1.317-1.011l1.006-5.823-4.254-4.144a.917.917 0 0 1 .536-1.566l5.89-.855 2.63-5.338a.917.917 0 0 1 1.648 0l2.63 5.338 5.89.855a.917.917 0 0 1 .536 1.566l-4.254 4.144 1.006 5.823a.917.917 0 0 1-1.317 1.011L10 15.563z"
                />
              </svg>
            </span>
            <span className="text-gray-600 ml-2">{rating}</span>
          </div>
          <span className="text-gray-800 font-bold text-lg">{price}</span>
        </div>
      </div>
      <Outlet />
    </Link>
  );
};

export default Shoppingcard;




