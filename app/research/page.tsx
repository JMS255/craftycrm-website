'use client'

import { useState } from 'react'

type Tab = 'features' | 'ux' | 'ui'

const featureSections = [
  {
    label: '🔥 Build Next',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.08)',
    border: 'rgba(239,68,68,0.2)',
    desc: 'Highest ROI — each under 1 week, maximum pain reduction',
    items: [
      {
        title: 'Paste DM → Crafty creates the lead',
        impact: 'High', difficulty: 'Easy',
        body: 'Copy-paste a raw Messenger inquiry. Crafty extracts name, event type, date, guest count, package interest, creates the lead instantly. Eliminates the #1 daily friction: DM → CRM gap.',
        status: 'done',
      },
      {
        title: 'Cold Lead Alert widget',
        impact: 'High', difficulty: 'Easy',
        body: 'Banner on leads page flagging leads in Contacted/Quoted/Negotiating silent for 5+ days. Color-coded: Warm (5d), Cold (7d), Very Cold (14d). You can\'t fix what you can\'t see.',
        status: 'done',
      },
      {
        title: 'convert_lead_to_booking Crafty tool',
        impact: 'High', difficulty: 'Easy',
        body: '"Convert Maria Santos to a booking, she paid her deposit." Crafty pulls event details from the lead, creates the booking, marks deposit paid, updates lead status. One message closes the deal.',
        status: 'done',
      },
      {
        title: 'Revenue dashboard card',
        impact: 'Medium', difficulty: 'Easy',
        body: 'Confirmed / Collected / Outstanding for the current month, always visible on the dashboard. No asking Crafty — the number is just there.',
        status: 'done',
      },
      {
        title: 'AI next-action badges per lead',
        impact: 'High', difficulty: 'Easy',
        body: 'Rule-based badge on every lead: "⚡ Event in 3d — confirm!", "🔔 Follow up now", "📞 First contact needed", "⚠ Event passed — close it". In list, mobile cards, and kanban.',
        status: 'done',
      },
    ],
  },
  {
    label: '⚡ Build Soon',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.2)',
    desc: 'High-value, 1–3 weeks each',
    items: [
      {
        title: 'Kanban board view',
        impact: 'High', difficulty: 'Medium',
        body: 'Drag-and-drop pipeline board — 6 columns (New → Booked). HoneyBook\'s visual pipeline is the #1 reason photographers use it daily. Visual = habitual.',
        status: 'done',
      },
      {
        title: 'Booking confirmation smart link',
        impact: 'High', difficulty: 'Medium',
        body: 'One shareable link: client sees event details, payment breakdown, GCash info, cancellation terms. Booking auto-created when they confirm. Removes 4 manual steps per sale.',
        status: 'done',
      },
      {
        title: 'Semaphore SMS follow-up',
        impact: 'High', difficulty: 'Easy',
        body: 'Automated Taglish SMS to leads with phone numbers. Filipino clients respond far better to SMS than email. ₱0.50/SMS — 50 messages/month = ₱25 total.',
        status: 'done',
      },
      {
        title: 'Custom package builder',
        impact: 'High', difficulty: 'Medium',
        body: 'Click a package card, toggle add-ons, total auto-calculates. Flows into booking record and invoice line items. Crafty uses exact package prices by name.',
        status: 'done',
      },
      {
        title: 'Dashboard charts',
        impact: 'Medium', difficulty: 'Medium',
        body: 'Bar chart of bookings per month (see your peak seasons) + lead source donut. Your May data: 32 leads, 14 booked, 44% rate. Visualizing over time shows when to push ads.',
        status: 'done',
      },
      {
        title: 'GCash / PayMongo payment links',
        impact: 'High', difficulty: 'Medium',
        body: 'Auto-generate a real GCash payment link per booking. Webhook marks deposit paid when client pays. No more manually checking GCash and updating the record.',
        status: 'planned',
      },
    ],
  },
  {
    label: '💡 Future Ideas',
    color: '#6b7280',
    bg: 'rgba(107,114,128,0.06)',
    border: 'rgba(107,114,128,0.15)',
    desc: 'High potential, requires more scoping',
    items: [
      {
        title: 'Client portal',
        impact: 'Medium', difficulty: 'Hard',
        body: 'Client-facing page: view booking, download invoice, see payment status. Saves 5 min per "can you resend?" inquiry.',
        status: 'planned',
      },
      {
        title: 'Instagram DM bot',
        impact: 'High', difficulty: 'Hard',
        body: 'Alternative to Messenger while Meta API approval is pending. Separate approval path, potentially faster.',
        status: 'idea',
      },
      {
        title: 'AI-generated follow-up scripts',
        impact: 'Medium', difficulty: 'Medium',
        body: 'Crafty generates a custom follow-up message based on the lead\'s history, event type, and how long they\'ve been quiet.',
        status: 'idea',
      },
      {
        title: 'Booking contracts + e-sign',
        impact: 'Medium', difficulty: 'Medium',
        body: 'Client gets a link, checks "I agree," timestamp stored. Prevents cancellation disputes. HoneyBook\'s most-cited feature.',
        status: 'planned',
      },
      {
        title: 'Mobile app (React Native)',
        impact: 'High', difficulty: 'Hard',
        body: 'Native iOS + Android app. Push notifications for new leads, payment reminders. Long-term goal.',
        status: 'idea',
      },
      {
        title: 'White-label reseller',
        impact: 'High', difficulty: 'Hard',
        body: 'Let other developers resell Crafty CRM under their own brand for their own niche service businesses.',
        status: 'idea',
      },
    ],
  },
]

