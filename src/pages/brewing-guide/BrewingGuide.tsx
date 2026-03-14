import React, { useState } from "react";
import { brewingMethods, brewingTools } from "./brewingData";
import BrewingMethodCard from "./components/BrewingMethodCard/BrewingMethodCard";
import { motion, AnimatePresence } from "framer-motion";
import { FaLeaf, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

const BrewingGuide: React.FC = () => {
  const [activeMethodId, setActiveMethodId] = useState(brewingMethods[0].id);
  const activeMethod = brewingMethods.find(m => m.id === activeMethodId)!;

  return (
    <div className="min-h-screen bg-brand-bg pt-32 pb-24 px-6 md:px-10">

      {/* PAGE HEADER */}
      <div className="max-w-[1400px] mx-auto mb-16 text-center">
        <span className="inline-flex items-center gap-2 text-brand-accent font-black uppercase tracking-[0.3em] text-xs mb-4">
          <FaLeaf /> The Art of Matcha
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-brand-text tracking-tight mb-4">
          Brewing <span className="italic text-brand-accent">Mastery</span>
        </h1>
        <p className="text-brand-muted max-w-xl mx-auto text-base leading-relaxed">
          Three methods, one philosophy: patience, precision, and presence.
          Select a method below and follow each step with intention.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* METHOD SELECTOR */}
        <div className="flex flex-col gap-4">
          <h2 className="font-black text-brand-text uppercase tracking-widest text-xs mb-2">Choose Method</h2>
          {brewingMethods.map((method, i) => (
            <BrewingMethodCard
              key={method.id}
              method={method}
              index={i}
              isActive={method.id === activeMethodId}
              onSelect={setActiveMethodId}
            />
          ))}
        </div>

        {/* ACTIVE METHOD STEPS */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMethodId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-extrabold text-brand-text mb-1">{activeMethod.name}</h2>
                <p className="text-brand-muted text-sm">{activeMethod.subtitle}</p>
              </div>

              {/* STEPS */}
              <div className="flex flex-col gap-6">
                {activeMethod.steps.map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-5 bg-brand-card border border-brand-border rounded-2xl p-6 hover:border-brand-accent/30 transition-all"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-full bg-brand-accent text-white font-black flex items-center justify-center text-sm shadow-md">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-black text-brand-text mb-2">{step.title}</h3>
                      <p className="text-brand-muted text-sm leading-relaxed mb-3">{step.description}</p>
                      {step.tip && (
                        <div className="flex items-start gap-2 bg-brand-accent/5 border border-brand-accent/20 rounded-xl px-4 py-3">
                          <FaExclamationTriangle className="text-brand-accent text-xs mt-0.5 shrink-0" />
                          <p className="text-brand-accent text-xs font-bold leading-relaxed">{step.tip}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* TOOLS SECTION */}
      <div className="max-w-[1400px] mx-auto mt-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text text-center mb-12 tracking-tight">
          The <span className="italic text-brand-accent">Essential</span> Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 tab:grid-cols-3 gap-6">
          {brewingTools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="bg-brand-card border border-brand-border rounded-2xl p-6 hover:border-brand-accent/30 hover:shadow-lg transition-all flex gap-4"
            >
              <FaCheckCircle className={`text-xl shrink-0 mt-0.5 ${tool.essential ? 'text-brand-accent' : 'text-brand-muted'}`} />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-black text-brand-text text-sm">{tool.name}</h3>
                  {tool.essential && (
                    <span className="text-[9px] font-black uppercase tracking-widest bg-brand-accent/10 text-brand-accent px-2 py-0.5 rounded-full">Essential</span>
                  )}
                </div>
                <p className="text-brand-muted text-xs leading-relaxed">{tool.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrewingGuide;

