import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../data/blogData";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const Blog = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const featuredPost = BLOG_POSTS[0];
  const remainingPosts = BLOG_POSTS.slice(1);

  return (
    <div data-testid="blog-page" className="min-h-screen text-white pt-32 pb-24 relative overflow-hidden bg-[#0a0a0c]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24 text-center"
        >
          <h1 className="font-body text-5xl md:text-7xl font-bold tracking-tight mb-6">The SUKO Journal</h1>
          <p className="text-white/60 text-lg md:text-xl font-body max-w-2xl mx-auto">
            Insights, trends, and stories from the world of luxury tailoring and modern formalwear.
          </p>
        </motion.header>

        {featuredPost && (
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-20"
          >
            <Link to={`/blog/${featuredPost.id}`} className="group block relative rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative aspect-[4/3] lg:aspect-auto h-full overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden" />
                </div>
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-black/20 z-10 relative">
                  <div className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-body mb-6">
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                      {featuredPost.category}
                    </span>
                    <span className="text-white/50">{featuredPost.date}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold font-body mb-6 leading-tight group-hover:text-white/90 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-white/60 text-lg font-body leading-relaxed mb-8 max-w-xl">
                    {featuredPost.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider font-body group-hover:text-white transition-colors text-white/70">
                    Read Featured Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {remainingPosts.map((post) => (
            <motion.div variants={itemVariants} key={post.id} className="h-full">
              <Link to={`/blog/${post.id}`} className="group flex flex-col h-full cursor-pointer bg-white/[0.03] rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500 backdrop-blur-sm">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/60 backdrop-blur-md px-3 py-1.5 text-xs uppercase tracking-wider font-body border border-white/10 rounded-full text-white/90">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-8">
                  <time className="text-sm text-white/40 mb-4 font-body tracking-wider">{post.date}</time>
                  <h3 className="text-2xl font-bold font-body mb-4 leading-snug group-hover:text-white/90 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-white/50 font-body leading-relaxed flex-1 line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider font-body group-hover:text-white transition-colors text-white/60">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
