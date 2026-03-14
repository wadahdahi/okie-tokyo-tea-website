import React from "react";
import { storyMilestones, storyValues } from "./storyData";
import { motion } from "framer-motion";
import { FaLeaf, FaCheckCircle } from "react-icons/fa";
import { IMAGES } from "../../shared/constants/images";

const OurStory: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg pt-32 pb-24">

      {/* HERO SECTION */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 text-brand-accent font-black uppercase tracking-[0.3em] text-xs mb-4">
              <FaLeaf /> Our Journey
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-brand-text tracking-tight mb-6 leading-tight">
              From Uji Fields<br />
              <span className="italic text-brand-accent">To Your Cup</span>
            </h1>
            <p className="text-brand-muted text-lg leading-relaxed max-w-lg">
              Every tin of Okie Tokyo Tea carries a story rooted in ancient hills, generational craftsmanship, and an unwavering belief that the finest matcha deserves the widest audience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-brand-secondary overflow-hidden border-4 border-brand-accent/20 shadow-2xl">
              <img src={IMAGES.PRODUCTS.DEFAULT_POUCH} alt="Okie Tokyo Tea" className="w-full h-full object-contain p-8" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-brand-accent flex items-center justify-center shadow-xl">
              <FaLeaf className="text-white text-3xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="bg-brand-secondary/30 py-20 px-6 md:px-10 mb-24">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text text-center mb-16 tracking-tight">
            Our <span className="italic text-brand-accent">Milestones</span>
          </h2>
          <div className="relative">
            {/* TIMELINE VERTICAL LINE */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-brand-border" />

            <div className="flex flex-col gap-12">
              {storyMilestones.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* CONTENT */}
                  <div className="flex-1 bg-brand-card border border-brand-border rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-brand-accent/30 transition-all">
                    <span className="text-brand-accent font-black text-sm uppercase tracking-widest block mb-2">{item.year}</span>
                    <h3 className="font-black text-brand-text text-xl mb-3">{item.title}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{item.description}</p>
                  </div>

                  {/* YEAR BADGE */}
                  <div className="shrink-0 w-14 h-14 rounded-full bg-brand-accent flex items-center justify-center shadow-xl z-10">
                    <span className="text-white font-black text-xs">{item.year.slice(2)}</span>
                  </div>

                  {/* SPACER */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* VALUES */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text text-center mb-16 tracking-tight">
          What We <span className="italic text-brand-accent">Stand For</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {storyValues.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 bg-brand-card border border-brand-border rounded-2xl p-8 hover:border-brand-accent/40 hover:shadow-lg transition-all"
            >
              <FaCheckCircle className="text-brand-accent text-xl shrink-0 mt-1" />
              <div>
                <h3 className="font-black text-brand-text mb-2">{val.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{val.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStory;


