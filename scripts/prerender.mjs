import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");
const distSsrDir = path.resolve(rootDir, "dist-ssr");

const routes = [
  "/",
  "/credit-society-software",
  "/patsanstha-software",
  "/nbfc-loan-management-software",
  "/shariah-compliant-banking-software",
  "/cooperative-audit-software",
  "/mr/patsanstha-software",
  "/product",
  "/about",
  "/pricing",
  "/contact",
  "/blog",
  "/blog/data-migration-guide-cooperative-credit-societies",
  "/blog/sahakar-compliance-audit-guide-maharashtra",
  "/blog/digital-kyc-mobile-banking-patsanstha",
  "/blog/how-to-choose-best-cooperative-banking-software",
  "/privacy-policy",
  "/terms-and-conditions",
  "/refund-policy",
  "/service-fulfillment",
  "/cookie-policy",
];

async function prerender() {
  console.log("🚀 Starting SSG pre-rendering of all routes...");

  const templatePath = path.resolve(distDir, "index.html");
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Client build template not found at ${templatePath}. Run 'vite build' first.`);
  }

  const rawTemplate = fs.readFileSync(templatePath, "utf-8");

  const serverEntryPath = path.resolve(distSsrDir, "entry-server.js");
  if (!fs.existsSync(serverEntryPath)) {
    throw new Error(`SSR build entry not found at ${serverEntryPath}. Run 'vite build --ssr' first.`);
  }

  const { render } = await import(`file://${serverEntryPath}`);

  for (const route of routes) {
    const helmetContext = {};
    const { appHtml, helmet } = render(route, helmetContext);

    // Build head injection
    const helmetTitle = helmet?.title?.toString() || "";
    const helmetMeta = helmet?.meta?.toString() || "";
    const helmetLink = helmet?.link?.toString() || "";
    const helmetScript = helmet?.script?.toString() || "";

    let pageHtml = rawTemplate;

    if (route !== "/") {
      // Strip default route-specific meta tags to avoid duplicate tags
      pageHtml = pageHtml
        .replace(/<title>.*?<\/title>/is, "")
        .replace(/<meta\s+name="description"[^>]*>/is, "")
        .replace(/<meta\s+name="keywords"[^>]*>/is, "")
        .replace(/<link\s+rel="canonical"[^>]*>/is, "")
        .replace(/<meta\s+property="og:title"[^>]*>/is, "")
        .replace(/<meta\s+property="og:description"[^>]*>/is, "")
        .replace(/<meta\s+property="og:url"[^>]*>/is, "")
        .replace(/<meta\s+name="twitter:title"[^>]*>/is, "")
        .replace(/<meta\s+name="twitter:description"[^>]*>/is, "");

      const headInjections = [
        helmetTitle,
        helmetMeta,
        helmetLink,
        helmetScript,
      ].filter(Boolean).join("\n    ");

      pageHtml = pageHtml.replace("</head>", `    ${headInjections}\n  </head>`);
    } else {
      // For homepage, replace title if present and inject any additional scripts/links
      if (helmetTitle) {
        pageHtml = pageHtml.replace(/<title>.*?<\/title>/is, helmetTitle);
      }
      const homeExtras = [helmetScript].filter(Boolean).join("\n    ");
      if (homeExtras) {
        pageHtml = pageHtml.replace("</head>", `    ${homeExtras}\n  </head>`);
      }
    }

    // Inject App HTML into #root
    pageHtml = pageHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    // Determine output file path
    let outFilePath;
    if (route === "/") {
      outFilePath = path.resolve(distDir, "index.html");
    } else {
      const routeDir = path.resolve(distDir, route.replace(/^\//, ""));
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      outFilePath = path.resolve(routeDir, "index.html");
    }

    fs.writeFileSync(outFilePath, pageHtml, "utf-8");
    console.log(`✅ Pre-rendered: ${route.padEnd(45)} -> ${path.relative(rootDir, outFilePath)} (${pageHtml.length} bytes)`);
  }

  console.log(`🎉 Successfully pre-rendered all ${routes.length} routes with full HTML, meta tags, and structured schemas!`);

  // Clean up SSR temp dir
  if (fs.existsSync(distSsrDir)) {
    fs.rmSync(distSsrDir, { recursive: true, force: true });
    console.log("🧹 Cleaned up temporary SSR build directory.");
  }
}

prerender().catch((err) => {
  console.error("❌ Pre-rendering failed:", err);
  process.exit(1);
});
