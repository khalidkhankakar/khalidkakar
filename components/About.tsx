import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="#about" className="m-auto flex max-w-[90vw] flex-col items-start justify-start md:max-w-2xl lg:max-w-[80vw]">
      <h2 className="h2-bold text-white">
        Explore <span className="text-green-1">Khalid&apos;s journey</span>
      </h2>
      <div className="rounded-xl  px-4 py-3 flex flex-col items-center justify-center">
        <div className=" relative w-full my-2 ">
          <div className="border-2 w-fit m-auto rounded-full border-[#272A3C] bg-gradient-to-r from-[#0C0E23] to-[#04071D]">
          <Image src='/profile.jpg' width={200} height={200} alt="khalid" className="md:h-40 md:w-40 h-32 w-32 object-contain z-40 rounded-full" />
          </div>
          <div className="  w-full h-1 absolute -z-10 top-[50%] bg-gradient-to-r from-[#272a4d] to-[#2c3575] " />
        </div>
        <div className="about-text">
        <p className="text-[14px] font-light tracking-wide text-purple-1 md:text-[20px]">
          My name is Khalid Kakar, and I am a frontend web developer from
          Pakistan with expertise in modern web technologies such as React.js
          and Next.js. Leveraging these cutting-edge tools, I create scalable
          and optimized web applications.
        </p>
        <p className="text-[14px] font-light tracking-wide text-purple-1 md:text-[20px]">
          I have completed two internships as a React.js developer, and in the
          past year, I worked as a frontend Next.js developer at Technocloud
          Company in Lahore for six months.
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;
