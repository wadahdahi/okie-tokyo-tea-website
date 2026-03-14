import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../../../../../shared/components/Button/Button";

interface HeroSlideProps {
  index: number;
  image: string;
  isRTL: boolean;
}

const HeroSlide: React.FC<HeroSlideProps> = ({ index, image, isRTL }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 w-full"
    >
      <div className={`flex flex-col items-start ${isRTL ? 'text-right' : 'text-left'} w-full`}>
        <motion.span 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-brand-accent font-black uppercase tracking-[0.3em] text-[10px] md:text-sm block"
        >
          {t(`hero.slides.${index}.badge`)}
        </motion.span>
        
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mt-4 mb-4 text-brand-accent leading-tight lg:leading-[1.05] tracking-tight"
        >
          {t(`hero.slides.${index}.title_main`)} <br />
          <span className="italic text-[#e72a00]">
            {t(`hero.slides.${index}.title_highlight`)}
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-xl text-brand-accent mb-8 lg:mb-10 max-w-lg leading-relaxed font-medium px-4 lg:px-0"
        >
          {t(`hero.slides.${index}.description`)}
        </motion.p>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            size="xl"
            variant="primary"
            rounded
            shadow
            onClick={() => navigate('/products')}
            className="gap-3 group/btn py-4 px-8 md:py-5 md:px-10"
          >
            {t('hero.cta_fixed')}
            <FaArrowRight className={`transition-transform ${isRTL ? 'rotate-180 group-hover/btn:-translate-x-2' : 'group-hover/btn:translate-x-2'}`} />
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center"
      >
        <img
          src={image}
          alt="Matcha Product"
          className="w-full max-w-[320px] md:max-w-[450px] lg:max-w-[500px] drop-shadow-[0_25px_25px_rgba(0,0,0,0.15)] h-[240px] md:h-[400px] lg:h-[450px] object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroSlide;


