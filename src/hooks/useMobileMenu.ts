import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./useAppRedux";
import { toggleMobileMenu, setMobileMenuOpen } from "../redux/slices/uiSlice";

export const useMobileMenu = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.isMobileMenuOpen);

  // SCROLL LOCK LOGIC
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleToggle = () => dispatch(toggleMobileMenu());
  const closeMenu = () => dispatch(setMobileMenuOpen(false));

  return {
    isOpen,
    handleToggle,
    closeMenu
  };
};
