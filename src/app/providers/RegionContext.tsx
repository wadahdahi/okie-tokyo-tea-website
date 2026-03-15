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
    // AUTO DETECTION LOGIC WITH FALLBACK AND CACHE BUSTING
    const detect = async () => {
      const detectFromApi = async (url: string) => {
        const response = await fetch(`${url}?t=${Date.now()}`); // CACHE BUSTER
        return await response.json();
      };

      try {
        // TRY PRIMARY API
        let data = await detectFromApi("https://ipapi.co/json/");
        
        // IF FAILED OR RETURNED GENERIC DATA, TRY SECONDARY
        if (!data || !data.country_code) {
          data = await detectFromApi("https://ip-api.com/json/");
        }

        const countryCode = data.country_code || data.countryCode;
        if (!countryCode) throw new Error("Could not detect country");

        const gulfCountries = ["SA", "AE", "QA", "KW", "BH", "OM"];
        const middleEastCountries = ["SY", "LB", "JO", "IQ", "EG", "PS"];
        const europeCountries = ["DE", "FR", "UK", "IT", "ES", "NL", "SE", "CH"];
        
        if (gulfCountries.includes(countryCode)) {
          setRegion("gulf");
        } else if (middleEastCountries.includes(countryCode)) {
          setRegion("middleEast");
        } else if (europeCountries.includes(countryCode)) {
          setRegion("europe");
        } else {
          setRegion("global");
        }
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
