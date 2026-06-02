const quarters = [
  {
    label: 'Now — Beta',
    status: 'done',
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
    label: 'Sprint 2 — June 2026',
    status: 'done',
    color: '#6366f1',
    items: [
      { status: 'done', text: 'Crafty Assistant — CRM Actions mode: tell Crafty to add leads, update bookings, log payments, and query revenue in plain English' },
      { status: 'done', text: 'Paste DM → Crafty parses it — copy-paste a raw Messenger inquiry, Crafty extracts the details and creates the lead instantly, no form needed' },
      { status: 'done', text: 'Cold Lead Alert widget — see at a glance which leads have gone quiet, color-coded by days since last activity' },
      { status: 'done', text: 'Convert lead to booking via Crafty — one chat message closes the deal: Crafty auto-fills event details from the lead and creates the booking' },
      { status: 'done', text: 'Revenue dashboard card — confirmed revenue, collected, and outstanding balance shown on the main dashboard every month' },
      { status: 'done', text: 'Activity timeline UI — log calls, notes, and follow-ups directly on the lead detail page, with full interaction history' },
      { status: 'done', text: 'Kanban board view — drag-and-drop lead cards across pipeline stages' },
      { status: 'done', text: 'Dashboard charts — bookings per month bar chart and lead source donut chart' },
      { status: 'done', text: 'Booking confirmation smart link — shareable public page with event details, payment breakdown, GCash info, and terms' },
      { status: 'done', text: 'SMS follow-up via Semaphore — automated Taglish SMS to leads that have a phone number and go quiet' },
      { status: 'done', text: 'Open beta ready — delete INVITE_CODE env var in Vercel to open signups publicly' },
      { status: 'done', text: 'AI next-action badges — rule-based label on each lead in list, mobile, and kanban: "Event in Xd", "Follow up now", "First contact needed", "Event passed"' },
      { status: 'done', text: 'Payments redesign — Overdue alert banner on bookings page + payment status badge per booking (Unpaid / Deposit Paid / Fully Paid / Overdue)' },
      { status: 'done', text: 'Custom package builder — click to select base package + add-ons, total auto-calculates, flows into invoice and Crafty' },
      { status: 'done', text: 'Crafty AI training — configure packages and pricing from the app via /settings; Crafty reads from DB on every request, no code change needed' },
    ],
  },
  {
    label: 'Sprint 3 — June 2026',
    status: 'done',
    color: '#a78bfa',
    items: [
      { status: 'done', text: 'Balance Due This Week alert — dashboard card listing upcoming events with unpaid balances ≤7 days away' },
      { status: 'done', text: 'Swipe-to-action on mobile lead cards — right=contacted, left=archive, 4s undo snackbar' },
      { status: 'done', text: 'Onboarding checklist — 3-step card on dashboard after first lead, disappears when complete' },
      { status: 'done', text: 'Stage hints on lead detail — contextual next-action text per pipeline stage' },
      { status: 'done', text: 'Taglish Script Pack — free /scripts page with 5 copy-ready Messenger scripts, no signup' },
      { status: 'done', text: 'Mobile nav — backdrop-blur, safe-area-inset, theme-aware background, active tab indicator' },
      { status: 'done', text: 'Optimistic UI — Mark Paid, stage changes, activity logging all instant. No DB wait.' },
      { status: 'done', text: 'PayMongo payment links — built and ready; activate when PayMongo account is set up' },
      { status: 'done', text: 'Booking contracts + e-sign — client opens a link, types name, taps agree. Timestamp stored.' },
      { status: 'done', text: 'Facebook Login — button live on login + signup. Activate by configuring Supabase OAuth.' },
      { status: 'done', text: 'Team mode — invite staff via link. Staff see Leads + Bookings only.' },
      { status: 'done', text: 'Messenger inbox — all conversations in one view, split by needs-reply vs Crafty-handled' },
    ],
  },
  {
    label: 'Sprint 4 — In Progress',
    status: 'current',
    color: '#06b6d4',
    items: [
      { status: 'planned', text: 'Personalized onboarding — AHA moment first: new users paste a real client DM and watch Crafty extract the details line-by-line before any questions are asked. Then 3 quick questions (name, business name, business type) to tailor the app.' },
      { status: 'planned', text: 'Multi-industry support — Crafty CRM now fits any Filipino service business, not just photobooth. 7 business types (photobooth, printing, travel & tours, graphic design, catering, beauty & wellness, other) each pre-load industry-standard package templates with real PH pricing.' },
      { status: 'planned', text: 'First-session companion — for the first 30 minutes, Crafty cheers you on like a friend (in Taglish) as you add your first leads, change stages, and make your first booking. Goes quiet after. Not a game — just encouragement while you learn.' },
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

      {/* Beta Readiness Card */}
      <div className="rounded-2xl p-6 mb-12" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
        <div className="flex items-center justify-between mb-3 flex-wrap gap-3">
          <p className="text-sm font-semibold text-white">Open Beta Readiness</p>
          <span className="text-2xl font-bold" style={{ color: '#a78bfa' }}>90%</span>
        </div>
        <div className="h-2 rounded-full overflow-hidden mb-5" style={{ background: '#1e1e2e' }}>
          <div className="h-full rounded-full" style={{ width: '90%', background: 'linear-gradient(90deg, #6366f1, #a78bfa)' }} />
        </div>
        <div className="space-y-2 mb-5">
          {[
            { label: 'Core CRM — leads, bookings, invoices, payments', done: true },
            { label: 'Crafty AI assistant (paste DM, CRM actions, revenue queries)', done: true },
            { label: 'Mobile-first layout — bottom nav, swipe, kanban, onboarding', done: true },
            { label: 'Dashboard alerts — balance due, cold leads, today\'s actions', done: true },
            { label: 'Optimistic UI — actions feel instant on slow PH networks', done: false },
            { label: 'Facebook Login — blocked until OAuth app credentials are set up', done: false },
            { label: 'Crafty Messenger bot — blocked until Meta BIR approval', done: false },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <span className="shrink-0 mt-0.5 text-xs font-bold" style={{ color: item.done ? '#34d399' : '#4a4a6a' }}>
                {item.done ? '✓' : '○'}
              </span>
              <p className="text-sm" style={{ color: item.done ? '#6b7280' : '#9ca3af', textDecoration: item.done ? 'line-through' : 'none', opacity: item.done ? 0.7 : 1 }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
        <p className="text-xs leading-relaxed" style={{ color: '#4a4a6a' }}>
          All planned features are built and shipped. The remaining 10% is external: Meta BIR approval for the Messenger bot, and a 15-minute Facebook OAuth setup for Facebook Login. Core CRM is production-ready — remove the invite code to open beta now.
        </p>
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
              style={{ background: (q.status === 'current' || q.status === 'done') ? q.color : '#1e1e2e', border: `2px solid ${q.color}` }} />

            <div className="mb-4">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-lg font-bold text-white">{q.label}</span>
                {q.status === 'current' && (
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ background: 'rgba(99,102,241,0.15)', color: '#a5b4fc' }}>
                    In progress
                  </span>
                )}
                {q.status === 'done' && (
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ background: 'rgba(16,185,129,0.15)', color: '#10b981' }}>
                    Shipped ✓
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
