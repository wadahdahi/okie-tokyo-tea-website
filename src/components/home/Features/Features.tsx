import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../../common/UI/SectionHeader";
import { featuresData } from "../../../data/homeData";

const Features: React.FC = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-8 xl:px-12 2xl:px-20">
      <SectionHeader
        title="The Story Behind the Leaf 🌱"
        subtitle="From the mist-covered hills of Uji to your daily ritual. We bridge centuries of tradition with modern elegance."
        hasBorder
      />

      <div className="matcha-grid">
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
              <h3 className="text-2xl font-bold mb-4 text-brand-text tracking-tight">
                {item.title}
              </h3>
              <p className="text-brand-muted leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
