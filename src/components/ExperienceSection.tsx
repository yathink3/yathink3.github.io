import React, { useState } from 'react'
import { Briefcase, Calendar, MapPin, ChevronRight, GraduationCap, Building2 } from 'lucide-react'

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<number>(0)

  const experiences = [
    {
      role: 'Staff Engineer',
      company: 'X0PA AI',
      period: '04/2025 — Present',
      location: 'Singapore',
      type: 'Full-time · Platform Architecture',
      highlights: [
        'Led end-to-end system architecture and roadmap planning for large-scale React/Next.js enterprise applications.',
        'Aligned cross-functional teams on technical vision, delivery milestones, and scalable architectural principles.',
        'Built autonomous AI agents to automate repetitive engineering workflows, streamlining delivery and accelerating team productivity.',
        'Integrated AI-driven developer tooling to enhance product reliability, real-time performance monitoring, and CI/CD automation.',
        'Driving architectural decisions across frontend platforms, establishing unified reusable design systems and performance standards across business units.',
      ],
      skills: ['React 19', 'Next.js', 'AI Agents', 'Claude Code', 'System Architecture', 'CI/CD Automation', 'Bun & Rust'],
    },
    {
      role: 'Senior Software Engineer II',
      company: 'X0PA AI',
      period: '02/2024 — Present',
      location: 'Singapore',
      type: 'Full-time · Engineering Leadership',
      highlights: [
        'Spearheaded enterprise-grade applications using Next.js and React, enforcing modular scalability across distributed systems.',
        'Refactored legacy codebases into optimized, reusable React functional components with strict TypeScript contracts.',
        'Championed performance engineering by migrating existing builds to Vite, reducing build durations by over 50%.',
        'Implemented smooth transitions and high-performance micro-interactions using Framer Motion and Astro.js.',
        'Collaborated with design teams utilizing Ant Design and Carbon Components to ensure accessibility and consistent UX.',
        'Authored internal UI utility libraries, custom hooks, and shared tooling to streamline velocity across multiple squads.',
        'Mentored 10+ engineers and led technical code reviews, enforcing best-in-class architectural practices.',
      ],
      skills: ['TypeScript', 'Vite 8', 'Framer Motion', 'Astro.js', 'IBM Carbon', 'Ant Design', 'Mentorship'],
    },
    {
      role: 'Senior Software Engineer',
      company: 'X0PA AI',
      period: '01/2023 — 01/2024',
      location: 'Kasaragod, India',
      type: 'Full-time · Frontend Platform',
      highlights: [
        'Developed robust, maintainable enterprise React applications leveraging modern component architectures.',
        'Engineered high-performance Next.js JAMstack applications combining SSR and CSR for optimized page loads and SEO.',
        'Designed sleek, professional enterprise interfaces using Ant Design, providing an intuitive and seamless user journey.',
        'Built animated page flows in Next.js with Framer Motion, enhancing user engagement and visual polish.',
        'Delivered static web properties using Astro.js to guarantee near-instant first paint times and zero unused JS.',
      ],
      skills: ['React', 'Next.js', 'Astro.js', 'Ant Design', 'JAMstack', 'SSR/CSR'],
    },
    {
      role: 'Software Engineer II',
      company: 'Recro',
      period: '12/2021 — 12/2022',
      location: 'Bangalore, India',
      type: 'Full-time · Frontend Consulting',
      highlights: [
        'Built stable and maintainable component-driven web applications using React.',
        'Converted legacy Create React App (CRA) tooling to Vite, accelerating application load and build speeds by 3.5x.',
        'Engineered interfaces adhering strictly to IBM Carbon Design System using Carbon Components React.',
        'Created shared utility libraries and custom hooks to eliminate boilerplate and enhance runtime performance.',
        'Standardized state management across complex features using Redux Toolkit.',
      ],
      skills: ['React', 'Vite', 'Redux Toolkit', 'IBM Carbon Components', 'Build Speedup (3.5x)'],
    },
    {
      role: 'Software Engineer',
      company: 'Valor PayTech',
      period: '11/2020 — 12/2021',
      location: 'Chennai, India',
      type: 'Full-time · Fintech UI',
      highlights: [
        'Developed interactive user interfaces using React JS and Flux architecture for complex Single Page Applications.',
        'Implemented client-side SPA routing using React Router with guarded transitions.',
        'Built drag-and-drop interactive dashboards utilizing React-Draggable for fintech analytics.',
        'Collaborated closely with backend engineers to integrate RESTful endpoints with Redux state containers.',
        'Authored action creators, asynchronous dispatch flows, and managed Git versioning workflows.',
      ],
      skills: ['React JS', 'React-Draggable', 'Flux / Redux', 'SPA Architecture', 'Fintech'],
    },
  ]

  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#e6c79c] mb-6">
          <span className="w-8 h-[1px] bg-[#e6c79c]" />
          <span>03 — Experience</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Where I&apos;ve <em className="serif text-[#e6c79c] font-normal">architected.</em>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2">
              6+ years scaling platforms from early fintech SPAs to enterprise AI platforms.
            </p>
          </div>
          <div className="font-mono text-xs text-neutral-500">
            <span>Career trajectory · 2020 — Present</span>
          </div>
        </div>

        {/* Timeline Desktop & Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Company Selector Navigation */}
          <div className="lg:col-span-4 space-y-2">
            {experiences.map((exp, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left p-4 rounded-2xl transition-all border flex items-center justify-between group ${
                  activeTab === idx
                    ? 'bg-white/[0.08] border-[#e6c79c]/50 text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
                    : 'bg-white/[0.02] border-white/5 text-neutral-400 hover:text-white hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-white group-hover:text-[#e6c79c] transition-colors">
                      {exp.company}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-neutral-400">
                      {exp.location}
                    </span>
                  </div>
                  <div className="text-xs text-neutral-400 mt-1">{exp.role}</div>
                  <div className="font-mono text-[11px] text-neutral-500 mt-0.5">
                    {exp.period}
                  </div>
                </div>
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    activeTab === idx ? 'text-[#e6c79c] translate-x-1' : 'text-neutral-600'
                  }`}
                />
              </button>
            ))}

            {/* Education Card */}
            <div className="mt-6 p-5 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="flex items-center gap-2 font-mono text-xs text-[#e6c79c] mb-2 uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>
              <h4 className="text-sm font-bold text-white">
                B.E. in Information Science Engineering
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                Vivekananda College of Engineering &amp; Technology, Puttur
              </p>
              <p className="font-mono text-[11px] text-neutral-500 mt-1">
                2015 — 2019 · Kasaragod / Karnataka
              </p>
            </div>
          </div>

          {/* Active Experience Detail Card */}
          <div className="lg:col-span-8">
            {experiences[activeTab] && (
              <div className="spot-card p-8 sm:p-10 rounded-3xl space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#e6c79c] block mb-1">
                      {experiences[activeTab].type}
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      {experiences[activeTab].role}{' '}
                      <span className="text-neutral-400 font-normal">
                        @ {experiences[activeTab].company}
                      </span>
                    </h3>
                  </div>

                  <div className="font-mono text-xs space-y-1 text-right sm:text-right">
                    <div className="text-neutral-300 flex items-center sm:justify-end gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{experiences[activeTab].period}</span>
                    </div>
                    <div className="text-neutral-500 flex items-center sm:justify-end gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-neutral-600" />
                      <span>{experiences[activeTab].location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-3.5">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                    Key Architectural Responsibilities &amp; Impact
                  </h4>
                  <ul className="space-y-3">
                    {experiences[activeTab].highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300 leading-relaxed">
                        <span className="font-mono text-[#e6c79c] text-xs mt-1 select-none">
                          &gt;
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="pt-6 border-t border-white/10">
                  <div className="font-mono text-xs text-neutral-400 mb-3 uppercase tracking-wider">
                    Core Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {experiences[activeTab].skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-neutral-300 hover:border-[#e6c79c]/40 hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

