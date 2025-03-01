import Image from "next/image";
import React from "react";
import { BoxReveal } from "./magicui/box-reveal";
import { TextAnimate } from "./magicui/text-animate";

const About = () => {
  return (
    <div id="#about" className="m-auto flex max-w-[90vw] flex-col items-start justify-start md:max-w-2xl lg:max-w-[80vw]">
      <BoxReveal boxColor={"#12fc37"} duration={0.5}>
        <h2 className="h2-bold text-white">
          Explore <span className="text-green-1 font-lobster">Khalid&apos;s journey</span>
        </h2>
      </BoxReveal>

      <div className="rounded-xl  px-4 py-3 flex flex-col items-center justify-center">
        <div className=" relative w-full my-2 ">
          <div className="border-2 w-fit m-auto rounded-full border-[#272A3C] bg-gradient-to-r from-[#0C0E23] to-[#04071D]">
            <Image src='/profile.jpg' width={200} height={200} alt="khalid" className="md:h-40 md:w-40 h-32 w-32 object-contain z-40 rounded-full" />
          </div>
          <div className="  w-full h-1 absolute -z-10 top-[50%] bg-gradient-to-r from-[#272a4d] to-[#2c3575] " />
        </div>
        <div className="about-text">
          <TextAnimate className="text-[14px] font-light tracking-wide text-purple-1 md:text-[20px]" animation="fadeIn" by="word" once>
            My name is Khalid Kakar, and I am a frontend web developer from
            Pakistan with expertise in modern web technologies such as React.js
            and Next.js. Leveraging these cutting-edge tools, I create scalable
            and optimized web applications. 
            
            I have completed two internships as a React.js developer, and in the
            past year, I worked as a frontend Next.js developer at Technocloud
            Company in Lahore for six months.
          </TextAnimate>

        </div>
      </div>
    </div>
  );
};

export default About;
