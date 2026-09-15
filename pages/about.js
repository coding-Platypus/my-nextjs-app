import Head from 'next/head';
import Link from 'next/link';
import { User, Target, ShieldCheck, Cpu, Code2, Globe, ArrowRight } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'Building high-performance, accessible, and delightful digital experiences using the power of Next.js and modern web standards.',
    },
    {
      icon: Cpu,
      title: 'Modern Architecture',
      description: 'Leveraging hybrid rendering patterns—Static Site Generation (SSG) and Server-Side Rendering (SSR)—to optimize speed and SEO.',
    },
    {
      icon: ShieldCheck,
      title: 'Code Quality',
      description: 'Committed to clean code, component modularity, strict type safety, and responsive design systems with Tailwind CSS.',
    },
  ];

  const techStack = [
    { name: 'Next.js 14', role: 'React Framework for the Web' },
    { name: 'React 18', role: 'UI Library & Components' },
    { name: 'Tailwind CSS', role: 'Utility-first Styling' },
    { name: 'Lucide Icons', role: 'Consistent UI Iconography' },
    { name: 'SSG Engine', role: 'Pre-rendered Static Pages' },
    { name: 'Vercel / Netlify', role: 'Edge Deployment' },
  ];

  return (
    <>
      <Head>
        <title>About Us | NextCraft</title>
        <meta name="description" content="Learn more about NextCraft, our developer story, tech stack, and architectural approach." />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>About Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Crafting the Web with Speed &amp; Elegance
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Welcome to <strong>NextCraft</strong>. We are a team of passionate developers and creators dedicated to mastering modern web development through cutting-edge technologies.
          </p>
        </div>

        {/* Story / Overview Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
              <Code2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Developer Story</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Passionate about Building Modern Web Experiences
            </h2>
            <p className="text-slate-600 leading-relaxed">
              This application was built as part of the Next.js foundational mastery project. It demonstrates how to combine file-based routing, dynamic routing with static generation (`getStaticPaths` &amp; `getStaticProps`), and utility-first styling with Tailwind CSS into a clean, cohesive user experience.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Whether you are exploring the dynamic blog articles, browsing the responsive pages, or submitting a message via our contact form, every component has been crafted with attention to performance, accessibility, and clean design.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium shadow-sm transition"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <Globe className="w-5 h-5 text-emerald-600" />
              <span>Technology Stack</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs space-y-1"
                >
                  <p className="font-semibold text-slate-900 text-sm">{tech.name}</p>
                  <p className="text-xs text-slate-500">{tech.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Our Core Principles
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              The fundamental guidelines steering our approach to software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{val.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

