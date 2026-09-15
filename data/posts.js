export const posts = [
  {
    id: "1",
    title: "Mastering Next.js Routing: Pages vs App Router",
    slug: "mastering-nextjs-routing",
    excerpt: "Understand how file-based routing works in Next.js, from static pages to dynamic parameters and layouts.",
    content: `Next.js revolutionized React development by introducing an intuitive, file-based routing architecture. Instead of configuring complex client-side routing libraries manually, developers can organize their folders and files to naturally map URLs to components.

### Understanding File-based Routing
In the Next.js Pages Router, any JavaScript or TypeScript file created inside the \`pages\` directory automatically becomes an accessible route:
- \`pages/index.js\` maps to \`/\`
- \`pages/about.js\` maps to \`/about\`
- \`pages/contact.js\` maps to \`/contact\`

### Dynamic Routes in Action
When your web application requires dynamic parameters (e.g. blog posts, user profiles, or product catalogs), you can create files with brackets like \`pages/blog/[id].js\`.

By coupling this with Next.js data fetching functions like \`getStaticProps\` and \`getStaticPaths\`, you get blazing-fast static site generation (SSG) alongside full dynamic flexibility!`,
    author: "Alex Morgan",
    authorRole: "Senior Frontend Engineer",
    date: "Sep 10, 2026",
    readTime: "5 min read",
    category: "Next.js",
    tags: ["Next.js", "Routing", "React", "Frontend"]
  },
  {
    id: "2",
    title: "Static Site Generation with getStaticPaths & getStaticProps",
    slug: "static-site-generation-nextjs",
    excerpt: "Deep dive into pre-rendering pages at build time for optimal performance, instant loads, and superior SEO.",
    content: `Performance is paramount on the modern web. Static Site Generation (SSG) in Next.js allows you to pre-render pages as raw HTML and JSON at build time.

### Why Static Site Generation Matters
1. **Blazing Fast Load Times**: HTML pages are served directly from a Content Delivery Network (CDN) edge cache without waiting for server compute.
2. **SEO Optimization**: Search engine crawlers receive fully rendered HTML instantly.
3. **Reduced Server Costs**: No database hits or server calculations per visitor request.

### Implementing getStaticPaths
\`getStaticPaths\` tells Next.js which dynamic paths need to be generated at build time:

\`\`\`javascript
export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));
  return { paths, fallback: false };
}
\`\`\`

When combined with \`getStaticProps\`, you can fetch all required post data and pass it as props directly into your page component.`,
    author: "Sophia Chen",
    authorRole: "Full Stack Architect",
    date: "Sep 12, 2026",
    readTime: "7 min read",
    category: "Performance",
    tags: ["SSG", "Performance", "SEO", "Web Development"]
  },
  {
    id: "3",
    title: "Styling Modern Next.js Apps with Tailwind CSS",
    slug: "styling-nextjs-with-tailwind-css",
    excerpt: "Learn how Tailwind CSS streamlines UI development with utility-first classes, responsive modifiers, and clean maintainability.",
    content: `Tailwind CSS has become the industry standard for rapidly building modern, responsive, and maintainable user interfaces.

### Why Developers Love Tailwind CSS
- **No Context Switching**: Write your markup and styling in one place without jumping between separate CSS files.
- **Predictable Design System**: Built-in spacing scales, color palettes, and typography presets keep UI harmonious across pages.
- **Zero Runtime Overhead**: Tailwind purges unused styles during the build step, resulting in tiny CSS bundles.

### Responsive Design Made Simple
With responsive prefixes such as \`sm:\`, \`md:\`, and \`lg:\`, building layouts that look gorgeous on phones, tablets, and desktop displays is straightforward and expressive.`,
    author: "Jordan Lee",
    authorRole: "UI/UX Developer",
    date: "Sep 14, 2026",
    readTime: "4 min read",
    category: "CSS & Design",
    tags: ["TailwindCSS", "CSS", "UI Design", "Responsive"]
  },
  {
    id: "4",
    title: "Deploying Next.js to Vercel and Netlify: A Complete Guide",
    slug: "deploying-nextjs-vercel-netlify",
    excerpt: "Step-by-step instructions to seamlessly connect your GitHub repository and deploy your Next.js application to global CDNs.",
    content: `Once your Next.js project is built, bringing it live to production is fast and effortless with modern platforms like Vercel and Netlify.

### Deploying to Vercel
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository. Vercel automatically detects Next.js configurations.
4. Click **Deploy** and your site will be live on a global edge network in seconds!

### Deploying to Netlify
1. Connect your GitHub repository to [Netlify](https://netlify.com).
2. Set Build command to \`next build\` and publish directory to \`.next\`.
3. Hit Deploy and enjoy automated preview deployments on every push!`,
    author: "Alex Morgan",
    authorRole: "DevOps Specialist",
    date: "Sep 15, 2026",
    readTime: "6 min read",
    category: "DevOps",
    tags: ["Deployment", "Vercel", "Netlify", "CI/CD"]
  }
];

export function getAllPosts() {
  return posts;
}

export function getPostById(id) {
  return posts.find((post) => post.id === id) || null;
}

