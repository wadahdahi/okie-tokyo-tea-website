import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import SectionHeader from "../../../../shared/components/SectionHeader";
import { reviewsData } from "../../homeData";

const Reviews: React.FC = () => {
  return (
    <section className="bg-brand-secondary relative px-8 xl:px-12 2xl:px-20 overflow-hidden">
      {/* ARTISTIC BG IMAGE */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.07] z-0">
        <img 
          src="/assets/images/articles/matcha_fields_with_misty_mountains_002.webp" 
          alt="" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-brand-secondary" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <SectionHeader
          title="Voices of the Tea Community"
          subtitle="Shared experiences from our global family of matcha enthusiasts."
        />

        <div className="grid grid-cols-1 lap:grid-cols-2 desk:grid-cols-3 gap-8 py-8">
          {reviewsData.map((review, i) => (
            <motion.div
              key={i}
              className="bg-brand-card p-10 rounded-3xl relative overflow-hidden group hover:bg-white transition-colors duration-500 shadow-sm hover:shadow-xl"
            >
              <FaQuoteLeft className="absolute top-6 right-6 text-6xl opacity-5 text-brand-accent group-hover:opacity-10 transition-opacity" />
              <div className="flex text-yellow-500 mb-4 text-sm gap-1">
                {Array.from({ length: review.rating }).map((_, r) => (
                  <FaStar key={r} />
                ))}
              </div>
              <p className="italic text-lg mb-6 text-brand-text leading-relaxed font-serif">
                "{review.text}"
              </p>
              <span className="font-black text-brand-accent uppercase tracking-widest text-xs">
                — {review.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;


