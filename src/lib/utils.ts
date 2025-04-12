import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface Star {
  position: string;
  size: string;
  blur: string;
  color: string;
}

export const createStars = (count: number, color: string): Star[] => {
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    const vw = Math.random() * 100 - 50; 
    const vh = Math.random() * 100 - 50; 
    const size = Math.random() * 2; 
    const blur = Math.random() * 2; 
    stars.push({
      position: `${vw}vw ${vh}vh`,
      size: `${size}px`,
      blur: `${blur}px`,
      color,
    });
  }
  return stars;
};