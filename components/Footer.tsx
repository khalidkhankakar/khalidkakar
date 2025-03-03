import { socialContacts } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex w-full space-y-3 md:space-y-0 flex-col items-center justify-around bg-gradient-to-r from-[#0C0E23] to-[#04071D] px-2 py-3 text-center text-[10px] text-purple-1 md:flex-row md:text-[14px]">
      <div>
        {/* text */}
        <p className="font-light">
          Copyright All rights reserved &copy; 2025 Khalid Kakar
        </p>
      </div>
      <div className="flex items-center justify-center space-x-3">
        {/* social links */}
        {socialContacts.map((social) => (
          <Link  href={social.link} target="_blank">
          <Image
            src={social.img}
            key={social.name}
            className="h-5 w-5"
            alt={social.name}
            width={20}
            height={20}
            />
            </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
