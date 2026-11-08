import React, { useState, useEffect } from 'react'
import { ArrowDownRight, Terminal as TerminalIcon, Sparkles, Zap, Cpu } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

const ROLES = [
  'large-scale web architecture',
  'autonomous AI developer agents',
  'custom npm build tooling',
  'ultra-fast Vite pipelines',
  'Tailwind CSS v4 design systems',
  'high-performance web platforms',
]

const GLYPHS = '!<>-_/[]{}=+*^?#01_~λ'

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState(ROLES[0])
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  // Text scramble effect
  useEffect(() => {
    let frame = 0
    let interval: NodeJS.Timeout

    const targetText = ROLES[roleIndex]
    const fromText = displayText
    const length = Math.max(fromText.length, targetText.length)

    interval = setInterval(() => {
      let output = ''
      for (let i = 0; i < length; i++) {
        if (frame > i * 1.5 + 4) {
          output += targetText[i] || ''
        } else if (frame > i * 1.5) {
          output += GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        } else {
          output += fromText[i] || ''
        }
      }
      setDisplayText(output)
      frame++

      if (frame > length * 1.5 + 4) {
        setDisplayText(targetText)
        clearInterval(interval)
      }
    }, 40)

    const timer = setTimeout(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }, 3800)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [roleIndex])

  // Terminal tilt effect on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: x * 14, y: -y * 14 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      <div className="hero-grid" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & Title */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-neutral-300 font-mono text-xs uppercase tracking-wider backdrop-blur-md">
              <span className="pulse-dot" />
              <span>Staff Engineer @ X0PA AI · Singapore / India</span>
            </div>

            {/* Intro and Name */}
            <div>
              <p className="serif text-2xl sm:text-3xl text-neutral-400 italic mb-1">
                Hey, I&apos;m
              </p>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] text-white">
                <span className="shimmer-text">Yathin K</span>
              </h1>
            </div>

            {/* Role Scrambler */}
            <div className="text-xl sm:text-3xl font-medium tracking-tight text-neutral-200 flex items-baseline gap-2 flex-wrap">
              <span>I architect</span>
              <span className="serif text-[#e6c79c] font-normal text-2xl sm:text-4xl">
                {displayText}
              </span>
              <span className="w-2.5 h-6 bg-[#e6c79c] inline-block animate-pulse align-middle" />
            </div>

            {/* Subtitle / Pitch */}
            <p className="text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
              Front-End Architect &amp; Staff Engineer with <strong className="text-neutral-200">6+ years</strong> designing, optimizing, and scaling enterprise web applications, AI automation tools, and high-performance developer tooling. Deep expertise in <strong className="text-white">React, Next.js, Vite 8, and Tailwind CSS v4</strong>, actively expanding systems engineering via <strong className="text-[#e6c79c]">Rust &amp; Bun</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#work"
                className="group flex items-center gap-2 bg-[#f2f0ea] text-black font-semibold font-mono text-xs uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#e6c79c] transition-all duration-200 hover:shadow-[0_0_25px_rgba(230,199,156,0.35)]"
              >
                <span>See my work</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <a
                href="#terminal"
                className="group flex items-center gap-2 bg-white/[0.04] border border-white/10 hover:border-[#e6c79c]/50 text-neutral-200 font-mono text-xs uppercase tracking-wider px-5 py-3 rounded-full hover:bg-white/[0.08] transition-all"
              >
                <TerminalIcon className="w-4 h-4 text-[#e6c79c]" />
                <span>Interactive Terminal</span>
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href="https://github.com/yathink3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/[0.03] border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/yathink3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/[0.03] border border-white/10 text-neutral-400 hover:text-[#0077b5] hover:border-white/30 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Terminal & Floating Badges */}
          <div
            className="lg:col-span-5 relative perspective-[1000px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Terminal Mockup */}
            <div
              className="w-full rounded-2xl bg-[#090a0f]/90 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-xl transition-transform duration-200 ease-out"
              style={{
                transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              }}
            >
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/[0.02] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                </div>
                <div className="font-mono text-xs text-neutral-400 flex items-center gap-1.5">
                  <TerminalIcon className="w-3 h-3 text-neutral-500" />
                  <span>~/yathin — zsh</span>
                </div>
                <span className="text-[10px] font-mono text-neutral-600">v8.4.1</span>
              </div>

              {/* Terminal Content */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed space-y-3.5 text-neutral-300">
                <div>
                  <span className="text-[#34d399]">❯</span> <span className="text-white">whoami</span>
                  <div className="text-neutral-400 pl-4 pt-1">
                    <span className="text-[#e6c79c] font-semibold">yathin</span>{' '}
                    <span className="text-neutral-600">// Staff Engineer @ X0PA AI</span>
                  </div>
                </div>

                <div>
                  <span className="text-[#34d399]">❯</span> <span className="text-white">cat stack.json</span>
                  <pre className="text-neutral-400 pl-4 pt-1 font-mono text-[11px] leading-tight text-[#d4d4d8]">
{`{
  "role": "Staff Engineer & Architect",
  "frontend": ["React 19", "Next.js", "TypeScript"],
  "tooling": ["Vite 8", "Bun", "Tailwind v4"],
  "ai_agents": ["Claude Code", "n8n", "CI/CD Automations"],
  "systems": ["Rust", "Node.js"]
}`}
                  </pre>
                </div>

                <div>
                  <span className="text-[#34d399]">❯</span> <span className="text-white">pnpm test:metrics</span>
                  <div className="pl-4 pt-1 space-y-1 text-xs">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <span>✔</span> <span>Vite Migration: -50% build time</span>
                    </div>
                    <div className="flex items-center gap-2 text-cyan-400">
                      <span>✔</span> <span>AI Agent Workflows: +30% efficiency</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#e6c79c]">
                      <span>✔</span> <span>Maintainability: +40% across apps</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1 text-neutral-500">
                  <span className="text-[#34d399]">❯</span>
                  <span className="w-2 h-4 bg-[#e6c79c] inline-block animate-pulse" />
                </div>
              </div>
            </div>

            {/* Floating Badge A */}
            <div className="hidden sm:flex items-center gap-2.5 absolute -bottom-6 -left-6 bg-[#0c0d12]/95 border border-white/10 px-4 py-2.5 rounded-xl shadow-2xl backdrop-blur-md">
              <Zap className="w-4 h-4 text-[#e6c79c]" />
              <div className="font-mono text-xs">
                <span className="text-white font-bold block">+50% Vite Speedup</span>
                <span className="text-neutral-500 text-[10px]">Critical Build Migration</span>
              </div>
            </div>

            {/* Floating Badge B */}
            <div className="hidden sm:flex items-center gap-2.5 absolute -top-6 -right-4 bg-[#0c0d12]/95 border border-white/10 px-4 py-2.5 rounded-xl shadow-2xl backdrop-blur-md">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <div className="font-mono text-xs">
                <span className="text-white font-bold block">6+ Years Exp</span>
                <span className="text-neutral-500 text-[10px]">Staff Engineer &amp; Architect</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
