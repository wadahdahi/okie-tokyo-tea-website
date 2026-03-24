import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import SectionHeader from "../../../../shared/components/SectionHeader";
import { featuresData } from "../../homeData";

const Features: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // 1. INDEPENDENT BINARY EVENT: INSTANT BLUR ON FIRST SCROLL
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 1) setIsScrolled(true); 
    else setIsScrolled(false);
  });

  // 2. INDEPENDENT LINEAR EVENT: SMOOTH GRADUAL TRANSPARENCY
  const rimOpacity = useTransform(scrollYProgress, [0.35, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative z-20 -mt-24 md:-mt-32 pt-24 md:pt-32 pb-10 overflow-hidden">
      {/* BACKGROUND BASE (ALWAYS THERE) */}
      <div className="absolute top-[40px] inset-0 bg-brand-bg rounded-t-[100%_40px] md:rounded-t-[100%_80px] z-0" />

      {/* THE SECTION IMAGES (STATIC VISIBILITY) */}
      <div className="absolute top-[40px] inset-0 z-10 pointer-events-none overflow-hidden rounded-t-[100%_40px] md:rounded-t-[100%_80px]">
        <img 
          src="/assets/images/articles/matcha_general_picture_004.webp" 
          alt="" 
          style={{ 
            opacity: 0.4,
            maskImage: 'linear-gradient(to bottom, black 0%, black 30%, transparent 80%)', 
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 30%, transparent 80%)' 
          }}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/assets/images/articles/matcha_general_picture_004.webp" 
            alt="" 
            className="w-full h-full object-cover blur-3xl opacity-40"
            style={{ 
              maskImage: 'linear-gradient(to bottom, transparent 30%, black 100%)', 
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 30%, black 100%)' 
            }}
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-brand-bg/20 to-brand-bg" />
      </div>

      {/* RIM MASTER WRAPPER - HANDLES TRANSPARENCY INDEPENDENTLY */}
      <motion.div 
        style={{ opacity: rimOpacity }}
        className="absolute top-[40px] left-0 w-full h-32 md:h-48 z-20 pointer-events-none"
      >
        {/* BINARY SWITCH: SOLID OR MISTY (HANDLES BLUR INDEPENDENTLY) */}
        {!isScrolled ? (
          <div className="absolute inset-0 bg-brand-bg rounded-t-[100%_40px] md:rounded-t-[100%_80px]" />
        ) : (
          <div 
            style={{ filter: "blur(14px)" }}
            className="absolute inset-0 bg-linear-to-b from-brand-accent-2 via-brand-accent/20 to-transparent rounded-t-[100%_40px] md:rounded-t-[100%_80px]" 
          />
        )}
      </motion.div>

      <div className="relative z-30 max-w-[1400px] mx-auto px-8 xl:px-40 2xl:px-40">
        <SectionHeader
          title="The Story Behind the Leaf"
          subtitle="From the mist-covered hills of Uji to your daily ritual. We bridge centuries of tradition with modern elegance."
          hasBorder
          titleColor="text-brand-text"
          subtitleColor="text-brand-text"
        />

        <div className="grid grid-cols-1 lap:grid-cols-2 desk:grid-cols-3 gap-8 py-8">
          {featuresData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-brand-card p-12 rounded-[2.5rem] text-center border border-brand-border hover:shadow-2xl hover:border-brand-accent/30 transition-all duration-300"
              >
                <div className="text-5xl text-brand-accent mb-6 flex justify-center">
                  <Icon />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-text tracking-tight uppercase">
                  {item.title}
                </h3>
                <p className="text-brand-accent-2 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
