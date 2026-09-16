import Head from 'next/head';
import useSWR from 'swr';
import { useState, useEffect } from 'react';
import { LayoutDashboard, RefreshCw, Clock, AlertCircle, FileText, Search, Activity, Sparkles, CheckCircle2 } from 'lucide-react';

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [countdown, setCountdown] = useState(10);
  const [lastUpdated, setLastUpdated] = useState(null);

  // useSWR with 10-second automatic revalidation interval
  const { data: posts, error, isLoading, isValidating, mutate } = useSWR(
    'https://jsonplaceholder.typicode.com/posts?_limit=12',
    fetcher,
    {
      refreshInterval: 10000, // Auto-refresh every 10 seconds
      revalidateOnFocus: true,
      onSuccess: () => {
        setLastUpdated(new Date());
        setCountdown(10);
      },
    }
  );

  // 10-second visual countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 1 ? prev - 1 : 10));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const filteredPosts = (posts || []).filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Live Dashboard (CSR with SWR) | NextCraft</title>
        <meta name="description" content="Client-Side Rendered dashboard using SWR with auto-refresh every 10 seconds." />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider shadow-xs">
            <Activity className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
            <span>Client-Side Rendering (CSR) • useSWR</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Live Posts Dashboard
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Data is fetched directly from the client browser using <strong>SWR</strong> and automatically refreshes every <strong>10 seconds</strong> from JSONPlaceholder.
          </p>
        </div>

        {/* Live Status Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
            {/* Auto Refresh Badge */}
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-medium">
              <Clock className="w-4 h-4 text-sky-600" />
              <span>Auto-refreshing in: <strong className="text-sky-600 font-mono">{countdown}s</strong></span>
            </div>

            {/* Validation Indicator */}
            {isValidating ? (
              <span className="inline-flex items-center space-x-1.5 text-sky-600 font-medium text-xs">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Syncing latest data...</span>
              </span>
            ) : (
              <span className="inline-flex items-center space-x-1.5 text-emerald-600 font-medium text-xs">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Live connected</span>
              </span>
            )}

            {lastUpdated && (
              <span className="text-slate-400 text-xs hidden md:inline">
                Last synced: {lastUpdated.toLocaleTimeString()}
              </span>
            )}
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            {/* Search */}
            <div className="relative flex-grow sm:flex-grow-0 sm:w-60">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter titles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition"
              />
            </div>

            {/* Manual Refresh Button */}
            <button
              type="button"
              onClick={() => mutate()}
              disabled={isValidating}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition disabled:opacity-60"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isValidating ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Refresh Now</span>
            </button>
          </div>
        </div>

        {/* Loading State with Spinner & Skeleton */}
        {isLoading && (
          <div className="space-y-4 py-8">
            <div className="flex flex-col items-center justify-center space-y-3 py-10">
              <div className="w-10 h-10 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-slate-500 text-sm font-medium animate-pulse">Loading posts with useSWR...</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 animate-pulse">
                  <div className="h-4 bg-slate-200 rounded w-1/4"></div>
                  <div className="h-6 bg-slate-200 rounded w-3/4"></div>
                  <div className="h-4 bg-slate-100 rounded w-full"></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center space-y-4 max-w-lg mx-auto">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
            <h3 className="text-lg font-bold text-red-900">Failed to Load Dashboard Data</h3>
            <p className="text-red-700 text-sm">
              {error.message || 'There was an error communicating with JSONPlaceholder.'}
            </p>
            <button
              onClick={() => mutate()}
              className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Posts List */}
        {!isLoading && !error && (
          <>
            {filteredPosts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto space-y-3">
                <FileText className="w-10 h-10 text-slate-300 mx-auto" />
                <h3 className="text-lg font-bold text-slate-900">No posts matched</h3>
                <p className="text-slate-500 text-sm">No titles match your filter query.</p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-xs font-semibold text-sky-600 hover:underline"
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-sky-200 transition duration-200 flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center space-x-1 text-[11px] font-mono font-semibold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full">
                          <span>Post #{post.id}</span>
                        </span>
                        <span className="text-[11px] text-slate-400">User ID: #{post.userId}</span>
                      </div>

                      <h2 className="text-base font-bold text-slate-900 capitalize group-hover:text-sky-600 transition leading-snug">
                        {post.title}
                      </h2>

                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                        {post.body}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center space-x-1">
                        <FileText className="w-3.5 h-3.5 text-slate-400" />
                        <span>JSONPlaceholder API</span>
                      </span>
                      <span className="text-sky-600 font-medium">CSR Managed</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Educational Summary Card */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-10 shadow-lg space-y-4">
          <div className="flex items-center space-x-2 text-sky-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Why useSWR for Client-Side Rendering?</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">
            Stale-While-Revalidate: Fast, Lightweight &amp; Reactive
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            With SWR, the component first returns data from cache (stale), then sends the fetch request (revalidate), and finally comes with up-to-date data. With <code className="bg-slate-700 px-1.5 py-0.5 rounded font-mono text-sky-300">refreshInterval: 10000</code>, our dashboard automatically polls the API every 10 seconds in the background.
          </p>
        </div>
      </div>
    </>
  );
}

