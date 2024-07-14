import React, { useContext, useEffect, useState } from "react";
import Shoppingcard from "./shoppingcard";
import { useQuery } from "@tanstack/react-query";
import { useApp } from "../context/AppContext";
import Counter from "./counter";
import { APIKEY, APIURLPRODUCTS, APPID, ORGID } from "../ApiKeys";
import { fetchProducts } from "../helpers";




const Products = () => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [allProducts, setAllProducts] = useState([]);
  const {total, setTotal}  = useApp()
  const [count, setcount]    = useState(10)


  const { data:products, isLoading, isError } = useQuery({
    queryKey: ["products",APIURLPRODUCTS, ORGID, APPID, APIKEY, page, size],
    queryFn: fetchProducts,
    keepPreviousData: true,
  });

  useEffect(() => {
    if (products) {
      setAllProducts((prevProducts) => [...prevProducts, ...products.items]);
    
    }
    if (products){
      setTotal(products.total)
    }
  }, [products]);

  const handleViewMore = (details) => {
    if (details){
      navigate("/")
      return
    }
    setPage((prevPage) => prevPage + 1);
    setcount(count + products.items.length)
  };

  if (isLoading) return <div>Loading....</div>;
  if (isError) return <div>Error loading products</div>;


 

  if (isLoading) return <div>Loading....</div>;

 

  return (
    <>
    <div className=" py-8 ">
      <div className="grid lg:grid-cols-3 grid-cols-2">
        {allProducts && allProducts.map ((item, index) =>   {
          return (
  
      <Shoppingcard
        key={item.id}
        id={item.id}
        image={item.photos[0].url}
        text={item.name}
        rating={item.rating}
        price={item.current_price[0].LRD ? item.current_price[0]?.LRD[0]: 200}
        />
)})}
      
      </div>
    </div>
    <div className=" flex items-center justify-center ">
    <Counter handleViewMore = {handleViewMore} count = {count} total= {total} />
  </div>
    </>
  );
};

export default Products;
