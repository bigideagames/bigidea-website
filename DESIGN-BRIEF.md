# Design Brief Template

This is the expected JSONC format for design briefs generated in Step 1 of the vibe coding workflow. Feed this structure to ChatGPT/Gemini along with a design screenshot.

---

```jsonc
{
  // ============================================================
  // PROJECT METADATA
  // ============================================================
  "project": {
    "name": "My App Name",
    "description": "One-line description of what this app does",
    "style": "cyber-athletic"  // or "minimal", "corporate", "playful", etc.
  },

  // ============================================================
  // LAYOUT STRUCTURE
  // ============================================================
  "layout": {
    "type": "dashboard",  // "dashboard" | "landing" | "form" | "list" | "detail"
    "sections": [
      {
        "id": "header",
        "type": "header",
        "position": "top",
        "height": "64px",
        "children": [
          { "id": "logo", "type": "brand", "position": "left" },
          { "id": "nav", "type": "navigation", "position": "center" },
          { "id": "actions", "type": "action-group", "position": "right" }
        ]
      },
      {
        "id": "main",
        "type": "content",
        "children": [
          // Describe each section with nesting...
        ]
      }
    ]
  },

  // ============================================================
  // COLOR PALETTE
  // ============================================================
  "colors": {
    "backgrounds": {
      "primary": "#0f172a",     // Main page bg
      "secondary": "#1e293b",   // Cards, panels
      "muted": "#334155"        // Subtle backgrounds
    },
    "foregrounds": {
      "primary": "#f1f5f9",     // Main text
      "secondary": "#94a3b8",   // Subdued text
      "muted": "#64748b"        // Hints, placeholders
    },
    "accents": {
      "primary": "#a3e635",     // Main action color
      "secondary": "#22d3ee",   // Supporting accent
      "alert": "#facc15",       // Warnings
      "danger": "#ef4444"       // Errors
    },
    "borders": {
      "default": "#334155",
      "subtle": "#1e293b"
    }
  },

  // ============================================================
  // TYPOGRAPHY
  // ============================================================
  "typography": {
    "fontFamilies": {
      "body": "Inter",
      "display": "Russo One",   // Headers, titles
      "data": "Teko"            // Numbers, stats
    },
    "scale": {
      "h1": { "size": "2.25rem", "weight": 700, "lineHeight": 1.2 },
      "h2": { "size": "1.5rem", "weight": 600, "lineHeight": 1.3 },
      "h3": { "size": "1.25rem", "weight": 600, "lineHeight": 1.4 },
      "body": { "size": "0.875rem", "weight": 400, "lineHeight": 1.5 },
      "caption": { "size": "0.75rem", "weight": 500, "lineHeight": 1.4 },
      "data-lg": { "size": "2.5rem", "weight": 700, "lineHeight": 1.1 },
      "data-sm": { "size": "1.25rem", "weight": 600, "lineHeight": 1.2 }
    }
  },

  // ============================================================
  // SPACING
  // ============================================================
  "spacing": {
    "page-padding": "1.5rem",
    "section-gap": "1.5rem",
    "card-padding": "1.5rem",
    "element-gap": "0.75rem",
    "compact-gap": "0.5rem"
  },

  // ============================================================
  // COMPONENTS
  // ============================================================
  "components": [
    {
      "type": "stat-card",
      "count": 4,
      "layout": "grid 2x2 → 4x1",
      "properties": {
        "icon": "top-right, muted",
        "label": "caption, muted",
        "value": "data-lg font",
        "trend": "badge, success/destructive"
      }
    }
    // Add more components as the design requires...
  ],

  // ============================================================
  // INTERACTIVE STATES
  // ============================================================
  "interactions": {
    "buttons": {
      "hover": "brightness-110, scale-105",
      "active": "scale-95",
      "disabled": "opacity-50"
    },
    "cards": {
      "hover": "border-lighten, shadow-increase",
      "selected": "border-accent, bg-accent/5"
    },
    "transitions": {
      "default": "all 300ms ease-in-out",
      "fast": "all 150ms ease-in-out"
    }
  },

  // ============================================================
  // RESPONSIVE BREAKPOINTS
  // ============================================================
  "responsive": {
    "mobile": {
      "maxWidth": "640px",
      "changes": [
        "Stack cards vertically",
        "Collapse sidebar to bottom nav",
        "Reduce font sizes by 1 step"
      ]
    },
    "tablet": {
      "maxWidth": "1024px",
      "changes": [
        "2-column grid instead of 4",
        "Sidebar collapses to icons"
      ]
    }
  },

  // ============================================================
  // DEVELOPER BRIEF
  // ============================================================
  "developerBrief": {
    "componentBreakdown": [
      "Header — logo, nav, user actions",
      "StatsGrid — 4x stat cards in responsive grid",
      "MainContent — primary data view (table/list/chart)"
    ],
    "dataFlow": "Props-driven, state in App.tsx, components are pure/presentational",
    "keyDecisions": [
      "Use shadcn/ui Card for all panel-like containers",
      "Use shadcn/ui Table for tabular data",
      "Use CSS grid for responsive layouts",
      "All colors via design tokens — no hardcoding"
    ]
  }
}
```

---

## Usage

1. Take a screenshot of your design reference
2. Paste it into ChatGPT/Gemini with the Step 1 prompt from `PROMPTS.md`
3. The AI will output JSONC in this format (adapted to your specific design)
4. Feed that JSONC into the Step 2 code generation prompt
