import React from "react";
import { FaThLarge, FaList } from "react-icons/fa";

interface ViewToggleProps {
  view: "grid" | "list";
  onChange: (view: "grid" | "list") => void;
  className?: string;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ view, onChange, className = "" }) => {
  return (
    <div className={`flex bg-brand-secondary p-1.5 rounded-2xl border border-brand-border h-fit ${className}`}>
      <button
        onClick={() => onChange("grid")}
        className={`p-3 rounded-xl transition-all duration-300 ${
          view === "grid" 
            ? "bg-brand-accent text-white shadow-md scale-105" 
            : "text-brand-muted hover:text-brand-text"
        }`}
        title="Grid View"
      >
        <FaThLarge />
      </button>
      <button
        onClick={() => onChange("list")}
        className={`p-3 rounded-xl transition-all duration-300 ${
          view === "list" 
            ? "bg-brand-accent text-white shadow-md scale-105" 
            : "text-brand-muted hover:text-brand-text"
        }`}
        title="List View"
      >
        <FaList />
      </button>
    </div>
  );
};

export default ViewToggle;
