// Scans src for internal links and verifies every one resolves to a real route.
// Usage: npm run check:links
import fs from "node:fs";
import path from "node:path";

const root = path.resolve("src");
const app = path.join(root, "app");
const files = [];
(function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    fs.statSync(p).isDirectory() ? walk(p) : /\.(tsx?|ts)$/.test(f) && files.push(p);
  }
})(root);

// Static routes = folders under app that contain page.tsx
const routes = new Set();
(function walk(d, base) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) walk(p, base + "/" + f);
    else if (f === "page.tsx") routes.add(base || "/");
  }
})(app, "");

const dyn = [...routes].filter((r) => r.includes("["));
const content = fs.readFileSync(path.join(root, "lib/content.ts"), "utf8");
const slugs = (re) => [...content.matchAll(re)].map((m) => m[1]);
const projectSlugs = slugs(/slug: "([a-z-]+)", kind: "project"/g);
const postSlugs = slugs(/slug: "([a-z-]+)", kind: "post"/g);

const ok = (href) => {
  const clean = href.split("#")[0].split("?")[0];
  if (routes.has(clean)) return true;
  const m = clean.match(/^\/(projects|blog)\/([^/]+)$/);
  if (m) return (m[1] === "projects" ? projectSlugs : postSlugs).includes(m[2]);
  return false;
};

let bad = 0, total = 0;
for (const f of files) {
  const s = fs.readFileSync(f, "utf8");
  for (const m of s.matchAll(/href[=:]\s*["'`{]*\s*["'`](\/[^"'`$]*)["'`]/g)) {
    total++;
    if (!ok(m[1])) { console.log("DEAD", path.relative(root, f), m[1]); bad++; }
  }
}
// hrefs stored in content.ts
for (const m of content.matchAll(/href: "(\/[^"]*)"/g)) {
  total++;
  if (!ok(m[1])) { console.log("DEAD content.ts", m[1]); bad++; }
}
for (const slug of projectSlugs) { total++; if (!ok("/projects/" + slug)) bad++; }
for (const slug of postSlugs) { total++; if (!ok("/blog/" + slug)) bad++; }
console.log(`${total} internal links checked, ${bad} dead.`);
process.exit(bad ? 1 : 0);
