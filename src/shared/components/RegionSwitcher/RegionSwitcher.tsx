import React from "react";
import { useRegion, Region } from "../../../app/providers/RegionContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaCheck } from "react-icons/fa";

const regions: { id: Region; label: string; flag: string }[] = [
  { id: "global", label: "Global", flag: "🌐" },
  { id: "gulf", label: "Gulf States", flag: "🇸🇦" },
  { id: "middleEast", label: "Middle East", flag: "🇸🇾" },
  { id: "europe", label: "Europe", flag: "🇪🇺" },
];

const RegionSwitcher: React.FC = () => {
  const { region: currentRegion, setManualRegion, isAuto } = useRegion();
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const selectedRegion = regions.find((r) => r.id === currentRegion) || regions[0];

  // CLOSE ON CLICK OUTSIDE
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-brand-secondary/50 hover:bg-brand-secondary px-3 py-1.5 rounded-full border border-brand-border transition-all group"
      >
        <span className="text-sm">{selectedRegion.flag}</span>
        <span className="text-[10px] font-black uppercase tracking-widest text-brand-text hidden md:block">
          {selectedRegion.label}
        </span>
        <FaChevronDown className={`text-[10px] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        
        {isAuto && (
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full border border-white" title="Auto-detected" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full mt-2 right-0 w-48 bg-brand-card border border-brand-border rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="p-2">
              <p className="text-[9px] font-black uppercase tracking-widest text-brand-muted px-3 py-2">
                Select Country/Region
              </p>
              {regions.map((r) => (
                <button
                  key={r.id}
                  onClick={() => {
                    setManualRegion(r.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${
                    currentRegion === r.id 
                      ? "bg-brand-accent text-white" 
                      : "hover:bg-brand-secondary text-brand-text"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm">{r.flag}</span>
                    <span className="text-xs font-bold">{r.label}</span>
                  </div>
                  {currentRegion === r.id && <FaCheck className="text-[10px]" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RegionSwitcher;
