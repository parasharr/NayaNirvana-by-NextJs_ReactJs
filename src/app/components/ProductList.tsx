import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="/4c9efaa40e3429f05a4c200478d89aef.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
          />
          <Image 
            src="/Ufff🫀💞.jpeg"
            alt="" 
            fill 
            sizes="25vw" 
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">₹1,859</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-cartNum text-cartNum py-2 px-4 text-xs hover:bg-cartNum hover:text-white font-semibold w-max">Add to Cart</button>
      </Link>
    </div>
  );
};

export default ProductList;
