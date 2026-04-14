// Copies dist/index.html into each SPA route directory so that
// direct URL hits on GitHub Pages return a 200 instead of a 404.
// Skips routes that already have a static file in public/ (those are
// intentionally pre-rendered for crawlers and should not be overwritten).
import { copyFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const dist = "dist";
const publicDir = "public";
const routes = [
  "terms",
  "privacy",
  "faq",
  "delete-account-superstar-soccer",
  "superstarhockey",
];

for (const route of routes) {
  const staticFile = join(publicDir, route, "index.html");
  if (existsSync(staticFile)) {
    console.log(`⏭  ${route}/index.html — skipped (static file in public/)`);
    continue;
  }
  const dir = join(dist, route);
  mkdirSync(dir, { recursive: true });
  copyFileSync(join(dist, "index.html"), join(dir, "index.html"));
  console.log(`✓ ${route}/index.html`);
}
