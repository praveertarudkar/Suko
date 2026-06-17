import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../data/blogData";
const Blog = () => {
  return (
    <div data-testid="blog-page" className="min-h-screen text-white pt-32 pb-24 relative overflow-hidden">
      <div className="fixed inset-0 bg-[#0a0a0c]/50 z-0 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <header className="mb-16 md:mb-24 text-center">
          <h1 className="font-body text-4xl md:text-6xl font-bold tracking-tight mb-6">The SUKO Journal</h1>
          <p className="text-white/60 text-lg md:text-xl font-body max-w-2xl mx-auto">
            Insights, trends, and stories from the world of luxury tailoring and modern formalwear.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {BLOG_POSTS.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="group flex flex-col h-full cursor-pointer">
              <article className="flex flex-col h-full">
                <div className="aspect-[4/5] w-full overflow-hidden mb-6 bg-white/5 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 text-xs uppercase tracking-wider font-body border border-white/10">
                    {post.category}
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <time className="text-sm text-white/50 mb-3 font-body tracking-wider">{post.date}</time>
                  <h2 className="text-2xl font-bold font-body mb-3 leading-snug group-hover:text-white/80 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-white/60 font-body leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider font-body group-hover:text-white/80 transition-colors">
                    Read Article
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
