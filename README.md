# NextCraft (my-nextjs-app)


A modern, responsive web application built with **Next.js 14**, **React 18**, and **Tailwind CSS**. This project demonstrates foundational Next.js concepts including file-based routing, dynamic routes, Static Site Generation (`getStaticPaths` and `getStaticProps`), reusable layout architectures, active navigation state handling, and responsive UI design.

---

## 🔗 Project Links

- 🌐 **Live Deployed Site (Vercel):** [https://my-nextjs-app.vercel.app](https://my-nextjs-app-drab-eight.vercel.app/)](https://my-nextjs-app.vercel.app) *(or your specific Vercel URL)*
- 💻 **GitHub Repository:** [https://github.com/coding-Platypus/my-nextjs-app](https://github.com/coding-Platypus/my-nextjs-app)

---


## 🚀 Features

- **File-Based Routing**: Clean URL mapping across Home (`/`), About (`/about`), Contact (`/contact`), and Blog (`/blog`).
- **Dynamic Routing & SSG**: Dynamic blog post pages (`/blog/[id]`) pre-rendered statically at build time using `getStaticPaths` and `getStaticProps`.
- **Reusable Layout & Common Header/Footer**: Consistent navigation, active link indicator, and footer across all pages via `Layout.js` and `_app.js`.
- **Tailwind CSS Styling**: Utility-first, responsive, and mobile-friendly design system.
- **Interactive Contact Form**: Client-side validation and submission state handling for Name, Email, and Message fields.
- **Rich Blog Experience**: Multi-category filter, search functionality, and individual article views with metadata and share actions.

---

## 📁 Project Structure

```
my-nextjs-app/
├── components/
│   ├── Footer.js           # Reusable footer component with copyright and links
│   ├── Header.js           # Reusable header with logo and active nav highlighting
│   └── Layout.js           # Main wrapper layout component
├── data/
│   └── posts.js            # Dummy blog posts array and data fetch helpers
├── pages/
│   ├── _app.js             # Root application wrapper injecting Layout and CSS
│   ├── _document.js        # HTML document with custom Google Fonts
│   ├── index.js            # Home Page (/) with hero, highlights, and CTA
│   ├── about.js            # About Page (/about) with company bio & tech stack
│   ├── contact.js          # Contact Page (/contact) with interactive form
│   └── blog/
│       ├── index.js        # Blog listing page (/blog) with static props & filter
│       └── [id].js         # Dynamic blog detail page (/blog/[id]) using SSG
├── styles/
│   └── globals.css         # Tailwind CSS directives and global typography
├── jsconfig.json           # Path alias configuration (@/*)
├── next.config.js          # Next.js build configuration
├── package.json            # Dependencies and npm scripts
├── postcss.config.js       # PostCSS configuration for Tailwind
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # Project documentation and deployment guide
```

---

## 🛠️ Getting Started Locally

### 1. Prerequisites
Ensure you have **Node.js (v18.17.0 or newer)** and **npm** installed on your system.

### 2. Install Dependencies
Run the following command in the root folder:
```bash
npm install
```

### 3. Run Development Server
Start the Next.js development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🏗️ Building for Production

To build the static pages and create an optimized production bundle:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run start
```

---

## 🌐 Deployment Guidelines

### Option 1: Deploy on Vercel (Recommended)
1. Initialize git and push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Next.js starter with dynamic routing"
   git branch -M main
   git remote add origin https://github.com/<your-username>/my-nextjs-app.git
   git push -u origin main
   ```
2. Go to [https://vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** -> **"Project"**.
4. Import your `my-nextjs-app` GitHub repository.
5. Vercel will automatically detect Next.js settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
6. Click **Deploy**. Your site will be live within seconds!

### Option 2: Deploy on Netlify
1. Log in to [https://www.netlify.com](https://www.netlify.com).
2. Click **"Add new site"** -> **"Import an existing project"**.
3. Select **GitHub** and authorize access to your `my-nextjs-app` repository.
4. Set the build settings:
   - **Build command**: `npm run build` (or `next build`)
   - **Publish directory**: `.next`
5. Click **Deploy Site**.

---

## 📝 Assignment Verification Checklist

- [x] Project created and named `my-nextjs-app`.
- [x] Tailwind CSS configured and applied across all components.
- [x] Home Page (`/`) with welcoming hero section and navigation links.
- [x] About Page (`/about`) with short description and company values.
- [x] Contact Page (`/contact`) with Name, Email, and Message fields.
- [x] Shared `Layout.js` wrapping all pages with Header & Footer via `_app.js`.
- [x] Active link styling in navigation bar.
- [x] `pages/blog/index.js` displaying 3+ dummy blog posts.
- [x] `pages/blog/[id].js` dynamic route using `getStaticPaths` and `getStaticProps`.
- [x] Successful `npm run build` with static page generation.

