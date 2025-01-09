import React from "react";

const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED] cursor-pointer"
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>

        <input type="text" name="minimum" placeholder="Min Price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"/>
        <input type="text" name="maximum" placeholder="Max Price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"/>

        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED] cursor-pointer"
        >
          <option>Size</option>
          <option value="size">Size</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED] cursor-pointer"
        >
          <option>Color</option>
          <option value="test">Test</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED] cursor-pointer"
        >
          <option>Category</option>
          <option value="new arrival">New Arrival</option>
          <option value="popular">Popular</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED] cursor-pointer"
        >
          <option>All Filters</option>
        </select>
      </div>
      <div className="">
      <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED] cursor-pointer"
        >
          <option>Short By</option>
          <option value="">Price (low to high)</option>
          <option value="">Price (high to low)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
