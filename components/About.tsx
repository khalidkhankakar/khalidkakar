import Image from "next/image";
import React from "react";
import { BoxReveal } from "./magicui/box-reveal";
import { TextAnimate } from "./magicui/text-animate";

const About = () => {
  return (
    <div id="#about" className="m-auto flex max-w-[90vw] flex-col items-start justify-start md:max-w-2xl lg:max-w-[80vw]">

      <div className="rounded-xl  px-4 py-3 flex flex-col items-center justify-center">
        <div className=" relative w-full my-2 ">
          <div className="border-2 w-fit m-auto rounded-full border-[#272A3C] bg-gradient-to-r from-[#0C0E23] to-[#04071D]">
            <Image src='/profile.jpg' width={200} height={200} alt="khalid" className="md:h-40 md:w-40 h-32 w-32 object-contain z-40 rounded-full" />
          </div>
          <div className="  w-full h-1 absolute -z-10 top-[50%] bg-gradient-to-r from-[#272a4d] to-[#2c3575] " />
        </div>
        <div className="about-text">
          <TextAnimate className="text-[14px] font-light tracking-wide text-purple-1 md:text-[20px]" animation="fadeIn" by="word" once>
          Khalid Kakar is a Pakistani software engineer actively contributing to open-source projects. He is dedicated to making the web faster, more scalable, accessible, and optimized to deliver the best user experience. Previously, he worked as an intern specializing in Next.js and JavaScript development. You can explore Khalid's blog on his website and the Dev Community.
          </TextAnimate>

        </div>
      </div>
    </div>
  );
};

export default About;
