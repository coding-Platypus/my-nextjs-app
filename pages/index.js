import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, BookOpen, Layers, Zap, CheckCircle2, Sparkles, MessageSquare, Compass } from 'lucide-react';
import { getAllPosts } from '@/data/posts';

export default function Home({ featuredPosts }) {
  const features = [
    {
      icon: Layers,
      title: 'File-Based Routing',
      description: 'Effortlessly organize pages and subpages with automatic URL mapping in the Next.js pages directory.',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Zap,
      title: 'Static Site Generation',
      description: 'Pre-render fast, SEO-friendly HTML with getStaticProps and getStaticPaths for instant page loads.',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: Sparkles,
      title: 'Tailwind CSS Styling',
      description: 'Modern, responsive utility-first CSS for sleek and polished components across all screen sizes.',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: Compass,
      title: 'Dynamic Blog Engine',
      description: 'Fully functional dynamic routes for articles with static pre-rendering and rich typography.',
      color: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <>
      <Head>
        <title>NextCraft - Welcome to Next.js Mastery</title>
        <meta name="description" content="A modern Next.js starter demonstrating routing, layouts, and dynamic SSG blog features." />
      </Head>

      <div className="space-y-16 sm:space-y-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 sm:pt-20 pb-12">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-200/40 via-teal-200/30 to-blue-200/40 blur-3xl -z-10 rounded-full pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Next.js Foundational Project</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Build Faster with{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Next.js &amp; Tailwind CSS
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 leading-relaxed">
              Welcome to <strong>NextCraft</strong>! Explore hands-on demonstrations of file-based routing, dynamic paths with static generation, reusable layouts, and clean responsive UI.
            </p>

            {/* Quick Navigation Action Buttons */}
            <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
              <Link
                href="/blog"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium shadow-md shadow-emerald-600/20 hover:shadow-lg transition transform hover:-translate-y-0.5"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Blog</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-medium border border-slate-200 shadow-sm transition"
              >
                <span>About Project</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium shadow-sm transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Core Architecture Highlights
            </h2>
            <p className="text-slate-600">
              Everything you need to master modern Next.js web application architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${feature.color} flex items-center justify-center text-white mb-4 shadow-sm`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
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
                Featured Insights
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Latest Articles
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

        {/* Quick Navigation Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Ready to dive into the code?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Check out the About page to learn more about the project specifications or send a message via the Contact page.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/about"
                className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition shadow"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-500 transition shadow"
              >
                Contact Us
              </Link>
            </div>
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