const uxSections = [
  {
    label: '🔥 Critical',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.08)',
    border: 'rgba(239,68,68,0.2)',
    desc: 'Users will churn without these — 40–60% of SaaS users never return after session 1',
    items: [
      {
        title: 'C1 — Guided first-win onboarding checklist',
        impact: 'High', difficulty: 'Medium',
        body: 'When a new user logs in with no data: show a 3-step card pinned to the dashboard — "Add your first lead · Set up your package · Add your business name." Disappears permanently when all 3 are done. Research: checklists increase completion rates ~60%.',
      },
      {
        title: 'C2 — Pulse animation + tooltip on Crafty AI',
        impact: 'High', difficulty: 'Easy',
        body: 'First 3 sessions: the AI button pulses. First login: a tooltip says "Hi! Type \'Add lead: Juan Santos, photobooth inquiry\' and I\'ll handle it." Show 3 example prompt chips when chat opens. If users don\'t find Crafty on day 1, they default to manual entry and churn.',
      },
      {
        title: 'C3 — Mobile bottom tab bar (4 tabs)',
        impact: 'High', difficulty: 'Medium',
        body: 'Fixed bottom navigation: Dashboard · Leads · Bookings · + (Quick Add). Current sidebar is top-left — the hardest thumb zone on a phone. 75% of phone interactions are thumb-driven. Moving to bottom improves task completion by 40%. The + tab opens a bottom sheet: "Add Lead, Add Booking, Log Payment."',
      },
      {
        title: 'C4 — Swipe-to-action on lead cards (mobile)',
        impact: 'High', difficulty: 'Medium',
        body: 'Swipe right = "Mark followed up." Swipe left = "Archive." Undo snackbar for 4 seconds. A tap takes 100ms. Finding kebab menu + reading + tapping = 5x slower. Filipino users on budget Android phones feel this acutely.',
      },
      {
        title: 'C5 — Single-column kanban on mobile',
        impact: 'High', difficulty: 'Medium',
        body: 'On phones: one column at a time with a stage tab bar at the top. "Move to..." button replaces drag-and-drop. Drag-and-drop is a desktop paradigm — unreliable and frustrating on touch screens. Desktop stays unchanged.',
      },
      {
        title: 'C6 — Facebook Login as primary sign-in',
        impact: 'High', difficulty: 'Medium',
        body: 'Make "Continue with Facebook" the biggest button on sign-in, above the email form. "I forgot my password" is a hard churn event for non-technical users. Your users live in Facebook — SSO removes 90% of sign-in friction.',
      },
    ],
  },
  {
    label: '⚡ High Impact',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.2)',
    desc: 'Build these next session — each meaningfully improves daily usage',
    items: [
      {
        title: 'H1 — Custom empty states per screen',
        impact: 'High', difficulty: 'Easy',
        body: 'Every empty screen needs: illustration + explanation + one specific CTA. Leads empty: "Start by pasting a Messenger inquiry →". Bookings empty: "Convert a lead to create a booking →". Research shows good empty states boost activation by ~60%.',
      },
      {
        title: 'H2 — Promote "Paste DM" as the #1 entry point',
        impact: 'High', difficulty: 'Easy',
        body: 'The feature exists and is perfect for this audience — but it\'s hidden. Empty leads state → "Paste a Messenger Inquiry." Dashboard banner → "Got a DM? Paste it here." Mobile + button → "Paste DM Inquiry" first. Make it the path of least resistance.',
      },
      {
        title: 'H3 — "Today\'s Actions" card on dashboard',
        impact: 'High', difficulty: 'Medium',
        body: 'Max 3 items, priority-sorted: "Follow up: Juan (3d cold) · Event tomorrow: Reyes Wedding · Payment due: Santos ₱5,000." Converts the dashboard from a data display into a to-do driver. For non-technical users, a CRM that tells them what to do is 10x more valuable than one that shows data.',
      },
      {
        title: 'H4 — Micro-confirmation animations',
        impact: 'Med–High', difficulty: 'Easy',
        body: 'Stage change → color flash. Payment logged → green checkmark. Booking confirmed → small confetti burst (1 sec). All under 400ms. Non-technical users assume the app is broken if it saves silently. Animations make it feel real and responsive.',
      },
      {
        title: 'H5 — Progressive disclosure on forms',
        impact: 'Med–High', difficulty: 'Easy',
        body: 'Lead form: show only 4 fields by default (Name, Event Type, Date, Contact). "Add more details +" expands the rest. A 10-field form on first view is a churn trigger. A 4-field form is an invitation. Nielsen Norman Group: progressive disclosure improves learnability, efficiency, and error rate.',
      },
      {
        title: 'H6 — Follow-up message templates in Taglish',
        impact: 'High', difficulty: 'Easy–Med',
        body: 'When tapping "Follow Up" on a lead, show 2–3 ready-to-copy Taglish message templates with an "Open in Messenger" deep-link button. Bridges the gap between "marked followed up in Craftifyle" and "actually sent the message."',
      },
      {
        title: 'H7 — Optimistic UI / offline resilience',
        impact: 'High', difficulty: 'Hard',
        body: 'For common actions (log payment, stage change), update UI immediately then sync in the background. Show "Syncing..." indicator if offline. Philippine mobile networks in provincial cities are intermittent — 2-second lag on "Mark Paid" = user taps again = duplicate.',
      },
    ],
  },
  {
    label: '📋 Next Session',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.2)',
    desc: 'Deliberately skipped — requires external setup or more planning',
    items: [
      {
        title: 'C4 — Swipe-to-action on lead cards',
        impact: 'High', difficulty: 'Medium',
        body: 'Swipe right = "Mark followed up." Swipe left = "Archive." Undo snackbar for 4 seconds. Skipped this session — needs custom swipe gesture handling (~60 min).',
      },
      {
        title: 'C6 — Facebook Login as primary sign-in',
        impact: 'High', difficulty: 'Medium',
        body: 'Make "Continue with Facebook" the primary button above the email form. Requires Supabase OAuth config + Facebook app setup. Cannot be done without external app credentials.',
      },
      {
        title: 'H7 — Optimistic UI / offline resilience',
        impact: 'High', difficulty: 'Hard',
        body: 'Update UI immediately on action, sync in background. Show "Syncing..." for offline edits. Full refactor of data layer — 3+ hours minimum.',
      },
      {
        title: 'N1 — Daily streak / habit gamification',
        impact: 'Medium', difficulty: 'Easy',
        body: '"7-day streak 🔥" counter. Monthly summary card. Proven retention mechanic.',
      },
      {
        title: 'N3 — Revenue at risk card',
        impact: 'Medium', difficulty: 'Easy',
        body: 'Dashboard card: "At Risk: ₱X" — total value of cold leads. Reframe cold leads as money about to walk out the door.',
      },
      {
        title: 'N4 — Booking image export',
        impact: 'Medium', difficulty: 'Medium',
        body: '1080×1080 branded booking summary card to share on Facebook or send to clients via Messenger.',
      },
      {
        title: 'N5 — Taglish UI copy option',
        impact: 'Medium', difficulty: 'Medium',
        body: 'Settings toggle: English / Filipino. Replace 20–30 key labels with natural Taglish.',
      },
      {
        title: 'N6 — Viber + WhatsApp deep links',
        impact: 'Medium', difficulty: 'Easy',
        body: 'One-tap "open in Viber/WhatsApp with client number pre-filled" on follow-up templates.',
      },
    ],
  },
  {
    label: '💡 Nice to Have',
    color: '#6b7280',
    bg: 'rgba(107,114,128,0.06)',
    border: 'rgba(107,114,128,0.15)',
    desc: 'Future polish — meaningful but not blocking retention',
    items: [
      {
        title: 'N1 — Daily streak / habit gamification',
        impact: 'Medium', difficulty: 'Easy',
        body: '"7-day streak! You\'ve updated leads 7 days in a row 🔥." Monthly summary: "12 leads, 4 bookings, ₱48,500 revenue." Streak mechanics are proven behavior-change patterns (Duolingo, Snapchat).',
      },
      {
        title: 'N2 — Package price visible on lead cards',
        impact: 'Medium', difficulty: 'Easy',
        body: 'Show the quoted package and price directly on lead cards in list and kanban. No need to open the record to see what\'s at stake.',
      },
      {
        title: 'N3 — "Revenue at Risk" summary card',
        impact: 'Medium', difficulty: 'Easy',
        body: 'Dashboard card: "At Risk: ₱X" — total quoted value of cold leads. "Praktikalidad" — showing ₱X you could lose is more motivating than abstract pipeline health metrics.',
      },
      {
        title: 'N4 — Booking image export (shareable card)',
        impact: 'Medium', difficulty: 'Medium',
        body: '1080×1080 branded booking summary card. Client name, event date, package, total. Users share it on Facebook or send to the client via Messenger. Creates organic word-of-mouth for Craftifyle.',
      },
      {
        title: 'N5 — Taglish UI copy option',
        impact: 'Medium', difficulty: 'Medium',
        body: 'Settings toggle: English / Filipino. Replaces 20–30 key labels: "Add Lead" → "Mag-add ng Lead", "Cold Lead Alert" → "Matagal nang hindi nag-reply!". Makes the app feel like it speaks to them, not at them.',
      },
      {
        title: 'N6 — Viber + WhatsApp deep links on follow-up',
        impact: 'Medium', difficulty: 'Easy',
        body: 'One-tap "open in Viber/WhatsApp with client\'s number pre-filled." Viber has strong PH user base; WhatsApp growing in SME segment.',
      },
      {
        title: 'N7 — Crafty quick-prompt chips on dashboard',
        impact: 'Medium', difficulty: 'Easy',
        body: 'Horizontal scrollable chip row: "Add a lead from DM · Log a payment · What\'s due this week? · Draft a follow-up." Tapping pre-fills Crafty chat. Educates users about AI capabilities without requiring them to read docs.',
      },
    ],
  },
]

