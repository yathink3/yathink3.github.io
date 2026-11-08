import React from 'react'

const BADGES = [
  'React & TypeScript Expert',
  'Staff Engineer @ X0PA AI',
  'Vite 8 Migration Architect',
  'Tailwind CSS v4 Lead',
  'Autonomous AI Developer Agents',
  'Claude Code & n8n Workflows',
  'Node.js & Bun Tooling',
  'Rust Systems Exploration',
  'Next.js & TanStack Start',
  'Framer Motion & Astro.js',
  'IBM Carbon & Ant Design Systems',
  'Custom NPM Library Author',
  'CI/CD & Cloud Pipeline Automation',
]

export function MarqueeTicker() {
  return (
    <div className="py-6 border-y border-white/[0.08] bg-black/40 backdrop-blur-md overflow-hidden relative select-none">
      <div className="marquee-inner flex items-center gap-8 text-neutral-400 font-mono text-xs sm:text-sm uppercase tracking-widest">
        {/* Loop twice for continuous marquee */}
        {[...BADGES, ...BADGES].map((item, index) => (
          <div key={index} className="flex items-center gap-8 whitespace-nowrap">
            <span className="hover:text-[#e6c79c] transition-colors">{item}</span>
            <span className="text-[#e6c79c]/60 text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
