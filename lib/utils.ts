import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { techMap } from "./tech-map";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getDeviconClassName = (techName: string) => {
  const normalizedTechName = techName.replace(/[ .]/g, "").toLowerCase();

  return techMap[normalizedTechName]
    ? `${techMap[normalizedTechName]} colored`
    : "devicon-devicon-plain";
};