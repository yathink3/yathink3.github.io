/// <reference types="vite/client" />
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import * as React from 'react'
import appCss from '~/styles/app.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Yathin K — Staff Engineer & Frontend Architect' },
      {
        name: 'description',
        content:
          'Staff Engineer @ X0PA AI | Ex-Recro | React & TypeScript Expert | Next.js, TailwindCSS v4, Vite, Bun & AI Automation Tools (n8n, Claude Code) | Systems Engineering & Rust',
      },
      { property: 'og:title', content: 'Yathin K — Staff Engineer & Frontend Architect' },
      {
        property: 'og:description',
        content: 'Building scalable web platforms, developer tooling, and AI-driven automation systems.',
      },
      { name: 'theme-color', content: '#050507' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:ital,wght@0,300..700;1,300..700&family=Space+Grotesk:wght@300..700&display=swap',
      },
      {
        rel: 'icon',
        href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230b0c10'/><text x='50' y='68' font-size='52' text-anchor='middle' fill='%23e6c79c' font-family='monospace' font-weight='bold'>YK</text></svg>",
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <HeadContent />
      </head>
      <body className="bg-[#050507] text-[#f2f0ea] selection:bg-[#e6c79c] selection:text-black min-h-screen relative font-sans antialiased overflow-x-hidden">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
        <Scripts />
      </body>
    </html>
  )
}

