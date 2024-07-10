import React from 'react';
import Shoppingcard from './shoppingcard';


const Products = () => {
    const shoppingItems = [
        { id: 1, image:'/images/bag1.png', text: 'Herschel Heritage Backpack | XL', rating: 4.5, price: '$200' },
        { id: 2, image: '/images/bag2.png', text: 'Little American Backpack | Premium  Classics - 30l', rating: 4.5, price: '$245' },
        { id: 3, image: '/images/bag3.png', text: 'Retreat™ Backpack 23L', rating: 4.5, price: '$300' },
        { id: 4, image:'/images/bag4.png', text: 'Kasio Backpack | Tech-30L', rating: 4.5, price: '$320' },
        { id: 5, image: '/images/bag5.png', text: 'Kasio Backpack | Sch - 30L', rating: 4.5, price: '$240' },
        { id: 6, image: '/images/bag6.png', text: 'Little America Backpack | Sch - 30L', rating: 4.5, price: '$130' },
        { id: 7, image:'/images/bag7.png', text: 'Little America Backpack | Classics - 30L', rating: 4.5, price: '$200' },
        { id: 8, image: '/images/bag8.png', text: 'Kasio Backpack |  Sch -XL', rating: 4.5, price: '$245' },
        { id: 9, image: '/images/bag9.png', text: 'Cosmoa Backpack | Travel - 30L', rating: 4.5, price: '$400' },
      ];

  return (
    <div className=" py-8 ">
      <div className="grid lg:grid-cols-3 grid-cols-2">
        {shoppingItems.map((item,index )=> (
          <Shoppingcard
            key={item.id}
            length={shoppingItems.length-1}
            index ={index}
            image={item.image}
            text={item.text}
            rating={item.rating}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
