# Menu3D MVP 🍽️

A mobile-first MVP of a restaurant discovery platform that turns flat menus into interactive **3D and AR dish previews**. Built with Next.js (App Router), React 19, TypeScript, and Tailwind CSS.

> 🚧 **Status:** MVP / prototype. The app currently runs on mock data (`src/data/mockData.ts`).

## ✨ Features

- 🔎 **Restaurant discovery:** Browse restaurants, cafes, and fast-food spots with category badges and categorized dish menus.
- 🧊 **Interactive 3D & AR dish previews:** Powered by Google's `<model-viewer>` web component, so customers can inspect 3D models of dishes in the browser and view them in augmented reality.
- 📱 **Mobile-first experience:** Responsive cards, smooth navigation, and a clean UI.
- 🤝 **Partner portal:** An onboarding page presenting the benefits for restaurant owners who want to offer 3D/AR menus.

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 16.2.3](https://nextjs.org/) (App Router) |
| Library | [React 19.2.4](https://react.dev/) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| 3D / AR | [Google `<model-viewer>` 3.4.0](https://modelviewer.dev/) (Web Component via CDN) |

## 📂 Project Structure

```
├── public/                 # Static assets and icons
├── src/
│   ├── app/                # Next.js App Router pages & layouts
│   │   ├── about/          # About page
│   │   ├── dish/[id]/      # Dish detail & 3D viewer
│   │   ├── partner/        # Partner onboarding
│   │   ├── restaurant/[id]/# Restaurant profile & menu (restaurant/[id]/menu)
│   │   ├── restaurants/    # Restaurant directory
│   │   ├── globals.css     # Global styles & Tailwind imports
│   │   ├── layout.tsx      # Root layout (Navbar, Footer, metadata)
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable UI components (Dish3DViewer, DishCard, RestaurantCard, Navbar, Footer)
│   ├── data/               # Mock data and helper queries (mockData.ts)
│   └── types/              # TypeScript types & custom element declarations (index.ts, model-viewer.d.ts)
├── .env.example            # Example environment variables template
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## 🚀 Getting Started

**1. Clone the repository:**

```bash
git clone https://github.com/muradbayramovdev/3D-MENU-MVP.git
cd 3D-MENU-MVP
```

**2. Install dependencies:**

```bash
npm install
```

**3. Environment variables (optional):**

The MVP runs on local mock data and does not require any environment variables out of the box. For future configuration, an example template (`.env.example` with `NEXT_PUBLIC_APP_URL`) is included:

```bash
cp .env.example .env.local
```

All `.env` files except `.env.example` are ignored by Git.

**4. Start the development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Production Build

```bash
npm run build
npm run start
```

## 🌐 Deployment

The project can be deployed on [Vercel](https://vercel.com/) without extra configuration: push the repository to GitHub, import it in Vercel, and deploy.

## 🤖 Development Approach

Menu3D MVP was conceived, designed, and directed by **Murad Bayramov**, including the product idea, feature set, UX decisions, testing, and review. The implementation was developed with AI-assisted tools under the author's direction.

## 📬 Contact

- 💼 LinkedIn: [muradbayramov251](https://www.linkedin.com/in/muradbayramov251/)
- ✉️ Email: [muradbayramov251@gmail.com](mailto:muradbayramov251@gmail.com)
- 🐙 GitHub: [muradbayramovdev](https://github.com/muradbayramovdev)

## 📄 License & Ownership

Copyright © 2026 Murad Bayramov. All rights reserved.

This source code is provided for viewing and portfolio purposes only. No permission is granted to copy, modify, distribute, or use it commercially without written permission from the author.

---

Built with ❤️ by **Murad Bayramov**
