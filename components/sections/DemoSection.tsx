"use client"
import { motion, useReducedMotion } from 'framer-motion'
import { content } from '@/lib/content'
import { staggerContainer, fadeInUp } from '@/lib/animations'

export default function DemoSection() {
  const prefersReducedMotion = useReducedMotion()
  const animate = !prefersReducedMotion

  return (
    <section id="demo" className="py-16 lg:py-32 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          variants={animate ? staggerContainer : undefined}
          initial={animate ? "hidden" : false}
          animate="visible"
          className="mb-10 lg:mb-14 space-y-3"
        >
          <motion.p variants={animate ? fadeInUp : undefined} className="font-mono text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: 'var(--aria)' }}>
            {content.demo.sectionLabel}
          </motion.p>
          <motion.h2 variants={animate ? fadeInUp : undefined} className="text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: 'var(--foreground)' }}>
            {content.demo.headline}
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-4 max-w-3xl">
          {/* Telegram Mockup */}
          <motion.div
            initial={animate ? { y: 16 } : false}
            animate={{ y: 0 }}
            transition={animate ? { duration: 0.5 } : { duration: 0 }}
            className="rounded-2xl overflow-hidden border"
            style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
          >
            {/* Chat Header */}
            <div className="px-4 py-3 border-b flex items-center gap-3" style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.02)' }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'var(--aria)', color: '#000' }}>N</div>
              <div>
                <p className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>{content.demo.telegram.botName}</p>
                <p className="text-xs flex items-center gap-1" style={{ color: 'var(--aria)' }}>
                  <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: 'var(--aria)' }}></span>
                  online
                </p>
              </div>
            </div>
            {/* Messages */}
            <div className="p-5 space-y-3">
              {content.demo.telegram.messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={animate ? { y: 6 } : false}
                  animate={{ y: 0 }}
                  transition={animate ? { delay: i * 0.15, duration: 0.3 } : { duration: 0 }}
                  className={`flex ${msg.role === 'audio' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className="max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line font-mono"
                    style={
                      msg.role === 'audio'
                        ? { background: 'var(--aria)', color: '#000', fontWeight: 500 }
                        : { background: 'rgba(255,255,255,0.05)', color: 'var(--foreground)', border: '1px solid var(--border)' }
                    }
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Arrow connector */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-2 py-4" style={{ color: 'var(--muted)' }}>
            <div className="text-2xl font-bold" style={{ color: 'var(--aria)', opacity: 0.6 }}>→</div>
            <p className="text-xs text-center leading-relaxed max-w-[100px]" style={{ color: 'var(--muted)' }}>
              Reminder landet in NeoPlan — jederzeit anpassbar
            </p>
          </div>

          {/* NeoPlan Mockup */}
          <motion.div
            initial={animate ? { y: 16 } : false}
            animate={{ y: 0 }}
            transition={animate ? { delay: 0.2, duration: 0.5 } : { duration: 0 }}
            className="rounded-2xl overflow-hidden border"
            style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
          >
            {/* NeoPlan Header */}
            <div className="px-5 py-4 border-b flex items-center justify-between" style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.02)' }}>
              <p className="text-base font-bold" style={{ color: 'var(--foreground)' }}>NeoPlan</p>
              <span className="text-xs px-3 py-1 rounded-lg font-semibold" style={{ background: 'var(--aria)', color: '#000' }}>+ Neu</span>
            </div>
            <div className="p-5 space-y-5">
              {/* Open */}
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--muted)' }}>Offen</p>
                <div className="space-y-2">
                  {content.demo.neoplan.open.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl px-4 py-3 border" style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'var(--border)' }}>
                      <div className="w-5 h-5 rounded-full border-2 shrink-0" style={{ borderColor: 'var(--muted)' }} />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold truncate" style={{ color: 'var(--foreground)' }}>{item.title}</p>
                        <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Done */}
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--muted)' }}>Erledigt</p>
                <div className="space-y-2">
                  {content.demo.neoplan.done.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl px-4 py-3 border" style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'var(--border)' }}>
                      <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center" style={{ background: 'var(--aria)' }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold truncate line-through" style={{ color: 'var(--muted)' }}>{item.title}</p>
                        <p className="text-xs mt-0.5" style={{ color: 'var(--muted)', opacity: 0.6 }}>{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
