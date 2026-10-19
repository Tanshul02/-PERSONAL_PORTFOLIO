# Tanshul Sharma — Personal Portfolio

Production-ready personal portfolio built with React 18, TypeScript, and Vite, styled using Tailwind CSS, and automatically deployed to GitHub Pages via GitHub Actions.

**Live URL:** https://tanshul02.github.io/-PERSONAL_PORTFOLIO/

---

## Tech Stack

- **Runtime:** Node.js (v18+)
- **Frontend:** React 18, TypeScript, HTML5
- **Styling:** Tailwind CSS, PostCSS, Autoprefixer
- **Build Tool:** Vite 5
- **CI/CD:** GitHub Actions
- **Hosting:** GitHub Pages

---

## Key Features

- **Component-Driven UI:** Modular React components for navbar, hero, skills, projects, and contact sections.
- **Strict Typing:** End-to-end type safety across components and data models using TypeScript.
- **Optimized Assets:** Production asset hashing, chunk splitting, and tree-shaking via Vite/Rollup.
- **Automated Pipeline:** Headless build, artifact generation, and deployment on every push to `main`.
- **Responsive Layout:** Mobile-first layout engine built on Tailwind CSS utility classes.

---

## Directory Structure

├── .github/│   └── workflows/│       └── deploy.yml        # CI/CD pipeline definition for GitHub Pages├── public/                   # Static assets served directly├── src/│   ├── assets/               # Local images, icons, and media│   ├── components/           # Reusable UI components│   ├── data/                 # Static content models (projects, skills, metadata)│   ├── App.tsx               # Main layout and view orchestrator│   ├── main.tsx              # Application entry point and DOM root│   └── index.css             # Tailwind base and utility directives├── index.html                # Entry HTML shell├── package.json              # Project dependencies and run scripts├── tailwind.config.js        # Theme tokens and style extensions├── tsconfig.json             # TypeScript compiler configuration└── vite.config.ts            # Vite bundler options and base path
---

## Getting Started

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/Tanshul02/-PERSONAL_PORTFOLIO.git](https://github.com/Tanshul02/-PERSONAL_PORTFOLIO.git)
   cd -PERSONAL_PORTFOLIO
Install dependencies:Bashnpm install
Launch development server:Bashnpm run dev
Open http://localhost:5173 in your browser.Available ScriptsScriptCommandDescriptiondevnpm run devRuns the Vite dev server with hot module replacement (HMR).buildnpm run buildCompiles TypeScript and builds production bundles to dist/.previewnpm run previewSpawns a local web server to test the production dist/ build.lintnpm run lintAnalyzes code for syntax and style issues.Deployment & CI/CDDeployment is fully automated using GitHub Actions (.github/workflows/deploy.yml):Trigger: Push to the main branch.Build Job: Installs dependencies via npm ci and runs npm run build.Artifact Upload: Packs the dist/ folder.Deploy Job: Pushes the artifact directly to the GitHub Pages environment.To deploy manually, push changes to the default branch:Bashgit add .
git commit -m "feat: update portfolio content"
git push origin main
AuthorGitHub: @Tanshul02Portfolio: tanshul02.github.io/-PERSONAL_PORTFOLIO
