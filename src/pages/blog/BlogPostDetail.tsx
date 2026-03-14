import React, { useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaClock, FaCalendarAlt, FaChevronLeft, FaUser } from "react-icons/fa";
import { blogData } from "../../entities/post/blogData";
import { productsData } from "../../entities/product/productsData";
import ProductCard from "../../entities/product/components/ProductCard/ProductCard";
import { useUserRegion } from "../../features/personalization/hooks/useUserRegion";
import SectionHeader from "../../shared/components/SectionHeader";

/**
 * BLOG POST DETAIL PAGE
 * RESPONSIVE PROPORTIONAL LAYOUT WITHOUT RAW PIXEL VALUES
 */
const BlogPostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const region = useUserRegion();

  const currentPost = useMemo(() => blogData.find((p) => p.slug === slug), [slug]);
  const otherPosts = useMemo(() => blogData.filter((p) => p.slug !== slug), [slug]);

  const relatedProducts = useMemo(() => {
    // PICK 3 RANDOM PRODUCTS
    return [...productsData].sort(() => 0.5 - Math.random()).slice(0, 3);
  }, []);

  if (!currentPost) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-bg text-brand-text">
        <div className="text-center">
          <h2 className="text-2xl font-black mb-4">Article Not Found</h2>
          <Link to="/blog" className="text-brand-accent hover:underline">Return to Journal</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-brand-bg pt-32 pb-20 px-6 md:px-16 lg:px-40">
      <div className="w-full mx-auto">
        
        {/* TOP NAVIGATION */}
        <div className="mb-12 flex items-center justify-between">
          <button
            onClick={() => navigate("/blog")}
            className="flex items-center gap-2 text-brand-accent font-black text-sm uppercase tracking-widest hover:-translate-x-1 rtl:hover:translate-x-1 transition-transform"
          >
            <FaChevronLeft className="text-xs rtl:rotate-180" />
            Back to Blog
          </button>
          <span className="bg-brand-accent/10 text-brand-accent px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
            {currentPost.category}
          </span>
        </div>

        {/* PROPORTIONAL GRID SYSTEM */}
        <div className="w-full flex flex-row gap-8 lg:gap-12 items-start">
          
          {/* MAIN COLUMN */}
          <article className="w-2/3 md:col-span-2 lg:col-span-3 bg-brand-card border border-brand-border rounded-4xl overflow-hidden shadow-sm">
            
            {/* HERO IMAGE */}
            <div className="w-full h-[600px] bg-brand-secondary tr-rounded-4xl tl-rounded-4xl overflow-hidden mb-10 lg:mb-12 border border-brand-border flex items-center justify-center">
              <img 
                src={currentPost.localizedImages?.[region] || currentPost.image} 
                alt={currentPost.title} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="px-2 lg:px-14">
              <header className="mb-10">
                <div className="flex flex-wrap items-center gap-6 text-brand-muted text-[11px] font-bold mb-8 opacity-70">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-brand-accent" /> {currentPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-brand-accent" /> {currentPost.readTime} min read
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUser className="text-brand-accent" /> {currentPost.author}
                  </div>
                </div>

                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-brand-text leading-[1.1] mb-8">
                  {currentPost.title}
                </h1>
              </header>

              <div className="prose prose-brand max-w-none text-brand-muted leading-relaxed text-base lg:text-lg">
                <p className="mb-10 font-bold text-brand-text italic border-s-4 border-brand-accent ps-8 py-3 bg-brand-accent/5 rounded-e-2xl">
                  {currentPost.excerpt}
                </p>
                <div className="whitespace-pre-line text-brand-text/90 leading-loose">
                  {currentPost.content}
                </div>
              </div>
            </div>
          </article>

          {/* SIDEBAR COLUMN */}
          <aside className="w-1/3 md:col-span-1 lg:col-span-1 sticky top-32 flex flex-col gap-10 overflow-hidden">
            <div className="bg-brand-card border border-brand-border rounded-4xl p-4 lg:p-6 w-full">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-brand-text mb-8 border-b border-brand-border pb-5">
                Keep Reading
              </h2>
              <div className="flex flex-col gap-6 w-full">
                {otherPosts.slice(0, 5).map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="group flex flex-row gap-4 items-center transition-all hover:bg-brand-accent/5 rounded-2xl w-full border border-transparent hover:border-brand-accent/10"
                  >
                    {/* LEFT: IMAGE MINI THUMBNAIL */}
                    <div className="w-16 md:w-20 aspect-square shrink-0 rounded-2xl overflow-hidden bg-brand-secondary border border-brand-border flex items-center justify-center shadow-sm">
                      <img 
                        src={post.localizedImages?.[region] || post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                    </div>
                    {/* RIGHT: CONTENT RELATIVE FLEX */}
                    <div className="flex flex-col flex-1 min-w-0">
                      <h3 className="text-[13px] font-black text-brand-text leading-tight mb-1 group-hover:text-brand-accent transition-colors line-clamp-1">
                        {post.title}
                      </h3>
                      <p className="text-[11px] text-brand-muted line-clamp-1 mb-1.5 opacity-80">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-[9px] font-bold text-brand-muted uppercase tracking-[0.2em]">
                        <span className="text-brand-accent">{post.category}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* NEWSLETTER */}
            <div className="p-10 lg:p-12 bg-brand-accent rounded-[3rem] text-white relative overflow-hidden group shadow-2xl shadow-brand-accent/30 text-center w-full">
              <div className="relative z-10 w-full">
                <h4 className="font-black text-3xl mb-4">The Ritual</h4>
                <p className="text-white/80 text-sm leading-relaxed mb-8">Subscribe to our weekly matcha journal.</p>
                <div className="flex flex-col gap-4 w-full">
                  <input 
                    type="email" 
                    placeholder="Enter email" 
                    className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-sm w-full focus:outline-none placeholder:text-white/50 focus:bg-white/20 transition-all text-center" 
                  />
                  <button className="bg-white text-brand-accent px-6 py-4 rounded-2xl text-sm font-black hover:bg-brand-secondary transition-all hover:-translate-y-1 w-full">
                    Join Us
                  </button>
                </div>
              </div>
              <div className="absolute -bottom-20 -end-20 w-52 h-52 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000 pointer-events-none" />
            </div>
          </aside>
        </div>

        {/* RELATED PRODUCTS SECTION */}
        <div className="mt-40">
          <SectionHeader 
            title="Elevate Your Ritual" 
            subtitle="Recommended essentials for your matcha journey."
            hasBorder
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;

