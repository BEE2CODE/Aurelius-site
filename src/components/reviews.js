import React from "react";
import { IoIosStar } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";

const Reviews = () => {
  return (
    <div className="pb-20">
      <p className="font-bold text-4xl text-[#11111]">Reviews</p>
      <p className="font-normal text-lg text-[#525151] mb-14 mt-5">Read what people has to say about this product</p>
      
      <div className="flex flex-col gap-6 md:flex-row">
      <div className=" flex flex-col gap-2 md:flex">
        <div className="text-customTiaMaris flex gap-2 mb-4">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>
        <p>Excellent</p>
        <p className="text-[#525151] text-base">
          I downsized my purse recently and this mini Herschel backpack has been
          a livesaver! it's the perfect in-between size for me. Now I can ditch
          the bulky bag but still carry all my essentials - phone, wallet, keys
          and even a good book for the train ride home. The magnetic clasp on
          the front pocket is a game-changer.
        </p>
        <div className="flex items-center gap-2 mt-6 ">
          <span className="rounded-2xl p-2 bg-[#525151] text-customJana"><IoPersonCircle /></span>
          <p>James Jackson</p>
        </div>
      </div>

      <div className=" flex flex-col gap-2">
        <div className="text-customTiaMaris flex gap-2 mb-4">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>
        <p>Excellent</p>
        <p className="text-[#525151] text-base">
         Let's be honest, this mini backpack is adorable! I snagged it for the weekend adventures and errands , and it's become my new go-to.The quality feels amazing - the material is super durable and the stitching is top-notch. The comfy , padded straps are a huge plus, especiallywhen the farmer's market haul get's a little heavey.  
        </p>
        <div className="flex items-center gap-2 mt-6 ">
          <span className="rounded-2xl p-2  bg-[#525151] text-customJana"><IoPersonCircle /></span>
          <p>James Jackson</p>
        </div>
      </div>
      </div>
      <button className="flex items-center text-base font-bold justify-center text-center gap-5 bg-customMarsland px-[40px] py-[13px] text-customBlazeHaze mb-20 mt-10 ">Drop a review</button>
    </div>
  );
};

export default Reviews;
