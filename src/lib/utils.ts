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
  type: 'small' | 'medium' | 'large';
  animationDuration: string;
  animationType: string;
}

export const createStars = (count: number, color: string): Star[] => {
  const stars: Star[] = [];
  const animationTypes = ['pulse', 'twinkle', 'flicker', 'float'];
  
  for (let i = 0; i < count; i++) {
    const vw = Math.random() * 100 - 50; 
    const vh = Math.random() * 100 - 50; 
    const size = Math.random() * 3; 
    
    // Size sınıfını belirle
    let type: 'small' | 'medium' | 'large';
    if (size < 1) {
      type = 'small';
    } else if (size < 2) {
      type = 'medium';
    } else {
      type = 'large';
    }
    
    // Boyuta göre blur değerini belirle
    const blur = type === 'small' ? Math.random() + 1 : 
                type === 'medium' ? Math.random() * 2 + 1.5 :
                Math.random() * 3 + 2;
    
    // Rastgele animasyon seç
    const animationType = animationTypes[Math.floor(Math.random() * animationTypes.length)];
    
    // Animasyon süresini belirle - küçük yıldızlar daha hızlı yanıp söner
    let duration;
    if (type === 'small') {
      duration = Math.random() * 2 + 2; // 2-4s
    } else if (type === 'medium') {
      duration = Math.random() * 3 + 3; // 3-6s
    } else {
      duration = Math.random() * 4 + 4; // 4-8s
    }
    
    stars.push({
      position: `${vw}vw ${vh}vh`,
      size: `${size}px`,
      blur: `${blur}px`,
      color,
      type,
      animationDuration: `${duration}s`,
      animationType
    });
  }
  return stars;
};