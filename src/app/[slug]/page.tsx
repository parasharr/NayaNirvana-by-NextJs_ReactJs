import Add from "../components/Add";
import CustomizeProducts from "../components/CustomizeProducts";
import ProductImages from "../components/ProductImages";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMAGE */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
      <h1 className="text-4xl font-medium">Product Name</h1>
      <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus voluptatem harum quae a maiores culpa id cupiditate ex nostrum facere cum minima libero blanditiis illo, fugit explicabo doloremque totam.</p>
      <div className="h-[2px] bg-gray-200" />
      <div className="flex items-center gap-4">
        <h3 className="text-xl text-gray-500 line-through">₹2,555</h3>
        <h3 className="font-medium text-2xl">₹1,859</h3>
      </div>
      <div className="h-[2px] bg-gray-200" />
      <CustomizeProducts />
      <Add />
      <div className="h-[2px] bg-gray-200" />
      <div className="text-sm">
        <h4 className="font-medium mb-4">Title</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, a aut, ab ex, dolore corporis iure ea voluptate facilis alias rerum est repellat asperiores cupiditate sapiente id. Aliquid, labore exercitationem.</p>
      </div>
      <div className="text-sm">
        <h4 className="font-medium mb-4">Title</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, a aut, ab ex, dolore corporis iure ea voluptate facilis alias rerum est repellat asperiores cupiditate sapiente id. Aliquid, labore exercitationem.</p>
      </div>
      <div className="text-sm">
        <h4 className="font-medium mb-4">Title</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, a aut, ab ex, dolore corporis iure ea voluptate facilis alias rerum est repellat asperiores cupiditate sapiente id. Aliquid, labore exercitationem.</p>
      </div>
      </div>
    </div>
  );
};

export default SinglePage;
