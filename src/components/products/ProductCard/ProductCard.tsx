import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { Product } from "../../../type/product";
import Button from "../../common/UI/Button/Button";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="bg-brand-card rounded-3xl overflow-hidden border border-brand-border flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
    >
      <div className="h-[300px] overflow-hidden bg-brand-secondary flex items-center justify-center p-6 relative">
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

      <div className="p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-black text-brand-text tracking-tight group-hover:text-brand-accent transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 text-yellow-500 text-sm font-bold bg-yellow-500/5 px-2 py-1 rounded-lg">
            <FaStar /> {product.rating}
          </div>
        </div>

        <p className="text-brand-muted text-sm mb-8 flex-1 leading-relaxed font-medium">
          {product.description}
        </p>

        <div className="flex justify-between items-center pt-6 border-t border-brand-border/50">
          <span className="text-2xl font-black text-brand-text">
            ${product.price.toFixed(2)}
          </span>
          <Button
            variant="primary"
            size="md"
            className="gap-2 shadow-brand-accent/20"
          >
            <FaShoppingCart /> Add
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
