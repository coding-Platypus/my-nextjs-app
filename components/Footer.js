import Link from 'next/link';
import { Github, Twitter, Linkedin, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2.5 text-white font-bold text-xl">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span>NextCraft</span>
            </Link>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              A foundational Next.js project showcasing file-based routing, dynamic paths, static site generation, responsive Tailwind layouts, and component reusability.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-emerald-400 transition">
                  Blog Articles
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Info & Tech Stack */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Built With
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Next.js 14 (Pages Router)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>React 18</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Tailwind CSS</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Static Site Generation (SSG)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 mt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} my-nextjs-app. All rights reserved.</p>
          <p className="flex items-center">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

