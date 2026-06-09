'use client'

import Link from 'next/link'
import { useState } from 'react'

const links = [
  { href: '/#features', label: 'Features' },
  { href: '/scripts', label: '📋 Free Scripts' },
  { href: '/resources', label: '📥 Free Resources' },
  { href: '/docs', label: 'Docs' },
  { href: '/research', label: 'Research' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/changelog', label: 'Changelog' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ background: 'rgba(10,10,15,0.85)', borderColor: '#1e1e2e', backdropFilter: 'blur(12px)' }}>
      <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>C</div>
          <span className="font-semibold text-sm" style={{ color: '#f4f4f8' }}>Crafty CRM</span>
          <span className="text-xs px-1.5 py-0.5 rounded-full font-medium"
            style={{ background: 'rgba(99,102,241,0.15)', color: '#a5b4fc' }}>Beta</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="text-sm transition-colors hover:text-white"
              style={{ color: '#6b7280' }}>{l.label}</Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="https://craftifyle-crm-system.vercel.app/login"
            className="text-sm px-4 py-1.5 rounded-lg transition-colors"
            style={{ color: '#9ca3af' }}>Sign in</Link>
          <Link href="/signup"
            className="text-sm px-4 py-1.5 rounded-xl font-medium text-white transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
            Get started free →
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button onClick={() => setOpen(v => !v)} className="md:hidden text-gray-400 hover:text-white">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t px-5 py-4 space-y-3" style={{ borderColor: '#1e1e2e' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block text-sm py-1.5" style={{ color: '#9ca3af' }}>{l.label}</Link>
          ))}
          <Link href="/signup"
            onClick={() => setOpen(false)}
            className="block text-sm px-4 py-2 rounded-xl font-medium text-white text-center mt-2"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
            Get started free →
          </Link>
        </div>
      )}
    </nav>
  )
}
