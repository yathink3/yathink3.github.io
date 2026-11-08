import React, { useState } from 'react'
import { Mail, Phone, MapPin, ArrowUpRight, Copy, Check, Send, Terminal } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null)
  const [formName, setFormName] = useState('')
  const [formMsg, setFormMsg] = useState('')
  const [sent, setSent] = useState(false)

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text)
    if (type === 'email') {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedPhone(text)
      setTimeout(() => setCopiedPhone(null), 2000)
    }
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formMsg.trim()) return
    const subject = encodeURIComponent(`Engineering Architecture Inquiry from ${formName || 'Developer'}`)
    const body = encodeURIComponent(`${formMsg}\n\nFrom: ${formName}`)
    window.open(`mailto:yathink3@gmail.com?subject=${subject}&body=${body}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 sm:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#e6c79c] mb-6">
          <span className="w-8 h-[1px] bg-[#e6c79c]" />
          <span>07 — Let&apos;s Connect</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Pitch & Direct Links */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1] text-white">
                Have a platform to scale? <br />
                <em className="serif text-[#e6c79c] font-normal">Let&apos;s engineer it.</em>
              </h2>
              <p className="text-neutral-400 text-base sm:text-lg mt-6 max-w-xl leading-relaxed">
                Open to discussions around high-performance frontend architecture, AI automation agent integrations, and systems engineering leadership.
              </p>
            </div>

            {/* Giant Mail Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#e6c79c]/50 transition-all group shadow-xl">
              <span className="font-mono text-xs uppercase tracking-wider text-neutral-500 block mb-2">
                Primary Direct Channel
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <a
                  href="mailto:yathink3@gmail.com"
                  className="text-2xl sm:text-4xl font-mono font-bold text-white group-hover:text-[#e6c79c] transition-colors break-all"
                >
                  yathink3@gmail.com
                </a>
                <button
                  onClick={() => copyToClipboard('yathink3@gmail.com', 'email')}
                  className="flex items-center gap-2 font-mono text-xs text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-full border border-white/10 transition-all self-start sm:self-auto"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Phone Numbers & Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone SG */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-neutral-500 text-xs font-mono">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#e6c79c]" />
                    <span>Singapore</span>
                  </span>
                  <button
                    onClick={() => copyToClipboard('+6584394761', 'phone')}
                    className="hover:text-white"
                  >
                    {copiedPhone === '+6584394761' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
                <a
                  href="tel:+6584394761"
                  className="text-lg font-mono font-bold text-white hover:text-[#e6c79c] block transition-colors"
                >
                  +65 8439 4761
                </a>
              </div>

              {/* Phone India */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-neutral-500 text-xs font-mono">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#e6c79c]" />
                    <span>India</span>
                  </span>
                  <button
                    onClick={() => copyToClipboard('+918281166822', 'phone')}
                    className="hover:text-white"
                  >
                    {copiedPhone === '+918281166822' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
                <a
                  href="tel:+918281166822"
                  className="text-lg font-mono font-bold text-white hover:text-[#e6c79c] block transition-colors"
                >
                  +91 8281 166822
                </a>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://linkedin.com/in/yathink3/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 text-neutral-200 font-mono text-xs uppercase tracking-wider transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                <span>LinkedIn /yathink3</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
              </a>

              <a
                href="https://github.com/yathink3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 text-neutral-200 font-mono text-xs uppercase tracking-wider transition-all"
              >
                <GithubIcon className="w-4 h-4 text-white" />
                <span>GitHub /yathink3</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
              </a>
            </div>
          </div>

          {/* Right Column: Terminal Contact Form */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#090a0f] border border-white/10 p-6 sm:p-8 font-mono shadow-2xl">
              <div className="flex items-center gap-2 pb-4 mb-6 border-b border-white/10 text-xs text-neutral-400">
                <Terminal className="w-4 h-4 text-[#e6c79c]" />
                <span>transmission@yathin.dev — prompt</span>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-5">
                <div>
                  <label className="text-xs text-neutral-400 block mb-2 font-mono">
                    <span className="text-emerald-400">$</span> export SENDER_NAME=&quot;&quot;
                  </label>
                  <input
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Alex Mercer / Engineering Lead"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white text-xs font-mono outline-none focus:border-[#e6c79c] transition-colors placeholder:text-neutral-600"
                  />
                </div>

                <div>
                  <label className="text-xs text-neutral-400 block mb-2 font-mono">
                    <span className="text-emerald-400">$</span> cat &lt;&lt; 'EOF' &gt; inquiry.txt
                  </label>
                  <textarea
                    rows={5}
                    value={formMsg}
                    onChange={(e) => setFormMsg(e.target.value)}
                    placeholder="Share your architectural challenge, project requirements, or engineering inquiry..."
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl p-4 text-white text-xs font-mono outline-none focus:border-[#e6c79c] transition-colors placeholder:text-neutral-600 resize-none"
                    required
                  />
                  <div className="text-[10px] text-neutral-500 mt-1">EOF</div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#e6c79c] hover:bg-white text-black font-semibold font-mono text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(230,199,156,0.25)]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{sent ? 'Transmission Dispatched!' : 'Transmit Message'}</span>
                </button>

                <p className="text-[11px] text-neutral-500 text-center">
                  Direct client dispatch opens your configured mailer directly to yathink3@gmail.com
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
