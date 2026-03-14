import React, { useState } from "react";
import { blogData, blogCategories } from "../../entities/post/blogData";
import BlogCard from "../../entities/post/components/BlogCard/BlogCard";
import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? blogData
    : blogData.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-brand-bg pt-32 pb-24 px-6 md:px-10">
      {/* PAGE HEADER */}
      <div className="max-w-[1400px] mx-auto mb-16 text-center">
        <span className="inline-flex items-center gap-2 text-brand-accent font-black uppercase tracking-[0.3em] text-xs mb-4">
          <FaLeaf /> The Okie Journal
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-brand-text tracking-tight mb-4">
          Matcha, <span className="italic text-brand-accent">Stories & Rituals</span>
        </h1>
        <p className="text-brand-muted max-w-xl mx-auto text-base leading-relaxed">
          Deep dives into the world of matcha — from field to cup, science to ceremony.
        </p>
      </div>

      {/* CATEGORY FILTER */}
      <div className="max-w-[1400px] mx-auto flex flex-wrap gap-3 justify-center mb-12">
        {blogCategories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-black uppercase tracking-widest border transition-all duration-300 ${
              activeCategory === cat
                ? "bg-brand-accent text-white border-brand-accent shadow-lg"
                : "bg-brand-card text-brand-muted border-brand-border hover:border-brand-accent hover:text-brand-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* POSTS GRID */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 tab:grid-cols-3 gap-8"
      >
        {filtered.map((post, i) => (
          <BlogCard key={post.id} post={post} index={i} />
        ))}
      </motion.div>
    </div>
  );
};

export default Blog;

