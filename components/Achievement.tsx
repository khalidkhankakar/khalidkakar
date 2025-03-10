"use client";
import React from "react";
import { Card, Carousel } from "./ui/apple-card-carousel";

export function Achievements() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div id="achievement" className="m-auto my-8 h-full flex max-w-[90vw] flex-col items-start justify-start md:max-w-2xl lg:max-w-[80vw]">
      <Carousel items={cards} />
    </div>
  );
}



const data = [
  {
    category: "",
    title: "Beginner's Typescript",
    src: "/certificate1.png",
 
  },
  {
    category: "",
    title: "React With TypeScript",
    src: "/certificate2.png",
   
  },
  
  {
    category: "",
    title: "Zod with TypeScript.",
    src: "/certificate4.png",
  },
  {
    category: "",
    title: "Sloving TypeScript Problems",
    src: "/certificate3.png",

  },

];
