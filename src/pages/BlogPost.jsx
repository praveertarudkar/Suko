import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BLOG_POSTS } from "../data/blogData";

const BlogPost = () => {
  const { id } = useParams();
  const post = BLOG_POSTS.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen text-white pt-40 pb-24 text-center">
        <h1 className="text-3xl font-body">Article not found</h1>
        <Link to="/blog" className="mt-8 inline-block text-white/60 hover:text-white underline font-body">
          Return to Journal
        </Link>
      </div>
    );
  }

  return (
    <div data-testid="blog-post-page" className="min-h-screen text-white pt-32 pb-24">
      <article className="max-w-[800px] mx-auto px-6 lg:px-12">
        <Link to="/blog" className="text-sm font-body text-white/50 hover:text-white mb-8 inline-flex items-center gap-2 uppercase tracking-wider transition-colors">
          <span className="text-lg leading-none">&larr;</span> Back to Journal
        </Link>
        
        <header className="mb-12">
          <div className="flex items-center gap-4 text-xs font-body uppercase tracking-wider text-white/60 mb-6">
            <span className="text-white">{post.category}</span>
            <span>&bull;</span>
            <span>{post.date}</span>
          </div>
          <h1 className="font-body text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl font-body text-white/70 leading-relaxed border-l-2 border-white/20 pl-6 italic">
            {post.excerpt}
          </p>
        </header>

        <div className="w-full aspect-[16/9] mb-16 overflow-hidden bg-white/5">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div 
          className="prose prose-invert prose-lg max-w-none font-body text-white/80 leading-relaxed 
            prose-p:mb-8 prose-p:text-lg prose-headings:font-body prose-headings:text-white"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center">
          <p className="text-sm font-body text-white/50 uppercase tracking-wider">Share this article</p>
          <div className="flex gap-6">
            <button className="text-white/60 hover:text-white transition-colors">Twitter</button>
            <button className="text-white/60 hover:text-white transition-colors">Facebook</button>
            <button className="text-white/60 hover:text-white transition-colors">LinkedIn</button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
