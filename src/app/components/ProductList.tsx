import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import Pagination from "./Pagination";

const PRODUCT_PER_PAGE = 8;

const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  try {
    const wixClient = await wixClientServer();

    // Await the searchParams before using their properties
    const awaitedSearchParams = await Promise.resolve(searchParams);

    const productQuery = wixClient.products
      .queryProducts()
      .startsWith("name", awaitedSearchParams?.name || "")
      .eq("collectionIds", categoryId)
      .hasSome(
        "productType",
        awaitedSearchParams?.type
          ? [awaitedSearchParams.type]
          : ["physical", "digital"]
      )
      .gt("priceData.price", awaitedSearchParams?.min || 0)
      .lt("priceData.price", awaitedSearchParams?.max || 999999)
      .limit(limit || PRODUCT_PER_PAGE)
      .skip(
        awaitedSearchParams?.page
          ? parseInt(awaitedSearchParams.page) * (limit || PRODUCT_PER_PAGE)
          : 0
      );

    if (awaitedSearchParams?.sort) {
      const [sortType, sortBy] = awaitedSearchParams.sort.split(" ");

      if (sortType === "asc") {
        productQuery.ascending(sortBy);
      }
      if (sortType === "desc") {
        productQuery.descending(sortBy);
      }
    }

    const response = await productQuery.find();

    return (
      <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        {response.items && response.items.length > 0 ? (
          response.items.map((product: products.Product) => (
            <Link
              href={"/" + product.slug}
              className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
              key={product._id}
            >
              <div className="relative w-full h-80">
                <Image
                  src={product.media?.mainMedia?.image?.url || "/product.png"}
                  alt=""
                  fill
                  sizes="25vw"
                  className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
                />
                {product.media?.items && (
                  <Image
                    src={product.media?.items[1]?.image?.url || "/product.png"}
                    alt=""
                    fill
                    sizes="25vw"
                    className="absolute object-cover rounded-md"
                  />
                )}
              </div>
              <div className="flex justify-between">
                <span className="font-medium">{product.name}</span>
                <span className="font-semibold">${product.price?.price}</span>
              </div>
              {product.description && (
                <div
                  className="text-sm text-gray-500"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(product.description),
                  }}
                ></div>
              )}
              <button className="rounded-2xl ring-1 ring-cartNum text-cartNum py-2 px-4 text-xs hover:bg-cartNum hover:text-white font-semibold w-max">
                Add to Cart
              </button>
            </Link>
          ))
        ) : (
          <div>No products found.</div>
        )}
        <Pagination
          currentPage={response.currentPage || 0}
          hasPrev={response.hasPrev()}
          hasNext={response.hasNext()}
        />
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return <div>Failed to load products.</div>;
  }
};

export default ProductList;