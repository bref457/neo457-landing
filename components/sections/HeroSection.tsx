"use client"
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { content } from '@/lib/content'
import { staggerContainer, heroText, fadeInUp } from '@/lib/animations'

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const animate = !prefersReducedMotion

  return (
    <section className="relative overflow-hidden min-h-[88vh] flex items-center">
      {/* Grid background */}
      <div className="grid-bg absolute inset-0" />

      {/* Glow — nur Desktop (kein filter: blur auf Mobile, iOS GPU) */}
      <div
        className="absolute top-0 left-0 w-64 h-64 rounded-full pointer-events-none hidden sm:block"
        style={{ background: 'rgba(74,222,128,0.3)', filter: 'blur(80px)', opacity: 0.35 }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-[1fr_260px] gap-10 lg:gap-16 items-center">

          {/* Text block */}
          <motion.div
            variants={animate ? staggerContainer : undefined}
            initial={animate ? "hidden" : false}
            animate="visible"
            className="space-y-6 sm:space-y-8"
          >
            <motion.p
              variants={animate ? fadeInUp : undefined}
              className="font-mono text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: 'var(--aria)' }}
            >
              {content.hero.monoLabel}
            </motion.p>

            <div className="space-y-0.5">
              {[content.hero.headline.line1, content.hero.headline.line2, content.hero.headline.line3].map((line, i) => (
                <motion.h1
                  key={i}
                  variants={animate ? heroText : undefined}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
                  style={{ color: i < 2 ? 'var(--foreground)' : 'var(--aria)' }}
                >
                  {line}
                </motion.h1>
              ))}
            </div>

            <motion.p
              variants={animate ? fadeInUp : undefined}
              className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg"
              style={{ color: 'var(--muted)' }}
            >
              {content.hero.subline}
            </motion.p>

            <motion.div
              variants={animate ? fadeInUp : undefined}
              className="flex flex-wrap gap-3"
            >
              {content.hero.cta.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
                  style={
                    cta.variant === 'primary'
                      ? { background: 'var(--aria)', color: '#000' }
                      : { border: '1px solid var(--border)', color: 'var(--foreground)' }
                  }
                >
                  {cta.label}
                </a>
              ))}
            </motion.div>

            {/* Stats — mobile grid */}
            <motion.div
              variants={animate ? fadeInUp : undefined}
              className="lg:hidden grid grid-cols-3 gap-3 pt-2"
            >
              {content.hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border p-3 text-center"
                  style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
                >
                  <p className="text-xl font-bold" style={{ color: 'var(--aria)' }}>{stat.value}</p>
                  <p className="text-[10px] mt-0.5 leading-snug" style={{ color: 'var(--muted)' }}>{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* About block — desktop only */}
          <div className="hidden lg:flex flex-col items-center gap-5">
            <div className="rounded-2xl border overflow-hidden" style={{ borderColor: 'var(--border)', background: 'var(--card)' }}>
              <Image
                src="/avatar.png"
                alt="Fabio — neo457"
                width={260}
                height={260}
                className="w-full object-cover"
                priority
              />
            </div>
            <div className="rounded-2xl border p-5 w-full space-y-2" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
              <p className="font-mono text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--aria)' }}>Fabio — neo457</p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                KI-Enthusiast aus der Schweiz. Ich baue mir mein eigenes KI-System — nicht als Produkt, sondern weil ich verstehen will wie es funktioniert.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
