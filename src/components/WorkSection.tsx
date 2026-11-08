import React from 'react'
import { FolderGit2, ArrowUpRight, Terminal, Cpu, Layers, Sparkles, ExternalLink, Zap } from 'lucide-react'

export function WorkSection() {
  const projects = [
    {
      title: 'bun-as-vite',
      category: 'Systems & Tooling',
      description:
        'High-performance bundler bridge benchmarking Bun runtime against Vite module resolution. Explores zero-overhead ES module compilation and sub-second cold starts for next-gen web tooling.',
      badge: 'Systems Experiment',
      tags: ['Bun', 'Vite', 'TypeScript', 'Node.js', 'Compiler Perf'],
      github: 'https://github.com/yathink3/bun-as-vite',
      icon: Zap,
    },
    {
      title: 'react-smart-pdf-viewer',
      category: 'Open Source Library',
      description:
        'Virtualized enterprise PDF viewer component for React applications. Features memory-efficient tile streaming, text layer selection, search indexing, and custom annotation hooks.',
      badge: 'NPM Library',
      tags: ['React 19', 'TypeScript', 'Canvas API', 'Virtualization', 'NPM'],
      github: 'https://github.com/yathink3/react-smart-pdf-viewer',
      icon: Layers,
    },
    {
      title: 'vite-proxy-redirects-plugin',
      category: 'Developer Tooling',
      description:
        'Production Vite plugin designed to handle microfrontend local proxies, dynamic rewrite rules, and single-page application route fallbacks in complex enterprise multi-service environments.',
      badge: 'Vite Ecosystem',
      tags: ['Vite 8', 'Rollup Plugin', 'Dev Server', 'HTTP Proxies'],
      github: 'https://github.com/yathink3/vite-proxy-redirects-plugin',
      icon: Terminal,
    },
    {
      title: 'carbon-react-color-theme',
      category: 'Design Systems',
      description:
        'Comprehensive theme package and color palette engine implementing IBM Carbon Design System tokens for modern React applications and editor ecosystems (including Zed extensions).',
      badge: 'Design System',
      tags: ['IBM Carbon', 'Theme Tokens', 'CSS Variables', 'Zed Editor'],
      github: 'https://github.com/yathink3/carbon-react-color-theme',
      icon: Cpu,
    },
    {
      title: 'yk-editor',
      category: 'Developer Tools',
      description:
        'Specialized developer code editing environment with intelligent syntax highlighting, lightweight state management, custom keyboard macros, and AI agent integration hooks.',
      badge: 'Dev Utility',
      tags: ['React', 'TypeScript', 'Monaco API', 'AST Parsing'],
      github: 'https://github.com/yathink3/yk-editor',
      icon: FolderGit2,
    },
    {
      title: 'Autonomous AI CI/CD Agent Suite',
      category: 'Enterprise Automation',
      description:
        'End-to-end agentic workflow orchestrations utilizing Claude Code and n8n webhooks. Automates changelog syntheses, regression impact checks, and deployment health monitoring.',
      badge: 'AI Architecture',
      tags: ['Claude Code', 'n8n', 'GitHub Actions', 'AI Agents', 'Automation'],
      github: 'https://github.com/yathink3',
      icon: Sparkles,
    },
  ]

  return (
    <section id="work" className="py-24 sm:py-32 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#e6c79c] mb-6">
          <span className="w-8 h-[1px] bg-[#e6c79c]" />
          <span>04 — Architecture &amp; Work</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Selected engineering &amp; <em className="serif text-[#e6c79c] font-normal">tooling.</em>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2">
              Production libraries, compiler experiments, design systems, and developer infrastructure.
            </p>
          </div>
          <a
            href="https://github.com/yathink3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-[#e6c79c] hover:underline"
          >
            <span>View all GitHub repositories</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => {
            const Icon = proj.icon
            return (
              <div
                key={idx}
                className="spot-card p-6 rounded-3xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#e6c79c]/50 transition-colors">
                      <Icon className="w-5 h-5 text-[#e6c79c]" />
                    </div>
                    <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400">
                      {proj.badge}
                    </span>
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 block mb-1">
                    {proj.category}
                  </span>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#e6c79c] transition-colors mb-2.5 flex items-center gap-1.5">
                    <span>{proj.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-[#e6c79c]" />
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                    {proj.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] text-neutral-400 bg-white/[0.02] border border-white/5 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono text-neutral-300 hover:text-white transition-colors"
                  >
                    <span>Inspect code</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#e6c79c]" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
