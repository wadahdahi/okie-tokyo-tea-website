import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "../../../../shared/constants/images";
import { useHeroSlider } from "../../useHeroSlider";
import HeroSlide from "./subcomponents/HeroSlide";

const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  const heroSlides = useMemo(() => [
    { 
      image: IMAGES.PRODUCTS.DEFAULT_POUCH, 
      bgImage: "/assets/images/articles/matcha_fields_with_misty_mountains_003.webp" 
    },
    { 
      image: IMAGES.PRODUCTS.CUP_01, 
      bgImage: "/assets/images/articles/brewing_matcha_004.webp" 
    },
    { 
      image: IMAGES.PRODUCTS.CUP_CIRCLE, 
      bgImage: "/assets/images/articles/matcha_wave_001.webp" 
    }
  ], []);

  const { currentSlide, goToSlide, totalSlides } = useHeroSlider(heroSlides, 8000);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isRTL = i18n.language === 'ar';

  return (
    <section className="relative h-screen flex items-center justify-center px-6 md:px-8 pt-40 lg:pt-10 group overflow-hidden bg-brand-bg">
      {/* IMMERSIVE BACKGROUND SLIDER */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={heroSlides[currentSlide].bgImage} 
              alt="" 
              className="w-full h-full object-cover"
            />
            {/* PREMIUM DARK OVERLAY / MASK */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/80 via-brand-bg/40 to-brand-bg z-10" />
            <div className="absolute inset-0 bg-brand-accent/5 backdrop-blur-[2px] z-10" />
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 w-full pointer-events-none">
        <img className="absolute bottom-12 left-0 bg-repeat-x w-1/2 opacity-20" src={IMAGES.PATTERNS.MATCHA_FIELDS} alt="" />
        <img className="absolute bottom-12 right-0 bg-repeat-x w-1/2 opacity-20 scale-x-[-1]" src={IMAGES.PATTERNS.MATCHA_FIELDS} alt="" />
      </div>

      <div className="container relative z-20 pb-20 lg:pb-0">
        <AnimatePresence mode="wait">
          <HeroSlide 
            key={currentSlide}
            index={currentSlide}
            image={heroSlides[currentSlide].image}
            isRTL={isRTL}
          />
        </AnimatePresence>
      </div>

      {/* CONTROLS */}
      <div className="absolute bottom-24 lg:bottom-32 left-1/2 -translate-x-1/2 z-40 flex gap-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-brand-accent w-8" : "bg-brand-accent/20 hover:bg-brand-accent/40"
            }`}
            title={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* FOOTER SHAPE (TRANSPARENT TO CONNECT WITH FEATURES) */}
      <div className="absolute -bottom-1 left-0 w-full h-20 md:h-24 rounded-[100%_100%_0_0] z-10 flex justify-center">
        <AnimatePresence>
          {!isScrolled && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 1 }} className="absolute top-2 flex flex-col items-center gap-1 scale-75">
              <div className="w-[30px] h-[50px] border-2 border-brand-accent/20 rounded-full p-1.5 flex justify-center">
                <motion.div animate={{ y: [0, 20, 0], opacity: [1, 0, 1] }} transition={{ duration: 2.5, repeat: Infinity }} className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-accent/30 translate-y-2">
                {t('header.scroll')}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;


