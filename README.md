# NextCraft (my-nextjs-app)

A modern, responsive web application built with **Next.js 14**, **React 18**, **SWR**, and **Tailwind CSS**. This project demonstrates comprehensive Next.js capabilities including **Data Fetching Strategies (SSG, SSR, CSR, ISR)**, **Custom API Routes**, **File-based and Dynamic Routing**, and **Reusable Layouts**.

---

## 🔗 Project Links

- 🌐 **Live Deployed Site (Vercel):** [https://my-nextjs-app-six-indol.vercel.app](https://my-nextjs-app-six-indol.vercel.app/)
- 💻 **GitHub Repository:** [https://github.com/coding-Platypus/my-nextjs-app](https://github.com/coding-Platypus/my-nextjs-app)

---

## 🚀 Core Features & Data Fetching Strategies

### 1. ⚡ Static Site Generation (SSG) — `/products`
- Built using **`getStaticProps`** to pre-render the product catalog at build time.
- Fetches real product data from **Fake Store API** (`https://fakestoreapi.com/products`).
- Includes **Incremental Static Regeneration (ISR)** with `revalidate: 60`.
- Displays thumbnail images, titles, formatted prices, category badges, ratings, and links to SSR details.

### 2. 🖥️ Server-Side Rendering (SSR) — `/products/[id]`
- Dynamic route built using **`getServerSideProps`** to fetch single product details on **every incoming server request** at runtime.
- Fetches from `https://fakestoreapi.com/products/${id}`.
- Displays product title, full description, category, price, high-resolution image, customer ratings, stock status, and server render timestamps.

### 3. 🔄 Client-Side Rendering (CSR with SWR) — `/dashboard`
- Built using **`useSWR`** for client-side data fetching with caching and automatic revalidation.
- Fetches posts from **JSONPlaceholder API** (`https://jsonplaceholder.typicode.com/posts`).
- **Auto-refreshes every 10 seconds** (`refreshInterval: 10000`).
- Features a live 10-second countdown timer, sync status indicator, loading spinner & skeleton states, and error handling.

### 4. 🔌 Custom API Route — `/api/hello`
- Custom backend API route implemented at `pages/api/hello.js`.
- Returns `{ message: "Hello from Next.js API Route!", timestamp: "...", status: "success" }`.
- Integrated directly into the **Homepage (`/`)** where it is fetched on the client and displayed in an interactive card with a re-fetch trigger.

### 5. 📖 Dynamic Blog & Layout Architecture
- Dynamic blog list (`/blog`) and detail pages (`/blog/[id]`) with `getStaticPaths` and `getStaticProps`.
- Shared `Layout.js` wrapping all pages via `_app.js` with active navigation links indicator and common footer.
- Contact form with client-side validation (`/contact`) and About page (`/about`).

---

## 📁 Project Structure

```
my-nextjs-app/
├── components/
│   ├── Footer.js           # Reusable footer with copyright and route links
│   ├── Header.js           # Reusable header with navigation & active highlight
│   └── Layout.js           # Main wrapper layout component
├── data/
│   └── posts.js            # Dummy blog posts array and data fetch helpers
├── pages/
│   ├── api/
│   │   └── hello.js        # Custom API Route returning JSON
│   ├── blog/
│   │   ├── index.js        # Blog listing page with getStaticProps
│   │   └── [id].js         # Dynamic blog detail page using SSG
│   ├── products/
│   │   ├── index.js        # Products catalog page using SSG (getStaticProps)
│   │   └── [id].js         # Product details page using SSR (getServerSideProps)
│   ├── _app.js             # Root application wrapper
│   ├── _document.js        # Custom HTML document & fonts
│   ├── about.js            # About page
│   ├── contact.js          # Contact page with interactive form
│   ├── dashboard.js        # Dashboard page using CSR with SWR (10s auto-refresh)
│   └── index.js            # Home page fetching /api/hello & showcasing routes
├── styles/
│   └── globals.css         # Tailwind CSS directives
├── jsconfig.json           # Path alias configuration (@/*)
├── next.config.js          # Next.js image domains & config
├── package.json            # Dependencies (Next.js, React, SWR, Tailwind)
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # Complete project documentation
```

---

## 🛠️ Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Building for Production

```bash
npm run build
npm run start
```

---

## 🌐 Deployment to Vercel

1. Commit and push your code to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete Next.js data fetching assignment"
   git push origin main
   ```
2. In [Vercel](https://vercel.com), import your `my-nextjs-app` repository.
3. Click **Deploy**. Vercel will automatically build and deploy your project with SSG, SSR, and API Routes support.
