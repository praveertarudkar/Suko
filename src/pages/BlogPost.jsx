import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BLOG_POSTS } from "../data/blogData";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, Twitter, Facebook, Linkedin, Share2 } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  const post = BLOG_POSTS.find((p) => p.id === parseInt(id));

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0a0c] text-white pt-40 pb-24 text-center">
        <h1 className="text-3xl font-body">Article not found</h1>
        <Link to="/blog" className="mt-8 inline-block text-white/60 hover:text-white underline font-body">
          Return to Journal
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      data-testid="blog-post-page" 
      className="min-h-screen bg-[#0a0a0c] text-white pb-24"
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white/20 z-50 origin-left"
        style={{ scaleX }}
      />
      
      <div className="relative w-full h-[60vh] min-h-[500px] mb-16 lg:mb-24">
        <div className="absolute inset-0 z-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0c]" />
        </div>

        <div className="absolute inset-0 z-10 flex flex-col justify-end">
          <div className="max-w-[800px] mx-auto px-6 lg:px-12 w-full pb-16">
            <Link to="/blog" className="text-sm font-body text-white/60 hover:text-white mb-8 inline-flex items-center gap-2 uppercase tracking-wider transition-colors bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 w-fit">
              <ArrowLeft className="w-4 h-4" /> Back to Journal
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="flex items-center gap-4 text-xs font-body uppercase tracking-widest text-white/70 mb-6">
                <span className="bg-white/10 text-white px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">{post.category}</span>
                <span>{post.date}</span>
              </div>
              <h1 className="font-body text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl font-body text-white/80 leading-relaxed border-l-2 border-white/30 pl-6 italic max-w-3xl">
                {post.excerpt}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <article className="max-w-[800px] mx-auto px-6 lg:px-12 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="prose prose-invert prose-lg md:prose-xl max-w-none font-body text-white/80 leading-relaxed 
            prose-p:mb-8 prose-p:text-lg md:prose-p:text-xl prose-p:font-light
            prose-headings:font-body prose-headings:text-white prose-headings:font-bold
            prose-a:text-white prose-a:underline prose-a:decoration-white/30 hover:prose-a:decoration-white
            prose-blockquote:border-l-white/20 prose-blockquote:bg-white/[0.02] prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:rounded-r-lg
            prose-strong:text-white/95"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          <div className="flex items-center gap-3">
            <Share2 className="w-5 h-5 text-white/50" />
            <p className="text-sm font-body text-white/50 uppercase tracking-wider font-bold">Share this article</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 p-3 rounded-full transition-colors text-white/70 hover:text-white">
              <Twitter className="w-5 h-5" />
            </button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 p-3 rounded-full transition-colors text-white/70 hover:text-white">
              <Facebook className="w-5 h-5" />
            </button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 p-3 rounded-full transition-colors text-white/70 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </article>
    </motion.div>
  );
};

export default BlogPost;
