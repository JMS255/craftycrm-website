import Link from 'next/link'

const features = [
  { icon: '◎', color: '#6366f1', glow: 'rgba(99,102,241,0.12)', title: 'Lead Pipeline', desc: 'Track every inquiry from first message to booking. Move leads through stages and never lose a potential client again.' },
  { icon: '◈', color: '#10b981', glow: 'rgba(16,185,129,0.12)', title: 'Bookings & Invoices', desc: 'Manage confirmed events, track deposits, balances, and generate professional invoices with one click.' },
  { icon: '🤖', color: '#8b5cf6', glow: 'rgba(139,92,246,0.12)', title: 'Crafty AI', desc: 'AI that replies to Messenger in Taglish, qualifies leads, and auto-creates bookings when clients say PAID.' },
  { icon: '◇', color: '#f59e0b', glow: 'rgba(245,158,11,0.12)', title: 'Finances', desc: 'Track personal income and expenses month by month. See your net profit, best months, and spending breakdown.' },
  { icon: '◉', color: '#ec4899', glow: 'rgba(236,72,153,0.12)', title: 'Ad Performance', desc: 'Tag your Facebook ads and automatically see which ads bring in leads, bookings, and revenue.' },
  { icon: '📅', color: '#06b6d4', glow: 'rgba(6,182,212,0.12)', title: 'Google Calendar Sync', desc: 'Confirmed bookings sync to your Google Calendar automatically. Never double-book an event.' },
]

const steps = [
  { step: '01', title: 'Add your leads', desc: 'Manually add inquiries or let Crafty AI capture them from Facebook Messenger automatically.' },
  { step: '02', title: 'Move through pipeline', desc: 'Track each lead from New to Quoted to Negotiating to Booked at a glance.' },
  { step: '03', title: 'Convert and get paid', desc: 'Convert to a booking, track deposit and balance, generate an invoice, and sync to your calendar.' },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-5 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(ellipse, #6366f1, transparent)' }} />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
            style={{ background: 'rgba(99,102,241,0.15)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.3)' }}>
            🎉 Now in Beta — Free access for early users
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
            The CRM built for<br />
            <span style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Filipino service businesses
            </span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
            Manage leads, bookings, finances, and ad performance in one place. With Crafty AI that replies to clients in Taglish on Messenger.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="https://craftifyle-crm-system.vercel.app/signup"
              className="px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', boxShadow: '0 0 32px rgba(99,102,241,0.3)' }}>
              Get beta access — it&apos;s free →
            </Link>
            <Link href="/docs" className="px-6 py-3 rounded-xl text-sm font-medium" style={{ color: '#9ca3af', border: '1px solid #1e1e2e' }}>
              Read the docs
            </Link>
          </div>
          <p className="text-xs mt-4" style={{ color: '#4a4a6a' }}>No credit card. No setup fee. Just request your invite code.</p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything you need</h2>
            <p style={{ color: '#6b7280' }}>Built for photographers, photobooth operators, and event service providers in the Philippines.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl p-6" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4" style={{ background: f.glow }}>
                  <span style={{ color: f.color }}>{f.icon}</span>
                </div>
                <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple by design</h2>
            <p style={{ color: '#6b7280' }}>From first inquiry to paid booking in three steps.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {steps.map((s) => (
              <div key={s.step}>
                <div className="text-5xl font-bold mb-4" style={{ color: 'rgba(99,102,241,0.25)' }}>{s.step}</div>
                <h3 className="font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple pricing</h2>
            <p style={{ color: '#6b7280' }}>Free during beta. Paid plans coming soon.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-2xl p-6 relative" style={{ background: '#111118', border: '2px solid #6366f1' }}>
              <div className="absolute top-4 right-4 text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: 'rgba(99,102,241,0.2)', color: '#a5b4fc' }}>Current</div>
              <p className="text-sm font-medium mb-2" style={{ color: '#6b7280' }}>Beta</p>
              <p className="text-4xl font-bold text-white mb-1">Free</p>
              <p className="text-sm mb-6" style={{ color: '#4a4a6a' }}>While we&apos;re testing</p>
              <ul className="space-y-2.5 mb-6">
                {['All features included', 'Crafty AI assistant', 'Unlimited leads and bookings', 'Priority feedback channel'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#9ca3af' }}>
                    <span style={{ color: '#10b981' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="https://craftifyle-crm-system.vercel.app/signup"
                className="block w-full py-2.5 rounded-xl text-sm font-semibold text-white text-center"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
                Get beta access
              </Link>
            </div>
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
              <button disabled className="block w-full py-2.5 rounded-xl text-sm font-semibold text-center opacity-40 cursor-not-allowed" style={{ background: '#1e1e2e', color: '#9ca3af' }}>
                Coming soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-5">
        <div className="max-w-2xl mx-auto text-center">
          <div className="rounded-2xl p-10 relative overflow-hidden" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.08), transparent)' }} />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to try it?</h2>
              <p className="mb-6" style={{ color: '#6b7280' }}>Join the beta, test it on your real business, and help shape the roadmap. Free forever for early users.</p>
              <Link href="https://craftifyle-crm-system.vercel.app/signup"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', boxShadow: '0 0 32px rgba(99,102,241,0.25)' }}>
                Get beta access — it&apos;s free →
              </Link>
              <p className="text-xs mt-4" style={{ color: '#4a4a6a' }}>Request invite code · jamesignacio255@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
