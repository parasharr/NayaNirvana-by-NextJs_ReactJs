"use client";

import { products } from "@wix/stores";
import React, { useState } from "react";

const CustomizeProducts = ({
  productId,
  variants,
  productOptions,
}: {
  productId: string;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
}) => {
  const [selectedOpt, setSelectedOpt] = useState<{ [key: string]: string }>({});

  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;

      if (!variantChoices) return false;

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) && variant.stock?.inStock
      );
    });
  };

  const handleOptions = (optionType: string, choice: string) => {
    setSelectedOpt((prev) => ({ ...prev, [optionType]: choice }));
  };
  console.log(selectedOpt);
  return (
    <div className="flex flex-col gap-6">
      {productOptions.map((option) => (
        <div className="flex flex-col gap-4" key={option.name}>
          <h4 className="font-medium ">Choose a {option.name}</h4>
          <ul className="flex items-center gap-3" >
          {option.choices?.map((choice) => {
            const disabled = !isVariantInStock({
              ...selectedOpt,
              [option.name!]: choice.description!,
            });
            const selected =
            selectedOpt[option.name!] === choice.description;

          const clickHandler = disabled
            ? undefined
            : () => handleOptions(option.name!, choice.description!);

            return option.name === "Color" ? (
              <li
                key={choice.description}
                className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative bg-[#314663]" style={{
                  cursor: disabled ? "not-allowed" : "pointer"
                }}
                
                onClick={clickHandler}
              >
                {selected && (
                  <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                )}
                {disabled && (
                  <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                )}
              </li>
            ) : (
              <li
                key={choice.description}
                className="ring-1 ring-cartNum text-cartNum rounded-md py-1 px-4 text-sm" style={{
                  cursor: disabled ? "not-allowed" : "pointer",
                  backgroundColor: selected ? "#f35c7a" : disabled ? "#FBCFE8" : "white",
                  color: selected || disabled ? "white" : "#f35c7a"
                }} 
                onClick={clickHandler} 
              >
                {choice.description}
              </li>
            );
          })}
          </ul>
        </div>
      ))}
      {/* 
          <ul className="flex items-center gap-3" >
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-[#314663]">
              <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </li>
          </ul> */}
      {/* <h4 className="font-medium ">Choose a size</h4>
      <ul className="flex items-center gap-3 flex-wrap">
        <li className="ring-1 ring-cartNum text-cartNum rounded-md py-1 px-4 text-sm cursor-pointer">
          Small
        </li>
        <li className="ring-1 ring-cartNum text-white bg-cartNum rounded-md py-1 px-4 text-sm cursor-pointer">
          Medium
        </li>
        <li className="ring-1 ring-cartNum text-cartNum rounded-md py-1 px-4 text-sm cursor-pointer">
          Large
        </li>
        <li className="ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed">
          Extra Large
        </li>
      </ul> */}
    </div>
  );
};

export default CustomizeProducts;
