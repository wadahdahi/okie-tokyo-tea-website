import React, { useRef } from "react";
import { FaShoppingCart, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppRedux";
import { toggleCart } from "../../redux/slices/uiSlice";
import Button from "../../components/common/UI/Button/Button";
import Logo from "../../components/common/UI/Logo/Logo";
import Navbar from "./Navbar/Navbar";
import { useHeaderScroll } from "../../hooks/useHeaderScroll";

const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  
  const { isVisible, isAtTop } = useHeaderScroll(headerRef);

  const handleThemeToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleTheme();
  };

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 z-1001 w-full px-8 py-5 flex justify-between items-center border-b transition-all duration-500 ease-in-out shadow-sm
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        ${isAtTop 
          ? 'bg-brand-bg border-transparent backdrop-blur-0' 
          : 'bg-brand-bg/85 border-brand-border backdrop-blur-xl'
        }`}
    >
      <Logo />
      <div className="flex items-center gap-6 lg:gap-10">
        <Navbar />
        <div className="flex gap-4 items-center shrink-0 min-w-max">
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

          <div className="flex items-center justify-center relative group">
            <Button
              type="button"
              variant="secondary"
              onClick={() => dispatch(toggleCart())}
              title="Open Shopping Bag"
              className="w-12! h-12! p-0! rounded-full! relative flex! items-center! justify-center! text-xl shadow-md border-2 border-brand-border bg-brand-bg hover:border-brand-accent transition-all cursor-pointer"
            >
              <FaShoppingCart className="text-brand-accent group-hover:scale-110 transition-transform pointer-events-none" />
              {totalQuantity > 0 && (
                <div className="absolute -top-1 -right-1 bg-brand-accent text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-brand-bg shadow-sm pointer-events-none">
                  {totalQuantity}
                </div>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
