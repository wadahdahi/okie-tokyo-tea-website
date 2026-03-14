import React from "react";
import { FaThLarge, FaList } from "react-icons/fa";

interface ViewToggleProps {
  view: "grid" | "list";
  onChange: (view: "grid" | "list") => void;
  className?: string;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ view, onChange, className = "" }) => {
  const isGrid = view === "grid";

  return (
    <div className={`flex bg-brand-secondary p-1.5 rounded-2xl border border-brand-border h-fit w-fit ${className}`}>
      <button
        onClick={() => onChange(isGrid ? "list" : "grid")}
        className="p-3 rounded-xl bg-brand-accent text-white shadow-md transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
        title={isGrid ? "Switch to List View" : "Switch to Grid View"}
      >
        {isGrid ? <FaList /> : <FaThLarge />}
      </button>
    </div>
  );
};

export default ViewToggle;

