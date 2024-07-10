import React from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="w-full">
      <Link to="/">
        <div className="h-20 border-b flex items-center justify-start border-customMarsland cursor-pointer w-full">
          <img
            src={logo}
            alt="logo"
            className="flex items-center justify-center"
          />
        </div>
      </Link>

      <div className="mt-10  gap-4 p-10 md:flex  sm:flex flex-col lg:grid lg:grid-cols-[60%_35%] lg:gap-8 ">
        <div className="">
          <div className=" flex flex-col ">
            <p className="text-2xl pb-5 text-customMarsland ">
              Express checkout
            </p>

            <div className="flex gap-4 mb-14 ">
              <button className="flex gap-2 justify-center items-center bg-[#FFC43A] p-[13px] w-full  ">
                Buy with{" "}
                <span>
                  <img src="../images/paypalicon.svg" alt="paypal logo" />{" "}
                </span>
              </button>
              <button className="flex gap-2 bg-[#000]  justify-center items-center  p-[13px]  text-[#fff]  w-full ">
                Buy with{" "}
                <span>
                  <img src="../images/applepayicon.svg" alt="paypal logo" />{" "}
                </span>
              </button>
              <button className="flex gap-2 bg-[#000]  justify-center items-center  text-[#fff] p-[13px]  w-full  ">
                Buy with{" "}
                <span>
                  <img src="../images/googlepayicon.svg" alt="paypal logo" />{" "}
                </span>
              </button>
            </div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="customerinfo" className="text-start text-base">
                Customer Information
              </label>
              <p className="text-customTiaMaris font-medium">edit</p>
            </div>
            <input
              type="text"
              placeholder="jDanet@gmail.com"
              className="w-[100%] py-3 mb-6"
            />

            <div className="flex items-center justify-between">
              <label
                htmlFor="address"
                className="items-center justify-start mb-2 text-lg"
              >
                Shipping Address
              </label>
              <p className="text-customTiaMaris font-medium">edit details</p>
            </div>
            <div className="flex gap-4 w-[100%] ">
              <input
                type="text"
                placeholder="Janet"
                className="w-[100%] py-3 mb-4"
              />
              <input
                type="text"
                placeholder="Doe"
                className="w-[100%] py-3 mb-5"
              />
            </div>
            <input
              type="text"
              placeholder="2517 W.Gray St. Utica .Pennsylvania 57867"
              className="w-[100%] py-3 mb-5"
            />
            <input
              type="text"
              placeholder="Pembrooke pines"
              className="w-[100%] py-3 mb-5"
            />

            <div className="flex gap-4 w-[100%] ">
              <select
                name="location"
                id="locations"
                className="w-[100%] py-3 mb-5 text-[#828282]"
              >
                <option value="" disabled selected>
                  United States
                </option>
              </select>
              <select
                name="location"
                id="locations"
                className="w-[100%] py-3 mb-5 text-[#828282]"
              >
                <option value="" disabled selected>
                  Georgia
                </option>
              </select>
            </div>
            <div className="flex gap-4 mb-5 w-[100%]">
              <input
                type="number"
                placeholder="42574"
                className="w-[100%] py-3 mb-5"
              />
              <input
                type="number"
                placeholder="41748"
                className="w-[100%] py-3 mb-5"
              />
            </div>

            <div className="flex items-center justify-between ">
              <p className="mb-2 flex  text-base">Delivery Options</p>
              <p className="text-customTiaMaris font-medium">edit choice</p>
            </div>

            <div className="flex items-center justify-center gap-10 text-base">
              <div className="border-2  p-4 w-[100%]  border-customTiaMaris text-nowrap items-center ">
                <p className="font-bold">Home delivery</p>
                <p className="text-[#525151]">takes 3-5 business day</p>
              </div>
              <div className="border border-solid p-4 w-[100%]  text-nowrap">
                <p className="font-bold">In-store pickup</p>
                <p className="text-[#525151]">pick from store location</p>
              </div>
            </div>

            <button className="bg-customMarsland text-customBlazeHaze text-base font-bold py-[10px] mt-10">
              Submit{" "}
            </button>
          </div>
        </div>

        <div className=" flex flex-col w-full md:mt-10">
          <p className="text-2xl pb-5 text-customMarsland text-nowrap justify-start ">
            Order Summary
          </p>
          <p className="underline ">Edit Cart</p>

          <div className="flex mt-16 mb-14 gap-10">
            <div>
              <img
                src="../images/bag1.png"
                alt="cart-img"
                className=" w-[180px] rounded"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-medium pb-3  text-customMarsland text-[18px]">
                Herschel Heritage Backpack |<br /> XL
              </h2>
              <p className="font-normal text-base text-[#525151]">
                Color: Navy blue
              </p>
              <p className="font-normal text-base text-[#525151]">Qty: 1 </p>
              <p className="font-bold text-2xl">$200</p>
            </div>
          </div>
          <hr />

          <div className="mb-6 mt-8">
            <div className="flex items-center justify-between text-lg font-normal pb-2">
              <p>Subtotal:</p>
              <p>$200</p>
            </div>
            <div className="flex items-center justify-between text-lg font-normal p-2">
              <p>Tax:</p>
              <p>$5</p>
            </div>
            <div className="flex items-center justify-between text-lg font-bold p-2">
              <p>Total</p>
              <p>$250</p>
            </div>
          </div>
          <hr />
          <p className="text-3xl mb-10 pt-5">Payment options</p>
          <div className="flex mb-7 gap-2 ">
            <img src="../images/Radio.svg" alt="radio" className="mb-7" />

            <span>
              <p className="text-lg">Direct bank transfer</p>
              <p className=" text-[#828282] pt-3">
                Make payment directly through bank account
              </p>
            </span>
          </div>

          <div className="flex gap-3 mb-7">
            <img src="../images/Radio1.svg" alt="radio" className="mb-7" />
            <div>
              <p className="flex items-center text-lg gap-3  mb-4">
                Credit/Debit card
                <img src="../images/Group 70.svg" alt="card logo" />
              </p>
              <p className=" text-[#828282]">
                pay with your Visa, American Express or Mastercard.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-5 mb-14 ">
            <input type="text" placeholder="Card holder name" className="p-5" />
            <input type="text" placeholder="Card number" className="p-5" />
            <input type="text" placeholder="Expiry date" className="p-5" />
            <input
              type="text"
              placeholder="Security code (CVV)"
              className="p-5"
            />
          </div>

          <button className=" p-[13px] w-full bg-customMarsland text-center text-base text-customBlazeHaze">
            Make Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
