import Image from "next/image";
import Slider from "./components/Slider";
import ProductList from "./components/ProductList";
import CatList from "./components/CatList";

export default function Home() {
  return (
   <div className="">
    <Slider />
    <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className="text-2xl font-semibold">Featured Products</h1>
      <ProductList />
    </div>
    <div className="mt-24">
      <h1 className="text-2xl font-semibold px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Categories</h1>
      <CatList />
    </div>
    <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className="text-2xl font-semibold">New Products</h1>
      <ProductList />
    </div>
   </div>
  );
}
