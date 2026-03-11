import React from "react";
import { FaShoppingCart, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { useAppDispatch } from "../../hooks/useAppRedux";
import { toggleCart } from "../../redux/slices/uiSlice";
import Button from "../../components/common/UI/Button/Button";
import Logo from "../../components/common/UI/Logo/Logo";
import Navbar from "./Navbar/Navbar";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  // THEME TOGGLE HANDLER
  const handleThemeToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleTheme();
  };

  return (
    <header className="sticky top-0 z-1001 w-full px-8 py-5 flex justify-between items-center border-b border-brand-border bg-brand-bg/95 backdrop-blur-xl transition-all shadow-sm">
      <Logo />
      <div className="flex items-center gap-6 lg:gap-10">
        <Navbar />
        <div className="flex gap-4 items-center shrink-0 min-w-max">
          {/* THEME TOGGLE - ABSOLUTE VISIBILITY FORCED */}
          <div className="flex items-center justify-center">
            <Button
              type="button"
              variant="secondary"
              onClick={handleThemeToggle}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              className="w-12! h-12! p-0! rounded-full! flex! items-center! justify-center! text-xl shadow-lg border-2! border-brand-accent! bg-brand-secondary visible! opacity-100! relative z-20 hover:scale-110 active:scale-90 transition-all cursor-pointer"
            >
              {theme === "light" ? (
                <FaMoon className="text-brand-accent pointer-events-none" />
              ) : (
                <FaSun className="text-yellow-500 pointer-events-none" />
              )}
            </Button>
          </div>

          {/* CART TRIGGER - CLICK ONLY */}
          <div className="flex items-center justify-center relative group">
            <Button
              type="button"
              variant="secondary"
              onClick={() => dispatch(toggleCart())}
              title="Open Shopping Bag"
              className="w-12! h-12! p-0! rounded-full! relative flex! items-center! justify-center! text-xl shadow-md border-2 border-brand-border bg-brand-bg hover:border-brand-accent transition-all cursor-pointer"
            >
              <FaShoppingCart className="text-brand-accent group-hover:scale-110 transition-transform pointer-events-none" />
              <div className="absolute -top-1 -right-1 bg-brand-deep text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-brand-bg shadow-sm pointer-events-none">
                0
              </div>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
