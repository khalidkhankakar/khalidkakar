"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import Button from "../Button";


export function ProjectCard(
    {
        projectName,
        projectExplain,
        projectImg,
        projectLink,
        projectCodeLink,
        projectTechs,
    }: {
        projectName: string;
        projectExplain: string;
        projectImg: string;
        projectLink: string;
        projectCodeLink: string;
        projectTechs: string[];
    }

) {
    return (
        <CardContainer className="inter-var bg-gradient">
            <CardBody className="bg-gradient relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    {projectName}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm  mt-2 dark:text-neutral-300"
                >
                    {projectExplain.substring(0, 150)}...
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src={projectImg}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex mt-4 items-center space-x-1 md:space-x-2">
                    {/* map techs */}
                    {projectTechs.map((projectTechImg) => (
                        <Image
                            key={projectTechImg}
                            src={projectTechImg}
                            className="h-6 w-6  object-contain"
                            width={28}
                            height={28}
                            alt={"img"}
                        />
                    ))}
                </div>

                <div className="flex justify-between items-center mt-8">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href={projectLink}
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        Live Demo →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as={Link}
                        target="__blank"
                        href={projectCodeLink}
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        
                        View Code →
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
