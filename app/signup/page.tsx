'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CRM_URL = 'https://craftifyle-crm-system.vercel.app'

const BUSINESS_TYPES = [
  { id: 'photobooth',  label: '📸 Photobooth' },
  { id: 'printing',   label: '🖨️ Printing' },
  { id: 'travel',     label: '✈️ Travel & Tours' },
  { id: 'design',     label: '🎨 Graphic Design' },
  { id: 'catering',   label: '🍽️ Catering' },
  { id: 'beauty',     label: '💄 Beauty & Wellness' },
  { id: 'other',      label: '✨ Other' },
]

const SIZES = ['Solo', '2–5', '6–20', '20+']

export default function SignupPage() {
  const [businessType, setBusinessType] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [size, setSize] = useState('Solo')

  function buildCrmUrl(path: string) {
    const params = new URLSearchParams()
    if (businessName.trim()) params.set('bname', businessName.trim())
    if (businessType) params.set('btype', businessType)
    params.set('bsize', size)
    return `${CRM_URL}${path}?${params.toString()}`
  }

  return (
    <div className="min-h-screen flex" style={{ background: '#09090f' }}>

      {/* ── Left — Form ── */}
      <div className="flex-1 flex items-center justify-center px-6 py-20 md:py-0">
        <div className="w-full max-w-md">

          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>C</div>
            <span className="font-semibold" style={{ color: '#f4f4f8' }}>Crafty CRM</span>
          </Link>

          <h1 className="text-2xl font-bold mb-1" style={{ color: '#f4f4f8', letterSpacing: '-0.02em' }}>
            Start free — no credit card needed.
          </h1>
          <p className="text-sm mb-8" style={{ color: '#6b7280' }}>
            Set up in 2 minutes. Already organizing leads for Filipino service businesses.
          </p>

          {/* Business type */}
          <div className="mb-5">
            <label className="block text-xs font-medium mb-2" style={{ color: '#9ca3af', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Business type
            </label>
            <div className="flex flex-wrap gap-2">
              {BUSINESS_TYPES.map(bt => (
                <button
                  key={bt.id}
                  type="button"
                  onClick={() => setBusinessType(bt.id)}
                  className="text-xs px-3 py-1.5 rounded-full transition-all"
                  style={{
                    background: businessType === bt.id ? 'rgba(99,102,241,0.2)' : '#111118',
                    border: `1px solid ${businessType === bt.id ? '#6366f1' : '#1e1e2e'}`,
                    color: businessType === bt.id ? '#a5b4fc' : '#6b7280',
                  }}
                >
                  {bt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Business name */}
          <div className="mb-5">
            <label className="block text-xs font-medium mb-2" style={{ color: '#9ca3af', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Business name
            </label>
            <input
              type="text"
              placeholder="e.g. Craftifyle Photo & Events"
              value={businessName}
              onChange={e => setBusinessName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
              style={{
                background: '#111118',
                border: '1px solid #1e1e2e',
                color: '#f4f4f8',
              }}
              onFocus={e => (e.currentTarget.style.borderColor = '#6366f1')}
              onBlur={e => (e.currentTarget.style.borderColor = '#1e1e2e')}
            />
          </div>

          {/* Team size */}
          <div className="mb-8">
            <label className="block text-xs font-medium mb-2" style={{ color: '#9ca3af', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Team size
            </label>
            <div className="flex gap-2">
              {SIZES.map(s => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className="flex-1 py-2 rounded-xl text-xs font-medium transition-all"
                  style={{
                    background: size === s ? 'rgba(99,102,241,0.2)' : '#111118',
                    border: `1px solid ${size === s ? '#6366f1' : '#1e1e2e'}`,
                    color: size === s ? '#a5b4fc' : '#6b7280',
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Continue button */}
          <a
            href={buildCrmUrl('/signup')}
            className="block w-full text-center py-3 rounded-xl text-sm font-semibold text-white mb-3 transition-all hover:opacity-90 active:scale-[0.98]"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
          >
            Create my free account →
          </a>

          {/* Google */}
          <a
            href={buildCrmUrl('/signup')}
            className="flex items-center justify-center gap-3 w-full py-3 rounded-xl text-sm font-medium mb-6 transition-all hover:opacity-90"
            style={{ background: '#111118', border: '1px solid #1e1e2e', color: '#e2e8f0' }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853"/>
              <path d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71s.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.548 0 9s.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </a>

          {/* Trust line */}
          <p className="text-center text-xs" style={{ color: '#374151' }}>
            By signing up you agree to our{' '}
            <Link href="/docs" className="underline hover:text-gray-500">Terms</Link>.{' '}
            <span style={{ color: '#4b5563' }}>Ligtas ang iyong datos.</span>
          </p>

          <p className="text-center text-xs mt-4" style={{ color: '#374151' }}>
            Already have an account?{' '}
            <a href={`${CRM_URL}/login`} className="underline hover:text-gray-500" style={{ color: '#6366f1' }}>
              Sign in
            </a>
          </p>
        </div>
      </div>

      {/* ── Right — Preview ── */}
      <div className="hidden lg:flex flex-1 items-center justify-center relative overflow-hidden px-10"
        style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #13101f 60%, #0a0a14 100%)' }}>

        {/* Background glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, #6366f1, transparent)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, #8b5cf6, transparent)' }} />

        <div className="relative z-10 max-w-lg w-full">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full mb-4"
              style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', color: '#a5b4fc' }}>
              🇵🇭 Built for Filipino service businesses
            </div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: '#f4f4f8', letterSpacing: '-0.02em' }}>
              Your leads, bookings, and payments — organized in one place.
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
              Crafty CRM is the only Filipino-built CRM made for photobooth operators, printers, event stylists, and service solopreneurs. Paste a Messenger DM — it becomes a lead in 10 seconds.
            </p>
          </div>

          {/* Dashboard screenshot */}
          <div className="rounded-2xl overflow-hidden shadow-2xl"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
            <Image
              src="/screenshots/dashboard.png"
              alt="Crafty CRM dashboard"
              width={600}
              height={380}
              className="w-full h-auto"
              style={{ display: 'block' }}
            />
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4 mt-5">
            <div className="flex -space-x-2">
              {['#6366f1','#8b5cf6','#ec4899','#f59e0b'].map((c, i) => (
                <div key={i} className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: c, borderColor: '#0f0f1a' }}>
                  {['J','M','R','A'][i]}
                </div>
              ))}
            </div>
            <p className="text-xs" style={{ color: '#6b7280' }}>
              Joined by Filipino service businesses — <span style={{ color: '#a5b4fc' }}>libre during beta</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
