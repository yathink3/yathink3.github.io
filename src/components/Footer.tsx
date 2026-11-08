import React from 'react'
import { ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/[0.08] bg-[#030305] py-12 relative z-10 text-xs font-mono text-neutral-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping" />
            <span className="text-neutral-400">
              System Status: <span className="text-emerald-400">All Nodes Active</span>
            </span>
            <span className="text-neutral-700">|</span>
            <span>Uptime: 99.99%</span>
          </div>

          <div className="text-center text-neutral-400">
            © {new Date().getFullYear()} <span className="text-white font-bold">Yathin K</span> · Staff Engineer &amp; Frontend Architect
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline text-neutral-600">
              TanStack Start · Vite 8 · Tailwind v4
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/5"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

