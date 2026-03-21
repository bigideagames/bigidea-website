# Vibe Coding Workflow — 3-Step Prompts

Use these prompts to go from design → code in minutes. The workflow:
1. Get a design reference (Dribbble, ChatGPT image gen, screenshot)
2. Extract a structured design brief (JSONC)
3. Generate code against this template

---

## Step 1: Design Brief Extraction

Paste your design screenshot/image into ChatGPT (GPT-5+ recommended) or Gemini with this prompt:

```
I'm building [DESCRIBE YOUR APP IN 1-2 SENTENCES].

Analyze this UI design and produce a detailed JSONC design specification. Include:

1. **Layout Structure** — describe every section, panel, sidebar, header, etc. with nesting hierarchy
2. **Color Palette** — extract EVERY color used. Provide hex values. Categorize as: backgrounds, foregrounds, accents, borders, interactive states
3. **Typography** — font sizes, weights, line heights for each text element type (headings, body, labels, data)
4. **Spacing** — padding, margins, gaps between elements (in px or rem)
5. **Components** — list every UI component visible (buttons, cards, tables, badges, etc.) with their visual properties
6. **Interactive States** — hover, active, selected, disabled states if visible
7. **Responsive Notes** — how should this adapt for mobile/tablet if not shown

Format as JSONC (JSON with comments). Be exhaustive — this spec will be handed directly to a coding AI.

Also include a "developerBrief" section at the end with a high-level implementation overview: recommended component breakdown, data flow, and key technical decisions.
```

---

## Step 2: Code Generation

In Cursor (or Claude), use this prompt with the JSONC brief from Step 1:

```
Build this UI using the existing project's tech stack and design system.

## Tech Stack (already configured)
- React 19 + TypeScript
- Tailwind CSS v4 (CSS-first config with design tokens in src/styles/globals.css)
- shadcn/ui components (pre-installed in src/components/ui/)
- Lucide React icons

## Rules
- Use ONLY shadcn/ui components — don't create custom buttons, cards, inputs, etc.
- Use ONLY Tailwind utility classes — no custom CSS
- Follow the design token system — reference CSS custom properties, never hardcode colors
- Mobile-first responsive design (sm: md: lg: breakpoints)
- Dark mode is default (tokens handle it automatically)
- One component per file, PascalCase naming
- No magic strings — use constants/enums for repeated values
- Use the cn() helper from @/lib/utils for conditional classes
- TypeScript strict mode — no `any`, proper types for all props

## Design Token Colors Available
- --accent-primary (lime) — success, primary stats
- --accent-secondary (cyan) — high priority info
- --accent-tertiary (blue) — secondary info
- --accent-alert (yellow) — warnings, live states
- --accent-danger (red) — errors, destructive

## Implementation Brief
[PASTE THE developerBrief SECTION FROM STEP 1]

## JSONC Design Specification
[PASTE THE FULL JSONC FROM STEP 1]

Create all necessary component files. Put app components in src/components/ and update App.tsx to render them.
```

---

## Step 3: Iteration & Refinement

For follow-up adjustments:

```
Looking at the current implementation, make these changes:

[DESCRIBE WHAT TO CHANGE]

Remember:
- Keep using design tokens (no hardcoded colors)
- Keep using shadcn/ui components
- Maintain responsive behavior
- Keep components small and composable
- Follow the existing code patterns in the project
```

---

## Tips

- **Better input = better output.** A Dribbble screenshot of a professional dashboard will produce dramatically better code than a text description.
- **Be specific in Step 1 context.** "A fintech dashboard showing portfolio performance" beats "a dashboard."
- **Don't skip Step 2's rules section.** The constraints are what make the output actually good instead of AI slop.
- **Iterate in small steps.** Step 3 works best with focused, single-concern changes.
