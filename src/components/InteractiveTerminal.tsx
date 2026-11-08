import React, { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Terminal as TerminalIcon, Sparkles, Copy, Check, CornerDownLeft, Trash2, Maximize2, X } from 'lucide-react'

type CommandOutput = {
  command: string
  output: React.ReactNode
}

export function InteractiveTerminal() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [copied, setCopied] = useState(false)
  const [themeMode, setThemeMode] = useState<'amber' | 'emerald' | 'cyan'>('amber')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const terminalBodyRef = useRef<HTMLDivElement | null>(null)
  const modalBodyRef = useRef<HTMLDivElement | null>(null)
  const modalRef = useRef<HTMLDivElement | null>(null)
  const isInitialMount = useRef(true)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const modalInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    setMounted(true)
    const handleOpen = () => setIsModalOpen(true)
    window.addEventListener('open-terminal-modal', handleOpen)
    return () => window.removeEventListener('open-terminal-modal', handleOpen)
  }, [])

  useEffect(() => {
    if (!isModalOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false)
      }
    }
    document.body.style.overflow = 'hidden'
    document.body.classList.add('terminal-modal-active')
    window.addEventListener('keydown', handleKeyDown)
    const timer = setTimeout(() => {
      modalInputRef.current?.focus()
    }, 100)
    return () => {
      document.body.style.overflow = 'auto'
      document.body.classList.remove('terminal-modal-active')
      window.removeEventListener('keydown', handleKeyDown)
      clearTimeout(timer)
    }
  }, [isModalOpen])

  // Entire terminal modal floating & 3D tilt movement based on mouse position
  useEffect(() => {
    if (!isModalOpen) return

    let rafId: number | null = null
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const handleMouseMove = (e: MouseEvent) => {
      // Effect only happens when moving outside the terminal in the backdrop
      const isInsideTerminal = modalRef.current?.contains(e.target as Node)
      if (isInsideTerminal) {
        targetX = 0
        targetY = 0
        return
      }

      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      targetX = (e.clientX - cx) / cx
      targetY = (e.clientY - cy) / cy
    }

    const handleMouseLeave = () => {
      targetX = 0
      targetY = 0
    }

    const loop = () => {
      // Fluid physics interpolation (lerp)
      currentX += (targetX - currentX) * 0.08
      currentY += (targetY - currentY) * 0.08

      const transX = currentX * 28 // moves up to 28px horizontally
      const transY = currentY * 20 // moves up to 20px vertically
      const rotX = -currentY * 5.0 // tilts up to 5deg along X
      const rotY = currentX * 6.0 // tilts up to 6deg along Y

      if (modalRef.current) {
        modalRef.current.style.transform = `perspective(1200px) translate3d(${transX.toFixed(2)}px, ${transY.toFixed(2)}px, 0px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`
      }

      rafId = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    rafId = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [isModalOpen])

  const initialOutputs: CommandOutput[] = [
    {
      command: 'neofetch',
      output: (
        <div className="space-y-1 font-mono text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            <pre className="sm:col-span-4 text-[#e6c79c] leading-tight select-none">
{`██╗   ██╗ ██╗  ██╗
╚██╗ ██╔╝ ██║ ██╔╝
 ╚████╔╝  █████╔╝
  ╚██╔╝   ██╔═██╗
   ██║    ██║  ██╗██╗
   ╚═╝    ╚═╝  ╚═╝╚═╝

  YK - STAFF ENGINEER`}
            </pre>
            <div className="sm:col-span-8 space-y-1 text-neutral-300">
              <div><span className="text-[#e6c79c] font-bold">yathin@antigravity-darwin</span></div>
              <div className="text-neutral-500">--------------------------</div>
              <div><span className="text-neutral-400">OS:</span> macOS Sequoia / Darwin 24 (arm64)</div>
              <div><span className="text-neutral-400">Host:</span> MacBook Pro M-Series</div>
              <div><span className="text-neutral-400">Kernel:</span> 24.1.0-release</div>
              <div><span className="text-neutral-400">Uptime:</span> 6+ Years Engineering Enterprise Systems</div>
              <div><span className="text-neutral-400">Shell:</span> zsh 5.9 (x86_64-apple-darwin24.0)</div>
              <div><span className="text-neutral-400">Primary Role:</span> Staff Engineer @ X0PA AI</div>
              <div><span className="text-neutral-400">Core Stack:</span> React 19, TypeScript, Next.js, Vite 8, Tailwind v4</div>
              <div><span className="text-neutral-400">Expanding:</span> Rust, Bun, Autonomous AI Agents (Claude Code, n8n)</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      command: 'help',
      output: (
        <div className="space-y-1 text-xs font-mono">
          <p className="text-neutral-400">Available commands in Yathin&apos;s developer shell:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-neutral-300">
            <div><span className="text-[#e6c79c] font-semibold">whoami</span> — Identity &amp; current focus</div>
            <div><span className="text-[#e6c79c] font-semibold">summary</span> — Deep architectural overview</div>
            <div><span className="text-[#e6c79c] font-semibold">exp</span> — Career trajectory &amp; roles</div>
            <div><span className="text-[#e6c79c] font-semibold">achievements</span> — Key 50% &amp; 40% performance wins</div>
            <div><span className="text-[#e6c79c] font-semibold">skills</span> — Categorized tech competencies</div>
            <div><span className="text-[#e6c79c] font-semibold">projects</span> — Open-source &amp; developer tooling</div>
            <div><span className="text-[#e6c79c] font-semibold">contact</span> — Email, phone numbers &amp; profiles</div>
            <div><span className="text-[#e6c79c] font-semibold">cat resume.txt</span> — Complete plain-text resume</div>
            <div><span className="text-[#e6c79c] font-semibold">neofetch</span> — Print system specifications</div>
            <div><span className="text-[#e6c79c] font-semibold">clear</span> — Wipe terminal screen</div>
          </div>
        </div>
      ),
    },
  ]

  const [outputs, setOutputs] = useState<CommandOutput[]>(initialOutputs)

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase()
    if (!trimmed) return

    setHistory((prev) => [...prev, cmdText])
    setHistoryIndex(-1)

    let out: React.ReactNode = null

    switch (trimmed) {
      case 'help':
        out = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-neutral-400">Commands:</p>
            <p className="text-neutral-300">
              <span className="text-[#e6c79c]">whoami</span>, <span className="text-[#e6c79c]">summary</span>, <span className="text-[#e6c79c]">exp</span>, <span className="text-[#e6c79c]">achievements</span>, <span className="text-[#e6c79c]">skills</span>, <span className="text-[#e6c79c]">projects</span>, <span className="text-[#e6c79c]">contact</span>, <span className="text-[#e6c79c]">neofetch</span>, <span className="text-[#e6c79c]">cat resume.txt</span>, <span className="text-[#e6c79c]">clear</span>
            </p>
          </div>
        )
        break

      case 'whoami':
        out = (
          <div className="space-y-1 text-xs font-mono text-neutral-300">
            <p><span className="text-[#e6c79c] font-bold">Yathin K</span> — Staff Engineer @ X0PA AI | Ex-Recro</p>
            <p className="text-neutral-400">React &amp; TypeScript Expert | Next.js | TailwindCSS | Node.js &amp; Bun | Building Scalable Web Platforms | AI &amp; Automation Tools (n8n, Claude Code) | Exploring Rust</p>
            <p className="text-neutral-500">📍 Singapore &amp; Kasaragod, India</p>
          </div>
        )
        break

      case 'summary':
        out = (
          <div className="space-y-2 text-xs font-mono text-neutral-300">
            <p className="text-[#e6c79c] font-semibold">// PROFESSIONAL SUMMARY</p>
            <p className="leading-relaxed">
              Highly accomplished Staff Engineer and Front-End Architect with over 6+ years of specialized experience designing, optimizing, and scaling enterprise web applications, AI automation tools, and high-performance developer tooling. Deep expertise across the modern JavaScript/TypeScript ecosystem (React, Next.js, Vite, Tailwind CSS) with a core passion for engineering build systems, custom npm libraries, and architecture over high-level UI development.
            </p>
            <p className="text-neutral-400">
              Proven track record leading critical infrastructure migrations (including Vite 8 and Tailwind CSS v4), building open-source plugins, and driving technical vision across cross-functional teams. Actively expanding systems engineering capabilities via Rust and Bun for next-generation web tooling.
            </p>
          </div>
        )
        break

      case 'exp':
      case 'experience':
        out = (
          <div className="space-y-3 text-xs font-mono text-neutral-300">
            <div>
              <div className="text-[#e6c79c] font-bold">01. Staff Engineer @ X0PA AI</div>
              <div className="text-neutral-500">04/2025 — Present · Singapore</div>
              <div className="text-neutral-400">Led end-to-end system architecture &amp; roadmap for React/Next.js platforms; deployed AI developer agents &amp; automated CI/CD workflows.</div>
            </div>
            <div>
              <div className="text-[#e6c79c] font-bold">02. Senior Software Engineer II @ X0PA AI</div>
              <div className="text-neutral-500">02/2024 — Present · Singapore</div>
              <div className="text-neutral-400">Enterprise architecture; 50% build time reduction via Vite; internal UI libraries; mentored 10+ junior developers.</div>
            </div>
            <div>
              <div className="text-[#e6c79c] font-bold">03. Senior Software Engineer @ X0PA AI</div>
              <div className="text-neutral-500">01/2023 — 01/2024 · Kasaragod, India</div>
              <div className="text-neutral-400">Modern Next.js JAMstack SSR/CSR, Ant Design design system, Astro.js static websites, Framer Motion page transitions.</div>
            </div>
            <div>
              <div className="text-[#e6c79c] font-bold">04. Software Engineer II @ Recro</div>
              <div className="text-neutral-500">12/2021 — 12/2022 · Bangalore, India</div>
              <div className="text-neutral-400">CRA to Vite migration (3.5x faster), IBM Carbon Components, custom utility hooks library, Redux Toolkit.</div>
            </div>
            <div>
              <div className="text-[#e6c79c] font-bold">05. Software Engineer @ Valor PayTech</div>
              <div className="text-neutral-500">11/2020 — 12/2021 · Chennai, India</div>
              <div className="text-neutral-400">React JS SPA, React-Draggable drag &amp; drop UI, Flux/Redux action creators, Git workflows.</div>
            </div>
          </div>
        )
        break

      case 'achievements':
        out = (
          <div className="space-y-2 text-xs font-mono text-neutral-300">
            <div className="text-[#e6c79c] font-semibold">// KEY PRODUCTION ACHIEVEMENTS</div>
            <div className="p-2 rounded bg-white/5 border border-white/5">
              <span className="text-emerald-400 font-bold">[1] Performance Optimization:</span> Increased system performance by 50% through Vite integration, slashing cold build and HMR times.
            </div>
            <div className="p-2 rounded bg-white/5 border border-white/5">
              <span className="text-cyan-400 font-bold">[2] AI Integration Success:</span> Implemented AI automation tools (n8n, Claude Code) improving process efficiency by 30% and eliminating manual workflows.
            </div>
            <div className="p-2 rounded bg-white/5 border border-white/5">
              <span className="text-[#e6c79c] font-bold">[3] Legacy System Upgrade:</span> Converted legacy architectures to modern frameworks, lifting codebase maintainability and performance by 40%.
            </div>
            <div className="p-2 rounded bg-white/5 border border-white/5">
              <span className="text-amber-300 font-bold">[4] Mentorship Excellence:</span> Mentored 10 junior developers, improving project delivery timelines by 15%.
            </div>
          </div>
        )
        break

      case 'skills':
      case 'stack':
        out = (
          <div className="space-y-2 text-xs font-mono text-neutral-300">
            <div><span className="text-[#e6c79c] font-bold">Frontend:</span> React 19, TypeScript, Next.js, TanStack Start &amp; Router, Astro.js</div>
            <div><span className="text-emerald-400 font-bold">Build &amp; Tooling:</span> Vite 8, Bun, Node.js, Webpack, Custom NPM Libraries, Rollup</div>
            <div><span className="text-cyan-400 font-bold">Styling &amp; UI:</span> Tailwind CSS v4, IBM Carbon Components, Ant Design, Framer Motion</div>
            <div><span className="text-purple-400 font-bold">AI &amp; Automation:</span> Claude Code, n8n, AI Agent Workflows, CI/CD Pipeline Automation</div>
            <div><span className="text-amber-400 font-bold">Systems &amp; Exploration:</span> Rust, Systems Programming, Zsh, Git</div>
          </div>
        )
        break

      case 'projects':
        out = (
          <div className="space-y-2 text-xs font-mono text-neutral-300">
            <div><span className="text-[#e6c79c] font-bold">1. bun-as-vite</span> — Compiler bridge benchmarking Bun against Vite for sub-second builds.</div>
            <div><span className="text-[#e6c79c] font-bold">2. react-smart-pdf-viewer</span> — Virtualized React enterprise PDF viewing library.</div>
            <div><span className="text-[#e6c79c] font-bold">3. vite-proxy-redirects-plugin</span> — Production Vite plugin managing microfrontend proxy routes.</div>
            <div><span className="text-[#e6c79c] font-bold">4. carbon-react-color-theme</span> — IBM Carbon Design System tokens for React &amp; Zed editor.</div>
            <div><span className="text-[#e6c79c] font-bold">5. yk-editor</span> — Custom developer code editing suite with AI completions.</div>
          </div>
        )
        break

      case 'contact':
        out = (
          <div className="space-y-1.5 text-xs font-mono text-neutral-300">
            <div><span className="text-neutral-500">Email:</span> <a href="mailto:yathink3@gmail.com" className="text-[#e6c79c] underline">yathink3@gmail.com</a></div>
            <div><span className="text-neutral-500">Phone (India):</span> <span className="text-white">+91 8281166822</span></div>
            <div><span className="text-neutral-500">Phone (Singapore):</span> <span className="text-white">+65 84394761</span></div>
            <div><span className="text-neutral-500">LinkedIn:</span> <a href="https://linkedin.com/in/yathink3/" target="_blank" rel="noreferrer" className="text-[#0077b5] underline">linkedin.com/in/yathink3</a></div>
            <div><span className="text-neutral-500">GitHub:</span> <a href="https://github.com/yathink3" target="_blank" rel="noreferrer" className="text-white underline">github.com/yathink3</a></div>
          </div>
        )
        break

      case 'cat resume.txt':
      case 'cat resume':
      case 'resume':
        out = (
          <pre className="text-neutral-400 text-[11px] font-mono leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/5 overflow-x-auto">
{`======================================================================
YATHIN K — STAFF ENGINEER & FRONTEND ARCHITECT
Singapore & Kasaragod, India | yathink3@gmail.com | +91 8281166822
LinkedIn: https://linkedin.com/in/yathink3/ | GitHub: https://github.com/yathink3
======================================================================

SUMMARY:
Highly accomplished Staff Engineer and Front-End Architect with over 6+
years of specialized experience designing, optimizing, and scaling enterprise
web applications, AI automation tools, and high-performance developer tooling.
Deep expertise across React, Next.js, Vite, and Tailwind CSS. Proven track
record leading Vite 8 and Tailwind CSS v4 migrations and authoring custom npm
libraries. Actively expanding systems engineering capabilities via Rust and Bun.

KEY ACHIEVEMENTS:
• Performance: +50% system performance through Vite integration
• AI Automation: +30% process efficiency through automated AI developer tools
• Legacy Upgrade: +40% codebase maintainability via Next.js modern architecture
• Mentorship: Mentored 10 junior developers, improving delivery speed by 15%

EXPERIENCE:
• Staff Engineer | X0PA AI, Singapore (04/2025 – Present)
• Senior Software Engineer II | X0PA AI, Singapore (02/2024 – Present)
• Senior Software Engineer | X0PA AI, Kasaragod, India (01/2023 – 01/2024)
• Software Engineer II | Recro, Bangalore, India (12/2021 – 12/2022)
• Software Engineer | Valor PayTech, Chennai, India (11/2020 – 12/2021)

EDUCATION:
• Bachelor of Engineering, Information Science Engineering
  Vivekananda College of Engineering & Technology, Puttur (2015 – 2019)`}
          </pre>
        )
        break

      case 'neofetch':
        out = initialOutputs[0].output
        break

      case 'clear':
        setOutputs([])
        return

      default:
        out = (
          <div className="text-xs font-mono text-red-400">
            command not found: {trimmed}. Type <span className="text-[#e6c79c] underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> to view all commands.
          </div>
        )
        break
    }

    setOutputs((prev) => [...prev, { command: cmdText, output: out }])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleCommand(input)
    setInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length > 0) {
        const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(nextIndex)
        setInput(history[nextIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1
        if (nextIndex < history.length) {
          setHistoryIndex(nextIndex)
          setInput(history[nextIndex])
        } else {
          setHistoryIndex(-1)
          setInput('')
        }
      }
    }
  }

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTo({
        top: terminalBodyRef.current.scrollHeight,
        behavior: 'smooth',
      })
    }
    if (modalBodyRef.current) {
      modalBodyRef.current.scrollTo({
        top: modalBodyRef.current.scrollHeight,
        behavior: 'smooth',
      })
    }
  }, [outputs])

  const copyPlainResume = () => {
    const text = `YATHIN K — STAFF ENGINEER & FRONTEND ARCHITECT
Email: yathink3@gmail.com | Phone: +918281166822, +6584394761
LinkedIn: https://linkedin.com/in/yathink3/ | GitHub: https://github.com/yathink3

SUMMARY:
Highly accomplished Staff Engineer and Front-End Architect with over 6+ years of specialized experience designing, optimizing, and scaling enterprise web applications, AI automation tools, and high-performance developer tooling. Deep expertise across React, Next.js, Vite, and Tailwind CSS. Proven track record leading critical infrastructure migrations (including Vite 8 and Tailwind CSS v4). Actively expanding systems engineering capabilities via Rust and Bun.`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const quickCommands = ['whoami', 'achievements', 'exp', 'skills', 'projects', 'cat resume.txt', 'contact', 'clear']

  const themeColors = {
    amber: 'text-[#e6c79c]',
    emerald: 'text-[#34d399]',
    cyan: 'text-[#38bdf8]',
  }

  if (!mounted || !isModalOpen) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center pt-20 pb-4 px-3 sm:px-6 md:px-8 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsModalOpen(false)
      }}
    >
          <div
            ref={modalRef}
            className="w-full max-w-5xl h-[84vh] flex flex-col rounded-2xl sm:rounded-3xl bg-[#090a0f]/95 border border-white/20 shadow-[0_25px_100px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden font-mono relative will-change-transform"
            style={{
              transformStyle: 'preserve-3d',
              transition: 'box-shadow 0.25s ease',
            }}
            onClick={() => modalInputRef.current?.focus()}
          >
            {/* Modal Titlebar */}
            <div className="flex items-center justify-between px-5 py-4 bg-white/[0.04] border-b border-white/10 select-none">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] hover:opacity-80 transition-opacity"
                  title="Close (Esc)"
                />
                <button
                  type="button"
                  onClick={() => setOutputs([])}
                  className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] hover:opacity-80 transition-opacity"
                  title="Clear outputs"
                />
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-3.5 h-3.5 rounded-full bg-[#27c93f] hover:opacity-80 transition-opacity"
                  title="Close"
                />
              </div>

              <div className="font-mono text-xs text-neutral-300 flex items-center gap-2">
                <TerminalIcon className={`w-3.5 h-3.5 ${themeColors[themeMode]}`} />
                <span className="font-semibold text-white">yathin@antigravity: ~/portfolio (zsh)</span>
              </div>

              <div className="flex items-center gap-3">
                {/* Phosphor Theme Switcher */}
                <div className="flex items-center gap-1.5 text-[11px] pr-2 border-r border-white/10">
                  <button
                    onClick={() => setThemeMode('amber')}
                    className={`w-3.5 h-3.5 rounded-full bg-[#e6c79c] transition-opacity ${
                      themeMode === 'amber' ? 'ring-2 ring-white/50' : 'opacity-40 hover:opacity-80'
                    }`}
                    title="Amber theme"
                  />
                  <button
                    onClick={() => setThemeMode('emerald')}
                    className={`w-3.5 h-3.5 rounded-full bg-[#34d399] transition-opacity ${
                      themeMode === 'emerald' ? 'ring-2 ring-white/50' : 'opacity-40 hover:opacity-80'
                    }`}
                    title="Green phosphor theme"
                  />
                  <button
                    onClick={() => setThemeMode('cyan')}
                    className={`w-3.5 h-3.5 rounded-full bg-[#38bdf8] transition-opacity ${
                      themeMode === 'cyan' ? 'ring-2 ring-white/50' : 'opacity-40 hover:opacity-80'
                    }`}
                    title="Matrix cyan theme"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex items-center gap-1 font-mono text-xs text-neutral-400 hover:text-white px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  title="Close (Esc)"
                >
                  <X className="w-4 h-4" />
                  <span className="text-[11px] hidden sm:inline">ESC</span>
                </button>
              </div>
            </div>

            {/* Modal Quick Command Pills */}
            <div className="px-5 py-2.5 bg-white/[0.02] border-b border-white/5 flex flex-wrap items-center gap-2 select-none">
              <span className="text-[11px] text-neutral-500 mr-1">Quick run:</span>
              {quickCommands.map((cmd) => (
                <button
                  key={cmd}
                  type="button"
                  onClick={() => handleCommand(cmd)}
                  className="font-mono text-xs px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 hover:text-white hover:border-[#e6c79c]/60 hover:bg-white/[0.08] transition-all"
                >
                  $ {cmd}
                </button>
              ))}
            </div>

            {/* Modal Terminal Body */}
            <div
              ref={modalBodyRef}
              className="flex-1 p-6 overflow-y-auto space-y-4"
            >
              <div className="text-xs text-neutral-500 pb-2 border-b border-white/5 flex items-center justify-between">
                <span>Antigravity Interactive ZSH [Version 5.9.0-yk-darwin]</span>
                <span>Type &apos;help&apos; for instruction list</span>
              </div>

              {outputs.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <span className={themeColors[themeMode]}>yathin@sg-prod:~$</span>
                    <span className="text-white font-medium">{item.command}</span>
                  </div>
                  <div className="pl-4 border-l border-white/10">{item.output}</div>
                </div>
              ))}
            </div>

            {/* Modal Live Input Prompt */}
            <div className="p-4 bg-white/[0.02] border-t border-white/10">
              <form onSubmit={handleSubmit} className="flex items-center gap-2 text-xs">
                <span className={themeColors[themeMode]}>yathin@sg-prod:~$</span>
                <input
                  ref={modalInputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="type a command... (e.g. whoami, achievements, exp)"
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
        </div>,
        document.body
      )
    }
