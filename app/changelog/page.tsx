const releases = [
  {
    version: '0.3.0',
    date: 'May 27, 2026',
    tag: 'Beta Launch',
    tagColor: '#10b981',
    changes: [
      { type: 'new', text: 'Multi-user support — each account has private isolated data' },
      { type: 'new', text: 'Invite-code protected signup for beta testers' },
      { type: 'new', text: 'User profile page — set your name, business, and city' },
      { type: 'new', text: 'Onboarding tutorial modal for new users' },
      { type: 'new', text: 'Dark / Light mode toggle (desktop + mobile)' },
      { type: 'new', text: 'Sidebar shows real user name and initials' },
      { type: 'fix', text: 'Signup no longer freezes — instant redirect after account creation' },
      { type: 'fix', text: 'Fixed service role key accidentally used as anon key (security fix)' },
      { type: 'fix', text: 'Mobile login speed improved — middleware now uses local session check' },
    ],
  },
  {
    version: '0.2.0',
    date: 'May 26, 2026',
    tag: 'Feature Sprint',
    tagColor: '#6366f1',
    changes: [
      { type: 'new', text: 'Login system with Supabase Auth — full route protection' },
      { type: 'new', text: 'Google Calendar sync — bookings auto-sync on creation' },
      { type: 'new', text: 'Invoice generator — printable PDF from any booking' },
      { type: 'new', text: 'Ad Performance dashboard — track which Facebook ads convert' },
      { type: 'new', text: 'Auto follow-up cron — Crafty AI sends follow-ups daily at 10am' },
      { type: 'new', text: 'Booking reminder cron — reminders sent 3 days before event' },
      { type: 'new', text: 'Crafty AI takeover toggle — manually take over any conversation' },
      { type: 'new', text: 'Messenger conversation viewer inside lead detail page' },
      { type: 'fix', text: 'Fixed duplicate booking creation from Messenger auto-detection' },
      { type: 'fix', text: 'Crafty AI now asks for name in first message' },
      { type: 'fix', text: 'Fixed spread type TypeScript error in messenger route' },
    ],
  },
  {
    version: '0.1.0',
    date: 'May 24, 2026',
    tag: 'Initial Build',
    tagColor: '#f59e0b',
    changes: [
      { type: 'new', text: 'Lead pipeline — New, Contacted, Quoted, Negotiating, Booked, Lost' },
      { type: 'new', text: 'Bookings management with deposit and balance tracking' },
      { type: 'new', text: 'Personal finances — income and expense tracking by month' },
      { type: 'new', text: 'Crafty AI — Facebook Messenger auto-reply in Taglish' },
      { type: 'new', text: 'Auto lead extraction from Messenger conversations' },
      { type: 'new', text: 'Auto booking creation when client says PAID' },
      { type: 'new', text: 'Dashboard with monthly breakdown and upcoming events' },
      { type: 'new', text: 'Activity log on each lead (notes, calls, follow-ups)' },
    ],
  },
]

const typeStyles: Record<string, { label: string; color: string; bg: string }> = {
  new: { label: 'New', color: '#34d399', bg: 'rgba(16,185,129,0.1)' },
  fix: { label: 'Fix', color: '#60a5fa', bg: 'rgba(59,130,246,0.1)' },
  improved: { label: 'Improved', color: '#a78bfa', bg: 'rgba(139,92,246,0.1)' },
}

export default function ChangelogPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 pt-28 pb-20">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-white mb-2">Changelog</h1>
        <p style={{ color: '#6b7280' }}>Every update, fix, and new feature — documented as we ship.</p>
      </div>

      <div className="space-y-10">
        {releases.map((r) => (
          <div key={r.version} className="relative pl-6 border-l" style={{ borderColor: '#1e1e2e' }}>
            {/* Dot */}
            <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full" style={{ background: r.tagColor }} />

            <div className="mb-4">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-lg font-bold text-white">v{r.version}</span>
                <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ background: `${r.tagColor}20`, color: r.tagColor }}>
                  {r.tag}
                </span>
                <span className="text-xs" style={{ color: '#4a4a6a' }}>{r.date}</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
              {r.changes.map((c, i) => {
                const s = typeStyles[c.type] ?? typeStyles.new
                return (
                  <div key={i} className="flex items-start gap-3 px-4 py-3"
                    style={{ borderTop: i > 0 ? '1px solid #1a1a28' : 'none' }}>
                    <span className="text-xs px-1.5 py-0.5 rounded font-medium shrink-0 mt-0.5"
                      style={{ background: s.bg, color: s.color }}>{s.label}</span>
                    <p className="text-sm" style={{ color: '#9ca3af' }}>{c.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
