import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import Products from '../components/products';
import Counter from '../components/counter';

const Shop = () => {
  return (
    <div className='py-12  '>
        <div className='py-6 flex flex-col gap-5'>
        <p className='font-bold text-[32px] line-height-[43.2px] '>Explore Classy Backpacks</p>
        <p className='text-lg font-normal mb-4 text-[12px]'>Carry the weight of the world in comfort</p>
      </div>

      <div className='flex items-center justify-between'>
        <p className='text-base font-700'>| <span className='font-400 text-[16px]'>59 items</span></p>
       <div className='flex items-center justify-center'>
       <p className='flex items-center gap-2 font-500 text-[16px]'>Category <IoIosArrowDown /> </p>
       <p className='flex items-center gap-2 font-500 text-[16px]'>Sort by  <IoIosArrowDown /></p>
       </div>
      </div>
            
       <Products/>

       <div className=" flex items-center justify-center ">
      <Counter />
    </div>
    {/* <div className='grid items-center justify-end p-8'>
      <p className='text-lg '>Showing 9 of 59</p>
      <button className='bg-customMarsland text-customPurity px-[13px] py-[119px] font-bold text-base items-center justify-center'>Show more</button>
    </div> */}
    </div>
  )
}

export default Shop;