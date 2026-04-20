"use client"
import { motion, useReducedMotion } from 'framer-motion'
import { content } from '@/lib/content'
import { staggerContainer, cardReveal, fadeInUp } from '@/lib/animations'

export default function SystemSetupSection() {
  const prefersReducedMotion = useReducedMotion()
  const animate = !prefersReducedMotion

  return (
    <section id="system" className="py-16 lg:py-32 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          variants={animate ? staggerContainer : undefined}
          initial={animate ? "hidden" : false}
          animate="visible"
          className="mb-10 lg:mb-14 space-y-3"
        >
          <motion.p variants={animate ? fadeInUp : undefined} className="font-mono text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: 'var(--aria)' }}>
            {content.systemSetup.sectionLabel}
          </motion.p>
          <motion.h2 variants={animate ? fadeInUp : undefined} className="text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: 'var(--foreground)' }}>
            {content.systemSetup.headline}
          </motion.h2>
          <motion.p variants={animate ? fadeInUp : undefined} className="text-base max-w-xl leading-relaxed" style={{ color: 'var(--muted)' }}>
            {content.systemSetup.subline}
          </motion.p>
        </motion.div>

        <motion.div
          variants={animate ? staggerContainer : undefined}
          initial={animate ? "hidden" : false}
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {content.systemSetup.nodes.map((node) => (
            <motion.div
              key={node.name}
              variants={animate ? cardReveal : undefined}
              className="rounded-2xl border p-6 space-y-4 transition-all duration-300"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm" style={{ color: 'var(--foreground)' }}>{node.name}</h3>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--aria)' }} />
                  <span className="text-xs font-mono" style={{ color: 'var(--aria)', opacity: 0.7 }}>{node.status}</span>
                </div>
              </div>
              <p className="font-mono text-xs break-all" style={{ color: 'var(--aria)', opacity: 0.8 }}>{node.url}</p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>{node.tech}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* VPS badge */}
        <motion.div
          initial={animate ? { y: 12 } : false}
          animate={{ y: 0 }}
          transition={animate ? { delay: 0.4, duration: 0.4 } : { duration: 0 }}
          className="mt-8 inline-flex items-center gap-3 rounded-xl border px-5 py-3"
          style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
        >
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--aria)' }} />
          <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>Hetzner CX32 · 162.55.209.62 · nginx + PM2</span>
        </motion.div>
      </div>
    </section>
  )
}
