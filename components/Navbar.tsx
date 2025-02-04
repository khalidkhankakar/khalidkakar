"use client";

import Link from "next/link";
import { useState } from "react";
import { RiMenu3Line, RiCloseLargeLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header>
      <nav
        className={`absolute top-0 z-50 flex w-full flex-col py-2rounded-md bg-gradient-to-r from-[#0C0E23] to-[#04071D] px-3 py-4 border-b border-white text-white  md:hidden`}
      >
        <div className="flex items-center justify-between">
        <Link href={'/'} className="text-white font-semibold tracking-widest ">KhalidKakar </Link>
          <button onClick={toggleNavbar} className="text-lg font-bold">
            {isOpen ? (
              <RiCloseLargeLine className="h-7 w-7 text-white" />
            ) : (
              <RiMenu3Line className="h-7 w-7 text-white" />
            )}{" "}
          </button>
        </div>

        <div
          className={`flex transition-all duration-300 overflow-hidden  ${isOpen ? "max-h-[1000px]" : "max-h-0"} flex-col items-center space-y-3`}
        >
          <Link href={"#about"}>About</Link>
          <Link href={"#contact"}>Contact</Link>
          <Link href={"#blog"}>Blog</Link>
          <Link href={"#project"}>Project</Link>
        </div>
      </nav>

      {/* destop navigation */}
      <nav className="absolute top-0 z-50 hidden w-full items-center justify-around bg-gradient-to-r from-[#0C0E23] to-[#04071D] px-2 py-4  md:flex border-b border-white">
        <div>
          <Link href={'/'} className="text-white font-semibold text-xl tracking-widest ">KhalidKakar</Link>
        </div>
        <div className="flex items-center space-x-3 text-white">
          <Link href={"#about"}>About</Link>
          <Link href={"#contact"}>Contact</Link>
          <Link href={"#blog"}>Blog</Link>
          <Link href={"#project"}>Project</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
