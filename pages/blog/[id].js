import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Sparkles, CheckCircle2 } from 'lucide-react';
import { getAllPosts, getPostById } from '@/data/posts';
import { useState } from 'react';

export default function BlogPostDetail({ post }) {
  const [copied, setCopied] = useState(false);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Post Not Found</h1>
        <p className="text-slate-600 mt-2">The article you are looking for does not exist.</p>
        <Link
          href="/blog"
          className="mt-6 inline-flex items-center space-x-2 text-emerald-600 hover:underline font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog List</span>
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <Head>
        <title>{post.title} | NextCraft Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        {/* Navigation back button */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-sm font-medium text-slate-600 hover:text-emerald-600 transition group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-6 pb-8 border-b border-slate-200">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-xs text-slate-500 flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            {post.excerpt}
          </p>

          {/* Author & Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{post.author}</p>
                <p className="text-xs text-slate-500">{post.authorRole} • {post.date}</p>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 text-xs font-medium transition shadow-xs"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Article</span>
                </>
              )}
            </button>
          </div>
        </header>

        {/* Dynamic Route Info Pill */}
        <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 flex items-center space-x-3 text-xs text-emerald-800">
          <Sparkles className="w-5 h-5 text-emerald-600 shrink-0" />
          <p>
            <strong>Dynamic Route:</strong> Rendered statically at build-time using <code className="bg-white/80 px-1.5 py-0.5 rounded font-mono text-emerald-900">getStaticPaths</code> and <code className="bg-white/80 px-1.5 py-0.5 rounded font-mono text-emerald-900">getStaticProps</code> for post ID: <span className="font-bold font-mono">#{post.id}</span>.
          </p>
        </div>

        {/* Article Body */}
        <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h2 key={index} className="text-2xl font-bold text-slate-900 pt-4 pb-1">
                  {paragraph.replace('### ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('```')) {
              const codeLines = paragraph.replace(/```[a-z]*/g, '').trim();
              return (
                <pre key={index} className="bg-slate-900 text-emerald-400 p-5 rounded-2xl overflow-x-auto font-mono text-sm leading-relaxed shadow-sm">
                  <code>{codeLines}</code>
                </pre>
              );
            }
            if (paragraph.startsWith('- ') || paragraph.startsWith('1. ')) {
              const items = paragraph.split('\n');
              return (
                <ul key={index} className="space-y-2 list-disc list-inside bg-slate-50 p-6 rounded-2xl border border-slate-200/80 text-sm sm:text-base">
                  {items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-slate-800">
                      {item.replace(/^[-*]|\d+\.\s*/, '').trim()}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        <div className="pt-8 border-t border-slate-200">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Article Tags
          </p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center text-xs px-3 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium"
              >
                <Tag className="w-3 h-3 mr-1.5 text-slate-400" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio Box */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-xl shrink-0 shadow-md">
            {post.author.charAt(0)}
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <div>
              <h3 className="text-base font-bold text-slate-900">{post.author}</h3>
              <p className="text-xs text-slate-500">{post.authorRole}</p>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Technical writer and software engineer passionate about modern frontend architectures, Next.js optimization, and building responsive user interfaces.
            </p>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="pt-6 flex justify-between items-center">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium transition shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Posts</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 text-sm font-medium text-emerald-600 hover:underline"
          >
            <span>Have questions? Contact us</span>
          </Link>
        </div>
      </article>
    </>
  );
}

// 1. Generate static paths for all dummy posts
export async function getStaticPaths() {
  const posts = getAllPosts();

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false, // Return 404 for any paths not returned by getStaticPaths
  };
}

// 2. Fetch specific post data for given ID
export async function getStaticProps({ params }) {
  const post = getPostById(params.id);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}

