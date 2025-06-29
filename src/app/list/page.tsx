export const dynamic = 'force-dynamic';

import Image from "next/image";
import { Suspense } from "react";
import Filter from "@/app/components/Filter";
import ProductList from "@/app/components/ProductList";
import Skeleton from "@/app/components/Skeleton";
import { wixClientServer } from "@/lib/wixClientServer";


type SearchParams = Record<string, string | string[] | undefined>;

interface ListPageProps {
  searchParams: Promise<SearchParams>;
}

export default async function ListPage({ searchParams }: ListPageProps) {
  const params = await searchParams;

  const wixClient = await wixClientServer();

  const catSlug =
    typeof params.cat === "string" ? params.cat : "all-products";

  const cat = await wixClient.collections.getCollectionBySlug(catSlug);

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* ── CAMPAIGN BANNER ───────────────────────────── */}
      <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
          <button className="rounded-3xl bg-lama text-white w-max py-3 px-5 text-sm">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image
            src="/x-Banner-2.jpeg"
            alt="Promo banner"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* ── FILTER ───────────────────────────────────── */}
      <Filter />

      {/* ── PRODUCTS ─────────────────────────────────── */}
      <h1 className="mt-12 text-xl font-semibold">
        {cat?.collection?.name} For You!
      </h1>

      <Suspense fallback={<Skeleton />}>
        <ProductList
          categoryId={
            cat.collection?._id ?? "00000000-000000-000000-000000000001"
          }
          // 🡆 pass the resolved params object (not the Promise)
          searchParams={params}
        />
      </Suspense>
    </div>
  );
}
