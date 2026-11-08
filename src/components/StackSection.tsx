import React from 'react'
import { Code, Wrench, Palette, Bot, Binary, CheckCircle2 } from 'lucide-react'

export function StackSection() {
  const stackCategories = [
    {
      title: 'Frontend & Architecture',
      icon: Code,
      accent: 'text-[#e6c79c]',
      items: [
        { name: 'React 19 / 18', level: 'Expert / Architect', desc: 'Component architecture, concurrent rendering, custom hooks' },
        { name: 'TypeScript', level: 'Expert', desc: 'Strict typing, generic abstractions, ASTs' },
        { name: 'Next.js', level: 'Production Lead', desc: 'App router, SSR/CSR JAMstack, server actions' },
        { name: 'TanStack Start & Router', level: 'Modern Full-Stack', desc: 'Type-safe client/server routing & state' },
        { name: 'Astro.js', level: 'High Performance', desc: 'Zero JS by default, island architecture' },
      ],
    },
    {
      title: 'Build Systems & Tooling',
      icon: Wrench,
      accent: 'text-emerald-400',
      items: [
        { name: 'Vite 8 & Plugins', level: '50% Speedup Lead', desc: 'Plugin authoring, HMR optimization, proxy redirects' },
        { name: 'Bun Runtime', level: 'Active Tooling', desc: 'Package management, bundler benchmarking, fast scripting' },
        { name: 'Node.js', level: 'Senior', desc: 'Enterprise microservices, npm package authoring' },
        { name: 'Webpack to Vite Migration', level: 'Specialist', desc: 'Legacy CRA and bundler modernization' },
        { name: 'Custom NPM Libraries', level: 'Author', desc: 'Shared UI components, utility hooks, dev plugins' },
      ],
    },
    {
      title: 'Design Systems & Motion',
      icon: Palette,
      accent: 'text-cyan-400',
      items: [
        { name: 'Tailwind CSS v4', level: 'V4 Migration Lead', desc: 'Modern CSS-first configurations, theme variables' },
        { name: 'IBM Carbon Components', level: 'Enterprise', desc: 'Carbon React design tokens and accessibility standards' },
        { name: 'Ant Design', level: 'Enterprise', desc: 'Complex enterprise backoffice and analytics UI' },
        { name: 'Framer Motion', level: 'Interactive Polish', desc: 'Seamless page transitions and physics-based animations' },
      ],
    },
    {
      title: 'AI & Workflow Automation',
      icon: Bot,
      accent: 'text-purple-400',
      items: [
        { name: 'Claude Code', level: 'Agentic Workflows', desc: 'AI-assisted development, code refactoring agents' },
        { name: 'n8n Workflow Automation', level: 'Process Engineer', desc: 'Webhook triggers, API integrations, repetitive task elimination' },
        { name: 'Custom AI Agents', level: 'Platform Builder', desc: 'Streamlined development processes and CI/CD triage' },
        { name: 'CI/CD Pipeline Automation', level: 'DevOps Lead', desc: 'Automated test runners, build gates, deployment sanity' },
      ],
    },
    {
      title: 'Systems & Emerging Engineering',
      icon: Binary,
      accent: 'text-amber-400',
      items: [
        { name: 'Rust', level: 'Exploring & Systems', desc: 'Memory-safe systems programming, CLI tooling, WebAssembly' },
        { name: 'Zsh / Unix Shell', level: 'Power User', desc: 'Developer scripting, terminal automation, developer envs' },
        { name: 'Git & GitHub Workflows', level: 'Advanced', desc: 'Branching policies, multi-repo architecture, monorepos' },
      ],
    },
  ]

  return (
    <section id="stack" className="py-24 sm:py-32 relative bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#e6c79c] mb-6">
          <span className="w-8 h-[1px] bg-[#e6c79c]" />
          <span>06 — Tech Stack &amp; Toolbox</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              The technical <em className="serif text-[#e6c79c] font-normal">arsenal.</em>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2">
              Depth in modern JavaScript/TypeScript, build architecture, and AI-accelerated workflows.
            </p>
          </div>
          <div className="font-mono text-xs text-neutral-500 bg-white/[0.03] border border-white/5 px-4 py-2 rounded-full">
            <span>Production-tested capabilities</span>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackCategories.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <div
                key={idx}
                className="spot-card p-7 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${cat.accent}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {cat.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-neutral-200">
                            {item.name}
                          </span>
                          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 text-[#e6c79c]">
                            {item.level}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-400 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-1.5 text-neutral-500 text-[11px] font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Production verified across enterprise applications</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

