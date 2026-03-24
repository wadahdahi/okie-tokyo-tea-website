import React from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaTimes, FaSun, FaMoon, FaShoppingCart } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useMobileMenu } from ".././useMobileMenu";
import { useHeaderActions } from ".././useHeaderActions";
import { useAppSelector } from "../../../shared/hooks/useAppRedux";
import { navLinks } from ".././navData";
import { NavLink } from "react-router-dom";
import RegionSwitcher from "../../../shared/components/RegionSwitcher/RegionSwitcher";
import { SHAPES } from "../../../shared/constants/shapes";

const MobileMenu: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { isOpen, closeMenu } = useMobileMenu();
  const { currentLang, theme, changeLanguage, handleToggleTheme, handleToggleCart } = useHeaderActions();
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  const isRTL = i18n.language === 'ar';

  const menuVariants: Variants = {
    closed: { 
      opacity: 0,
      transition: { duration: 0.3 } 
    },
    open: { 
      opacity: 1,
      transition: { duration: 0.3 } 
    }
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed top-0 left-0 h-dvh w-screen bg-brand-bg/40 backdrop-blur-2xl z-9999 xl:hidden flex flex-col"
        >
          {/* TOP BAR */}
          <div className="p-8 flex justify-between items-center border-b border-brand-border/10">
            <div className="dir-ltr">
              <button 
                onClick={closeMenu}
                title="Close Menu"
                className="text-brand-accent text-3xl hover:rotate-90 transition-transform active:scale-90"
              >
                <FaTimes />
              </button>
            </div>
            
            <img 
              src={SHAPES.LOGO.OKIE_LOGO_LIGHT} 
              alt="Okie Tokyo Tea Logo" 
              className="h-8 md:h-10 object-contain drop-shadow-sm opacity-90"
            />
          </div>

          {/* LEFT-ALIGNED NAVIGATION */}
          <nav className="flex-1 px-12 py-10 overflow-y-auto flex items-center">
            <ul className={`flex flex-col gap-8 w-full ${isRTL ? 'items-end' : 'items-start'}`}>
              {navLinks.map((link, index) => (
                <li key={link.path} className="w-full">
                  <motion.div 
                    initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={closeMenu}
                      className={({ isActive }) => `
                        text-2xl md:text-3xl font-black uppercase tracking-tight transition-all block relative w-fit
                        ${isActive ? 'text-brand-accent' : 'text-brand-text/80 hover:text-brand-accent'}
                      `}
                    >
                      {({ isActive }) => (
                        <div className="relative">
                          {t(`nav.${link.label.toLowerCase()}`)}
                          {isActive && (
                            <motion.div 
                              layoutId="activeLine"
                              className="absolute -bottom-1 left-0 w-full h-1 bg-brand-accent rounded-full"
                            />
                          )}
                        </div>
                      )}
                    </NavLink>
                  </motion.div>
                </li>
              ))}
            </ul>
          </nav>

          {/* ACTIONS FOOTER - SINGLE ROW */}
          <div className="p-10 bg-brand-secondary/40 backdrop-blur-md border-t border-brand-border/20">
            <div className="flex justify-start items-center gap-4">
              {/* THEME */}
              <button
                onClick={handleToggleTheme}
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl bg-brand-bg/60 border border-brand-border shadow-sm text-brand-accent"
                title="Toggle Theme"
              >
                {theme === "light" ? <FaMoon /> : <FaSun className="text-yellow-500" />}
              </button>

              {/* CART */}
              <button
                onClick={() => {
                  handleToggleCart();
                  closeMenu();
                }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl bg-brand-bg/60 border border-brand-border shadow-sm text-brand-accent relative"
                title="Open Cart"
              >
                <FaShoppingCart />
                {totalQuantity > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-accent text-white w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-black border-2 border-brand-bg">
                    {totalQuantity}
                  </span>
                )}
              </button>

              {/* LANGUAGE */}
              <div className="w-14 h-14 flex items-center justify-center bg-brand-bg/60 border border-brand-border rounded-2xl shadow-sm relative overflow-hidden">
                <select
                  value={currentLang}
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="bg-transparent text-[11px] font-black text-brand-text uppercase focus:outline-none appearance-none cursor-pointer z-10 w-full h-full text-center"
                  title="Select Language"
                >
                  <option value="en">EN</option>
                  <option value="ar">AR</option>
                  <option value="de">DE</option>
                </select>
              </div>

              {/* REGION */}
              <div className="flex items-center justify-center h-14">
                <RegionSwitcher variant="compact" />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default MobileMenu;


