"use client"
import { motion, useReducedMotion } from 'framer-motion'
import { content } from '@/lib/content'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import KiNewsLightbox from '@/components/ui/KiNewsLightbox'

export default function KiNewsSection() {
  const prefersReducedMotion = useReducedMotion()
  const animate = !prefersReducedMotion

  return (
    <section id="kinews" className="py-16 lg:py-32 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">

          {/* Left: Text */}
          <motion.div
            variants={animate ? staggerContainer : undefined}
            initial={animate ? "hidden" : false}
            animate="visible"
            className="flex-1 space-y-7 max-w-xl"
          >
            <motion.p variants={animate ? fadeInUp : undefined} className="font-mono text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: 'var(--aria)' }}>
              {content.kiNews.sectionLabel}
            </motion.p>
            <motion.h2 variants={animate ? fadeInUp : undefined} className="text-3xl lg:text-4xl font-bold tracking-tight leading-tight" style={{ color: 'var(--foreground)' }}>
              {content.kiNews.headline}
            </motion.h2>
            <motion.p variants={animate ? fadeInUp : undefined} className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
              {content.kiNews.subline}
            </motion.p>
            <motion.a
              variants={animate ? fadeInUp : undefined}
              href="https://kinews.neo457.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ background: 'var(--aria)', color: '#000', boxShadow: '0 0 24px rgba(74,222,128,0.3)' }}
            >
              {content.kiNews.linkButton}
            </motion.a>
          </motion.div>

          {/* Right: Screenshot thumbnails + lightbox */}
          <motion.div
            initial={animate ? { y: 16 } : false}
            animate={{ y: 0 }}
            transition={animate ? { duration: 0.5, delay: 0.15 } : { duration: 0 }}
            className="flex-1 max-w-lg"
          >
            <KiNewsLightbox />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
