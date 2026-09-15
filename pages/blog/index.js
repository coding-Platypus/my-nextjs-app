import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { BookOpen, Calendar, Clock, User, ArrowRight, Tag, Search } from 'lucide-react';
import { getAllPosts } from '@/data/posts';

export default function BlogIndex({ posts }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(posts.map((p) => p.category))];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>Blog Articles | NextCraft</title>
        <meta name="description" content="Explore our latest articles on Next.js, static site generation, routing, and modern web development." />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Blog &amp; Knowledge Base</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Latest Articles &amp; Insights
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Deep dive into Next.js concepts, static site generation, routing architecture, and styling techniques with Tailwind CSS.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
            />
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto space-y-3">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">No articles found</h3>
            <p className="text-slate-500 text-sm">
              Try adjusting your search query or selected category filter.
            </p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="mt-2 text-xs font-semibold text-emerald-600 hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="p-6 space-y-4">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold tracking-wide">
                      {post.category}
                    </span>
                    <span className="flex items-center text-slate-500 space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition leading-snug">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium"
                      >
                        <Tag className="w-2.5 h-2.5 mr-1 text-slate-400" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Meta & Link */}
                <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-slate-600">
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-semibold text-[10px]">
                      {post.author.charAt(0)}
                    </div>
                    <span className="font-medium">{post.author}</span>
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="text-xs font-semibold text-emerald-600 group-hover:text-emerald-700 flex items-center group-hover:translate-x-0.5 transition"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

// Fetch dummy posts at build time
export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

