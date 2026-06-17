# Saikiran Rudra — Personal Portfolio

> A premium, dark-themed personal portfolio built with **Next.js 16**, **React 19**, and **Framer Motion** — showcasing full-stack projects, skills, and contact information.

---

## ✨ Features

- **Hero Section** — Animated introduction with a decorative code-editor card
- **About Section** — Personal background and developer philosophy
- **Projects Section** — Alternating layout showcasing key projects with hover overlays
- **Skills Section** — Tech stack display with visual indicators
- **Contact Section** — Contact form with a call-to-action banner
- **Custom Cursor** — Unique cursor interaction for desktop users
- **Smooth Animations** — Page-wide Framer Motion transitions and scroll reveals
- **Fully Static** — Pre-rendered as static HTML via Next.js for blazing-fast load times

---

## 🛠️ Tech Stack

| Layer        | Technology                              |
|--------------|-----------------------------------------|
| Framework    | Next.js 16.2.4 (App Router, Turbopack) |
| UI Library   | React 19                                |
| Language     | TypeScript 5                            |
| Styling      | Tailwind CSS v4                         |
| Animations   | Framer Motion 12                        |
| Icons        | Lucide React, React Icons               |
| Utilities    | clsx, tailwind-merge                    |

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with metadata & fonts
│   ├── page.tsx         # Main page — composes all sections
│   └── globals.css      # Global styles & design tokens
└── components/
    ├── Navbar.tsx        # Top navigation bar
    ├── Hero.tsx          # Landing hero section
    ├── About.tsx         # About me section
    ├── Skills.tsx        # Skills & tech stack section
    ├── Projects.tsx      # Featured projects section
    ├── ContactBanner.tsx # CTA banner
    ├── ContactForm.tsx   # Contact form
    └── CustomCursor.tsx  # Custom animated cursor
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Production Build

```bash
npm run build
npm run start
```

---

## 📁 Featured Projects

| Project             | Description                                                              | Tags                        |
|---------------------|--------------------------------------------------------------------------|-----------------------------|
| **Hisaab Kitaab**   | Fintech accounting system with org management & module-based access control | React, Node.js, MongoDB  |
| **Beyond AI Tools** | AI platform with a custom geometric visual identity                      | Next.js, Modern UI          |
| **IoT Fleet Mgmt**  | Real-time enterprise vehicle fleet monitoring dashboard                  | Dashboard, IoT              |
| **Advanced POS**    | High-performance transaction & inventory management system               | Full Stack, Inventory        |

---

## 📄 License

This project is personal and not intended for redistribution. All design and content © Saikiran Rudra.
