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

export function formatDate(isoString:Date) {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
  });
}
export function calculateReadingTime(htmlContent:string) {
  const wordsPerMinute = 200; // Average reading speed

  // Remove HTML tags using regex
  const textContent = htmlContent.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

  // Count words
  const words = textContent.split(' ').length;

  // Calculate estimated reading time
  const readingTime = Math.ceil(words / wordsPerMinute);

  return `${readingTime} min read`;

  return `${readingTime} min read`;
}



