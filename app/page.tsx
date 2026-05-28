import Link from 'next/link'
import ScreenshotGallery from './components/ScreenshotGallery'

const featureSections = [
  {
    badge: 'Lead Pipeline',
    title: 'Never lose a lead again',
    desc: 'Every inquiry tracked from first message to booked event. See every lead\'s stage, event date, budget, and source at a glance.',
    bullets: [
      'New → Contacted → Quoted → Negotiating → Booked',
      'Log calls, notes, and follow-up reminders per lead',
      'Search and filter across all your inquiries instantly',
    ],
    screenshot: '/screenshots/leads.png',
    imageRight: true,
    color: '#6366f1',
  },
  {
    badge: 'Crafty AI',
    title: 'AI that works while you sleep',
    desc: 'Connect your Facebook page once. Crafty AI replies to every inquiry in Taglish, asks discovery questions, recommends packages, and creates leads automatically.',
    bullets: [
      '24/7 automatic replies in Taglish — no typing needed',
      'Auto-creates and updates leads from every conversation',
      'Client says "PAID" → booking created instantly',
    ],
    screenshot: '/screenshots/lead-detail.png',
    imageRight: false,
    color: '#8b5cf6',
  },
  {
    badge: 'Bookings & Invoices',
    title: 'From confirmed to paid — in one place',
    desc: 'Track deposits, balances, and upcoming events. Generate a professional invoice with one click. Never chase a payment without knowing who owes what.',
    bullets: [
      'Track deposit and balance per booking',
      'One-click printable PDF invoice with your business info',
      'Google Calendar sync on every confirmed booking',
    ],
    screenshot: '/screenshots/bookings.png',
    imageRight: true,
    color: '#10b981',
  },
]

const steps = [
  { step: '01', title: 'Connect your Messenger', desc: 'Link your Facebook page once. Crafty AI starts handling inquiries immediately.' },
  { step: '02', title: 'Watch leads come in', desc: 'Every new inquiry is captured, qualified, and tracked automatically in your pipeline.' },
  { step: '03', title: 'Convert and get paid', desc: 'One click to convert a lead to a booking, generate an invoice, and sync to your calendar.' },
]

const stats = [
  { value: '6', label: 'Core features' },
  { value: '3', label: 'Days to build v1' },
  { value: '24/7', label: 'AI always on' },
  { value: '₱0', label: 'During beta' },
]

