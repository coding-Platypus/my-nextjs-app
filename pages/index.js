import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Layers, Zap, ShoppingBag, Server, LayoutDashboard, Sparkles, MessageSquare, Compass, CheckCircle2, Code2, RefreshCw } from 'lucide-react';
import { getAllPosts } from '@/data/posts';

export default function Home({ featuredPosts }) {
  // Client-side fetch of Custom API Route /api/hello
  const [apiData, setApiData] = useState(null);
  const [apiLoading, setApiLoading] = useState(true);
  const [apiError, setApiError] = useState(null);

  const fetchHelloApi = async () => {
    setApiLoading(true);
    setApiError(null);
    try {
      const res = await fetch('/api/hello');
      if (!res.ok) throw new Error('Failed to fetch from /api/hello');
      const data = await res.json();
      setApiData(data);
    } catch (err) {
      setApiError(err.message);
    } finally {
      setApiLoading(false);
    }
  };

  useEffect(() => {
    fetchHelloApi();
  }, []);

  const strategies = [
    {
      title: 'Static Site Generation (SSG)',
      badge: 'getStaticProps',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      description: 'Products catalog pre-rendered at build time with Fake Store API data.',
      link: '/products',
      icon: Zap,
      cta: 'Explore SSG Products',
      accent: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Server-Side Rendering (SSR)',
      badge: 'getServerSideProps',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
      description: 'Dynamic product details fetched in real-time on every single server request.',
      link: '/products/1',
      icon: Server,
      cta: 'View SSR Product Details',
      accent: 'from-amber-500 to-orange-600',
    },
    {
      title: 'Client-Side Rendering (CSR)',
      badge: 'useSWR (10s sync)',
      badgeColor: 'bg-sky-100 text-sky-800 border-sky-200',
      description: 'Live posts dashboard auto-refreshing every 10 seconds via SWR hooks.',
      link: '/dashboard',
      icon: LayoutDashboard,
      cta: 'Open CSR Dashboard',
      accent: 'from-sky-500 to-blue-600',
    },
    {
      title: 'Dynamic Blog & SSG Paths',
      badge: 'getStaticPaths',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
      description: 'Static articles generated at build time with parametric [id] dynamic routes.',
      link: '/blog',
      icon: BookOpen,
      cta: 'Read Blog Articles',
      accent: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <>
      <Head>
        <title>NextCraft - Next.js Data Fetching &amp; Routing Mastery</title>
        <meta name="description" content="A modern Next.js starter showcasing SSG, SSR, CSR with SWR, API Routes, and dynamic routing." />
      </Head>

      <div className="space-y-16 sm:space-y-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 sm:pt-20 pb-8">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-200/40 via-sky-200/30 to-purple-200/40 blur-3xl -z-10 rounded-full pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Next.js Data Fetching &amp; Routing Suite</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Mastering{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 bg-clip-text text-transparent">
                SSG, SSR, CSR &amp; API Routes
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 leading-relaxed">
              Explore hands-on demonstrations of all major Next.js data fetching paradigms: <strong>Static Site Generation</strong>, <strong>Server-Side Rendering</strong>, <strong>Client-Side SWR</strong>, and <strong>Custom API Routes</strong>.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
              <Link
                href="/products"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md shadow-emerald-600/20 hover:shadow-lg transition transform hover:-translate-y-0.5"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Products (SSG)</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold shadow-md shadow-sky-600/20 hover:shadow-lg transition transform hover:-translate-y-0.5"
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Dashboard (CSR SWR)</span>
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold border border-slate-200 shadow-sm transition"
              >
                <BookOpen className="w-4 h-4" />
                <span>Blog Articles</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Custom API Route Showcase Card */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-slate-700 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-emerald-400">
                    Task 4: Custom API Route Integration
                  </span>
                  <h2 className="text-xl font-bold">Fetched from <code className="text-emerald-300 font-mono">/api/hello</code></h2>
                </div>
              </div>

              <button
                type="button"
                onClick={fetchHelloApi}
                disabled={apiLoading}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-600 transition disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${apiLoading ? 'animate-spin' : ''}`} />
                <span>Re-fetch API</span>
              </button>
            </div>

            {/* API Response Display */}
            <div className="bg-slate-950/80 rounded-2xl p-5 border border-slate-800 font-mono text-sm space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-800">
                <span>Response Payload (JSON)</span>
                <span className="text-emerald-400 flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>HTTP 200 OK</span>
                </span>
              </div>

              {apiLoading && (
                <div className="flex items-center space-x-2 text-slate-400 py-2">
                  <RefreshCw className="w-4 h-4 animate-spin text-emerald-400" />
                  <span>Fetching /api/hello payload...</span>
                </div>
              )}

              {apiError && (
                <p className="text-red-400 py-2">Error: {apiError}</p>
              )}

              {apiData && !apiLoading && (
                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-emerald-300">
                    <p className="text-xs text-slate-400">Returned Message:</p>
                    <p className="text-base font-bold text-white mt-0.5">&ldquo;{apiData.message}&rdquo;</p>
                  </div>
                  <pre className="text-xs text-slate-400 overflow-x-auto">
                    {JSON.stringify(apiData, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Data Fetching Strategies Showcase Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Data Fetching Strategies in Action
            </h2>
            <p className="text-slate-600">
              Explore each route to see how pre-rendering, server compute, and client hooks work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategies.map((strat, idx) => {
              const Icon = strat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition duration-200 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${strat.accent} flex items-center justify-center text-white shadow-sm`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-full border ${strat.badgeColor} uppercase tracking-wider font-mono`}>
                        {strat.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        {strat.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {strat.description}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={strat.link}
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-900 text-slate-800 hover:text-white text-xs font-semibold border border-slate-200 hover:border-slate-900 transition group"
                  >
                    <span>{strat.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* Featured Blog Posts Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                Static Articles
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                From the Blog
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition group"
            >
              View all posts
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.slice(0, 3).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between"
              >
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 font-medium text-slate-700">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug hover:text-emerald-600 transition">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">{post.date}</span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center"
                  >
                    Read article <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      featuredPosts: posts,
    },
  };
}
