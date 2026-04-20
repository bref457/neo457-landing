"use client"
import { motion, useReducedMotion } from 'framer-motion'
import { content } from '@/lib/content'
import { staggerContainer, fadeInUp } from '@/lib/animations'

export default function StorySection() {
  const prefersReducedMotion = useReducedMotion()
  const animate = !prefersReducedMotion

  return (
    <section id="story" className="py-16 lg:py-32 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          variants={animate ? staggerContainer : undefined}
          initial={animate ? "hidden" : false}
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Story */}
          <div className="space-y-7">
            <motion.p variants={animate ? fadeInUp : undefined} className="font-mono text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: 'var(--aria)' }}>
              {content.story.sectionLabel}
            </motion.p>
            <motion.h2 variants={animate ? fadeInUp : undefined} className="text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: 'var(--foreground)' }}>
              {content.story.storyHeadline}
            </motion.h2>
            <div className="space-y-5">
              {content.story.storyText.map((para, i) => (
                <motion.p key={i} variants={animate ? fadeInUp : undefined} className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {para}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Vision */}
          <div className="space-y-7">
            <motion.p variants={animate ? fadeInUp : undefined} className="font-mono text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: 'var(--aria)' }}>
              Vision
            </motion.p>
            <motion.h2 variants={animate ? fadeInUp : undefined} className="text-3xl lg:text-4xl font-bold tracking-tight" style={{ color: 'var(--foreground)' }}>
              {content.story.visionHeadline}
            </motion.h2>
            <motion.p variants={animate ? fadeInUp : undefined} className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
              {content.story.visionText}
            </motion.p>
            <motion.div
              variants={animate ? fadeInUp : undefined}
              className="rounded-2xl border p-6"
              style={{ background: 'var(--aria-dim)', borderColor: 'rgba(74,222,128,0.25)' }}
            >
              <p className="text-sm font-mono leading-relaxed" style={{ color: 'var(--aria)' }}>
                neo457.ch ist kein Produkt.<br />
                Es ist ein laufendes Experiment.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
