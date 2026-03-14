import React from "react";
import { useRegion, Region } from "../../../app/providers/RegionContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaCheck } from "react-icons/fa";

const SyrianFlag = () => (
  <span className="flex flex-col w-5 h-3.5 shrink-0 overflow-hidden rounded-[2px] shadow-sm border border-black/10">
    <span className="bg-[#007A3D] h-1/3 w-full"></span>
    <span className="bg-white h-1/3 w-full flex justify-center items-center gap-[2px]">
      <span className="w-1 h-1 bg-red-600 [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)]"></span>
      <span className="w-1 h-1 bg-red-600 [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)]"></span>
      <span className="w-1 h-1 bg-red-600 [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)]"></span>
    </span>
    <span className="bg-black h-1/3 w-full"></span>
  </span>
);

const regions: { id: Region; label: string; flag: React.ReactNode }[] = [
  { id: "global", label: "Global", flag: "🌐" },
  { id: "gulf", label: "Gulf States", flag: "🇸🇦" },
  { id: "middleEast", label: "Middle East", flag: <SyrianFlag /> },
  { id: "europe", label: "Europe", flag: "🇪🇺" },
];

interface RegionSwitcherProps {
  variant?: "default" | "compact";
}

const RegionSwitcher: React.FC<RegionSwitcherProps> = ({ variant = "default" }) => {
  const { region: currentRegion, setManualRegion, isAuto } = useRegion();
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isCompact = variant === "compact";

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
        className={isCompact 
          ? "w-14 h-14 rounded-2xl flex items-center justify-center text-xl bg-brand-bg/60 border border-brand-border shadow-sm text-brand-accent transition-all active:scale-95"
          : "flex items-center gap-2 bg-brand-secondary/50 hover:bg-brand-secondary px-3 py-1.5 rounded-full border border-brand-border transition-all group"
        }
      >
        <span className={isCompact ? "text-lg" : "text-sm"}>{selectedRegion.flag}</span>
        {!isCompact && (
          <>
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-text hidden md:block">
              {selectedRegion.label}
            </span>
            <FaChevronDown className={`text-[10px] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
          </>
        )}
        {isAuto && (
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full border border-white" title="Auto-detected" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: isCompact ? -10 : 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: isCompact ? -10 : 10, scale: 0.95 }}
            className={`absolute ${isCompact ? "bottom-full mb-4" : "top-full mt-2"} right-0 w-48 bg-brand-card border border-brand-border rounded-2xl shadow-2xl z-50 overflow-hidden ${isCompact ? "origin-bottom" : "origin-top"}`}
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
