import React from "react";
import { motion } from "framer-motion";

interface ChasenLoaderProps {
  size?: "sm" | "md" | "lg";
  label?: string;
}

const sizes = {
  sm: "w-10 h-10",
  md: "w-16 h-16",
  lg: "w-24 h-24",
};

const ChasenLoader: React.FC<ChasenLoaderProps> = ({ size = "md", label }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div
        animate={{ rotate: [0, 15, -15, 12, -12, 6, -6, 0] }} // NATURAL ORIENTATION
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.3 }}
        className={sizes[size]}
      >
        <img
          src="/assets/svg/noun-matcha-whisk.svg"
          alt="Loading Whisk"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {label && (
        <p className="text-brand-muted text-xs font-black uppercase tracking-widest animate-pulse">
          {label}
        </p>
      )}
    </div>
  );
};

export default ChasenLoader;

