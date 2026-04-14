// Copies dist/index.html into each SPA route directory so that
// direct URL hits on GitHub Pages return a 200 instead of a 404.
import { copyFileSync, mkdirSync } from "fs";
import { join } from "path";

const dist = "dist";
const routes = [
  "terms",
  "privacy",
  "privacy-policy",
  "faq",
  "delete-account-superstar-hockey",
  "delete-account-superstar-soccer",
  "superstarhockey",
];

for (const route of routes) {
  const dir = join(dist, route);
  mkdirSync(dir, { recursive: true });
  copyFileSync(join(dist, "index.html"), join(dir, "index.html"));
  console.log(`✓ ${route}/index.html`);
}
