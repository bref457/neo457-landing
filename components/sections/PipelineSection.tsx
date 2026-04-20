"use client"
import { motion, useReducedMotion } from 'framer-motion'
import { content } from '@/lib/content'
import { staggerContainer, fadeInUp } from '@/lib/animations'

export default function PipelineSection() {
  const prefersReducedMotion = useReducedMotion()
  const animate = !prefersReducedMotion

  return (
    <section id="pipeline" className="py-16 lg:py-32 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          variants={animate ? staggerContainer : undefined}
          initial={animate ? "hidden" : false}
          animate="visible"
          className="mb-10 lg:mb-16 space-y-3"
        >
          <motion.p variants={animate ? fadeInUp : undefined} className="font-mono text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: 'var(--aria)' }}>
            {content.pipeline.sectionLabel}
          </motion.p>
          <motion.h2 variants={animate ? fadeInUp : undefined} className="text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: 'var(--foreground)' }}>
            {content.pipeline.headline}
          </motion.h2>
          <motion.p variants={animate ? fadeInUp : undefined} className="text-base max-w-xl leading-relaxed" style={{ color: 'var(--muted)' }}>
            {content.pipeline.subline}
          </motion.p>
        </motion.div>

        {/* Desktop: horizontal flow */}
        <div className="hidden md:flex items-stretch gap-0">
          {content.pipeline.steps.map((step, i) => (
            <div key={step.label} className="flex items-stretch flex-1">
              <motion.div
                initial={animate ? { y: 16, scale: 0.98 } : false}
                animate={{ y: 0, scale: 1 }}
                transition={animate ? { delay: i * 0.1, duration: 0.4 } : { duration: 0 }}
                className="flex-1 rounded-xl border p-5 space-y-2 h-full"
                style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
              >
                <div className="font-mono text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--aria)', opacity: 0.6 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="font-semibold text-sm" style={{ color: 'var(--foreground)' }}>{step.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>{step.sublabel}</p>
              </motion.div>
              {i < content.pipeline.steps.length - 1 && (
                <div className="flex-shrink-0 self-center px-3 text-lg font-bold" style={{ color: 'var(--aria)', opacity: 0.4, alignSelf: 'center' }}>
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical list */}
        <div className="md:hidden space-y-3">
          {content.pipeline.steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={animate ? { x: -12 } : false}
              animate={{ x: 0 }}
              transition={animate ? { delay: i * 0.08, duration: 0.35 } : { duration: 0 }}
              className="flex items-start gap-4 rounded-xl border p-4"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <span className="font-mono text-xs font-bold mt-0.5 shrink-0" style={{ color: 'var(--aria)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="font-semibold text-sm" style={{ color: 'var(--foreground)' }}>{step.label}</p>
                <p className="text-xs leading-relaxed mt-1" style={{ color: 'var(--muted)' }}>{step.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Code Snippet */}
        <motion.div
          variants={animate ? fadeInUp : undefined}
          initial={animate ? "hidden" : false}
          animate="visible"
          className="mt-10 lg:mt-16 rounded-2xl border overflow-hidden"
          style={{ borderColor: 'var(--border)' }}
        >
          <div className="flex items-center gap-2 px-5 py-3 border-b" style={{ borderColor: 'var(--border)', background: 'var(--card)' }}>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--aria)' }}>
              {content.pipeline.snippet.label}
            </span>
            <span className="font-mono text-xs opacity-40" style={{ color: 'var(--muted)' }}>
              · skills/neoplan-reminder/SKILL.md
            </span>
          </div>
          <pre
            className="p-5 text-xs leading-relaxed overflow-x-auto"
            style={{ background: 'var(--card)', color: 'var(--muted)', fontFamily: 'var(--font-geist-mono, monospace)' }}
          >
            <code>{content.pipeline.snippet.code}</code>
          </pre>
        </motion.div>
      </div>
    </section>
  )
}
