import React from "react";
import SectionHeader from "../components/common/UI/SectionHeader";
import { productsData } from "../data/productsData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { usePagination } from "../hooks/usePagination";
import ProductCard from "../components/products/ProductCard/ProductCard";
import Button from "../components/common/UI/Button/Button";

import SearchBar from "../components/common/UI/SearchBar";
import FilterBar from "../components/common/UI/FilterBar";
import ViewToggle from "../components/common/UI/ViewToggle";

const ITEMS_PER_PAGE = 6;

const CATEGORIES = [
  { label: "All Products", value: "all" },
  { label: "Ceremonial", value: "ceremonial" },
  { label: "Premium", value: "premium" },
  { label: "Culinary", value: "culinary" },
];

const Products: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [view, setView] = React.useState<"grid" | "list">("grid");

  const filteredProducts = React.useMemo(() => {
    return productsData.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  // HANDLE RESPONSIVE SIBLING COUNT FOR PAGINATION
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const siblingCount = windowWidth < 640 ? 0 : 1;

  const {
    currentPage,
    currentItems,
    paginationRange,
    nextPage,
    prevPage,
    setPage,
    totalPageCount,
  } = usePagination(filteredProducts, ITEMS_PER_PAGE, siblingCount);

  // RESET PAGE ON FILTER CHANGE
  React.useEffect(() => {
    setPage(1);
  }, [searchQuery, activeCategory, setPage]);

  return (
    <div className="w-full mx-auto px-6 md:px-16 lg:px-20 py-20">
      <SectionHeader
        title="Our Premium Collection"
        subtitle="Explore our curated selection of authentic Japanese matcha and handcrafted accessories for your daily ritual."
        hasBorder
      />

      {/* CONTROLS */}
      <div className="flex flex-col xl:flex-row justify-between items-start gap-8 mb-16 bg-brand-secondary/30 p-6 rounded-4xl border border-brand-border/50">
        <div className="flex flex-col md:flex-col items-start gap-8 w-full xl:w-auto">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="What are you looking for?"
            className="w-full md:max-w-md"
          />
          <FilterBar
            options={CATEGORIES}
            activeValue={activeCategory}
            onChange={setActiveCategory}
          />
        </div>
        
        <ViewToggle view={view} onChange={setView} />
      </div>

      <div className={`grid gap-8 py-8 transition-all duration-500 ${
        view === "grid" 
          ? "grid-cols-1 md:grid-cols-2 tab:grid-cols-3" 
          : "grid-cols-1"
      }`}>
        <AnimatePresence mode="wait">
          {currentItems.length > 0 ? (
            currentItems.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                layout={view}
              />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-2xl font-bold text-brand-muted italic">
                No products found matching your search...
              </p>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* PAGINATION */}
      {totalPageCount > 1 && (
        <div className="flex justify-center items-center flex-wrap gap-2 md:gap-3 mt-12 md:mt-20">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              prevPage();
            }}
            disabled={currentPage === 1}
            className="p-3! md:p-4!"
            title="Previous Page"
          >
            <FaChevronLeft className="text-sm md:text-base text-brand-accent" />
          </Button>

          <div className="flex flex-wrap justify-center gap-1 md:gap-2">
            {paginationRange?.map((page, i) => (
              <Button
                key={i}
                type="button"
                variant={currentPage === page ? "primary" : "ghost"}
                size="sm"
                onClick={(e) => {
                  e.preventDefault();
                  if (typeof page === "number") setPage(page);
                }}
                disabled={page === "..."}
                className={`w-10! h-10! md:w-12! md:h-12! p-0! rounded-xl! ${currentPage === page ? "shadow-lg shadow-brand-accent/30 scale-105 md:scale-110 font-black text-xs md:text-base" : "font-bold text-brand-muted text-xs md:text-base"}`}
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              nextPage();
            }}
            disabled={currentPage === totalPageCount}
            className="p-3! md:p-4!"
            title="Next Page"
          >
            <FaChevronRight className="text-sm md:text-base text-brand-accent" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Products;
