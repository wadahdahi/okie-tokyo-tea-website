import React from "react";
import SectionHeader from "../components/common/UI/SectionHeader";
import { productsData } from "../data/productsData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { usePagination } from "../hooks/usePagination";
import ProductCard from "../components/products/ProductCard/ProductCard";
import Button from "../components/common/UI/Button/Button";

const ITEMS_PER_PAGE = 6;

const Products: React.FC = () => {
  const {
    currentPage,
    currentItems,
    getPaginationGroup,
    nextPage,
    prevPage,
    setPage,
    totalPages,
  } = usePagination(productsData, ITEMS_PER_PAGE);

  return (
    <div className="max-w-[1400px] mx-auto px-8 py-20">
      <SectionHeader
        title="Our Premium Collection"
        subtitle="Explore our curated selection of authentic Japanese matcha and handcrafted accessories for your daily ritual."
        hasBorder
      />

      <div className="matcha-grid">
        <AnimatePresence mode="wait">
          {currentItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </AnimatePresence>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-3 mt-20">
        <Button
          variant="secondary"
          size="sm"
          onClick={prevPage}
          disabled={currentPage === 1}
          className="p-4!"
        >
          <FaChevronLeft />
        </Button>

        <div className="flex gap-2">
          {getPaginationGroup().map((page, i) => (
            <Button
              key={i}
              variant={currentPage === page ? "primary" : "ghost"}
              size="sm"
              onClick={() => typeof page === "number" && setPage(page)}
              disabled={page === "..."}
              className={`w-12! h-12! p-0! ${currentPage === page ? "shadow-lg shadow-brand-accent/30 scale-110" : ""}`}
            >
              {page}
            </Button>
          ))}
        </div>

        <Button
          variant="secondary"
          size="sm"
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="p-4!"
        >
          <FaChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default Products;
