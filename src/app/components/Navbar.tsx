import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavbarIcons from "./NavbarIcons";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <Image
            src="/Screenshot_2025-01-05_004902-removebg.png"
            alt="Logo"
            width={200}
            height={100}
          />
        </Link>
        {/* MENU COMPT */}
        <Menu />
      </div>
      {/*BIG SCREENS*/}
      <div className="hidden md:flex items-center h-full justify-between gap-8">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-24 text-1xl text-gray-800 font-medium">
          <Link href="/" className="flex items-center">
            <Image
              src="/Screenshot_2025-01-05_004902-removebg.png"
              alt="Logo"
              width={200}
              height={100}
            />
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/" className="hover:text-gray-500">Home</Link>
            <Link href="/" className="hover:text-gray-500">Shop</Link>
            <Link href="/" className="hover:text-gray-500">About</Link>
            <Link href="/" className="hover:text-gray-500">Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavbarIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
