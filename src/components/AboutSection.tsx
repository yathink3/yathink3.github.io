import React from 'react'
import { Sparkles, Terminal, Code2, Users, Rocket, Gauge, BadgeCheck } from 'lucide-react'

export function AboutSection() {
  const stats = [
    {
      value: '6+',
      label: 'Years Experience',
      sub: 'Enterprise Web & Architecture',
      icon: Gauge,
    },
    {
      value: '50%',
      label: 'Build Time Slashed',
      sub: 'Through custom Vite integration',
      icon: Rocket,
    },
    {
      value: '40%',
      label: 'Maintainability Gain',
      sub: 'Legacy systems upgraded to Next.js',
      icon: Code2,
    },
    {
      value: '10+',
      label: 'Engineers Mentored',
      sub: 'Improving sprint velocity by 15%',
      icon: Users,
    },
  ]

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#e6c79c] mb-6">
          <span className="w-8 h-[1px] bg-[#e6c79c]" />
          <span>01 — About</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-16">
          Architecting systems, tooling, &amp; <em className="serif text-[#e6c79c] font-normal">intelligence.</em>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            {/* Image Wrapper (Badge is anchored directly to the image) */}
            <div className="relative w-72 sm:w-80">
              {/* Photo Frame */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 group shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-neutral-900">
                {/* Photo */}
                <img
                  src="/yathin.png"
                  alt="Yathin K — Staff Engineer"
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 contrast-105"
                />

                {/* Laser Scanline */}
                <div className="portrait-scanline" />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Status Chips */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 border border-white/10 backdrop-blur-md text-[11px] font-mono text-white">
                    <span className="pulse-dot" />
                    <span>X0PA AI</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-black/70 border border-white/10 backdrop-blur-md text-[11px] font-mono text-neutral-400">
                    📍 Singapore / IN
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="font-mono text-xs text-white font-medium">Yathin K</div>
                  <div className="text-[11px] font-mono text-[#e6c79c]">Staff Engineer &amp; Frontend Architect</div>
                </div>
              </div>

              {/* Rotating circular badge with Seal Icon in the middle (partially inside the image, partially outside) */}
              <div className="absolute bottom-10 -right-8 w-36 h-36 flex items-center justify-center pointer-events-none z-20">
                <svg className="w-full h-full badge-rotate" viewBox="0 0 200 200">
                  <defs>
                    <path
                      id="badgeCircle"
                      d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                    />
                  </defs>
                  <text className="font-mono text-[11px] fill-[#e6c79c] uppercase tracking-[0.2em] font-semibold">
                    <textPath href="#badgeCircle">
                      • YATHIN K • STAFF ENGINEER • FRONTEND ARCHITECT
                    </textPath>
                  </text>
                </svg>

                {/* Seal Icon in the middle */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-black/50 border border-[#e6c79c]/30 backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_rgba(230,199,156,0.2)]">
                    <BadgeCheck className="w-6 h-6 text-[#e6c79c] drop-shadow-[0_0_8px_rgba(230,199,156,0.5)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative & Details */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-normal">
              I am a <strong className="text-white font-semibold">Staff Engineer and Front-End Architect</strong> with over 6+ years of specialized experience designing, optimizing, and scaling enterprise web applications, AI automation tools, and high-performance developer tooling.
            </p>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              My engineering philosophy focuses on deep expertise across the modern JavaScript/TypeScript ecosystem (<strong className="text-neutral-200">React, Next.js, Vite, Tailwind CSS</strong>) with a core passion for <strong className="text-[#e6c79c]">engineering build systems, custom npm libraries, and architectural resilience</strong> over high-level UI development.
            </p>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              I have a proven track record leading critical infrastructure migrations (including <strong className="text-neutral-200">Vite 8 and Tailwind CSS v4</strong>), authoring internal tooling and open-source plugins, and driving technical vision across cross-functional engineering teams. Today, I am also actively expanding systems engineering capabilities via <strong className="text-[#e6c79c]">Rust and Bun</strong> for next-generation web tooling.
            </p>

            {/* Terminal snippet box */}
            <div className="rounded-xl bg-[#090a0f] border border-white/10 p-4 font-mono text-xs text-neutral-400 space-y-2 mt-6">
              <div className="flex items-center gap-2 text-neutral-500 text-[11px] pb-1 border-b border-white/5">
                <Terminal className="w-3.5 h-3.5 text-[#e6c79c]" />
                <span>yathin@host: ~/core-philosophy</span>
              </div>
              <p className="text-neutral-300">
                <span className="text-emerald-400">$</span> cat vision.md
              </p>
              <p className="text-neutral-400 italic">
                &ldquo;Engineering build systems, custom npm libraries, and architecture over superficial UI. Speed, determinism, and developer delight come from foundational foundations.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map((s, idx) => {
            const Icon = s.icon
            return (
              <div
                key={idx}
                className="spot-card p-6 rounded-2xl flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-neutral-500 mb-4">
                  <Icon className="w-5 h-5 text-[#e6c79c]" />
                  <span className="font-mono text-xs text-neutral-600">0{idx + 1}</span>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white mb-1">
                    {s.value}
                  </div>
                  <div className="font-mono text-xs text-neutral-300 font-semibold uppercase tracking-wider">
                    {s.label}
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-1 leading-snug">
                    {s.sub}
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

