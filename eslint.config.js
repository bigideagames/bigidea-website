import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tailwind from "eslint-plugin-tailwindcss";

export default tseslint.config(
  { ignores: ["dist"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      tailwindcss: tailwind,
    },
    rules: {
      // React
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // ── Design System Enforcement ──────────────────────────────
      // Forbid arbitrary values like bg-[#fff], p-[37px], text-[16px]
      // These bypass the design system. CSS variable references are OK.
      "tailwindcss/no-arbitrary-value": "warn",

      // Forbid contradicting classes like p-2 p-3
      "tailwindcss/no-contradicting-classname": "warn",

      // Disabled: Tailwind v4 uses CSS-based @theme config which the
      // plugin can't read yet, causing false positives on design tokens
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/classnames-order": "off",

      // Catch inline hardcoded styles that bypass the design system
      "no-restricted-syntax": [
        "warn",
        {
          selector:
            "JSXAttribute[name.name='style'] ObjectExpression Property[value.type='Literal']",
          message:
            "Avoid inline style literals — use design tokens (CSS variables or Tailwind classes) instead of hardcoded values.",
        },
      ],
    },
  },
);
