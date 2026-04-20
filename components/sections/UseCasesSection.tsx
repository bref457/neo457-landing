"use client"
import { motion, useReducedMotion } from 'framer-motion'
import { Mic, Newspaper, Bot, LucideIcon } from 'lucide-react'
import { content } from '@/lib/content'
import { staggerContainer, cardReveal, fadeInUp } from '@/lib/animations'

const iconMap: Record<string, LucideIcon> = { Mic, Newspaper, Bot }

export default function UseCasesSection() {
  const prefersReducedMotion = useReducedMotion()
  const animate = !prefersReducedMotion

  return (
    <section id="use-cases" className="py-16 lg:py-32 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          variants={animate ? staggerContainer : undefined}
          initial={animate ? "hidden" : false}
          animate="visible"
          className="mb-10 lg:mb-14 space-y-3"
        >
          <motion.p variants={animate ? fadeInUp : undefined} className="font-mono text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: 'var(--aria)' }}>
            {content.useCases.sectionLabel}
          </motion.p>
          <motion.h2 variants={animate ? fadeInUp : undefined} className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: 'var(--foreground)' }}>
            {content.useCases.headline}
          </motion.h2>
        </motion.div>

        <motion.div
          variants={animate ? staggerContainer : undefined}
          initial={animate ? "hidden" : false}
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {content.useCases.items.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <motion.div
                key={item.title}
                variants={animate ? cardReveal : undefined}
                className="group rounded-2xl border p-5 sm:p-7 space-y-4 sm:space-y-5 transition-all duration-300"
                style={{
                  background: 'var(--card)',
                  borderColor: 'var(--border)',
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(74,222,128,0.4)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 32px -8px rgba(74,222,128,0.3)'
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="p-2.5 rounded-xl" style={{ background: 'var(--aria-dim)' }}>
                    {Icon && <Icon size={20} style={{ color: 'var(--aria)' }} />}
                  </div>
                  {item.badge && (
                    <span className="rounded-md border px-2 py-0.5 font-mono text-xs" style={{ borderColor: 'var(--border)', color: 'var(--muted)', background: 'rgba(255,255,255,0.03)' }}>
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-base" style={{ color: 'var(--foreground)' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{item.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
