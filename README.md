# 🎮 Big Idea Games — Webapp Starter

A pre-configured, cloneable web app template for vibe coding with AI. Built on React 19 + Vite + Tailwind CSS v4 + shadcn/ui with the **Cyber-Athletic** design system.

> **The key insight:** Never start AI coding from a blank codebase. This template gives AI coding tools (Cursor, Claude, etc.) proper conventions, components, and design tokens to follow — so the output is actually good.

## Quick Start

### Clone for a new project

```bash
# Copy the template
cp -r webapp-starter/ my-new-app/
cd my-new-app/

# Fresh git history
rm -rf .git
git init

# Install & run
npm install
npm run dev
```

### Or use as a Git template

```bash
# If published to GitHub, use --template flag
gh repo create my-new-app --template bigideagames/webapp-starter
```

## What's Included

| Layer | Tech | Why |
|-------|------|-----|
| **Framework** | React 19 | Latest React with concurrent features |
| **Bundler** | Vite 6 | Fast dev server, instant HMR |
| **Styling** | Tailwind CSS v4 | CSS-first config, no JS config needed |
| **Components** | shadcn/ui | Accessible, customizable, copy-paste components |
| **Icons** | Lucide React | Clean, consistent icon set |
| **Language** | TypeScript (strict) | Type safety throughout |

### Pre-installed shadcn/ui Components

Button, Card, Badge, Input, Select, Tabs, Dialog, Dropdown Menu, Table, Separator, Avatar, Tooltip

All styled with the design token system — they automatically match your theme.

## Design System

### Customizing Colors

Everything is controlled from **one file**: `src/styles/globals.css`

```css
:root {
  /* Backgrounds */
  --bg-primary: #0f172a;     /* ← Change main bg */
  --bg-secondary: #1e293b;   /* ← Change card bg */

  /* Accents */
  --accent-primary: #a3e635;  /* ← Change primary color (currently lime) */
  --accent-secondary: #22d3ee;/* ← Change secondary (currently cyan) */
  --accent-alert: #facc15;    /* ← Change alert color (currently yellow) */
  --accent-danger: #ef4444;   /* ← Change error color (currently red) */
}
```

Change any value → every component updates. Cards, buttons, badges, everything.

### Customizing Fonts

Fonts are configured in two places:

1. **`index.html`** — Google Fonts import (add/remove font families)
2. **`src/styles/globals.css`** — `@theme` block maps fonts to utilities

```css
@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Russo One", ui-sans-serif, system-ui, sans-serif;
  --font-data: "Teko", ui-sans-serif, system-ui, sans-serif;
}
```

Use in components: `font-sans` (body), `font-display` (headers), `font-data` (numbers/stats).

### Dark / Light Mode

- **Dark mode is default** (Cyber-Athletic style)
- Toggle light mode by adding `.light` class to `<html>`
- Light mode overrides are in the `.light { }` block in `globals.css`

## 3-Step Vibe Coding Workflow

This is the workflow for turning a design into code fast:

### Step 1: Get a Design Reference
- Generate with ChatGPT/Gemini image gen
- Find on Dribbble.com
- Screenshot an existing app you like

### Step 2: Extract a Design Brief
- Paste the image into ChatGPT with the prompt from `PROMPTS.md` → Step 1
- You get a detailed JSONC specification (see `DESIGN-BRIEF.md` for the format)

### Step 3: Generate Code
- Open this project in Cursor (or use Claude)
- Use the prompt from `PROMPTS.md` → Step 2, with the JSONC brief pasted in
- The AI generates components that use your design tokens and shadcn/ui

### Step 4: Iterate
- Use `PROMPTS.md` → Step 3 for refinements
- Small, focused changes work best

## Project Structure

```
src/
├── components/        # Your app components go here
│   └── ui/            # shadcn/ui components (pre-installed)
├── lib/
│   └── utils.ts       # cn() helper and shared utilities
├── styles/
│   └── globals.css    # 🎨 Design tokens — THE place to customize
├── App.tsx            # Main app (demo page — replace with your app)
└── main.tsx           # Vite entry point
```

### Other Files
- `.cursorrules` / `.clinerules` — AI coding agent rules (read by Cursor, Cline)
- `PROMPTS.md` — The 3-step workflow prompts, ready to copy-paste
- `DESIGN-BRIEF.md` — Template for the JSONC design specification format

## Scripts

```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
```

## FAQ

**Why Vite instead of Next.js?**
We prefer Vite for its simplicity and speed. No server-side concerns, no routing opinions — just a fast bundler. Add a router if/when you need one.

**Why shadcn/ui?**
Components you own (copied into your repo, not a dependency). Accessible by default, endlessly customizable, and AI coding tools understand them well.

**Why design tokens instead of Tailwind's default palette?**
One-place theming. Change `--accent-primary` and every button, badge, and highlight updates. With raw Tailwind colors you'd need find-and-replace across hundreds of files.

**Can I add more shadcn/ui components?**
Yes! Copy them from [ui.shadcn.com](https://ui.shadcn.com/) and adapt them to use the design tokens. The existing components in `src/components/ui/` show the pattern.
