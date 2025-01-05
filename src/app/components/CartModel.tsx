"use client"

import Image from "next/image";

const CartModel = () => {

  const cartItems = true;

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgba(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <div className="flex gap-4">
          <Image 
          src="/sharara_set_23c9d33a-b625-4de3-8115-b694e49354a1_1024x1024.jpg"
          alt=""
          width={72}
          height={96}
          className="object-cover rounded-md"
          />
          <div className="flex flex-col justify-between w-full">
            {/* TOP */}
            <div className="">
            {/* TITLE */}
            <div className="">
              <h3>Product name</h3>
              <div>₹1,999</div>
            </div>
            {/* DESCRIPSTION */}
            <div className="">available</div>
            </div>
            {/* BOTTOM */}
            <div className="">
              
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartModel
