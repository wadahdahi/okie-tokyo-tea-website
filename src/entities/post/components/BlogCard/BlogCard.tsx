import React from "react";
import { motion } from "framer-motion";
import { FaClock, FaArrowRight } from "react-icons/fa";
import { BlogPost } from "../../blogData";
import { useNavigate } from "react-router-dom";

interface BlogCardProps {
  post: BlogPost;
  index: number;
  layout?: "grid" | "list";
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index, layout = "grid" }) => {
  const navigate = useNavigate();
  const isList = layout === "list";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }}
      onClick={() => navigate(`/blog/${post.slug}`)}
      className={`bg-brand-card overflow-hidden border border-brand-border hover:border-brand-accent/30 hover:shadow-2xl transition-all duration-300 group flex cursor-pointer ${
        isList 
          ? "flex-row items-center p-3 sm:p-6 gap-4 sm:gap-8 rounded-2xl" 
          : "flex-col rounded-3xl"
      }`}
    >
      {/* IMAGE */}
      <div className={`overflow-hidden bg-brand-secondary flex items-center justify-center relative shrink-0 ${
        isList 
          ? "w-20 h-20 sm:w-48 sm:h-48 rounded-xl sm:rounded-2xl" 
          : "h-52"
      }`}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className={`absolute top-2 left-2 sm:top-4 sm:left-4 ${isList ? "hidden sm:block" : ""}`}>
          <span className="bg-brand-accent/10 backdrop-blur-md text-brand-accent text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase">
            {post.category}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className={`flex-1 flex flex-col w-full h-full justify-between ${isList ? "text-left py-1" : "p-6"}`}>
        <div>
          <div className="flex items-center gap-2 text-brand-muted text-[10px] sm:text-xs font-bold mb-1 opacity-70">
            <FaClock className="shrink-0" />
            <span>{post.readTime} min read</span>
            <span className="mx-1 opacity-40">·</span>
            <span className={isList ? "hidden sm:inline" : ""}>
              {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </span>
          </div>

          <h3 className={`${isList ? "text-base sm:text-lg" : "text-lg"} font-black text-brand-text leading-tight mb-2 group-hover:text-brand-accent transition-colors line-clamp-1`}>
            {post.title}
          </h3>

          <p className={`text-brand-muted text-xs leading-relaxed font-medium ${isList ? "hidden sm:block sm:line-clamp-2" : "line-clamp-2"}`}>
            {post.excerpt}
          </p>
        </div>

        <div className={`flex items-center gap-2 text-brand-accent text-[10px] sm:text-sm font-black ${isList ? "pt-2 border-t border-brand-border/30 mt-auto" : "mt-5"}`}>
          Read More
          <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;

