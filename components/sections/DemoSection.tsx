"use client"
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
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

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12">
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
                msg.role === 'buttons' ? (
                  <motion.div
                    key={i}
                    initial={animate ? { y: 6 } : false}
                    animate={{ y: 0 }}
                    transition={animate ? { delay: i * 0.15, duration: 0.3 } : { duration: 0 }}
                    className="flex justify-start"
                  >
                    <div className="flex gap-2 w-full">
                      <div
                        className="flex-1 rounded-xl px-3 py-2 text-xs font-semibold text-center"
                        style={{ border: '1px solid var(--aria)', color: 'var(--aria)', background: 'rgba(74,222,128,0.06)' }}
                      >
                        ✅ Erledigt
                      </div>
                      <div
                        className="flex-1 rounded-xl px-3 py-2 text-xs font-semibold text-center"
                        style={{ border: '1px solid var(--border)', color: 'var(--muted)', background: 'rgba(255,255,255,0.03)' }}
                      >
                        ⏳ Später (30m)
                      </div>
                    </div>
                  </motion.div>
                ) : (
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
                )
              ))}
            </div>
          </motion.div>

          {/* Arrow connector */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-3 py-4">
            <div className="text-3xl font-bold" style={{ color: 'var(--aria)', opacity: 0.7 }}>→</div>
            <p className="text-sm text-center leading-relaxed max-w-[120px]" style={{ color: 'var(--muted)' }}>
              Reminder landet in NeoPlan — jederzeit anpassbar
            </p>
          </div>

          {/* NeoPlan Screenshot */}
          <motion.div
            initial={animate ? { y: 16 } : false}
            animate={{ y: 0 }}
            transition={animate ? { delay: 0.2, duration: 0.5 } : { duration: 0 }}
            className="rounded-2xl overflow-hidden border"
            style={{ borderColor: 'var(--border)' }}
          >
            <Image
              src="/neoplan.png"
              alt="NeoPlan – Aufgabenverwaltung"
              width={480}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
