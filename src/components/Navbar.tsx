import React, { useState, useEffect } from 'react'
import { Terminal, Menu, X, ArrowUpRight } from 'lucide-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const ist = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      })
      setTime(ist)
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)

    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      clearInterval(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Experience', href: '#experience' },
    { label: 'Architecture', href: '#work' },
    { label: 'Terminal', href: '#terminal' },
    { label: 'Stack', href: '#stack' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050507]/80 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-lg font-bold tracking-tight text-white hover:text-[#e6c79c] transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#e6c79c]/50 transition-colors">
            <span className="text-[#e6c79c] text-sm">&gt;_</span>
          </div>
          <span>
            YK<span className="text-[#e6c79c]">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white px-3 py-1.5 rounded-full transition-colors hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: Clock + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 bg-white/[0.02] border border-white/5 px-3 py-1.5 rounded-full">
            <span className="pulse-dot" />
            <span>{time || '12:00:00'} IST</span>
          </div>

          <a
            href="#contact"
            className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider bg-[#e6c79c] text-black font-semibold px-4 py-2 rounded-full hover:bg-white hover:shadow-[0_0_20px_rgba(230,199,156,0.35)] transition-all"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-mono text-xs text-neutral-400">
            <span className="pulse-dot" />
            <span>{time}</span>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-neutral-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090a0f]/95 border-b border-white/10 px-6 py-5 backdrop-blur-xl space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-mono text-sm text-neutral-300 hover:text-[#e6c79c] py-1.5 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center font-mono text-xs uppercase bg-[#e6c79c] text-black font-semibold py-2.5 rounded-lg mt-3"
          >
            Let&apos;s Talk ↗
          </a>
        </div>
      )}
    </header>
  )
}