const statusStyles: Record<string, { label: string; color: string; bg: string }> = {
  done:    { label: 'Done',    color: '#34d399', bg: 'rgba(16,185,129,0.1)' },
  planned: { label: 'Planned', color: '#a5b4fc', bg: 'rgba(99,102,241,0.1)' },
  idea:    { label: 'Idea',    color: '#9ca3af', bg: 'rgba(156,163,175,0.08)' },
}

const impactStyles: Record<string, { color: string; bg: string }> = {
  'High':     { color: '#34d399', bg: 'rgba(16,185,129,0.1)' },
  'Med–High': { color: '#60a5fa', bg: 'rgba(59,130,246,0.1)' },
  'Medium':   { color: '#fbbf24', bg: 'rgba(234,179,8,0.1)' },
  'Low':      { color: '#9ca3af', bg: 'rgba(156,163,175,0.08)' },
}

const diffStyles: Record<string, { color: string }> = {
  'Easy':     { color: '#34d399' },
  'Easy–Med': { color: '#60a5fa' },
  'Medium':   { color: '#fbbf24' },
  'Med–High': { color: '#f97316' },
  'Hard':     { color: '#f87171' },
}

export default function ResearchPage() {
  const [tab, setTab] = useState<Tab>('features')

  return (
    <div className="max-w-3xl mx-auto px-5 pt-28 pb-20">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Research & Insights</h1>
        <p style={{ color: '#6b7280' }}>
          Deep analysis from 40+ sources informing Craftifyle CRM's roadmap and UX decisions.
          Last updated: June 1, 2026.
        </p>
      </div>

      {/* Tab switcher */}
      <div className="flex rounded-xl overflow-hidden border mb-10" style={{ borderColor: '#1e1e2e' }}>
        <button
          onClick={() => setTab('features')}
          className="flex-1 py-2.5 text-sm font-medium transition-colors"
          style={{
            background: tab === 'features' ? 'rgba(99,102,241,0.15)' : 'transparent',
            color: tab === 'features' ? '#a5b4fc' : '#6b7280',
            borderRight: '1px solid #1e1e2e',
          }}
        >
          Feature Research
        </button>
        <button
          onClick={() => setTab('ux')}
          className="flex-1 py-2.5 text-sm font-medium transition-colors"
          style={{
            background: tab === 'ux' ? 'rgba(99,102,241,0.15)' : 'transparent',
            color: tab === 'ux' ? '#a5b4fc' : '#6b7280',
            borderRight: '1px solid #1e1e2e',
          }}
        >
          UX Research
        </button>
        <button
          onClick={() => setTab('ui')}
          className="flex-1 py-2.5 text-sm font-medium transition-colors"
          style={{
            background: tab === 'ui' ? 'rgba(99,102,241,0.15)' : 'transparent',
            color: tab === 'ui' ? '#a5b4fc' : '#6b7280',
          }}
        >
          UI Design
        </button>
      </div>

      {/* Feature Research */}
      {tab === 'features' && (
        <div>
          <div className="rounded-2xl p-5 mb-8" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
            <p className="text-sm font-semibold text-white mb-2">Research basis</p>
            <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
              Based on analysis of HoneyBook, Dubsado, 17hats, and 2025 CRM automation research.
              Philippine SME digital adoption data, GCash/Semaphore API capabilities, and the actual codebase.
              The core insight: features that exist <em>at the exact moment of a business action</em> are the ones that get used daily.
            </p>
            <p className="text-sm mt-3 leading-relaxed" style={{ color: '#9ca3af' }}>
              <strong className="text-white">Key finding:</strong> The #1 bottleneck is not missing features — it's the friction between
              "DM comes in" and "lead exists in CRM." The Philippine market gap: 77% digital tool awareness vs. 16% actual usage.
              The best product for Filipino service businesses is the one with the lowest friction path from inquiry to system.
            </p>
          </div>

          <div className="space-y-10">
            {featureSections.map(section => (
              <div key={section.label}>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-xl font-bold text-white">{section.label}</h2>
                </div>
                <p className="text-sm mb-5" style={{ color: '#6b7280' }}>{section.desc}</p>
                <div className="rounded-2xl overflow-hidden" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
                  {section.items.map((item, i) => (
                    <div key={item.title} className="px-5 py-4" style={{ borderTop: i > 0 ? '1px solid #1a1a28' : 'none' }}>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <div className="flex items-center gap-1.5 shrink-0">
                          {item.status && statusStyles[item.status] && (
                            <span className="text-xs px-1.5 py-0.5 rounded font-medium"
                              style={{ background: statusStyles[item.status].bg, color: statusStyles[item.status].color }}>
                              {statusStyles[item.status].label}
                            </span>
                          )}
                          <span className="text-xs px-1.5 py-0.5 rounded font-medium"
                            style={{ background: (impactStyles[item.impact] || impactStyles['Medium']).bg, color: (impactStyles[item.impact] || impactStyles['Medium']).color }}>
                            {item.impact} impact
                          </span>
                          <span className="text-xs font-medium" style={{ color: (diffStyles[item.difficulty] || diffStyles['Medium']).color }}>
                            {item.difficulty}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* UX Research */}
      {tab === 'ux' && (
        <div>
          <div className="rounded-2xl p-5 mb-8" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
            <p className="text-sm font-semibold text-white mb-2">Research basis</p>
            <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
              Based on 20+ sources: Nielsen Norman Group, Smashing Magazine, Pixelmojo (PH UX),
              HoneyBook/Dubsado/Notion onboarding patterns, Filipino mobile behavior data, and SaaS retention science.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { stat: '88%', label: 'of PH web traffic is mobile — mobile IS the computer for your users' },
                { stat: '40–60%', label: 'of SaaS users who sign up never return after the first login' },
                { stat: '5 min', label: 'window to deliver the "aha moment" — or they churn forever' },
                { stat: '75%', label: 'of phone interactions are thumb-driven — top-left menus are the hardest zone' },
              ].map(s => (
                <div key={s.stat} className="rounded-xl p-3" style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.15)' }}>
                  <p className="text-xl font-bold" style={{ color: '#818cf8' }}>{s.stat}</p>
                  <p className="text-xs mt-1 leading-relaxed" style={{ color: '#9ca3af' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            {uxSections.map(section => (
              <div key={section.label}>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-xl font-bold text-white">{section.label}</h2>
                </div>
                <p className="text-sm mb-5" style={{ color: '#6b7280' }}>{section.desc}</p>
                <div className="rounded-2xl overflow-hidden" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
                  {section.items.map((item, i) => (
                    <div key={item.title} className="px-5 py-4" style={{ borderTop: i > 0 ? '1px solid #1a1a28' : 'none' }}>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="text-xs px-1.5 py-0.5 rounded font-medium"
                            style={{ background: (impactStyles[item.impact] || impactStyles['Medium']).bg, color: (impactStyles[item.impact] || impactStyles['Medium']).color }}>
                            {item.impact} impact
                          </span>
                          <span className="text-xs font-medium" style={{ color: (diffStyles[item.difficulty] || diffStyles['Medium']).color }}>
                            {item.difficulty}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Underlying principle */}
          <div className="mt-10 rounded-2xl p-6" style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}>
            <p className="text-sm font-semibold text-white mb-2">The underlying principle</p>
            <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
              Craftifyle already has the right features. Crafty AI, DM paste, smart badges, package builder —
              these are exactly what Filipino service business owners need. The gap is <strong className="text-white">discovery, mobile ergonomics, and the first 5 minutes.</strong> Fix those three things and retention follows.
              Every extra tap, every empty screen without instructions, every form with 8 fields, every hamburger menu in the
              top corner is a churn trigger for this audience. The product has to meet them exactly where they are —
              on their phone, in one hand, coming from a Facebook group, not knowing what a "pipeline stage" is.
            </p>
          </div>
        </div>
      )}

      {/* UI Design Research */}
      {tab === 'ui' && (
        <div className="space-y-10">

          {/* Core Problem */}
          <div className="rounded-2xl p-5" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
            <p className="text-sm font-semibold text-white mb-2">The Core Problem</p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#9ca3af' }}>
              Two issues — not one. First: <strong className="text-white">token inconsistency</strong> — half the app uses hardcoded Tailwind
              (<code style={{ color: '#a5b4fc' }}>bg-white</code>, <code style={{ color: '#a5b4fc' }}>text-gray-900</code>, <code style={{ color: '#a5b4fc' }}>border-gray-200</code>)
              while newer pages use CSS variables. Pages look built by different people.
              Second: <strong className="text-white">no design identity</strong> — the indigo palette works but is identical to every other Tailwind app. Nothing says "Craftifyle."
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
              <strong className="text-white">Fix Phase 1 (token unification) = 4 hours = 60% of the visual improvement.</strong> Everything else is polish on top.
            </p>
          </div>

          {/* Redesign Phases */}
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Redesign Phases</h2>
            <p className="text-sm mb-5" style={{ color: '#6b7280' }}>In this exact order — maximum impact per hour spent</p>
            <div className="rounded-2xl overflow-hidden" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
              {[
                { phase: '1', title: 'CSS Token Unification', time: '4 hrs', impact: 'Enormous', body: 'Kill every hardcoded bg-white, text-gray-900, border-gray-200. Replace with CSS variables. Creates instant consistency across all pages. Foundation for everything else.', color: '#ef4444' },
                { phase: '2', title: 'Sidebar Redesign', time: '4 hrs', impact: 'High', body: 'New nav item active state (left 2px accent bar + accent-subtle bg + text brightens). Section labels as 11px uppercase tracked. Surface color separate from page. Bottom user row.', color: '#f97316' },
                { phase: '3', title: 'Card System', time: '2 hrs', impact: 'High', body: 'One base card class: surface-100 background, border-default border, 14px radius, inset 0 1px 0 rgba(255,255,255,0.06) inner glow. Kill all rounded-xl (12px) and rounded-2xl (16px) inconsistencies.', color: '#fbbf24' },
                { phase: '4', title: 'Table Refinement', time: '3 hrs', impact: 'High', body: 'Remove all vertical cell borders. Horizontal row separators only. Row hover = surface-200 background. Action buttons hidden by default, appear on row hover. Sticky header with backdrop-blur.', color: '#10b981' },
                { phase: '5', title: 'Mobile Bottom Nav', time: '3 hrs', impact: 'High', body: '60px height + safe-area-inset. backdrop-blur. Proper 44×44px touch targets. Active = filled icon + accent color. Center tab as primary action.', color: '#6366f1' },
                { phase: '6', title: 'Typography Pass', time: '2 hrs', impact: 'Medium', body: 'Body text 15px (not 16px). Headings: weight 600, letter-spacing -0.015em. ALL CAPS labels: 11px weight 500 letter-spacing 0.08em. font-feature-settings: "calt", "liga", "kern" on base.', color: '#8b5cf6' },
                { phase: '7', title: 'Status Badge System', time: '1 hr', impact: 'Medium', body: 'Unified pill: muted background + matching text color + 9999px radius + px-2 py-0.5 text-xs font-medium. Apply to every status in every table and card.', color: '#a78bfa' },
                { phase: '8', title: 'Skeleton Loaders', time: '3 hrs', impact: 'Medium', body: 'Replace every spinner with a skeleton that matches the exact shape of the loading content. CSS animated pulse. No more spinning circles — that\'s 2015.', color: '#6b7280' },
              ].map((p, i) => (
                <div key={p.phase} className="px-5 py-4 flex gap-4" style={{ borderTop: i > 0 ? '1px solid #1a1a28' : 'none' }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                    style={{ background: p.color + '20', color: p.color }}>{p.phase}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <p className="text-sm font-semibold text-white">{p.title}</p>
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: p.color + '20', color: p.color }}>{p.time}</span>
                      <span className="text-xs font-medium" style={{ color: (impactStyles[p.impact] || impactStyles['Medium']).color }}>{p.impact} impact</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Color Palette */}
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Color Palette Specification</h2>
            <p className="text-sm mb-5" style={{ color: '#6b7280' }}>Exact hex values — implement these as CSS variables</p>
            <div className="space-y-4">
              {/* Accent shift */}
              <div className="rounded-2xl p-5" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#6b7280' }}>Accent — Shift to Warmer Violet</p>
                <p className="text-sm mb-3" style={{ color: '#9ca3af' }}>Move from raw Tailwind <code style={{ color: '#6366f1' }}>#6366f1</code> to <code style={{ color: '#7c6ff7' }}>#7c6ff7</code>. Same family, slightly warmer — looks intentional, not default.</p>
                <div className="flex gap-3 flex-wrap">
                  {[
                    { name: '--accent-primary', hex: '#7c6ff7', label: 'Brand' },
                    { name: '--accent-hover', hex: '#9589f9', label: 'Hover' },
                    { name: '--accent-muted', hex: 'rgba(124,111,247,0.15)', label: 'Ghost bg', display: '#7c6ff726' },
                    { name: '--accent-subtle', hex: 'rgba(124,111,247,0.08)', label: 'Selected', display: '#7c6ff714' },
                  ].map(c => (
                    <div key={c.name} className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg border" style={{ background: c.display || c.hex, borderColor: '#1e1e2e' }} />
                      <div>
                        <p className="text-xs font-mono" style={{ color: '#a5b4fc' }}>{c.hex}</p>
                        <p className="text-xs" style={{ color: '#6b7280' }}>{c.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Surface ladder */}
              <div className="rounded-2xl p-5" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#6b7280' }}>Dark Surface Ladder (5 levels — no shadows, borders only)</p>
                <div className="space-y-2">
                  {[
                    { name: 'Page bg', hex: '#09090f' },
                    { name: 'Card', hex: '#0f0f17' },
                    { name: 'Sidebar/elevated', hex: '#141420' },
                    { name: 'Hover state', hex: '#1a1a2a' },
                    { name: 'Active/selected', hex: '#1f1f33' },
                  ].map(s => (
                    <div key={s.name} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded" style={{ background: s.hex, border: '1px solid rgba(255,255,255,0.1)' }} />
                      <code className="text-xs" style={{ color: '#a5b4fc' }}>{s.hex}</code>
                      <span className="text-xs" style={{ color: '#6b7280' }}>{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Borders */}
              <div className="rounded-2xl p-5" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#6b7280' }}>Borders (opacity-based — works in both modes)</p>
                <div className="space-y-2">
                  {[
                    { name: '--border-subtle', val: 'rgba(255,255,255,0.05)', use: 'Card separators' },
                    { name: '--border-default', val: 'rgba(255,255,255,0.08)', use: 'Standard borders' },
                    { name: '--border-strong', val: 'rgba(255,255,255,0.14)', use: 'Inputs, focus' },
                    { name: '--border-emphasis', val: 'rgba(255,255,255,0.24)', use: 'Active/selected' },
                  ].map(b => (
                    <div key={b.name} className="flex items-center gap-3">
                      <code className="text-xs w-48 shrink-0" style={{ color: '#a5b4fc' }}>{b.name}</code>
                      <span className="text-xs" style={{ color: '#9ca3af' }}>{b.val}</span>
                      <span className="text-xs" style={{ color: '#6b7280' }}>{b.use}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Typography Scale</h2>
            <p className="text-sm mb-5" style={{ color: '#6b7280' }}>Keep Geist — fix the usage. Hierarchy through size, not weight.</p>
            <div className="rounded-2xl overflow-hidden" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
              {[
                { token: 'Display', size: '30px', weight: '600', ls: '-0.02em', use: 'Page titles (rare)' },
                { token: 'text-2xl', size: '24px', weight: '600', ls: '-0.015em', use: 'Section headings' },
                { token: 'text-xl', size: '20px', weight: '600', ls: '-0.01em', use: 'Card headers' },
                { token: 'text-base', size: '15px ⬅ not 16px', weight: '400', ls: '0', use: 'Body text — 15px is tighter, more premium' },
                { token: 'text-sm', size: '13px', weight: '400', ls: '0.005em', use: 'Labels, table cells' },
                { token: 'text-xs', size: '11px', weight: '500', ls: '0.04em + UPPERCASE', use: 'Badges, section labels, tags' },
              ].map((t, i) => (
                <div key={t.token} className="px-5 py-3 flex items-center gap-4" style={{ borderTop: i > 0 ? '1px solid #1a1a28' : 'none' }}>
                  <code className="text-xs w-20 shrink-0" style={{ color: '#a5b4fc' }}>{t.token}</code>
                  <span className="text-xs w-36 shrink-0" style={{ color: '#9ca3af' }}>{t.size} / w{t.weight}</span>
                  <span className="text-xs flex-1" style={{ color: '#6b7280' }}>{t.use}</span>
                </div>
              ))}
            </div>
            <p className="text-xs mt-3 px-1" style={{ color: '#6b7280' }}>
              Add to base CSS: <code style={{ color: '#a5b4fc' }}>font-feature-settings: "calt", "liga", "kern"</code> — enables Geist ligatures. Subtle but noticeable.
            </p>
          </div>

          {/* Border radius */}
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Border Radius System</h2>
            <p className="text-sm mb-4" style={{ color: '#6b7280' }}>3 tiers only. Consistency is the entire game.</p>
            <div className="rounded-2xl overflow-hidden" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
              {[
                { r: '6px', use: 'Badges, inputs, inner elements', rule: 'Kill rounded-lg (8px) on inputs' },
                { r: '10px', use: 'Buttons, small cards, tooltips', rule: '' },
                { r: '14px', use: 'All cards and panels', rule: 'Kill rounded-xl (12px) and rounded-2xl (16px)' },
                { r: '9999px', use: 'Pills, avatars, status dots', rule: '' },
              ].map((r, i) => (
                <div key={r.r} className="px-5 py-3 flex items-center gap-4" style={{ borderTop: i > 0 ? '1px solid #1a1a28' : 'none' }}>
                  <div className="w-8 h-8 shrink-0" style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: r.r === '9999px' ? '9999px' : r.r }} />
                  <code className="text-sm font-bold w-12 shrink-0" style={{ color: '#a5b4fc' }}>{r.r}</code>
                  <span className="text-sm flex-1" style={{ color: '#9ca3af' }}>{r.use}</span>
                  {r.rule && <span className="text-xs shrink-0" style={{ color: '#f87171' }}>⚠ {r.rule}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Micro-details */}
          <div>
            <h2 className="text-xl font-bold text-white mb-2">12 Micro-Details That Create Polish</h2>
            <p className="text-sm mb-5" style={{ color: '#6b7280' }}>Each under 30 min. Together they account for ~60% of the perceived quality gap between "functional" and "beautiful."</p>
            <div className="rounded-2xl overflow-hidden" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
              {[
                { n: '1', title: 'Inset top border on cards', body: 'Add box-shadow: inset 0 1px 0 rgba(255,255,255,0.06) to every dark mode card. Raycast and Linear both do this. Makes cards feel 3D without 3D effects. Invisible to most, felt by all.' },
                { n: '2', title: '150ms transitions everywhere', body: 'Every interactive element: transition: all 150ms ease. Not 300ms (too slow, feels cheap). Not 0 (broken feeling). 150ms is "instant but not jarring."' },
                { n: '3', title: 'Remove vertical table borders', body: 'Only horizontal row separators. No cell grid lines. Hide action buttons in rightmost column — visible only on row hover. This is the Linear/Vercel table pattern.' },
                { n: '4', title: 'Active nav item formula', body: 'border-left: 2px solid accent-primary + accent-subtle background + text-heading color + font-weight 500. No bold, no solid background — just subtle tint and colored left bar.' },
                { n: '5', title: 'Skeleton loaders not spinners', body: 'Animated gray pulse matching the exact shape of loading content. Spinners are 2015. Every major app (Linear, Vercel, Supabase) uses skeletons.' },
                { n: '6', title: 'Badge formula: muted bg + matching text', body: 'background: var(--success-muted) + color: var(--success) + border-radius: 9999px. Never solid fill badges. Apply universally to all statuses.' },
                { n: '7', title: 'KPI numbers: tabular-nums + Peso treatment', body: 'font-variant-numeric: tabular-nums on all financial numbers. Peso sign as a separate muted element, the number itself in heading color.' },
                { n: '8', title: 'Bottom sheets on mobile (not modals)', body: 'All modals → bottom sheets on phones. Full width, slides up, 20px rounded top corners, drag handle. Never a centered floating modal on a 6-inch screen.' },
                { n: '9', title: '1px card lift on hover', body: 'transform: translateY(-1px) on interactive cards. 1px — not 4px, not 8px. Barely perceptible but always felt. The Stripe/Linear pattern.' },
                { n: '10', title: 'Override browser focus rings', body: 'outline: none; box-shadow: 0 0 0 3px var(--accent-muted) on all focusable elements. Matches brand color, looks intentional.' },
                { n: '11', title: 'Warm error messages', body: '"We couldn\'t save that — try again?" not "Error 422: Validation failed." Tone matters especially for non-technical Filipino users.' },
                { n: '12', title: 'Primary text: #f4f4f6 not #ffffff', body: '2% off-white. Eliminates eye strain, reads as intentional and refined. Every premium dark app (Raycast, Linear, Arc) does this.' },
              ].map((m, i) => (
                <div key={m.n} className="px-5 py-4 flex gap-3" style={{ borderTop: i > 0 ? '1px solid #1a1a28' : 'none' }}>
                  <span className="text-lg font-bold w-6 shrink-0" style={{ color: 'rgba(99,102,241,0.4)' }}>{m.n}</span>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">{m.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>{m.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filipino context */}
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Filipino Design Context</h2>
            <p className="text-sm mb-5" style={{ color: '#6b7280' }}>From GCash, Maya, Grab PH analysis + Philippine UX research</p>
            <div className="rounded-2xl overflow-hidden" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
              {[
                { title: 'GCash/Maya dashboard pattern', body: 'Show 3-4 large balance-equivalent metrics at the top: Active Leads, Revenue This Month, Upcoming Events, Outstanding. Large numbers, pride of place. PH users expect this from business apps.' },
                { title: 'Add amber/gold as secondary accent', body: '#f59e0b (amber-500) — deeply positive cultural associations (prosperity, craftsmanship). Use for pricing, booking confirmed, featured badges. Differentiates from pure tech, feels warm for an event brand.' },
                { title: 'Warm white in light mode: #fafaf8', body: 'Slightly warm off-white, not cold #ffffff. GCash and Maya both use cream-tinted whites. Filipino UI preferences lean warm.' },
                { title: 'High contrast for outdoor use', body: 'Event photographers check phones in bright venues. Target 7:1 contrast ratio minimum — not just WCAG AA\'s 4.5:1. Your dark mode already achieves 16:1. Light mode needs verification.' },
                { title: 'Minimum 12px text, always', body: 'The target user is not a developer on a 4K monitor — they are a 35-year-old photographer glancing at a phone in a bright event hall. Never go below 12px rendered.' },
                { title: 'Soft red, not pure red for errors', body: 'Use #f87171 (soft coral-red) not #ff0000. Pure red has strong negative cultural connotations in PH. Soft coral reads as "attention needed" not "catastrophe."' },
              ].map((f, i) => (
                <div key={f.title} className="px-5 py-4" style={{ borderTop: i > 0 ? '1px solid #1a1a28' : 'none' }}>
                  <p className="text-sm font-semibold text-white mb-1">{f.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>{f.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Decision */}
          <div className="rounded-2xl p-6" style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}>
            <p className="text-sm font-semibold text-white mb-2">The Decision: Full Redesign vs. Polish Pass</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
              <div className="rounded-xl p-4" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
                <p className="text-sm font-semibold mb-2" style={{ color: '#f87171' }}>Full Redesign (~22 hrs)</p>
                <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>New surface colors, new spacing, new typography scale. App looks completely different. 1–2 full sessions. Risk: regression bugs during transition.</p>
              </div>
              <div className="rounded-xl p-4" style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)' }}>
                <p className="text-sm font-semibold mb-2" style={{ color: '#34d399' }}>Polish Pass (~8 hrs)</p>
                <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>Fix token inconsistency + add micro-details. Same overall feel, noticeably more polished. 1 session. Recommended starting point — validate before committing to full redesign.</p>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  )
}
