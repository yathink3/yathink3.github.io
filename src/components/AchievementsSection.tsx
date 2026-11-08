import React from 'react'
import { Zap, Bot, Layers, Award, TrendingUp, Cpu, Workflow, GitMerge } from 'lucide-react'

export function AchievementsSection() {
  const achievements = [
    {
      metric: '50% Speedup',
      title: 'Performance & Build Optimization',
      category: 'Build Systems',
      description:
        'Spearheaded the complete migration of legacy bundlers (CRA/Webpack) to Vite across enterprise frontend repositories. Reduced cold build and HMR times by over 50%, resulting in dramatically faster CI test pipelines and daily engineering velocity.',
      icon: Zap,
      tags: ['Vite 8', 'Rollup', 'ESBuild', 'HMR Tuning', 'CI/CD Pipelines'],
      highlightColor: 'text-[#e6c79c]',
      statBadge: '-50% Build Time',
    },
    {
      metric: '30% Efficiency',
      title: 'Enterprise AI Integration & Agents',
      category: 'AI & Automation',
      description:
        'Architected and deployed custom AI agents and automation tooling leveraging Claude Code and n8n workflows. Automated repetitive development tasks, automated PR sanity checks, and accelerated project workflows by 30% while eliminating manual bottlenecks.',
      icon: Bot,
      tags: ['Claude Code', 'n8n', 'Autonomous Agents', 'LLM Automation', 'Productivity'],
      highlightColor: 'text-emerald-400',
      statBadge: '+30% Process Speed',
    },
    {
      metric: '40% Boost',
      title: 'Legacy Modernization & Architecture',
      category: 'System Evolution',
      description:
        'Led architectural refactoring of monolithic and legacy React applications into modern Next.js JAMstack platforms and clean TypeScript architectures. Boosted codebase maintainability and runtime performance metrics by 40%.',
      icon: Layers,
      tags: ['Next.js', 'React 19', 'TypeScript', 'Clean Architecture', 'Refactoring'],
      highlightColor: 'text-cyan-400',
      statBadge: '+40% Maintainability',
    },
    {
      metric: '15% Velocity',
      title: 'Engineering Mentorship & Delivery',
      category: 'Leadership & Culture',
      description:
        'Mentored 10+ junior and mid-level software engineers across multiple squads. Established code review standards, modern TypeScript patterns, and component design systems—improving cross-team sprint delivery timelines by 15%.',
      icon: Award,
      tags: ['10+ Developers', 'Design Systems', 'Code Standards', 'Talent Growth'],
      highlightColor: 'text-amber-300',
      statBadge: '+15% Sprint Speed',
    },
  ]

  return (
    <section id="achievements" className="py-24 relative bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#e6c79c] mb-6">
          <span className="w-8 h-[1px] bg-[#e6c79c]" />
          <span>02 — Key Achievements</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Proven impact in <em className="serif text-[#e6c79c] font-normal">production.</em>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2">
              High-leverage engineering deliverables across performance, AI systems, and architecture.
            </p>
          </div>
          <div className="font-mono text-xs text-neutral-500 bg-white/[0.03] border border-white/5 px-4 py-2 rounded-full">
            <span>Verified metrics from enterprise engagements</span>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="spot-card p-8 rounded-3xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#e6c79c]/50 transition-colors">
                        <Icon className={`w-5 h-5 ${item.highlightColor}`} />
                      </div>
                      <div>
                        <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 block">
                          {item.category}
                        </span>
                        <h3 className="text-lg font-bold text-white group-hover:text-[#e6c79c] transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                      {item.statBadge}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] text-neutral-400 bg-white/[0.03] border border-white/5 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

