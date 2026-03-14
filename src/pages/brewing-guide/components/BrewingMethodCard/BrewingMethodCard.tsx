import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaThermometerHalf } from "react-icons/fa";
import { BrewingMethod } from "../../brewingData";

interface BrewingMethodCardProps {
  method: BrewingMethod;
  index: number;
  isActive: boolean;
  onSelect: (id: string) => void;
}

const difficultyColor: Record<string, string> = {
  Beginner: "text-green-500 bg-green-500/10",
  Intermediate: "text-yellow-500 bg-yellow-500/10",
  Advanced: "text-red-500 bg-red-500/10",
};

const BrewingMethodCard: React.FC<BrewingMethodCardProps> = ({ method, index, isActive, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={() => onSelect(method.id)}
      className={`cursor-pointer rounded-2xl border p-5 transition-all duration-300 ${
        isActive
          ? "border-brand-accent bg-brand-accent/5 shadow-lg"
          : "border-brand-border bg-brand-card hover:border-brand-accent/40"
      }`}
    >
      {/* HEADER */}
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-black text-brand-text text-base">{method.name}</h3>
        <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-full ${difficultyColor[method.difficulty]}`}>
          {method.difficulty}
        </span>
      </div>

      <p className="text-brand-muted text-xs mb-4">{method.subtitle}</p>

      {/* META */}
      <div className="flex items-center gap-4 text-xs font-bold text-brand-muted">
        <span className="flex items-center gap-1">
          <FaClock className="text-brand-accent" /> {method.time}
        </span>
        <span className="flex items-center gap-1">
          <FaThermometerHalf className="text-brand-accent" /> {method.temp}
        </span>
        <span className="flex items-center gap-1">
          <FaCheckCircle className="text-brand-accent" /> {method.steps.length} steps
        </span>
      </div>
    </motion.div>
  );
};

export default BrewingMethodCard;

