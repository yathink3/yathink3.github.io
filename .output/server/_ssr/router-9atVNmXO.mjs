import "../_runtime.mjs";
import { require_jsx_runtime, require_react } from "../_libs/react.mjs";
import { HeadContent, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent } from "../_libs/@tanstack/react-router+[2...].mjs";
import { Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var app_default = "/assets/app-DzKY1dWg.css";
var Route$1 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Yathin K — Staff Engineer & Frontend Architect" },
			{
				name: "description",
				content: "Staff Engineer @ X0PA AI | Ex-Recro | React & TypeScript Expert | Next.js, TailwindCSS v4, Vite, Bun & AI Automation Tools (n8n, Claude Code) | Systems Engineering & Rust"
			},
			{
				property: "og:title",
				content: "Yathin K — Staff Engineer & Frontend Architect"
			},
			{
				property: "og:description",
				content: "Building scalable web platforms, developer tooling, and AI-driven automation systems."
			},
			{
				name: "theme-color",
				content: "#050507"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: app_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:ital,wght@0,300..700;1,300..700&family=Space+Grotesk:wght@300..700&display=swap"
			},
			{
				rel: "icon",
				href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230b0c10'/><text x='50' y='68' font-size='52' text-anchor='middle' fill='%23e6c79c' font-family='monospace' font-weight='bold'>YK</text></svg>"
			}
		]
	}),
	component: RootComponent
});
function RootComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RootDocument, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
}
function RootDocument({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "dark scroll-smooth",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-[#050507] text-[#f2f0ea] selection:bg-[#e6c79c] selection:text-black min-h-screen relative font-sans antialiased overflow-x-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grain-overlay",
					"aria-hidden": "true"
				}),
				children,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter = () => import("./routes-Bma8Y7Vt.mjs");
var rootRouteChildren = { IndexRoute: createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") }).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
	return createRouter({
		routeTree,
		defaultPreload: "intent",
		scrollRestoration: true
	});
}
export { getRouter };
