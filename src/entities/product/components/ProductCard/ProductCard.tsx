import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { Product } from "../../types";
import Button from "../../../../shared/components/Button/Button";

interface ProductCardProps {
  product: Product;
  layout?: "grid" | "list";
}

import { useDispatch } from "react-redux";
import { addItem } from "../../../../features/cart/cartSlice";
import { addToast } from "../../../../shared/lib/uiSlice";
import { useAppSelector } from "../../../../shared/hooks/useAppRedux";

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  layout = "grid",
}) => {
  const isList = layout === "list";
  const dispatch = useDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const cartItem = cartItems.find((item) => item.id === product.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  const handleAddToBag = () => {
    dispatch(addItem(product));
    dispatch(
      addToast({ message: `${product.name} added to bag!`, type: "success" }),
    );
    window.dispatchEvent(new Event("forceShowHeader"));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`relative bg-brand-card overflow-hidden border border-brand-border hover:border-brand-accent/30 hover:shadow-2xl transition-all duration-300 group flex ${
        isList
          ? "flex-row items-center p-3 sm:p-6 gap-4 sm:gap-8 rounded-2xl"
          : "flex-col rounded-3xl shadow-lg"
      }`}
    >
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[120%] object-cover opacity-8 z-10">
        <img
          alt=""
          src="/assets/images/pattern/pattern-003.webp"
          className=""
        />
      </div>
      {/* PRODUCT IMAGE CONTAINER */}
      <div
        className={`overflow-hidden bg-brand-secondary flex items-center justify-center relative shrink-0 ${
          isList
            ? "w-20 h-20 sm:w-48 sm:h-48 rounded-xl sm:rounded-2xl p-2 sm:p-4"
            : "h-[240px] p-4"
        }`}
      >
        {/* MULTI-LAYERED SHADOW SYSTEM */}
        {/* 1. CONTACT SHADOW (DARKER & SMALLER) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-brand-accent/20 blur-md rounded-[100%] scale-x-150 z-0" />

        {/* 2. AMBIENT SHADOW (LIGHTER & WIDER) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/5 h-4 bg-black/10 blur-2xl rounded-[100%] scale-x-125 group-hover:scale-x-150 transition-transform duration-700 opacity-60 z-0" />

        {/* PRODUCT IMAGE */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 relative z-10 drop-shadow-2xl"
        />
        <div
          className={`absolute top-2 left-2 sm:top-4 sm:left-4 ${isList ? "hidden sm:block" : ""}`}
        >
          <span className="bg-brand-accent/10 backdrop-blur-md text-brand-accent text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase">
            {product.category}
          </span>
        </div>
      </div>

      <div
        className={`flex-1 flex flex-col w-full h-full justify-between ${isList ? "text-left py-1" : "p-6"}`}
      >
        {/* TITLE AND DESCRIPTION */}
        <div>
          <div
            className={`flex justify-between items-start md:items-center gap-2 sm:gap-4 mb-1`}
          >
            <h3
              className={`${isList ? "text-base sm:text-lg" : "text-lg"} font-black text-brand-text tracking-tight group-hover:text-brand-accent transition-colors line-clamp-1`}
            >
              {product.name}
            </h3>
            <div
              className={`flex items-center gap-1 text-yellow-500 font-bold bg-yellow-500/5 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md shrink-0 ${isList ? "text-[10px] sm:text-sm" : "text-sm"}`}
            >
              <FaStar /> <span>{product.rating}</span>
            </div>
          </div>

          <p
            className={`text-brand-muted text-xs mb-3 flex-1 leading-relaxed font-medium ${isList ? "hidden sm:-webkit-box sm:line-clamp-2" : "line-clamp-2"}`}
          >
            {product.description}
          </p>
        </div>
        {/* PRICE AND BUTTONS */}
        <div
          className={`flex flex-col justify-between items-start ${isList ? "pt-2 border-t border-brand-border/30 mt-auto" : "border-t border-brand-border/50 mt-auto"}`}
        >
          <span
            className={`${isList ? "text-base sm:text-xl" : "pt-4 pb-2 text-xl"} font-black text-brand-text`}
          >
            ${product.price.toFixed(2)}
          </span>
          <div className="relative flex flex-row gap-4 justify-between w-full z-12">
            <Button
              variant="primary"
              size={isList ? "sm" : "md"}
              className={`gap-2 shadow-brand-accent/20 w-full ${isList ? "sm:px-8 text-xs sm:text-base rounded-lg sm:rounded-xl" : "h-12"}`}
              onClick={() => {}}
            >
              <span className={isList ? "hidden sm:inline" : ""}>Shop Now</span>
            </Button>
            <div data-ignore-header-hide="true">
              <Button
                variant="secondary"
                size={isList ? "sm" : "md"}
                className={`gap-2 shadow-brand-accent/40 border ${isList ? "sm:px-8 text-xs sm:text-base rounded-lg sm:rounded-xl" : "h-12"}`}
                onClick={handleAddToBag}
              >
                <span className={isList ? "hidden sm:inline" : ""}>
                  <FaShoppingCart />{" "}
                </span>
              </Button>
            </div>
            {quantityInCart > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={`absolute -top-2 -right-2 flex items-center justify-center bg-brand-accent text-white font-black rounded-full shadow-md z-10 ${isList ? "w-4 h-4 text-[9px]" : "w-6 h-6 text-xs"}`}
              >
                {quantityInCart}
              </motion.span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
