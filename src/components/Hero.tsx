import React, { useState, useEffect, useRef } from 'react'
import { ArrowDownRight, Terminal as TerminalIcon, Sparkles, Zap, Cpu, CornerDownLeft, ExternalLink, Maximize2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

type HeroHistoryItem = {
  cmd: string
  content: React.ReactNode
}

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

  const defaultHeroHistory: HeroHistoryItem[] = [
    {
      cmd: 'whoami',
      content: (
        <div className="text-neutral-400 pl-4 pt-1">
          <span className="text-[#e6c79c] font-semibold">yathin</span>{' '}
          <span className="text-neutral-600">// Staff Engineer @ X0PA AI</span>
        </div>
      ),
    },
    {
      cmd: 'cat stack.json',
      content: (
        <pre className="text-neutral-400 pl-4 pt-1 font-mono text-[11px] leading-tight text-[#d4d4d8]">
{`{
  "role": "Staff Engineer & Architect",
  "frontend": ["React 19", "Next.js", "TypeScript"],
  "tooling": ["Vite 8", "Bun", "Tailwind v4"],
  "ai_agents": ["Claude Code", "n8n", "CI/CD Automations"],
  "systems": ["Rust", "Node.js"]
}`}
        </pre>
      ),
    },
    {
      cmd: 'pnpm test:metrics',
      content: (
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
      ),
    },
  ]

  const [heroHistory, setHeroHistory] = useState<HeroHistoryItem[]>(defaultHeroHistory)
  const [heroInput, setHeroInput] = useState('')
  const heroTerminalBodyRef = useRef<HTMLDivElement>(null)

  const handleHeroCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase()
    if (!trimmed) return

    if (trimmed === 'clear') {
      setHeroHistory([])
      return
    }

    if (trimmed === 'reset') {
      setHeroHistory(defaultHeroHistory)
      return
    }

    let result: React.ReactNode

    if (trimmed === 'whoami') {
      result = (
        <div className="text-neutral-400 pl-4 pt-1">
          <span className="text-[#e6c79c] font-semibold">yathin</span>{' '}
          <span className="text-neutral-600">// Staff Engineer &amp; Frontend Architect @ X0PA AI</span>
        </div>
      )
    } else if (trimmed === 'cat stack.json' || trimmed === 'stack') {
      result = (
        <pre className="text-neutral-400 pl-4 pt-1 font-mono text-[11px] leading-tight text-[#d4d4d8]">
{`{
  "role": "Staff Engineer & Architect",
  "frontend": ["React 19", "Next.js", "TypeScript"],
  "tooling": ["Vite 8", "Bun", "Tailwind v4"],
  "ai_agents": ["Claude Code", "n8n", "CI/CD Automations"],
  "systems": ["Rust", "Node.js"]
}`}
        </pre>
      )
    } else if (trimmed === 'metrics' || trimmed === 'pnpm test:metrics') {
      result = (
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
      )
    } else if (trimmed === 'neofetch') {
      result = (
        <div className="pl-4 pt-1 font-mono text-[11px] text-[#e6c79c] space-y-1">
          <pre className="leading-tight">
{`██╗   ██╗ ██╗  ██╗   
╚██╗ ██╔╝ ██║ ██╔╝   
 ╚████╔╝  █████╔╝    
  ╚██╔╝   ██╔═██╗    
   ██║    ██║  ██╗██╗
   ╚═╝    ╚═╝  ╚═╝╚═╝`}
          </pre>
          <div className="text-neutral-300 pt-1 text-xs">Staff Engineer &middot; Yathin K</div>
        </div>
      )
    } else if (trimmed === 'help') {
      result = (
        <div className="pl-4 pt-1 text-xs text-neutral-400 space-y-1">
          <div>Commands: <span className="text-[#e6c79c]">whoami</span>, <span className="text-[#e6c79c]">stack</span>, <span className="text-[#e6c79c]">metrics</span>, <span className="text-[#e6c79c]">neofetch</span>, <span className="text-[#e6c79c]">clear</span>, <span className="text-[#e6c79c]">reset</span></div>
        </div>
      )
    } else {
      result = (
        <div className="pl-4 pt-1 text-xs text-neutral-400">
          Command run: <span className="text-white font-mono">{trimmed}</span> &bull; <a href="#terminal" className="text-[#e6c79c] underline">View full terminal below</a>
        </div>
      )
    }

    setHeroHistory((prev) => [...prev, { cmd: cmdText, content: result }])

    setTimeout(() => {
      if (heroTerminalBodyRef.current) {
        heroTerminalBodyRef.current.scrollTop = heroTerminalBodyRef.current.scrollHeight
      }
    }, 50)
  }

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

              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent('open-terminal-modal'))}
                className="group flex items-center gap-2 bg-[#e6c79c] text-black font-semibold font-mono text-xs uppercase tracking-wider px-5 py-3 rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(230,199,156,0.35)]"
              >
                <TerminalIcon className="w-4 h-4" />
                <span>See in Terminal</span>
                <Maximize2 className="w-3.5 h-3.5 ml-0.5 opacity-70 group-hover:opacity-100" />
              </button>

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
            {/* Interactive Terminal in Hero */}
            <div
              className="w-full rounded-2xl bg-[#090a0f]/95 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-xl transition-transform duration-200 ease-out"
              style={{
                transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              }}
            >
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/[0.02] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <button
                    type="button"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-terminal-modal'))}
                    className="w-3 h-3 rounded-full bg-green-500/80 hover:opacity-100 transition-opacity"
                    title="Open Terminal"
                  />
                </div>
                <div className="font-mono text-xs text-neutral-400 flex items-center gap-1.5">
                  <TerminalIcon className="w-3 h-3 text-[#e6c79c]" />
                  <span>~/yathin — live zsh</span>
                </div>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent('open-terminal-modal'))}
                  className="text-[10px] font-mono text-[#e6c79c] hover:text-white flex items-center gap-1 transition-colors px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 border border-white/10"
                  title="Open terminal"
                >
                  <Maximize2 className="w-2.5 h-2.5" />
                  <span>Expand</span>
                </button>
              </div>

              {/* Quick Command Pills for Hero */}
              <div className="px-4 py-2 border-b border-white/5 bg-white/[0.01] flex items-center gap-1.5 overflow-x-auto select-none">
                <span className="text-[10px] font-mono text-neutral-600 mr-1 hidden sm:inline">run:</span>
                {['whoami', 'stack', 'metrics', 'neofetch', 'clear'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => handleHeroCommand(cmd)}
                    className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 hover:text-white hover:border-[#e6c79c]/50 hover:bg-white/[0.08] transition-all"
                  >
                    ${cmd}
                  </button>
                ))}
              </div>

              {/* Terminal Content Body */}
              <div
                ref={heroTerminalBodyRef}
                className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed space-y-3.5 text-neutral-300 max-h-[380px] overflow-y-auto"
              >
                {heroHistory.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-2">
                      <span className="text-[#34d399]">❯</span>
                      <span className="text-white font-medium">{item.cmd}</span>
                    </div>
                    {item.content}
                  </div>
                ))}

                {/* Live Input Prompt */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    if (heroInput.trim()) {
                      handleHeroCommand(heroInput)
                      setHeroInput('')
                    }
                  }}
                  className="flex items-center gap-2 pt-1 text-xs"
                >
                  <span className="text-[#34d399]">❯</span>
                  <input
                    type="text"
                    value={heroInput}
                    onChange={(e) => setHeroInput(e.target.value)}
                    placeholder="type 'help', 'neofetch' or click quick pills above..."
                    className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs focus:ring-0 placeholder:text-neutral-600"
                    autoComplete="off"
                    spellCheck="false"
                  />
                  <button
                    type="submit"
                    className="text-neutral-500 hover:text-white transition-colors"
                    title="Execute"
                  >
                    <CornerDownLeft className="w-3.5 h-3.5" />
                  </button>
                </form>
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
