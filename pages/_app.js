import '@/styles/globals.css';
import Layout from '@/components/Layout';

export default function MyApp({ Component, pageProps }) {
  // Use page-level layout if defined, otherwise fallback to default Layout
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return getLayout(<Component {...pageProps} />);
}

