import React, { useRef } from "react";
import { FaShoppingCart, FaSun, FaMoon, FaGlobe, FaBars } from "react-icons/fa";
import { useAppSelector } from "../../shared/hooks/useAppRedux";
import { useHeaderActions } from "./useHeaderActions";
import { useHeaderScroll } from "./useHeaderScroll";
import { useMobileMenu } from "./useMobileMenu";
import Button from "../../shared/components/Button/Button";
import Logo from "../../shared/components/Logo/Logo";
import Navbar from "./Navbar/Navbar";
import MobileMenu from "./subcomponents/MobileMenu";
import RegionSwitcher from "../../shared/components/RegionSwitcher/RegionSwitcher";

const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  
  // DECOUPLED LOGIC
  const { isVisible, isAtTop } = useHeaderScroll(headerRef);
  const { currentLang, theme, changeLanguage, handleToggleTheme, handleToggleCart } = useHeaderActions();
  const { handleToggle: toggleMobileMenu } = useMobileMenu();

  return (
    <>
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

      {/* MOBILE HAMBURGER BUTTON */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden text-brand-accent text-2xl p-2 hover:bg-brand-secondary rounded-xl transition-colors"
        title="Toggle Menu"
      >
        <FaBars />
      </button>

      {/* DESKTOP CONTENT */}
      <div className="hidden lg:flex items-center gap-10">
        <Navbar />
        <div className="flex gap-4 items-center shrink-0 min-w-max">
          {/* REGION SELECTOR */}
          <RegionSwitcher />
          
          {/* LANGUAGE SELECTOR */}
          <div className="relative flex items-center bg-brand-secondary border border-brand-border px-3 py-2 rounded-full hover:border-brand-accent transition-all group">
            <FaGlobe className="text-brand-accent text-sm group-hover:rotate-12 transition-transform" />
            <select
              title="Select Language"
              value={currentLang}
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-transparent text-xs font-black text-brand-text uppercase ml-2 cursor-pointer focus:outline-none appearance-none pr-4"
            >
              <option value="en">EN</option>
              <option value="ar">AR</option>
              <option value="de">DE</option>
            </select>
            <div className="absolute right-3 pointer-events-none text-[8px] text-brand-muted">▼</div>
          </div>

          {/* THEME TOGGLE */}
          <div className="flex items-center justify-center">
            <Button
              type="button"
              variant="secondary"
              onClick={handleToggleTheme}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              className="w-12! h-12! p-0! rounded-full! flex! items-center! justify-center! text-xl shadow-lg border border-brand-accent/20! bg-brand-secondary visible! opacity-100! relative z-20 hover:scale-110 active:scale-90 transition-all cursor-pointer"
            >
              {theme === "light" ? (
                <FaMoon className="text-brand-accent pointer-events-none" />
              ) : (
                <FaSun className="text-yellow-500 pointer-events-none" />
              )}
            </Button>
          </div>

          {/* CART TOGGLE */}
          <div className="flex items-center justify-center relative group">
            <Button
              type="button"
              variant="secondary"
              onClick={handleToggleCart}
              title="Open Shopping Bag"
              className="w-12! h-12! p-0! rounded-full! relative flex! items-center! justify-center! text-xl shadow-md  border border-brand-accent/20! bg-brand-bg hover:border-brand-accent transition-all cursor-pointer"
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

      {/* MOBILE OVERLAY MENU */}
      </header>
      <MobileMenu />
    </>
  );
};

export default Header;


