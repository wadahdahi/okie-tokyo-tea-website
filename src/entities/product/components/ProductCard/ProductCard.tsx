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
      className={`bg-brand-card overflow-hidden border border-brand-border hover:border-brand-accent/30 hover:shadow-2xl transition-all duration-300 group flex ${
        isList
          ? "flex-row items-center p-3 sm:p-6 gap-4 sm:gap-8 rounded-2xl"
          : "flex-col rounded-3xl shadow-lg"
      }`}
    >
      <div
        className={`overflow-hidden bg-brand-secondary flex items-center justify-center relative shrink-0 ${
          isList
            ? "w-20 h-20 sm:w-48 sm:h-48 rounded-xl sm:rounded-2xl p-2 sm:p-4"
            : "h-[240px] p-4"
        }`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
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

        <div
          className={`flex flex-col justify-between items-start ${isList ? "pt-2 border-t border-brand-border/30 mt-auto" : "pt-4 border-t border-brand-border/50 mt-auto"}`}
        >
          <span
            className={`${isList ? "text-base sm:text-xl" : "text-xl"} font-black text-brand-text`}
          >
            ${product.price.toFixed(2)}
          </span>
          <div className="relative flex flex-row gap-4 justify-between w-full">
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
                variant="ghost"
                size={isList ? "sm" : "md"}
                className={`gap-2 shadow-brand-accent/20 border ${isList ? "sm:px-8 text-xs sm:text-base rounded-lg sm:rounded-xl" : ""}`}
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
