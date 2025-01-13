import Slider from "./components/Slider";
import ProductList from "./components/ProductList";
import CatList from "./components/CatList";
import { Suspense, useContext, useEffect } from "react";
import { WixClientContext } from "@/context/wixContext";
import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";
import Skeleton from "./components/Skeleton";

const Home = async () => {
  // const wixClient = useWixClient();

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const response = await wixClient.products.queryProducts().find();
  //     console.log(response)
  //   };

  //   getProducts()
  // }, [wixClient]);

  // const wixClient = await wixClientServer();

  // const response = await wixClient.products.queryProducts().find();

  // console.log(response.items);

  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl font-semibold">Featured Products</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl font-semibold px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
        <Suspense fallback={<Skeleton />}>
          <CatList />
        </Suspense>
      </div>
      {/* <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl font-semibold">New Products</h1>
        <ProductList />
      </div> */}
    </div>
  );
};

export default Home;
