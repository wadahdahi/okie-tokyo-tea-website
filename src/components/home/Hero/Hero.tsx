import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../../components/common/UI/Button/Button";
import { IMAGES } from "../../../constants/images";

const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center px-8 bg-brand-secondary pattern-bg group overflow-hidden">
      <div className="absolute inset-0 bg-brand-secondary/40 pointer-events-none transition-opacity group-hover:opacity-20 z-10"></div>
      <div className="absolute inset-0 w-full">
        <img
          className="absolute bottom-12 bg-repeat-x w-1/2"
          src={IMAGES.PATTERNS.MATCHA_FIELDS}
          alt=""
        />
        <img
          className="absolute bottom-12 bg-repeat-x w-1/2"
          src={IMAGES.PATTERNS.MATCHA_FIELDS}
          alt=""
        />
        <img
          className="absolute bottom-12 bg-repeat-x w-1/2"
          src={IMAGES.PATTERNS.MATCHA_FIELDS}
          alt=""
        />
      </div>

      <div className="container relative z-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-accent font-black uppercase tracking-[0.3em] text-sm">
            Authentic Ceremonial Grade
          </span>
          <h1 className="text-6xl md:text-7xl font-extrabold mt-6 mb-8 text-brand-text leading-[1.05] tracking-tight">
            The Purity of <br />{" "}
            <span className="text-brand-accent italic">Japanese Zen</span>
          </h1>
          <p className="text-xl text-brand-muted mb-10 max-w-lg leading-relaxed font-medium">
            Handpicked from the lush hills of Uji, Kyoto. Experience the vibrant
            energy and calm focus of our premium stone-milled matcha.
          </p>
          <div className="flex gap-4">
            <Button
              size="xl"
              variant="primary"
              rounded
              shadow
              className="gap-3 group/btn"
            >
              Explore Collection
              <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src={IMAGES.PRODUCTS.DEFAULT_POUCH}
            alt="Okie Tokyo Tea Pouch"
            className="w-full max-w-[550px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] hover:drop-shadow-[0_45px_45px_rgba(0,0,0,0.25)] transition-all duration-500"
          />
        </motion.div>
      </div>

      {/* DECORATIVE CURVE */}
      <div className="absolute -bottom-1 left-0 w-full h-24 bg-brand-bg rounded-[100%_100%_0_0] z-30"></div>
    </section>
  );
};

export default Hero;
