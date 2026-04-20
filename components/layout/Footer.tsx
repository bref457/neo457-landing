import { content } from '@/lib/content'

export default function Footer() {
  return (
    <footer className="border-t py-14" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="space-y-1 text-center md:text-left">
            <p className="font-mono font-bold text-sm tracking-widest" style={{ color: 'var(--aria)' }}>neo457</p>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>{content.footer.tagline}</p>
          </div>
          <div className="flex items-center gap-6">
            {content.footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="text-sm font-mono transition-opacity hover:opacity-100 opacity-50"
                style={{ color: 'var(--foreground)' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
          <p className="text-xs text-center font-mono" style={{ color: 'var(--muted)', opacity: 0.4 }}>{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
