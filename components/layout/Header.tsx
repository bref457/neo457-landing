"use client"
import { content } from '@/lib/content'

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: 'rgba(10, 10, 10, 0.85)',
        borderColor: 'var(--border)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <span className="font-mono font-bold text-sm tracking-widest" style={{ color: 'var(--aria)' }}>
          {content.header.logo}
        </span>
        <nav className="hidden md:flex items-center gap-8">
          {content.header.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="text-sm font-medium transition-opacity duration-200"
              style={{ color: item.external ? 'var(--aria)' : 'var(--muted)' }}
              onMouseOver={(e) => { (e.target as HTMLAnchorElement).style.color = 'var(--foreground)' }}
              onMouseOut={(e) => { (e.target as HTMLAnchorElement).style.color = item.external ? 'var(--aria)' : 'var(--muted)' }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        {/* Mobile: show only logo + GitHub */}
        <a
          href="https://github.com/bref457"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden text-xs font-mono px-3 py-1.5 rounded-lg border"
          style={{ color: 'var(--aria)', borderColor: 'var(--aria)', opacity: 0.8 }}
        >
          GitHub
        </a>
      </div>
    </header>
  )
}
