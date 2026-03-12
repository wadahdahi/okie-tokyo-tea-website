import React from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaTimes, FaGlobe, FaSun, FaMoon, FaShoppingCart } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useMobileMenu } from "../../../hooks/useMobileMenu";
import { useHeaderActions } from "../../../hooks/useHeaderActions";
import { useAppSelector } from "../../../hooks/useAppRedux";
import { navLinks } from "../../../data/navData";
import { NavLink } from "react-router-dom";
import Button from "../../../components/common/UI/Button/Button";
import { SHAPES } from "../../../constants/shapes";

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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          // HIGH TRANSPARENCY + STRONG BLUR
          className="fixed inset-0 h-dvh w-full bg-brand-bg/40 backdrop-blur-2xl z-mobile-menu lg:hidden flex flex-col"
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
          <nav className="flex-1 px-12 py-12 overflow-y-auto">
            <ul className={`flex flex-col gap-10 ${isRTL ? 'items-end' : 'items-start'}`}>
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
                        text-3xl md:text-4xl font-black uppercase tracking-tight transition-all block relative w-fit
                        ${isActive ? 'text-brand-accent' : 'text-brand-text/80 hover:text-brand-accent'}
                      `}
                    >
                      {({ isActive }) => (
                        <div className="relative">
                          {t(`nav.${link.label.toLowerCase()}`)}
                          {isActive && (
                            <motion.div 
                              layoutId="activeLine"
                              className="absolute -bottom-2 left-0 w-full h-1 bg-brand-accent rounded-full"
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

          {/* ACTIONS FOOTER WITH GLASS EFFECT */}
          <div className="p-10 bg-brand-secondary/40 backdrop-blur-md flex flex-col gap-8 border-t border-brand-border/20">
            <div className="flex justify-between items-center gap-6">
              <Button
                variant="secondary"
                onClick={handleToggleTheme}
                title="Theme Toggle"
                className="w-12! sm:w-16! h-12! sm:h-16! p-0! rounded-full! flex! items-center! justify-center! text-2xl border-2! border-brand-accent! bg-brand-bg/50 shadow-xl"
              >
                {theme === "light" ? <FaMoon className="text-brand-accent" /> : <FaSun className="text-yellow-500" />}
              </Button>

              <div className="flex-1 flex items-center gap-3 bg-brand-bg/50 border border-brand-border px-6 py-4 rounded-3xl shadow-sm">
                <FaGlobe className="text-brand-accent" />
                <select
                  value={currentLang}
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="bg-transparent text-sm font-black text-brand-text uppercase focus:outline-none appearance-none flex-1"
                  title="Language Selector"
                >
                  <option value="en">English (EN)</option>
                  <option value="ar">العربية (AR)</option>
                  <option value="de">Deutsch (DE)</option>
                </select>
              </div>
            </div>

            <Button
              variant="primary"
              onClick={() => {
                handleToggleCart();
                closeMenu();
              }}
              className="w-full py-6 rounded-3xl gap-4 text-xl justify-center shadow-2xl shadow-brand-accent/40"
            >
              <FaShoppingCart />
              <span className="font-black uppercase tracking-tight">{t('header.cart_title')}</span>
              {totalQuantity > 0 && (
                <span className="bg-white text-brand-accent px-3 py-1 rounded-full text-sm font-black min-w-[28px] text-center">
                  {totalQuantity}
                </span>
              )}
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
