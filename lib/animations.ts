import type { Variants } from 'framer-motion'

// WICHTIG: opacity bewusst NICHT in hidden-States!
// Content muss IMMER sichtbar sein — iOS Safari IntersectionObserver-Fallback
// Animationen sind rein dekorativ (transform only)

export const fadeInUp: Variants = {
  hidden: { y: 20 },
  visible: {
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' as const }
  }
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
  }
}

export const cardReveal: Variants = {
  hidden: { y: 16, scale: 0.98 },
  visible: {
    y: 0,
    scale: 1,
    transition: { duration: 0.4 }
  }
}

export const heroText: Variants = {
  hidden: { y: 28 },
  visible: {
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' as const }
  }
}
