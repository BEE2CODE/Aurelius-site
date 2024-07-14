import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import Desc from "./desc";
import SizeDetails from "./SizeDetails";
import Counter from "./counter";
import Reviews from "./reviews";
import Shoppingcard from "./shoppingcard";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "./apiCalls";
import { useQuery } from "@tanstack/react-query";
import { useCart } from "../context/CartContext";
import {
  APIIMAGEURL,
  APIKEY,
  APIURLPRODUCT,
  APIURLPRODUCTS,
  APPID,
  ORGID,
} from "../ApiKeys";
import { fetchProduct, fetchProducts } from "../helpers";

const Productdetails = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { id } = useParams();
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(3);
  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id, APIURLPRODUCT, ORGID, APPID, APIKEY],
    queryFn: fetchProduct,
  });

  const { data: products, isLoading: isProductsLoading } = useQuery({
    queryKey: ["products", APIURLPRODUCTS, ORGID, APPID, APIKEY, page, size],
    queryFn: fetchProducts,
  });
  const { state: cartItems, addToCart } = useCart();
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate("/");
  };
  if (isLoading) return <div>Loading....</div>;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="pt-8 relative">
      {product ? (
        <div className="lg:grid lg:grid-cols-[60%_40%] gap-2 flex flex-col">
          <Carousel images={product.photos} />

          <div className="px-10">
            <p className="text-xl mb-4 font-light text-[#525151] md:pb-7 ">
              Shop / {product.name}
            </p>
            <p className="text-4xl mb-4 ">{product.name} | XL</p>
            <p className="text-4xl font-bold">
              $ {product.current_price ? product.current_price[0].LRD[0] : 200}
            </p>
            <div className="flex items-center justify-start gap-3 text-2xl mb-6 pb-4 mt-3">
              <IoIosStar className="text-customTiaMaris" />
              <p>{product.extra_infos[0].value}</p>
              <span className="underline">Reviews</span>
            </div>
            <hr />
            <p className="mt-3 mb-8 pb-3 text-lg text-customMarsland font-medium">
              Available Color: Black 7 Brown
            </p>

            <div className="flex gap-4  mb-8">
              <button
                className="p-[13px] w-full gap-[10] font-bold text-nowrap text-[#FFFF] bg-black"
                onClick={() =>
                  addToCart({
                    name: product.name,
                    price: product.current_price
                      ? product.current_price[0].LRD[0]
                      : 200,
                    image: `${APIIMAGEURL}/images/${product.photos[0].url}`,
                    id: product.id,
                  })
                }
              >
                Add to Cart $
                {product.current_price ? product.current_price[0].LRD[0] : 200}
              </button>

              <button className="p`-[13px] w-full border-[0.7] bg-white  text-nowrap  gap-[10]">
                Buy Now {product.name}
              </button>
            </div>
            <p className="text-center text-[#525151]  mb-6 ">
              Free shipping over $500
            </p>
            <hr />
            <Desc />
            <hr />
            <SizeDetails />
            <hr />

            <div className="flex items-center justify-start gap-6 pb-4 pt-6">
              <p className="underline font-medium">Shipping</p>
              <p>Warranty</p>
              <p>Returns</p>
            </div>
            <p className="text-[#525151] flex justify-start text-base ">
              Shipment takes between 2-3days of orders
            </p>
          </div>
        </div>
      ) : (
        <div>No product found</div>
      )}

      <div className="mt-40">
        <p className="font-medium text-[32px] pb-6 md:text-[24px]">
          Things you might like
        </p>
        <div className="grid grid-cols-3">
          {isProductsLoading && <div>Loading..</div>}
          {products &&
            products.items.map((item) => {
              return (
                <Shoppingcard
                  key={item.id}
                  id={item.id}
                  image={item.photos[0].url}
                  text={item.name}
                  rating={item.rating}
                  price={
                    item.current_price[0].LRD
                      ? item.current_price[0].LRD[0]
                      : 200
                  }
                />
              );
            })}
          {/* {bags &&
            bags
              .slice(0, 3)
              .map((item, index) => (
                <Shoppingcard
                  key={item.id}
                  image={item.images[index]}
                  text={item.text}
                  rating={item.rating}
                  price={item.price}
                />
              ))} */}
        </div>
        <div className="flex items-center w-full justify-end">
          <Counter count={10} total={30} details={true} handleViewMore={handleViewMore} />
        </div>
      </div>
      <Reviews />
    </div>
  );
};

export default Productdetails;
