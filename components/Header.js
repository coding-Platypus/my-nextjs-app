import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Menu, X, BookOpen, Home, User, Mail, Sparkles } from 'lucide-react';

export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'About', href: '/about', icon: User },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2.5 text-slate-900 font-bold text-xl group hover:opacity-90 transition"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="leading-tight tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                NextCraft
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-widest text-emerald-600 -mt-0.5">
                my-nextjs-app
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                    active
                      ? 'bg-emerald-50 text-emerald-700 font-semibold shadow-sm ring-1 ring-emerald-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-emerald-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action / Mobile menu button */}
          <div className="flex items-center space-x-3">
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm hover:shadow transition"
            >
              Explore Articles
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg text-base font-medium transition ${
                  active
                    ? 'bg-emerald-50 text-emerald-700 font-semibold ring-1 ring-emerald-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-5 h-5 ${active ? 'text-emerald-600' : 'text-slate-400'}`} />
                <span>{link.name}</span>
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow transition"
            >
              Explore Articles
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

