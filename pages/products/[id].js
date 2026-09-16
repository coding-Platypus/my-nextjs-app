import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Star, Server, CheckCircle2, ShieldCheck, Truck, ShoppingCart, RefreshCw } from 'lucide-react';
import { useState } from 'react';

export default function ProductDetailPage({ product, renderedAt, error }) {
  const [added, setAdded] = useState(false);

  if (error || !product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto">
          <Server className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Product Not Found</h1>
        <p className="text-slate-600 max-w-md mx-auto">
          {error || 'The requested product could not be retrieved from the server.'}
        </p>
        <div className="pt-4">
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Products Catalog</span>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      <Head>
        <title>{product.title} (SSR) | NextCraft</title>
        <meta name="description" content={product.description} />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        {/* Navigation & SSR Strategy Pill */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 text-sm font-medium text-slate-600 hover:text-emerald-600 transition group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" />
            <span>Back to Products</span>
          </Link>

          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold shadow-xs">
            <Server className="w-3.5 h-3.5 text-amber-600" />
            <span>Server-Side Rendering (SSR) • getServerSideProps</span>
          </div>
        </div>

        {/* Product Details Main Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Image Column */}
          <div className="flex items-center justify-center p-8 bg-slate-50/80 rounded-2xl border border-slate-100 h-96 sm:h-[480px]">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Product Information Column */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider capitalize">
                  {product.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Product ID: #{product.id}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {product.title}
              </h1>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center space-x-3 text-sm">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.round(product.rating.rate)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-slate-900">{product.rating.rate}</span>
                  <span className="text-slate-400">({product.rating.count} customer reviews)</span>
                </div>
              )}
            </div>

            {/* Price */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-baseline space-x-3">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                ${Number(product.price).toFixed(2)}
              </span>
              <span className="text-xs text-emerald-600 font-semibold bg-emerald-100 px-2 py-0.5 rounded">
                In Stock &amp; Ready to Ship
              </span>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
                Product Description
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {product.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-md transition transform active:scale-95"
              >
                {added ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>

              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-sm transition"
              >
                Browse All Products
              </Link>
            </div>

            {/* Benefits Banner */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs text-slate-600">
              <div className="flex items-center space-x-2">
                <Truck className="w-4 h-4 text-emerald-600" />
                <span>Fast &amp; Free Worldwide Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>30-Day Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Server Runtime Info Card */}
        <div className="bg-slate-900 text-slate-300 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-white font-bold text-base flex items-center space-x-2">
              <Server className="w-4 h-4 text-amber-400" />
              <span>How Server-Side Rendering (SSR) Works on this Page</span>
            </h3>
            <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
              Every time you refresh this page, <code className="bg-slate-800 px-1.5 py-0.5 rounded text-amber-300 font-mono">getServerSideProps</code> runs on the server to query <code className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-200 font-mono">https://fakestoreapi.com/products/{product.id}</code> in real-time before sending the rendered HTML to the browser.
            </p>
          </div>
          {renderedAt && (
            <div className="text-right text-xs text-slate-400 shrink-0 bg-slate-800 p-3 rounded-xl border border-slate-700">
              <p className="text-slate-400">Rendered on Server:</p>
              <p className="text-amber-400 font-mono font-semibold">{new Date(renderedAt).toLocaleTimeString()} (UTC)</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// 2. Server-Side Rendering (SSR) with getServerSideProps
export async function getServerSideProps({ params }) {
  const { id } = params;

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) {
      return {
        props: {
          product: null,
          error: `Product #${id} not found on server.`,
          renderedAt: new Date().toISOString(),
        },
      };
    }
    const product = await res.json();

    return {
      props: {
        product,
        renderedAt: new Date().toISOString(),
      },
    };
  } catch (err) {
    console.error('SSR getServerSideProps error:', err.message);
    return {
      props: {
        product: null,
        error: 'Failed to fetch product from server.',
        renderedAt: new Date().toISOString(),
      },
    };
  }
}

