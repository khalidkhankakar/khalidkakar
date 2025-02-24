"use client";

import { BookOpen, HomeIcon, Phone, User, UserRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { RiMenu3Line, RiCloseLargeLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="relative">
      <nav
        className={`fixed  top-0 z-50 flex w-full flex-col  px-3 py-4  text-white  md:hidden `}
      >
        <div className="flex items-center justify-between">
          <Link href={'/'} className="text-white font-semibold font-lobster tracking-widest text-xl ">KhalidKakar </Link>
          <button onClick={toggleNavbar} className="text-lg font-bold transition-all duration-300">
            {isOpen ? (
              <RiCloseLargeLine className="h-7 w-7 transition-all duration-300 text-white" />
            ) : (
              <RiMenu3Line className="h-7 w-7 transition-all duration-300 text-white" />
            )}{" "}
          </button>
        </div>


      </nav>
      <div
        className={`bg-gradient z-50  fixed top-16 right-6  transition-all duration-300 overflow-hidden  ${isOpen ? 'flex' : 'hidden'} rounded-xl p-3 w-[300px] flex-col  space-y-3 border-[0.5px] border-gray-600`}
      >
        <Link className="group" href={"#about"}>
          <div className=" flex items-center space-x-3 rounded-xl p-2 transition-all">
            <HomeIcon size={30} />
            <div>
              <p className="text-white group-hover:text-gray-300 font-semibold uppercase">Home</p>
              <p className="text-xs text-gray-400">Welcome to my work</p>
            </div>
          </div>
          <div className="group-hover:block hidden  transition-all duration-1000  ease-in-out delay-1   h-[1px] w-full bg-gray-400 " />
        </Link>

        <Link className="group" href={"#about"}>
          <div className=" flex items-center space-x-3 rounded-xl p-2 transition-all">
            <BookOpen size={30} />
            <div>
              <p className="text-white group-hover:text-gray-300 font-semibold uppercase">About</p>
              <p className="text-xs text-gray-400">Welcome to my work</p>
            </div>
          </div>
          <div className="group-hover:block hidden  transition-all duration-1000  ease-in-out delay-1   h-[1px] w-full bg-gray-400 " />
        </Link>


        <Link className="group" href={"#about"}>
          <div className=" flex items-center space-x-3 rounded-xl p-2 transition-all">
            <UserRound size={30} />
            <div>
              <p className="text-white group-hover:text-gray-300 font-semibold uppercase">Projects</p>
              <p className="text-xs text-gray-400">Welcome to my work</p>
            </div>
          </div>
          <div className="group-hover:block hidden  transition-all duration-1000  ease-in-out delay-1   h-[1px] w-full bg-gray-400 " />
        </Link>

        <Link className="group" href={"#about"}>
          <div className=" flex items-center space-x-3 rounded-xl p-2 transition-all">
            <Phone size={30} />
            <div>
              <p className="text-white group-hover:text-gray-300 font-semibold uppercase">Contact</p>
              <p className="text-xs text-gray-400">Welcome to my work</p>
            </div>
          </div>
          <div className="group-hover:block hidden  transition-all duration-1000  ease-in-out delay-1   h-[1px] w-full bg-gray-400 " />
        </Link>

      </div>

      {/* destop navigation */}
      <nav className="fixed  top-4 left-1/2 translate-x-[-50%] z-[100] hidden w-3/4 lg:w-1/2 rounded-xl items-center justify-around bg-gradient-to-r from-[#0c0e23ad]/40 to-[#04071dc5]/40 px-2 py-2  md:flex border ">
        <div>
          <Link href={'/'} className="text-white font-semibold font-lobster text-xl tracking-widest ">KhalidKakar</Link>
        </div>
        <div className="flex items-center space-x-3 text-white">
          <Link href={"#about"}>About</Link>
          <Link href={"#contact"}>Contact</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"#project"}>Project</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
