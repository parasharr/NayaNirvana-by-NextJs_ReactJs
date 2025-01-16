import { wixClientServer } from "@/lib/wixClientServer";
import Add from "../components/Add";
import CustomizeProducts from "../components/CustomizeProducts";
import ProductImages from "../components/ProductImages";
import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";

interface PageProps {
  params: {
    slug: string;
  };
}

const SinglePage = async ({ params }: PageProps) => {
  console.log(params.slug);

  const wixClient = await wixClientServer();

  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMAGE */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages items={product.media?.items} />
      </div>
      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        {product.description && (
          <div
            className="text-sm text-gray-500"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(product.description),
            }}
          ></div>
        )}
        <div className="h-[2px] bg-gray-200" />

        {product.price?.price === product.price?.discountedPrice ? (
          <h3 className="font-medium text-2xl">₹{product.price?.price}</h3>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              ₹{product.price?.price}
            </h3>
            <h3 className="font-medium text-2xl">
              ₹{product.price?.discountedPrice}
            </h3>
          </div>
        )}

        <div className="h-[2px] bg-gray-200" />
        {product.variants && product.productOptions && (
          <CustomizeProducts
            productId={product._id!}
            variants={product.variants}
            productOptions={product.productOptions}
          />
        )}
        <Add />
        <div className="h-[2px] bg-gray-200" />
        {product.additionalInfoSections?.map((section: any) => (
          <div className="text-sm" key={section.title}>
            <h4 className="font-medium mb-4">{section.title}</h4>
            <div dangerouslySetInnerHTML={{ __html: section.description }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SinglePage;
