import { useRegion } from "../../../app/providers/RegionContext";
export type { Region } from "../../../app/providers/RegionContext";

// ACCESS GLOBAL REGION STATE
export const useUserRegion = () => {
  const { region } = useRegion();
  return region;
};