export default function HomePage() {
  return (
    <div>

      {/* ── Hero ── */}
      <section className="relative pt-24 pb-0 px-5 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
            style={{ background: 'radial-gradient(ellipse, #8b5cf6, transparent)' }} />
          <div className="absolute top-20 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl opacity-8"
            style={{ background: 'radial-gradient(ellipse, #ec4899, transparent)' }} />
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Two-column hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-16 pt-8">
            {/* Left — text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
                style={{ background: 'rgba(99,102,241,0.15)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.3)' }}>
                🎉 Now in Beta · Free for early users
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5 text-white">
                The CRM built for<br />
                <span style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Filipino service businesses
                </span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: '#6b7280' }}>
                Manage leads, bookings, and finances in one place — with Crafty AI that replies to clients in Taglish on Messenger, 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link href="https://craftifyle-crm-system.vercel.app/signup"
                  className="px-6 py-3 rounded-xl font-semibold text-white text-sm text-center transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', boxShadow: '0 0 32px rgba(99,102,241,0.3)' }}>
                  Get beta access — it&apos;s free →
                </Link>
                <Link href="https://craftifyle-crm-system.vercel.app/login"
                  className="px-6 py-3 rounded-xl text-sm font-medium text-center transition-colors hover:text-white"
                  style={{ color: '#9ca3af', border: '1px solid #1e1e2e' }}>
                  Try demo account
                </Link>
              </div>
              <p className="text-xs" style={{ color: '#4a4a6a' }}>No credit card. No setup fee. Built in Zamboanga City, 🇵🇭</p>
            </div>

            {/* Right — dashboard screenshot */}
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl blur-2xl opacity-20"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', transform: 'scale(0.95) translateY(8px)' }} />
              <div className="relative rounded-2xl overflow-hidden"
                style={{ border: '1px solid #1e1e2e', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: '#0a0a0f', borderBottom: '1px solid #1e1e2e' }}>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ef4444', opacity: 0.7 }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#f59e0b', opacity: 0.7 }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#10b981', opacity: 0.7 }} />
                  </div>
                  <div className="flex-1 mx-3">
                    <div className="h-4 rounded flex items-center px-2 mx-auto max-w-[180px]"
                      style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
                      <span className="text-[10px]" style={{ color: '#4a4a6a' }}>craftifyle-crm-system.vercel.app</span>
                    </div>
                  </div>
                </div>
                <img src="/screenshots/dashboard.png" alt="Crafty CRM Dashboard"
                  style={{ width: '100%', display: 'block' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="py-10 px-5" style={{ borderTop: '1px solid #1e1e2e', borderBottom: '1px solid #1e1e2e' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map(s => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-sm" style={{ color: '#4a4a6a' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature sections (Bonsai-style alternating) ── */}
      <section id="features" className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built for how you actually work</h2>
            <p style={{ color: '#6b7280' }}>Every feature designed for Filipino event service businesses. No bloat. No complexity.</p>
          </div>

          <div className="space-y-28">
            {featureSections.map((f) => (
              <div key={f.badge}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!f.imageRight ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                {/* Text */}
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block"
                    style={{ background: `${f.color}18`, color: f.color, border: `1px solid ${f.color}30` }}>
                    {f.badge}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">{f.title}</h3>
                  <p className="text-base leading-relaxed mb-6" style={{ color: '#6b7280' }}>{f.desc}</p>
                  <ul className="space-y-3">
                    {f.bullets.map(b => (
                      <li key={b} className="flex items-start gap-3 text-sm" style={{ color: '#9ca3af' }}>
                        <span className="mt-0.5 shrink-0 text-base" style={{ color: f.color }}>✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Screenshot */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl blur-2xl opacity-15"
                    style={{ background: `radial-gradient(ellipse, ${f.color}, transparent)`, transform: 'scale(0.9) translateY(12px)' }} />
                  <div className="relative rounded-2xl overflow-hidden"
                    style={{ border: '1px solid #1e1e2e', boxShadow: '0 24px 60px rgba(0,0,0,0.4)' }}>
                    <div className="flex items-center gap-1.5 px-3 py-2" style={{ background: '#0a0a0f', borderBottom: '1px solid #1e1e2e' }}>
                      <div className="w-2 h-2 rounded-full" style={{ background: '#ef4444', opacity: 0.6 }} />
                      <div className="w-2 h-2 rounded-full" style={{ background: '#f59e0b', opacity: 0.6 }} />
                      <div className="w-2 h-2 rounded-full" style={{ background: '#10b981', opacity: 0.6 }} />
                    </div>
                    <img src={f.screenshot} alt={f.title} style={{ width: '100%', display: 'block' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Screenshot gallery ── */}
      <section className="py-20 px-5" style={{ background: '#080810' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See every feature</h2>
            <p style={{ color: '#6b7280' }}>Real screenshots from the actual app — no mockups, no stock photos.</p>
          </div>
          <ScreenshotGallery />
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Up and running in minutes</h2>
            <p style={{ color: '#6b7280' }}>From first inquiry to paid booking in three steps.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={s.step} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-px -translate-x-8"
                    style={{ background: 'linear-gradient(90deg, #1e1e2e, transparent)' }} />
                )}
                <div className="text-4xl font-bold mb-4" style={{ color: 'rgba(99,102,241,0.2)' }}>{s.step}</div>
                <h3 className="font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="py-16 px-5" style={{ background: '#080810' }}>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl p-8 md:p-10 relative overflow-hidden"
            style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-5"
              style={{ background: '#8b5cf6' }} />
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#f59e0b' }}>★</span>
              ))}
            </div>
            <p className="text-lg md:text-xl font-medium text-white leading-relaxed mb-6">
              &ldquo;Finally a CRM that actually fits how I run my photobooth business. The AI replies to clients on Messenger while I&apos;m at an event — I wake up to new leads already qualified and ready to book.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>JI</div>
              <div>
                <p className="text-sm font-semibold text-white">James Ignacio</p>
                <p className="text-xs" style={{ color: '#4a4a6a' }}>Craftifyle Photobooth · Zamboanga City</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-20 px-5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple pricing</h2>
            <p style={{ color: '#6b7280' }}>Free during beta. Paid plans coming when we launch publicly.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Beta */}
            <div className="rounded-2xl p-6 relative" style={{ background: '#111118', border: '2px solid #6366f1' }}>
              <div className="absolute top-4 right-4 text-xs px-2.5 py-1 rounded-full font-medium"
                style={{ background: 'rgba(99,102,241,0.2)', color: '#a5b4fc' }}>Current</div>
              <p className="text-sm font-medium mb-2" style={{ color: '#6b7280' }}>Beta</p>
              <p className="text-4xl font-bold text-white mb-1">Free</p>
              <p className="text-sm mb-6" style={{ color: '#4a4a6a' }}>While we&apos;re testing</p>
              <ul className="space-y-2.5 mb-6">
                {['All features included', 'Crafty AI Messenger assistant', 'Unlimited leads and bookings', 'Priority feedback channel'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#9ca3af' }}>
                    <span style={{ color: '#10b981' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="https://craftifyle-crm-system.vercel.app/signup"
                className="block w-full py-2.5 rounded-xl text-sm font-semibold text-white text-center transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
                Get beta access
              </Link>
            </div>
            {/* Pro */}
            <div className="rounded-2xl p-6" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
              <p className="text-sm font-medium mb-2" style={{ color: '#6b7280' }}>Pro (Coming soon)</p>
              <p className="text-4xl font-bold text-white mb-1">₱800<span className="text-lg font-normal" style={{ color: '#6b7280' }}>/mo</span></p>
              <p className="text-sm mb-6" style={{ color: '#4a4a6a' }}>After beta period ends</p>
              <ul className="space-y-2.5 mb-6">
                {['Everything in Beta', 'Crafty AI Messenger replies', 'Google Calendar sync', 'Ad performance tracking', 'Invoice generator', 'Priority support'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#9ca3af' }}>
                    <span style={{ color: '#6366f1' }}>◎</span> {item}
                  </li>
                ))}
              </ul>
              <button disabled className="block w-full py-2.5 rounded-xl text-sm font-semibold text-center opacity-40 cursor-not-allowed"
                style={{ background: '#1e1e2e', color: '#9ca3af' }}>
                Coming soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 px-5">
        <div className="max-w-2xl mx-auto text-center">
          <div className="rounded-2xl p-10 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0f0f1f, #111118)', border: '1px solid #1e1e2e' }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.12), transparent 70%)' }} />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#6366f1' }}>Get started today</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stop managing leads<br />in a spreadsheet.
              </h2>
              <p className="mb-8 text-base" style={{ color: '#6b7280' }}>
                Join the beta, use it on your real business, and help shape what Crafty CRM becomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="https://craftifyle-crm-system.vercel.app/signup"
                  className="px-7 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', boxShadow: '0 0 40px rgba(99,102,241,0.25)' }}>
                  Get beta access — it&apos;s free →
                </Link>
                <Link href="https://craftifyle-crm-system.vercel.app/login"
                  className="px-7 py-3 rounded-xl text-sm font-medium transition-colors hover:text-white"
                  style={{ color: '#9ca3af', border: '1px solid #1e1e2e' }}>
                  Try the demo
                </Link>
              </div>
              <p className="text-xs mt-5" style={{ color: '#4a4a6a' }}>Request invite · jamesignacio255@gmail.com · Built in Zamboanga City 🇵🇭</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
