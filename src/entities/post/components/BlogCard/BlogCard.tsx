import React from "react";
import { motion } from "framer-motion";
import { FaClock, FaArrowRight } from "react-icons/fa";
import { BlogPost } from "../../blogData";
import { useNavigate } from "react-router-dom";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  const navigate = useNavigate();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }}
      onClick={() => navigate(`/blog/${post.slug}`)}
      className="bg-brand-card border border-brand-border rounded-3xl overflow-hidden hover:border-brand-accent/40 hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col"
    >
      {/* IMAGE */}
      <div className="h-52 overflow-hidden bg-brand-secondary relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-4 left-4 bg-brand-accent/90 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
          {post.category}
        </span>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-2 text-brand-muted text-xs font-bold mb-3">
          <FaClock className="shrink-0" />
          <span>{post.readTime} min read</span>
          <span className="mx-1 opacity-40">·</span>
          <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
        </div>

        <h3 className="text-lg font-black text-brand-text leading-tight mb-3 group-hover:text-brand-accent transition-colors">
          {post.title}
        </h3>

        <p className="text-brand-muted text-sm leading-relaxed line-clamp-2 flex-1">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-2 mt-5 text-brand-accent text-sm font-black">
          Read More
          <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;

