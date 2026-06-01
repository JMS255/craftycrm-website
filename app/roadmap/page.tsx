const quarters = [
  {
    label: 'Now — Beta',
    status: 'current',
    color: '#10b981',
    items: [
      { status: 'done', text: 'Multi-user accounts with data isolation' },
      { status: 'done', text: 'Invite-code protected signup for beta testers' },
      { status: 'done', text: 'Crafty AI — Facebook Messenger auto-reply in Taglish' },
      { status: 'done', text: 'Auto lead extraction and booking creation from Messenger' },
      { status: 'done', text: 'Lead pipeline with activity log' },
      { status: 'done', text: 'Bookings, invoices, and payment tracking' },
      { status: 'done', text: 'Personal finances tracker' },
      { status: 'done', text: 'Ad performance dashboard (Facebook Traffic ads)' },
      { status: 'done', text: 'Google Calendar sync' },
      { status: 'done', text: 'Dark / Light mode' },
      { status: 'done', text: 'Crafty AI always date-aware — both AI modes know today\'s date on every request' },
    ],
  },
  {
    label: 'Sprint 2 — July 2026',
    status: 'next',
    color: '#6366f1',
    items: [
      { status: 'done', text: 'Crafty Assistant — CRM Actions mode: tell Crafty to add leads, update bookings, log payments, and query revenue in plain English' },
      { status: 'done', text: 'Paste DM → Crafty parses it — copy-paste a raw Messenger inquiry, Crafty extracts the details and creates the lead instantly, no form needed' },
      { status: 'done', text: 'Cold Lead Alert widget — see at a glance which leads have gone quiet, color-coded by days since last activity' },
      { status: 'done', text: 'Convert lead to booking via Crafty — one chat message closes the deal: Crafty auto-fills event details from the lead and creates the booking' },
      { status: 'done', text: 'Revenue dashboard card — confirmed revenue, collected, and outstanding balance shown on the main dashboard every month' },
      { status: 'planned', text: 'Activity timeline UI — log calls, notes, and follow-ups directly on the lead detail page, with full interaction history' },
      { status: 'planned', text: 'Kanban board view — drag-and-drop lead cards across pipeline stages' },
      { status: 'planned', text: 'Dashboard charts — conversion rate, monthly booking trends, lead source breakdown' },
      { status: 'planned', text: 'Payments redesign — invoice status cards (Unpaid, Paid, Overdue, Total Revenue)' },
      { status: 'planned', text: 'Crafty AI training — configure personality, packages, and pricing from the app (no code required)' },
      { status: 'planned', text: 'Open beta — remove invite code, allow self-serve signups' },
    ],
  },
  {
    label: 'Sprint 3 — August 2026',
    status: 'future',
    color: '#a78bfa',
    items: [
      { status: 'planned', text: 'Booking confirmation smart link — one link sent to client: they see event details, agree to terms, and see GCash payment info. Confirmation auto-creates the booking.' },
      { status: 'planned', text: 'SMS follow-up via Semaphore — automated SMS reminders to quiet leads (₱0.50/SMS), since Filipino clients respond better to SMS than email' },
      { status: 'planned', text: 'AI next-action suggestions — rule-based badges per lead: "Event in 2 weeks, still unbooked — follow up now"' },
      { status: 'planned', text: 'GCash / PayMongo payment links — auto-generate a payment link per booking; webhook auto-marks deposit paid when client pays' },
      { status: 'planned', text: 'Unified conversations inbox — all Messenger threads in one place' },
      { status: 'planned', text: 'Custom package builder — name, price, inclusions, add-ons' },
      { status: 'planned', text: 'Booking contracts — digital contract with client e-sign acknowledgment attached to each booking' },
      { status: 'planned', text: 'Team mode — add staff members with role-based access' },
    ],
  },
  {
    label: 'Future',
    status: 'future',
    color: '#4a4a6a',
    items: [
      { status: 'idea', text: 'Client portal — clients view their booking, download their invoice, and see payment status without contacting you' },
      { status: 'idea', text: 'Instagram DM bot — alternative AI intake channel while Messenger API approval is pending' },
      { status: 'idea', text: 'Facebook Ads API integration — real spend, CPC, CTR, ROI per campaign' },
      { status: 'idea', text: 'AI-generated follow-up scripts based on lead history and event type' },
      { status: 'idea', text: 'Mobile app (iOS + Android) via React Native' },
      { status: 'idea', text: 'White-label — resell Crafty CRM under your own brand' },
    ],
  },
]

const statusStyles: Record<string, { label: string; color: string; bg: string }> = {
  done:    { label: 'Done',    color: '#34d399', bg: 'rgba(16,185,129,0.1)' },
  planned: { label: 'Planned', color: '#a5b4fc', bg: 'rgba(99,102,241,0.1)' },
  idea:    { label: 'Idea',    color: '#9ca3af', bg: 'rgba(156,163,175,0.08)' },
}

export default function RoadmapPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 pt-28 pb-20">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-white mb-2">Roadmap</h1>
        <p style={{ color: '#6b7280' }}>What we've built and where we're going. Updated as we ship.</p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-12">
        {Object.entries(statusStyles).map(([key, s]) => (
          <span key={key} className="text-xs px-2.5 py-1 rounded-full font-medium"
            style={{ background: s.bg, color: s.color }}>
            {s.label}
          </span>
        ))}
      </div>

      <div className="space-y-10">
        {quarters.map((q) => (
          <div key={q.label} className="relative pl-6 border-l" style={{ borderColor: '#1e1e2e' }}>
            {/* Dot */}
            <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full"
              style={{ background: q.status === 'current' ? q.color : '#1e1e2e', border: `2px solid ${q.color}` }} />

            <div className="mb-4">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-lg font-bold text-white">{q.label}</span>
                {q.status === 'current' && (
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ background: 'rgba(16,185,129,0.15)', color: '#10b981' }}>
                    In progress
                  </span>
                )}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
              {q.items.map((item, i) => {
                const s = statusStyles[item.status]
                return (
                  <div key={i} className="flex items-start gap-3 px-4 py-3"
                    style={{ borderTop: i > 0 ? '1px solid #1a1a28' : 'none' }}>
                    <span className="text-xs px-1.5 py-0.5 rounded font-medium shrink-0 mt-0.5"
                      style={{ background: s.bg, color: s.color }}>{s.label}</span>
                    <p className="text-sm" style={{ color: item.status === 'done' ? '#6b7280' : '#9ca3af' }}>
                      {item.status === 'done' && <span className="line-through opacity-60">{item.text}</span>}
                      {item.status !== 'done' && item.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Feedback CTA */}
      <div className="mt-14 rounded-2xl p-6 text-center" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
        <p className="font-semibold text-white mb-1">Have a feature request?</p>
        <p className="text-sm mb-4" style={{ color: '#6b7280' }}>
          We're building Crafty CRM based on real feedback from Filipino service businesses.
        </p>
        <a href="mailto:jamesignacio255@gmail.com"
          className="inline-block text-sm px-5 py-2 rounded-xl font-medium text-white transition-all hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
          Send feedback →
        </a>
      </div>
    </div>
  )
}
