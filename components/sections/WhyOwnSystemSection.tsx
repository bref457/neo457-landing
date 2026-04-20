"use client"
import { motion, useReducedMotion } from 'framer-motion'
import { Lock, SlidersHorizontal, Unplug, Wrench, LucideIcon } from 'lucide-react'
import { content } from '@/lib/content'
import { staggerContainer, cardReveal, fadeInUp } from '@/lib/animations'

const iconMap: Record<string, LucideIcon> = { Lock, SlidersHorizontal, Unplug, Wrench }

export default function WhyOwnSystemSection() {
  const prefersReducedMotion = useReducedMotion()
  const animate = !prefersReducedMotion

  return (
    <section id="why" className="py-16 lg:py-32 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          variants={animate ? staggerContainer : undefined}
          initial={animate ? "hidden" : false}
          animate="visible"
          className="mb-10 lg:mb-14 space-y-3"
        >
          <motion.p variants={animate ? fadeInUp : undefined} className="font-mono text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: 'var(--aria)' }}>
            {content.whyOwnSystem.sectionLabel}
          </motion.p>
          <motion.h2 variants={animate ? fadeInUp : undefined} className="text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: 'var(--foreground)' }}>
            {content.whyOwnSystem.headline}
          </motion.h2>
          <motion.p variants={animate ? fadeInUp : undefined} className="text-base max-w-xl leading-relaxed" style={{ color: 'var(--muted)' }}>
            {content.whyOwnSystem.subline}
          </motion.p>
        </motion.div>

        <motion.div
          variants={animate ? staggerContainer : undefined}
          initial={animate ? "hidden" : false}
          animate="visible"
          className="grid sm:grid-cols-2 gap-4"
        >
          {content.whyOwnSystem.points.map((point) => {
            const Icon = iconMap[point.icon]
            return (
              <motion.div
                key={point.headline}
                variants={animate ? cardReveal : undefined}
                className="space-y-4 p-5 sm:p-7 rounded-2xl border transition-all duration-300"
                style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
              >
                <div className="p-2.5 rounded-xl w-fit" style={{ background: 'var(--aria-dim)' }}>
                  {Icon && <Icon size={18} style={{ color: 'var(--aria)' }} />}
                </div>
                <h3 className="font-semibold text-base" style={{ color: 'var(--foreground)' }}>{point.headline}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{point.text}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
