import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { ShoppingBag, Star, Zap, ArrowRight, Search } from 'lucide-react';
import { fallbackProducts, sanitizeProductImage } from '@/data/productsData';

export default function ProductsPage({ products, isFallback, generatedAt }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const rawList = products && products.length > 0 ? products : fallbackProducts;
  const productList = rawList.map((p) => sanitizeProductImage(p));
  const categories = ['All', ...new Set(productList.map((p) => p.category))];

  const filteredProducts = productList.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>Products Catalog (SSG) | NextCraft</title>
        <meta name="description" content="Browse our product catalog pre-rendered using Next.js Static Site Generation (SSG) from Fake Store API." />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider shadow-xs">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            <span>Static Site Generation (SSG) • getStaticProps</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Explore Our Products
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            This catalog is pre-rendered at build time with data fetched from the <strong>Fake Store API</strong>. Instant page loads with maximum performance.
          </p>
          {generatedAt && (
            <p className="text-xs text-slate-400 font-mono">
              Build Pre-rendered at: {new Date(generatedAt).toLocaleTimeString()}
            </p>
          )}
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
          {/* Category Chips */}
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium capitalize transition ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition shadow-xs"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-md mx-auto space-y-3">
            <ShoppingBag className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">No products found</h3>
            <p className="text-slate-500 text-sm">Try resetting your search query or selecting a different category.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="mt-2 text-xs font-semibold text-emerald-600 hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
              >
                {/* Product Image Thumbnail */}
                <div className="relative w-full h-56 p-4 bg-slate-50 flex items-center justify-center border-b border-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80";
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs uppercase">
                    SSG
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="capitalize text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                        {product.category}
                      </span>
                      {product.rating && (
                        <span className="flex items-center text-amber-500 font-medium">
                          <Star className="w-3.5 h-3.5 fill-amber-400 mr-1" />
                          {product.rating.rate} ({product.rating.count})
                        </span>
                      )}
                    </div>

                    <h2 className="text-base font-bold text-slate-900 line-clamp-2 leading-snug group-hover:text-emerald-600 transition">
                      <Link href={`/products/${product.id}`}>
                        {product.title}
                      </Link>
                    </h2>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400">Price</span>
                      <p className="text-xl font-extrabold text-slate-900">
                        ${Number(product.price).toFixed(2)}
                      </p>
                    </div>

                    <Link
                      href={`/products/${product.id}`}
                      className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-xs font-semibold shadow-xs hover:shadow transition"
                    >
                      <span>Details (SSR)</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

// Static Site Generation (SSG) with getStaticProps
export async function getStaticProps() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch('https://fakestoreapi.com/products', { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`API responded with status: ${res.status}`);
    }
    const products = await res.json();

    if (!Array.isArray(products) || products.length === 0) {
      throw new Error('Empty product list received');
    }

    const sanitizedProducts = products.map((p) => sanitizeProductImage(p));

    return {
      props: {
        products: sanitizedProducts,
        isFallback: false,
        generatedAt: new Date().toISOString(),
      },
      revalidate: 60,
    };
  } catch (error) {
    console.warn('SSG: Using reliable fallback products dataset:', error.message);
    return {
      props: {
        products: fallbackProducts,
        isFallback: true,
        generatedAt: new Date().toISOString(),
      },
      revalidate: 60,
    };
  }
}
