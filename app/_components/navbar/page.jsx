'use client';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="relative bg-cover bg-center h-[564px] flex flex-col"
      style={{ backgroundImage: "url('/navbar.png')" }}
    >
      {/* Top Navigation */}
      <nav className="container mx-auto flex justify-between items-center pt-14 px-6 md:px-0">
        {/* Right: Logo */}
        <div className="flex items-center">
          <Image src="/navbar_logo.png" alt="Logo" width={200} height={50} />
        </div>

        {/* Mobile Burger Menu */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Image src="/burger-menu.svg" alt="Menu" width={30} height={30} />
          </button>
        </div>

        {/* Nav Items for Medium and Larger Screens */}
        <ul className="hidden md:flex md:space-x-8 md:pr-32 rtl:space-x-reverse items-center text-white text-[20px] font-extralight">
          <li>
            <a
              href="#"
              className="hover:text-tajwal hover:font-medium text-tajwal font-medium"
            >
              البداية
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-tajwal">
              الدول
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-tajwal">
              العروض
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-tajwal">
              مركز المساعدة
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-tajwal">
              اتصل بنا
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-tajwal text-[15px]">
              English
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-tajwal text-[15px]">
              ر.س
            </a>
          </li>
        </ul>

        {/* Left: Buttons */}
        <div className="hidden md:flex text-white gap-7 text-[20px] font-extralight">
          <button>دخول</button>
          <button className="bg-tajwal rounded-lg w-[150px] h-[50px]">تسجيل</button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <ul className="fixed text-white top-0 right-0 h-full w-64 bg-black bg-opacity-90 z-50 flex flex-col items-center space-y-6 pt-20 md:hidden">
          <li>
            <a
              href="#"
              className="hover:text-tajwal hover:font-medium text-tajwal font-medium"
            >
              البداية
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-tajwal">
              الدول
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-tajwal">
              العروض
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-tajwal">
              مركز المساعدة
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-tajwal">
              اتصل بنا
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-tajwal text-[15px]">
              English
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-tajwal text-[15px]">
              ر.س
            </a>
          </li>
        </ul>
      )}

      {/* Mobile Login/Register */}
      <div className="flex justify-between items-center md:hidden mt-4 px-6">
        <button className="text-white text-[18px]">دخول</button>
        <button className="bg-tajwal rounded-lg px-6 py-2 text-white text-[18px]">تسجيل</button>
      </div>

      {/* Middle Section: Heading and Search Bar */}
      <div className="flex flex-col items-center justify-center mt-28 px-6">
        <h1 className="text-white text-[30px] md:text-[40px] font-bold mb-2 text-center">
          إبقي متصلاً <span className="bg-tajwal rounded-lg">أينما كنت</span>
        </h1>
        <p className="text-white text-[16px] md:text-[20px] font-extralight text-center">
          في أكثر من 200 دولة
        </p>

        {/* Search Bar */}
        <div className="relative mt-6 w-full max-w-lg h-[50px] md:h-[70px]">
          <input
            type="text"
            placeholder="ابحث"
            className="w-full h-full pl-16 pr-12 text-right rounded-lg font-light text-gray-500 text-[16px] md:text-[20px]"
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Image src="/Vector.png" width={25} height={25} alt="search_logo" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
