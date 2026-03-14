import { useState, useEffect } from "react";

interface SlideData {
  image: string;
}

export const useHeroSlider = (slides: SlideData[], duration: number = 8000) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, duration);

    return () => clearInterval(timer);
  }, [slides.length, duration]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return {
    currentSlide,
    goToSlide,
    totalSlides: slides.length
  };
};
