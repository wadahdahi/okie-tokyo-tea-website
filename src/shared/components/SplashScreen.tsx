import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SPLASH_DURATION_MS = 2800;

const SplashScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), SPLASH_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-99999 flex flex-col items-center justify-center bg-brand-bg gap-12"
        >
          {/* NEW PROFESSIONAL CHASEN - POINTING DOWN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: [0, 15, -15, 10, -10, 5, -5, 0], // NATURAL ORIENTATION WHISKING
            }}
            transition={{
              opacity: { duration: 0.4 },
              y: { duration: 0.4 },
              rotate: { duration: 1.4, delay: 0.5, ease: "easeInOut" },
            }}
            className="w-32 h-32"
          >
            <img 
              src="/assets/svg/noun-matcha-whisk.svg" 
              alt="" 
              className="w-full h-full object-contain text-brand-accent"
            />
          </motion.div>

          {/* BRAND LOGO INSTEAD OF TEXT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <img 
              src="/assets/images/logo/okie-tokyo-logo-green.webp" 
              alt="Okie Tokyo Tea" 
              className="h-10 w-auto object-contain"
            />
            {/* ACCENT LINE */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.4, ease: "easeInOut" }}
              className="h-px w-32 bg-brand-accent/20 mt-8 origin-center"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;

