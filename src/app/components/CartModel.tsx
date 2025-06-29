"use client";

import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";
import Image from "next/image";
import { useEffect } from "react";
import {media} from "@wix/sdk"

const CartModel = () => {
  // const cartItems = true;

  const wixClient = useWixClient();

  const { getCart, cart } = useCartStore();

  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgba(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cart.lineItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          {/* LIST */}
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            {cart.lineItems?.map((item) => (
              <div className="flex gap-4" key={item._id}>
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
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold">{item.productName?.original}</h3>
                      <div className="p-1 bg-gray-50 rounded-sm">{item.price?.amount}</div>
                    </div>
                    {/* DESCRIPSTION */}
                    <div className="text-sm text-gray-500">{item.availability?.status}</div>
                  </div>
                  {/* BOTTOM */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">{item.quantity}</span>
                    <span className="text-blue-500">Remove</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* BUTTONS */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">₹1,999</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at Checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-500">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white hover:bg-gray-900">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModel;
