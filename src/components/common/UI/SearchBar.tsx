import React from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  value, 
  onChange, 
  placeholder = "Search items...", 
  className = "" 
}) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <FaSearch className="text-brand-muted group-focus-within:text-brand-accent transition-colors" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="block w-full pl-12 pr-4 py-4 bg-white border-2 border-brand-border rounded-2xl text-brand-text placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 transition-all font-medium"
      />
    </div>
  );
};

export default SearchBar;
