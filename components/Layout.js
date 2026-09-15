import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, title, description }) {
  const pageTitle = title ? `${title} | NextCraft` : 'NextCraft - Next.js Foundation & Blog';
  const pageDescription = description || 'A modern Next.js starter application featuring file-based dynamic routing, Tailwind CSS styling, and Static Site Generation.';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-500 selection:text-white">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

