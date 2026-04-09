# NewPort — Personal Portfolio

A modern, animated portfolio website built with a production-grade frontend stack. Designed to showcase projects, skills, and provide a direct contact channel.

---

## Objectives

- Replace a static HTML/Bootstrap portfolio with a fully dynamic, component-driven React application
- Deliver smooth, high-quality animations using GSAP and Lenis for a premium user experience
- Maintain a clean, accessible UI with a consistent design system via Tailwind CSS and shadcn/ui
- Handle contact form submissions securely through a serverless backend with optional database logging
- Ship to production via Vercel with zero-config deployments

---

## Stack

### Frontend
| Technology | Purpose |
|---|---|
| [React 18](https://react.dev) | UI component framework |
| [TypeScript](https://www.typescriptlang.org) | Static typing across the entire codebase |
| [Vite](https://vitejs.dev) | Lightning-fast dev server and bundler |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com) | Accessible, composable UI primitives |

### Animation
| Technology | Purpose |
|---|---|
| [GSAP](https://gsap.com) | Timeline-based animations, ScrollTrigger, character splits |
| [Lenis](https://lenis.darkroom.engineering) | Smooth scroll engine wired to GSAP ticker |

### Backend & Infrastructure
| Technology | Purpose |
|---|---|
| [Vercel](https://vercel.com) | Hosting + serverless functions |
| [Nodemailer](https://nodemailer.com) | Email delivery via Gmail SMTP |
| [Supabase](https://supabase.com) | Optional contact form submission logging |

---

## Project Structure

```
src/
├── api/              # Vercel serverless functions (contact form)
├── components/
│   ├── cards/        # Reusable card components (Project, Skill)
│   ├── sections/     # Page sections (Hero, About, Projects, Skills, Contact)
│   └── ui/           # shadcn/ui primitives (Button, Input, Badge, Toast...)
├── context/          # LenisContext — smooth scroll provider
├── hooks/            # useContactForm, useLenis, useScrollTrigger, useToast
├── lib/              # GSAP plugin registration, Lenis setup
└── types/            # Shared TypeScript types
```

---

## Sections

- **Hero** — GSAP character-split entrance animation
- **About** — Personal bio and introduction
- **Parallax Showcase** — 300vh pinned parallax scene
- **Projects** — 3D card tilt interactions with live GitHub links
- **Skills** — Horizontal scroll-pinned skill grid
- **Contact** — Serverless email form with validation and toast feedback

---

## Getting Started

### Prerequisites

- Node.js 18+
- A Gmail account with an [App Password](https://support.google.com/accounts/answer/185833) enabled
- (Optional) A [Supabase](https://supabase.com) project for form logging

### Environment Variables

Create a `.env.local` file at the root:

```env
GMAIL_USER=your@gmail.com
GMAIL_APP_PASSWORD=your_app_password

# Optional — Supabase logging
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Install & Run

```bash
npm install
npm run dev          # Start dev server at localhost:5173
```

### Build & Preview

```bash
npm run build        # Type-check + bundle to dist/
npm run preview      # Preview the production build locally
```

### Deploy

```bash
vercel               # Deploy to Vercel (first time sets up project)
vercel --prod        # Deploy to production
```

---

## License

Private — all rights reserved.
