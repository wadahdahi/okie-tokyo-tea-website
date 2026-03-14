import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useAppRedux";
import { setCartOpen } from "../lib/uiSlice";
import { addItem, removeSingleItem, removeItem, setQuantity } from "../../features/cart/cartSlice";
import { FaTimes, FaShoppingBag, FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CartPopup: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.isCartOpen);
  const { items, totalAmount } = useAppSelector((state) => state.cart);

  const isEmpty = items.length === 0;

  // SCROLL LOCK LOGIC
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleConfirmOrder = () => {
    dispatch(setCartOpen(false));
    navigate("/checkout");
  };

  const handleQuantityChange = (id: string, value: string) => {
    const qty = parseInt(value);
    if (!isNaN(qty)) {
      dispatch(setQuantity({ id, quantity: qty }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-2000 flex justify-end"
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
                Your Selection
              </h2>
              <button
                type="button"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-secondary text-brand-text hover:text-brand-accent transition-all"
                onClick={() => dispatch(setCartOpen(false))}
                title="Close Cart"
              >
                <FaTimes />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
              {isEmpty ? (
                <div className="text-center py-20">
                  <div className="w-24 h-24 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaShoppingBag className="text-4xl text-brand-accent/30" />
                  </div>
                  <p className="text-xl font-black text-brand-text">
                    Your bag is empty.
                  </p>
                  <p className="text-sm text-brand-muted mt-3 font-medium px-10 leading-relaxed">
                    Time for some high-quality matcha?
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {items.map((item) => (
                    <motion.div
                      layout
                      key={item.id}
                      className="flex gap-4 p-4 rounded-2xl bg-brand-secondary/30 border border-brand-border group relative"
                    >
                      <div className="w-20 h-20 bg-white rounded-xl overflow-hidden p-2 shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-black text-brand-text truncate pr-6">{item.name}</h4>
                        <p className="text-sm font-bold text-brand-accent mb-3">${item.price}</p>
                        
                        <div className="flex items-center gap-3">
                          <button 
                            type="button"
                            onClick={() => dispatch(removeSingleItem(item.id))}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-brand-secondary border border-brand-border hover:bg-brand-accent transition-all shadow-sm group/btn"
                            title="Decrease quantity"
                          >
                            <FaMinus className="text-sm text-brand-accent group-hover/btn:text-brand-bg transition-colors" />
                          </button>
                          
                          <input 
                            type="number" 
                            min="1"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                            aria-label={`Quantity for ${item.name}`}
                            title="Product Quantity"
                            className="w-10 bg-transparent text-center font-black text-brand-text border-b-2 border-brand-border/30 focus:border-brand-accent outline-none py-0.5 transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          />

                          <button 
                            type="button"
                            onClick={() => dispatch(addItem(item))}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-brand-secondary border border-brand-border hover:bg-brand-accent transition-all shadow-sm group/btn"
                            title="Increase quantity"
                          >
                            <FaPlus className="text-sm text-brand-accent group-hover/btn:text-brand-bg transition-colors" />
                          </button>
                        </div>
                      </div>

                      <button 
                        type="button"
                        onClick={() => dispatch(removeItem(item.id))}
                        className="absolute top-4 right-4 text-brand-muted hover:text-red-500 transition-colors p-2"
                        title="Remove product from bag"
                      >
                        <FaTrash className="text-xs" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {!isEmpty && (
              <div className="mt-8 pt-6 border-t-2 border-brand-border">
                <div className="flex justify-between items-center text-lg mb-6">
                  <span className="font-bold text-brand-muted">Subtotal</span>
                  <span className="text-2xl font-black text-brand-text">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>
                <button 
                  type="button"
                  onClick={handleConfirmOrder}
                  className="w-full py-5 bg-brand-accent text-white rounded-2xl font-black uppercase tracking-widest hover:bg-brand-deep active:scale-95 transition-all shadow-xl shadow-brand-accent/20"
                >
                  Confirm Order
                </button>
                <button
                  type="button"
                  onClick={() => dispatch(setCartOpen(false))}
                  className="w-full mt-4 py-3 text-brand-muted font-bold hover:text-brand-accent transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartPopup;


