import React from "react";

interface FilterBarProps {
  options: { label: string; value: string }[];
  activeValue: string;
  onChange: (value: string) => void;
  className?: string;
}

const FilterBar: React.FC<FilterBarProps> = ({ 
  options, 
  activeValue, 
  onChange, 
  className = "" 
}) => {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`px-6 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all duration-300 ${
            activeValue === option.value
              ? "bg-brand-accent text-white shadow-lg shadow-brand-accent/30 scale-105"
              : "bg-brand-secondary text-brand-muted hover:bg-brand-border hover:text-brand-text"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
