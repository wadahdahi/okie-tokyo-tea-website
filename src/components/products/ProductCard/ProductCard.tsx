import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { Product } from "../../../type/product";
import Button from "../../common/UI/Button/Button";

interface ProductCardProps {
  product: Product;
  layout?: "grid" | "list";
}

import { useDispatch } from "react-redux";
import { addItem } from "../../../redux/slices/cartSlice";

const ProductCard: React.FC<ProductCardProps> = ({ product, layout = "grid" }) => {
  const isList = layout === "list";
  const dispatch = useDispatch();

  const handleAddToBag = () => {
    dispatch(addItem(product));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`bg-brand-card rounded-3xl overflow-hidden border border-brand-border hover:border-brand-accent/30 hover:shadow-2xl transition-all duration-300 group flex ${
        isList ? "flex-row items-center p-6 gap-8" : "flex-col"
      }`}
    >
      <div className={`overflow-hidden bg-brand-secondary flex items-center justify-center p-4 relative shrink-0 ${
        isList ? "w-48 h-48 rounded-2xl" : "h-[240px]"
      }`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-brand-accent/10 backdrop-blur-md text-brand-accent text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase">
            {product.category}
          </span>
        </div>
      </div>

      <div className={`flex-1 flex flex-col ${isList ? "text-left" : "p-6"}`}>
        <div className="flex justify-between items-center mb-2 gap-4">
          <h3 className="text-lg font-black text-brand-text tracking-tight group-hover:text-brand-accent transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 text-yellow-500 text-sm font-bold bg-yellow-500/5 px-2 py-1 rounded-lg shrink-0">
            <FaStar /> {product.rating}
          </div>
        </div>

        <p className={`text-brand-muted text-xs mb-6 flex-1 leading-relaxed font-medium ${isList ? "" : "line-clamp-2"}`}>
          {product.description}
        </p>

        <div className={`flex justify-between items-center pt-4 border-t border-brand-border/50 ${isList ? "mt-0" : "mt-auto"}`}>
          <span className="text-xl font-black text-brand-text">
            ${product.price.toFixed(2)}
          </span>
          <Button
            variant="primary"
            size="md"
            className="gap-2 shadow-brand-accent/20 px-8"
            onClick={handleAddToBag}
          >
            <FaShoppingCart /> Add
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
