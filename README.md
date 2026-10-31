# Menu3D MVP

Menu3D is a next-generation platform for digital dining, transforming traditional flat menus into interactive 3D and AR experiences. This repository contains the Mobile-first MVP for the restaurant discovery and 3D menu platform built with **Next.js (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## ✨ Features

- **Restaurant Discovery**: Browse supported restaurants, cafes, and fast-food spots with category filtering.
- **Interactive 3D & AR Dish Previews**: Powered by Google's `<model-viewer>` web component to let customers inspect photorealistic 3D models of dishes directly in their browser and view them in Augmented Reality (AR).
- **Mobile-First Experience**: Engineered for mobile web with smooth navigation, responsive cards, and clean UI.
- **Partner Portal**: Dedicated onboarding page showcasing benefits for restaurant owners looking to bring 3D/AR menus to their venues.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **3D / AR Engine**: [`@google/model-viewer`](https://modelviewer.dev/)

---

## 📂 Project Structure

```text
├── public/                 # Static assets and icons
├── src/
│   ├── app/                # Next.js App Router pages & layouts
│   │   ├── about/          # About Menu3D page
│   │   ├── dish/[id]/      # Individual dish detail & 3D viewer page
│   │   ├── partner/        # Partner onboarding page
│   │   ├── restaurant/[id]/# Restaurant profile & menu pages
│   │   ├── restaurants/    # Restaurant directory & filtering page
│   │   ├── globals.css     # Global styles & Tailwind imports
│   │   ├── layout.tsx      # Root layout (Navbar, Footer, metadata)
│   │   └── page.tsx        # Landing / Home page
│   ├── components/         # Reusable UI components
│   │   ├── Dish3DViewer.tsx
│   │   ├── DishCard.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── RestaurantCard.tsx
│   ├── data/               # Mock data and helper queries
│   │   └── mockData.ts
│   └── types/              # TypeScript interfaces & custom element declarations
│       ├── index.ts
│       └── model-viewer.d.ts
├── .env.example            # Example environment variables template
├── .gitignore              # Git ignore rules (protects .env, node_modules, etc.)
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

---

## 🚀 Getting Started Locally

### 1. Clone the repository

```bash
git clone <your-github-repo-url>
cd menu3d-mvp
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy the example environment file to `.env.local`:

```bash
cp .env.example .env.local
```

> **Note:** All `.env` and `.env.*` files (except `.env.example`) are automatically ignored by Git via `.gitignore` to keep sensitive credentials and API keys secure.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📦 Build & Production

To create an optimized production build:

```bash
npm run build
npm run start
```

---

## 🌐 Deploying to Vercel

This project is ready for zero-configuration deployment on [Vercel](https://vercel.com/):

1. Push your code to a GitHub repository.
2. Import the repository into Vercel.
3. Add any required environment variables in the Vercel dashboard.
4. Click **Deploy**.
