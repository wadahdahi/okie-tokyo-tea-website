import React, { useState, useEffect, useMemo } from "react";
import { blogData, blogCategories } from "../../entities/post/blogData";
import BlogCard from "../../entities/post/components/BlogCard/BlogCard";
import { motion, AnimatePresence } from "framer-motion";
import { FaLeaf } from "react-icons/fa";
import { usePagination } from "../../shared/hooks/usePagination";
import Pagination from "../../shared/components/Pagination/Pagination";
import SearchBar from "../../shared/components/SearchBar";
import FilterBar from "../../shared/components/FilterBar";
import ViewToggle from "../../shared/components/ViewToggle";

const ITEMS_PER_PAGE = 8;

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  
  // HANDLE RESPONSIVE SIBLING COUNT
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const siblingCount = windowWidth < 640 ? 0 : 1;

  const filtered = useMemo(() => {
    return blogData.filter((post) => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const {
    currentPage,
    currentItems,
    paginationRange,
    nextPage,
    prevPage,
    setPage,
    totalPageCount,
  } = usePagination(filtered, ITEMS_PER_PAGE, siblingCount);

  // RESET PAGE ON CATEGORY OR SEARCH CHANGE
  useEffect(() => {
    setPage(1);
  }, [activeCategory, searchQuery, setPage]);

  // SCROLL TO TOP ON PAGE CHANGE
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const categoryOptions = useMemo(() => 
    blogCategories.map(cat => ({ label: cat, value: cat }))
  , []);

  return (
    <div className="min-h-screen bg-brand-bg pt-32 pb-24 px-6 md:px-10">
      {/* PAGE HEADER */}
      <div className="max-w-[1400px] mx-auto mb-16 text-center">
        <span className="inline-flex items-center gap-2 text-brand-accent font-black uppercase tracking-[0.3em] text-xs mb-4">
          <FaLeaf /> THE OKIE JOURNAL
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-brand-text tracking-tight mb-4 text-balance">
          Matcha, <span className="italic text-brand-accent">Stories & Rituals</span>
        </h1>
        <p className="text-brand-muted max-w-xl mx-auto text-base md:text-lg leading-relaxed">
          Deep dives into the world of matcha — from field to cup, science to ceremony.
        </p>
      </div>

      {/* CONTROLS */}
      <div className="max-w-[1400px] mx-auto flex flex-col xl:flex-row justify-between items-start gap-8 mb-16 bg-brand-secondary/30 p-6 rounded-4xl border border-brand-border/50">
        <div className="flex flex-col md:flex-col items-start gap-8 w-full xl:w-auto">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search stories & rituals..."
            className="w-full md:max-w-md"
          />
          <FilterBar
            options={categoryOptions}
            activeValue={activeCategory}
            onChange={setActiveCategory}
          />
        </div>
        
        <ViewToggle view={view} onChange={setView} />
      </div>

      {/* POSTS GRID */}
      <div className="max-w-[1400px] mx-auto min-h-[600px]">
        <motion.div
          key={activeCategory + currentPage + view}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`grid gap-8 md:gap-10 transition-all duration-500 ${
            view === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
              : "grid-cols-1"
          }`}
        >
          <AnimatePresence mode="wait">
            {currentItems.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} layout={view} />
            ))}
          </AnimatePresence>
        </motion.div>
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

export default Blog;


