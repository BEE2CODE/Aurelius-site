import React, { useState } from 'react'
import { APIIMAGE } from '../constants';

const ApiCalls = ({images}) => {
    const [active, setActive] = useState (0);
  

    const handleIndexClick = (event) => {
        setActive(+event.target.dataset.index);
    };


  return (
    <div className='flex gap-2 flex-col md:flex-row'>
        <div className="flex-grow w-full ">
        <img src={`${APIIMAGE}/images/${images[active].url}`} alt="bag-img" className="w-full" />
      </div>

      <div className="flex md:flex-col h-[10%] md:w-[20%] items-center md:items-start gap-2 ">
        {images && images.map((photo,index) => {
         return <div  key={photo.url} className=' h-full flex-grow  basis-1 flex-shrink md:w-[95px] md:h-[95px] '>
         <img
        
         src={`${APIIMAGE}/images/${photo.url}`}
         className={`h-full w-full ${index === active ? "active" : ""}`}
         alt="bag thumbnail"
         onClick={handleIndexClick}
         data-index={index}
       />
       </div>
})}


      </div> 
    </div>
  )
}

export default ApiCalls;