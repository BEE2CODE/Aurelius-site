import React, { useState } from 'react';

const Counted = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="flex items-center border justify-center p-4">
      <button
        onClick={decrement}
        className=" text-black  px-4 py-2 rounded-l  focus:outline-none"
      >
        -
      </button>
      <span className="px-4 py-2 ">{count}</span>
      <button
        onClick={increment}
        className=" text-black px-4 py-2 rounded-r  focus:outline-none"
      >
        +
      </button>
    </div>
  );
};

export default Counted;
