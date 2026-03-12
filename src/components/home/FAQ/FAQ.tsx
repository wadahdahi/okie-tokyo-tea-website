import React from "react";
import SectionHeader from "../../common/UI/SectionHeader";
import { faqData } from "../../../data/homeData";

const FAQ: React.FC = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-8 xl:px-12 2xl:px-20">
      <SectionHeader
        title="Matcha Mastery: Curious Minds"
        subtitle="Everything you need to know about starting your matcha journey with Okie Tokyo Tea."
        hasBorder
      />

      <div className="grid grid-cols-1 tab:grid-cols-2 desk:grid-cols-3 gap-8 py-8">
        {faqData.map((faq, i) => (
          <div
            key={i}
            className="p-8 border-l-4 border-brand-accent bg-brand-secondary rounded-r-3xl hover:bg-brand-light transition-colors duration-300"
          >
            <h4 className="text-lg font-bold text-brand-accent mb-3">
              {faq.q}
            </h4>
            <p className="text-sm text-brand-muted leading-relaxed font-medium">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
