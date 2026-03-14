import React from "react";
import SectionHeader from "../../shared/components/SectionHeader";
import { productsData } from "../../entities/product/productsData";
import { AnimatePresence } from "framer-motion";
import { usePagination } from "../../shared/hooks/usePagination";
import ProductCard from "../../entities/product/components/ProductCard/ProductCard";
import SearchBar from "../../shared/components/SearchBar";
import FilterBar from "../../shared/components/FilterBar";
import ViewToggle from "../../shared/components/ViewToggle";
import Pagination from "../../shared/components/Pagination/Pagination";

const ITEMS_PER_PAGE = 8;

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
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 tab:grid-cols-3" 
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
      <Pagination
        currentPage={currentPage}
        totalPageCount={totalPageCount}
        paginationRange={paginationRange || []}
        onNext={nextPage}
        onPrev={prevPage}
        onPageChange={setPage}
      />
    </div>
  );
};

export default Products;


