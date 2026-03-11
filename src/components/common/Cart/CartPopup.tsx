import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppRedux";
import { setCartOpen } from "../../../redux/slices/uiSlice";
import { FaTimes, FaShoppingBag } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const CartPopup: React.FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.isCartOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[2000] flex justify-end"
          onClick={() => dispatch(setCartOpen(false))}
        >
          {/* OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* SIDEBAR */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-[420px] h-full bg-brand-card shadow-2xl p-8 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8 pb-4 border-b-2 border-brand-border">
              <h2 className="text-2xl font-black text-brand-text uppercase tracking-tight">
                Your Selection 🍵
              </h2>
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-secondary text-brand-text hover:text-brand-accent transition-all animate-in fade-in duration-500"
                onClick={() => dispatch(setCartOpen(false))}
                title="Close Cart"
              >
                <FaTimes />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pt-10">
              <div className="text-center">
                <div className="w-24 h-24 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaShoppingBag className="text-4xl text-brand-accent/30" />
                </div>
                <p className="text-xl font-black text-brand-text">
                  Your bag is currently empty.
                </p>
                <p className="text-sm text-brand-muted mt-3 font-medium px-10">
                  Start your journey with our premium ceremonial Uji matcha.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t-2 border-brand-border">
              <div className="flex justify-between items-center text-lg mb-6">
                <span className="font-bold text-brand-muted">Subtotal</span>
                <span className="text-2xl font-black text-brand-text">
                  $0.00
                </span>
              </div>
              <button className="w-full py-5 bg-brand-accent text-white rounded-2xl font-black uppercase tracking-widest hover:bg-brand-deep active:scale-95 transition-all shadow-xl shadow-brand-accent/20">
                Proceed to Checkout
              </button>
              <button
                onClick={() => dispatch(setCartOpen(false))}
                className="w-full mt-4 py-3 text-brand-muted font-bold hover:text-brand-accent transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartPopup;
