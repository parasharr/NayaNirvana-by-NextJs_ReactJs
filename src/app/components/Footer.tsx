import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      <div className="flex flex-col md:flex-row justify-between gap-24">
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <Image
              src="/Screenshot_2025-01-05_004902-removebg.png"
              alt="Logo"
              width={130}
              height={100}
            />
          </Link>
          <p className="">
            Vishnudham CHS, Corner of 14th Road & Linking Road, Khar West,
            Mumbai, Maharashtra 400052
          </p>
          <span className="font-semibold">nayanirvanapvtlmt@gmail.com</span>
          <span className="font-semibold">+1 234 873 103</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg mt-1">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="" className="hover:text-gray-500">About Us</Link>
              <Link href="" className="hover:text-gray-500">Careers</Link>
              <Link href="" className="hover:text-gray-500">Affiliates</Link>
              <Link href="" className="hover:text-gray-500">Blogs</Link>
              <Link href="" className="hover:text-gray-500">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg mt-1">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="" className="hover:text-gray-500">New Arrivals</Link>
              <Link href="" className="hover:text-gray-500">Accessories</Link>
              <Link href="" className="hover:text-gray-500">Men</Link>
              <Link href="" className="hover:text-gray-500">Women</Link>
              <Link href="" className="hover:text-gray-500">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg mt-1">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="" className="hover:text-gray-500">Customer Service</Link>
              <Link href="" className="hover:text-gray-500">My Account</Link>
              <Link href="" className="hover:text-gray-500">Find a Store</Link>
              <Link href="" className="hover:text-gray-500">Legal & Privacy</Link>
              <Link href="" className="hover:text-gray-500">Gift Card</Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p className="">
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email adress"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-cartNum text-white">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/skrill.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2025 NayaNirvana Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">India | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">₹ Rupee</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
