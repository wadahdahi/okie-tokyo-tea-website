import React, { createContext, useContext, useState, useEffect } from "react";

export type Region = "global" | "gulf" | "middleEast" | "europe";

interface RegionContextType {
  region: Region;
  setManualRegion: (region: Region) => void;
  isAuto: boolean;
}

const RegionContext = createContext<RegionContextType | undefined>(undefined);

export const RegionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [region, setRegion] = useState<Region>("global");
  const [isAuto, setIsAuto] = useState(true);

  useEffect(() => {
    // CHECK LOCAL STORAGE FOR MANUAL OVERRIDE
    const savedRegion = localStorage.getItem("okie_manual_region") as Region;
    if (savedRegion) {
      setRegion(savedRegion);
      setIsAuto(false);
      return;
    }

    // AUTO DETECTION LOGIC
    const detect = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const gulfCountries = ["SA", "AE", "QA", "KW", "BH", "OM"];
        const middleEastCountries = ["SY", "LB", "JO", "IQ", "EG", "PS"];
        const europeCountries = ["DE", "FR", "UK", "IT", "ES", "NL", "SE", "CH"];
        
        if (gulfCountries.includes(data.country_code)) setRegion("gulf");
        else if (middleEastCountries.includes(data.country_code)) setRegion("middleEast");
        else if (europeCountries.includes(data.country_code)) setRegion("europe");
        else setRegion("global");
      } catch (error) {
        setRegion("global");
      }
    };

    detect();
  }, []);

  const setManualRegion = (newRegion: Region) => {
    setRegion(newRegion);
    setIsAuto(false);
    localStorage.setItem("okie_manual_region", newRegion);
  };

  return (
    <RegionContext.Provider value={{ region, setManualRegion, isAuto }}>
      {children}
    </RegionContext.Provider>
  );
};

export const useRegion = () => {
  const context = useContext(RegionContext);
  if (!context) throw new Error("useRegion must be used within RegionProvider");
  return context;
};
