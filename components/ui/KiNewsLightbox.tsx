"use client"
import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const IMAGES = [
  { src: '/kinews.png', alt: 'KiNews – Übersicht' },
  { src: '/rssfeed.png', alt: 'KiNews – RSS Feed' },
  { src: '/benchmarks.png', alt: 'KiNews – Benchmarks' },
]

const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

export default function KiNewsLightbox() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const overlayRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  const prev = useCallback(() => setIndex(i => (i - 1 + IMAGES.length) % IMAGES.length), [])
  const next = useCallback(() => setIndex(i => (i + 1) % IMAGES.length), [])
  const close = useCallback(() => setOpen(false), [])

  // B. Focus close button on open
  useEffect(() => {
    if (open) {
      // Defer slightly so the DOM is painted by AnimatePresence
      const id = requestAnimationFrame(() => closeRef.current?.focus())
      return () => cancelAnimationFrame(id)
    }
  }, [open])

  // Keyboard: Escape / Arrow navigation + A. Focus trap
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { close(); return }
      if (e.key === 'ArrowLeft') { prev(); return }
      if (e.key === 'ArrowRight') { next(); return }

      // A. Focus trap: Tab / Shift+Tab
      if (e.key === 'Tab') {
        const overlay = overlayRef.current
        if (!overlay) return
        const focusable = Array.from(overlay.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
          el => !el.hasAttribute('disabled') && el.offsetParent !== null
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault()
            last.focus()
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault()
            first.focus()
          }
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, prev, next, close])

  return (
    <>
      {/* Thumbnail grid */}
      <div className="grid grid-cols-3 gap-3">
        {IMAGES.map((img, i) => (
          <button
            key={i}
            onClick={() => { setIndex(i); setOpen(true) }}
            className="rounded-xl overflow-hidden border transition-all hover:scale-[1.03] hover:border-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
            style={{ borderColor: 'var(--border)' }}
            aria-label={`${img.alt} vergrössern`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={280}
              height={180}
              className="w-full h-auto object-cover"
            />
          </button>
        ))}
      </div>

      {/* Lightbox overlay — backdrop uses transform, not opacity (iOS Safari fix) */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="lightbox"
            ref={overlayRef}
            role="dialog"
            aria-modal="true"
            aria-label="Bildergalerie"
            initial={{ y: 8 }}
            animate={{ y: 0 }}
            exit={{ y: 8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.85)' }}
            onClick={close}
          >
            {/* Per-slide AnimatePresence with scale-only transitions */}
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ scale: 0.97 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
                onClick={e => e.stopPropagation()}
                tabIndex={-1}
              >
                <Image
                  src={IMAGES[index].src}
                  alt={IMAGES[index].alt}
                  width={1280}
                  height={820}
                  className="w-full h-auto"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-5 py-3 text-sm font-semibold"
                  style={{ background: 'rgba(0,0,0,0.6)', color: '#fff' }}
                >
                  {IMAGES[index].alt} — {index + 1} / {IMAGES.length}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Prev */}
            <button
              onClick={e => { e.stopPropagation(); prev() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              aria-label="Vorheriges Bild"
            >‹</button>

            {/* Next */}
            <button
              onClick={e => { e.stopPropagation(); next() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              aria-label="Nächstes Bild"
            >›</button>

            {/* Close */}
            <button
              ref={closeRef}
              onClick={close}
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              aria-label="Schliessen"
            >✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
