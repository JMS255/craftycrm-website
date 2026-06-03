'use client'

import { useState } from 'react'

type Tab = 'features' | 'ux' | 'ui' | 'market' | 'launch'

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
    label: '📱 Mobile-First Deep Dive',
    color: '#06b6d4',
    bg: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.2)',
    desc: 'Deep web research across NNGroup, Statcounter PH, Apple HIG, Material Design, HoneyBook/Dubsado analysis — June 2026',
    items: [
      {
        title: 'M1 — 360×800px is the target screen — not 390px',
        impact: 'High', difficulty: 'Easy',
        body: 'Statcounter PH data: 360×800 is the most common mobile resolution in the Philippines (~40% of market). These are budget Android phones at PHP 3,000–6,000 (Redmi, Realme, Vivo). Every layout must be tested at exactly 360px width before shipping. At 360px with 16px padding each side, the content area is 328px.',
      },
      {
        title: 'M2 — KPI numbers on mobile must be abbreviated (₱27.1k not ₱27,150)',
        impact: 'High', difficulty: 'Easy',
        body: 'Research from Workday Design and financial app UX studies: abbreviated currency format (₱27.1k, ₱3.5k) is the correct pattern for dashboard KPIs on mobile. At 328px content width split into 3 columns (~100px each), a full number "₱27,150" at readable size (~30px font) needs ~160px — it overflows. "₱27.1k" at the same size needs ~60px. GCash uses this pattern for secondary stats. Implemented in dashboard revenue strip.',
      },
      {
        title: 'M3 — Touch targets minimum 44px height (Apple HIG), 48px preferred (Material)',
        impact: 'High', difficulty: 'Easy',
        body: 'Apple Human Interface Guidelines: 44×44px minimum for all tappable elements. Google Material Design: 48×48px preferred. Budget Android users with lower fine-motor precision (rough fingers from outdoor work) need generous targets. All list rows, buttons, and form fields must meet this. py-3 (24px padding + ~20px text = 44px total) is the minimum; py-4 is safer.',
      },
      {
        title: 'M4 — Font minimums: 16px body, 14px labels, 12px badges only',
        impact: 'High', difficulty: 'Medium',
        body: 'WCAG and Apple/Google guidelines: minimum 16px for body text on mobile. 14px for secondary labels. 12px only for badges and timestamps — never for actionable content. Outdoor photobooth operators read their phones in bright venues — sunlight degrades contrast and perceived size. Our current text-xs (11px) on many labels is below safe minimum.',
      },
      {
        title: 'M5 — Thumb zones on 6.6–6.9" screens (most common PH device size)',
        impact: 'High', difficulty: 'Medium',
        body: 'Parachute Design + Smashing Magazine thumb zone research: on a 6.6" screen (360×800), the green zone (easy, natural thumb reach) is the bottom ~50% of screen. Yellow zone (stretch, acceptable) is mid-screen sides. Red zone (hard reach) is the top third. Critical actions (Add Lead, Mark Paid, Follow Up) must live in the green zone. Settings and logout in red zone is fine. Our bottom nav (C3) is correct. Next: ensure primary CTA buttons are anchored near bottom of screens.',
      },
      {
        title: 'M6 — Bottom nav: 5 tabs with icons + labels is optimal',
        impact: 'High', difficulty: 'Easy',
        body: 'AppMySite 2025 and Smashing Magazine nav research: odd numbers (3 or 5) create visual rhythm. 5 destinations is optimal for apps with this complexity. Icons alone confuse ~20% of users — always pair with labels. Active state must use both color change AND a visual indicator (fill or background). Tap targets 48×48px. Our current 5-tab nav (Home, Leads, +, Bookings, Profile) matches this correctly.',
      },
      {
        title: 'M7 — Forms: single column, label above field, 44px minimum field height',
        impact: 'Medium', difficulty: 'Easy',
        body: 'Nielsen Norman Group mobile input checklist: single column ONLY on mobile — no side-by-side fields. Label above field (floating labels reduce discoverability). Minimum field height 44px. One field per visible screen segment if possible. Our New Lead form uses progressive disclosure (4 fields default, expand for more) — this is correct per NNGroup research.',
      },
      {
        title: 'M8 — Card list items: 56px minimum height for comfortable tapping',
        impact: 'Medium', difficulty: 'Easy',
        body: 'Microsoft Dynamics 365 mobile research and HoneyBook mobile patterns: list items for leads/bookings need minimum 56px height. Essential info per card: name, status badge, date, one action. Secondary info can be smaller below. Our lead list mobile cards with py-3.5 (14px * 2 = 28px + ~30px text = ~58px total) pass this. Booking cards were at py-3 (~44px total) — borderline, now bumped to py-4.',
      },
      {
        title: 'M9 — Outdoor readability: dark mode in sunlight loses contrast physics',
        impact: 'Medium', difficulty: 'Hard',
        body: 'Research on outdoor mobile use: in bright sunlight (outdoor weddings, birthday venues), display cannot get dark enough relative to ambient brightness. Light mode maintains contrast because white reflects and matches ambient light. This supports our light-mode-as-default decision. Dark mode users in outdoor venues experience ~30% lower contrast. Consider adding an auto-brightness contrast boost for high-ambient situations.',
      },
      {
        title: 'M10 — Optimistic UI critical for Philippine mobile networks',
        impact: 'High', difficulty: 'Hard',
        body: 'Philippine provincial mobile networks (especially outside Metro Manila) have intermittent 4G with 2–4 second lag on data operations. Optimistic UI (update locally first, sync in background) prevents double-taps and duplicate entries when the UI appears frozen. Mark Paid, stage changes, and activity logging are the highest-risk actions. Current implementation waits for DB response before updating UI — this feels broken on slow networks.',
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
          Last updated: June 3, 2026.
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
            borderRight: '1px solid #1e1e2e',
          }}
        >
          UI Design
        </button>
        <button
          onClick={() => setTab('market')}
          className="flex-1 py-2.5 text-sm font-medium transition-colors"
          style={{
            background: tab === 'market' ? 'rgba(99,102,241,0.15)' : 'transparent',
            color: tab === 'market' ? '#a5b4fc' : '#6b7280',
            borderRight: '1px solid #1e1e2e',
          }}
        >
          Market Research
        </button>
        <button
          onClick={() => setTab('launch')}
          className="flex-1 py-2.5 text-sm font-medium transition-colors"
          style={{
            background: tab === 'launch' ? 'rgba(99,102,241,0.15)' : 'transparent',
            color: tab === 'launch' ? '#a5b4fc' : '#6b7280',
          }}
        >
          🚀 Launch
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
                <p className="text-sm font-semibold mb-2" style={{ color: '#34d399' }}>Polish Pass (~8 hrs) ✓ Done</p>
                <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>Completed June 2. Fixed token inconsistency, added micro-details, full layout restructuring. Polish pass is complete — next is identity work (amber, KPI scale, light mode).</p>
              </div>
            </div>
          </div>

          {/* ── Deep Research: Design Identity (June 3) ── */}
          <div>
            <h2 className="text-xl font-bold text-white mb-1">Design Identity Research — June 3, 2026</h2>
            <p className="text-sm mb-5" style={{ color: '#6b7280' }}>
              Deep research across 25+ sources on three specific design decisions. All three recommendations are strongly supported — evidence below.
            </p>

            {/* Summary verdict */}
            <div className="rounded-2xl overflow-hidden mb-6" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
              {[
                { q: 'Add amber/gold (#f59e0b) for money/revenue UI', verdict: 'Strong Yes', color: '#34d399', summary: 'Culturally resonant (Filipino gold = prosperity), fills unclaimed fintech color space (GCash/Maya/Grab don\'t use it), semantically correct (purple = action, amber = money earned), supported by color psychology research.' },
                { q: 'Push KPI numbers to 48px+ with muted peso sign', verdict: 'Strong Yes', color: '#34d399', summary: 'Tableau eye-tracking: large numbers get visual fixation within 200ms (pre-conscious). Piepenbrock research: significantly more correct comprehension responses at larger sizes. GCash balance display uses this exact pattern for 94M users.' },
                { q: 'Switch default to Light Mode (warm cream #fafaf8)', verdict: 'Strong Yes', color: '#34d399', summary: 'Optometry research (Piepenbrock 2013): users read faster and more accurately in light mode. Filipino mobile context: outdoor venues, bright environments. Every major PH app defaults to light (GCash, Maya, Shopee, Grab, Facebook). All CRM peers default to light (HoneyBook, Dubsado, 17hats).' },
              ].map((item, i) => (
                <div key={i} className="px-5 py-4 flex items-start gap-4" style={{ borderTop: i > 0 ? '1px solid #1a1a28' : 'none' }}>
                  <span className="text-xs font-bold px-2 py-1 rounded-full shrink-0 mt-0.5" style={{ background: `${item.color}18`, color: item.color }}>{item.verdict}</span>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">{item.q}</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>{item.summary}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Q1: Amber */}
            <div className="rounded-2xl p-5 mb-4" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full shrink-0" style={{ background: '#f59e0b' }} />
                <p className="text-sm font-semibold text-white">Q1 — Amber/Gold as Money Accent: Evidence</p>
              </div>
              <div className="space-y-3 text-sm" style={{ color: '#9ca3af' }}>
                <p><strong className="text-white">Color psychology (Elliot & Maier, 2014 — Annual Review of Psychology):</strong> Gold-spectrum colors stimulate dopamine/serotonin in financial contexts. Users associate amber with reward and earned wealth — not caution, not action.</p>
                <p><strong className="text-white">Semantic color system principle (Atlassian, SAP Fiori, YNAB):</strong> Color must be function-coded. Purple (current) = navigation/actions. Amber = financial state/earned money. The two never overlap. This removes cognitive friction when scanning a dashboard.</p>
                <p><strong className="text-white">Philippine fintech landscape:</strong> GCash (blue), Maya (green), Grab (green), Shopee (orange for urgency). Amber/gold for premium revenue data is completely unclaimed. First-mover advantage in a meaningful visual space.</p>
                <p><strong className="text-white">Cultural resonance:</strong> In Filipino culture, gold = joy, prosperity, celebration (direct context of photobooth/events work). In Chinese-Filipino business culture, gold = financial blessings. In religious/civic iconography across PH, gold = recognition and achievement. The color is already pre-associated with earning and celebration for this specific audience.</p>
                <p><strong className="text-white">Shopee precedent:</strong> ResearchGate survey — 98% of Filipino respondents associate Shopee's app with its warm orange. Proves Filipino users are highly responsive to warm-family colors in financial/commerce contexts.</p>
                <p><strong className="text-white">Caution:</strong> Must use rich muted amber (#f59e0b) not traffic-light yellow. Yellow = warning in UI systems. Amber/gold = premium/financial. Only apply to revenue numbers, booking values, and payment confirmed states — never to CTAs or warnings.</p>
              </div>
            </div>

            {/* Q2: KPI Typography */}
            <div className="rounded-2xl p-5 mb-4" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full shrink-0" style={{ background: '#a78bfa' }} />
                <p className="text-sm font-semibold text-white">Q2 — Display KPI Numbers at 48px+: Evidence</p>
              </div>
              <div className="space-y-3 text-sm" style={{ color: '#9ca3af' }}>
                <p><strong className="text-white">Tableau Eye-Tracking Study:</strong> Large numbers receive visual fixation within the first 200ms — before the user consciously reads anything. This is pre-conscious attention. The KPI is processed before the user decides to look at it.</p>
                <p><strong className="text-white">Piepenbrock et al. (Ergonomics journal):</strong> "Significantly more correct responses for font sizes 18 and 26" compared to smaller sizes on comprehension tasks. For dashboard KPIs, comprehension accuracy = did the user correctly read their revenue figure at a glance.</p>
                <p><strong className="text-white">5-second dashboard test (UX standard):</strong> Users must answer the primary question within 5 seconds. A 48px+ number in position of prominence consistently passes. 30px numbers in the same layout frequently fail.</p>
                <p><strong className="text-white">GCash balance display:</strong> Estimated 36–44px, peso sign smaller and lighter than the number. 94 million Filipino users are trained on this exact pattern — large number, muted peso prefix. Craftifyle should match the mental model they already have.</p>
                <p><strong className="text-white">Tufte data-ink ratio (foundational visualization research):</strong> The number = data-ink (maximize). The peso sign = context-ink (subordinate). Borders, backgrounds = non-data-ink (minimize). Muted peso sign + dominant number is the mathematically correct answer to maximizing data-ink ratio.</p>
                <p><strong className="text-white">Stripe, Linear, Vercel:</strong> The three most-benchmarked premium SaaS dashboards all achieve hierarchy through type scale, not color. Near-zero decoration. Numbers are the hero. Craftifyle should follow the same principle.</p>
                <p><strong className="text-white">Recommended 3-tier scale:</strong> Revenue hero → 52–56px weight 700+ (amber). Secondary KPIs → 36px weight 600 (neutral). Supporting data → 13px muted. Peso sign at 60% size and 60% opacity of the number.</p>
              </div>
            </div>

            {/* Q3: Light Mode */}
            <div className="rounded-2xl p-5 mb-4" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full shrink-0" style={{ background: '#60a5fa' }} />
                <p className="text-sm font-semibold text-white">Q3 — Light Mode as Default: Evidence</p>
              </div>
              <div className="space-y-3 text-sm" style={{ color: '#9ca3af' }}>
                <p><strong className="text-white">Optometry research (Piepenbrock et al., 2013 — Ergonomics):</strong> "Participants read text faster and more accurately in positive polarity (dark text on light background)." Mechanism: light mode keeps pupil slightly constricted, increasing depth of field and reducing optical imperfections. This is biology, not preference — users don't perceive the difference but perform measurably better.</p>
                <p><strong className="text-white">Filipino mobile context:</strong> 99% of Philippine internet users access via mobile. 24% of Filipinos say they are never without their phone (vs 14% regional average). Craftifyle's users work at outdoor garden weddings, birthday venues, and bright event halls — direct sunlight or high-lux event lighting. Dark mode in bright ambient light loses contrast physics: the display can't get dark enough relative to ambient brightness. Light mode maintains contrast because white reflects and matches ambient brightness.</p>
                <p><strong className="text-white">Philippine app landscape (all default to light):</strong> GCash, Maya, Shopee, Lazada, Grab, Facebook, Palawan Express — every major Filipino productivity/financial/social app defaults to light. Dark mode PH apps are TikTok and YouTube — entertainment, not productivity. Craftifyle users are arriving from light-mode apps and expect light.</p>
                <p><strong className="text-white">CRM peer landscape (all default to light):</strong> HoneyBook, Dubsado, 17hats — the three closest comparable service-business CRMs all default to light. HoneyBook markets its light UI as contributing to a "polished, professional client process." No service-business CRM defaults to dark.</p>
                <p><strong className="text-white">Dark mode adoption skew:</strong> Global dark mode adoption (~82%) is heavily skewed by developers and technical users in night coding sessions. The median Filipino solopreneur managing photobooth bookings at 2pm is not in this cohort. Nielsen Norman Group: "Light mode leads to better performance most of the time" for users with normal vision.</p>
                <p><strong className="text-white">Recommended implementation:</strong> Default = light (warm cream #fafaf8, not cold #ffffff — reduces glare). Auto-detect OS <code style={{ color: '#a5b4fc' }}>prefers-color-scheme: dark</code> so users who've set their phone to dark get dark automatically. User toggle remains in Profile page. No one is forced — but the default matches the context.</p>
              </div>
            </div>

            {/* Implementation priority */}
            <div className="rounded-2xl p-5" style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}>
              <p className="text-sm font-semibold text-white mb-3">Implementation Priority</p>
              <div className="space-y-2">
                {[
                  { order: '1', title: 'Amber for money UI', effort: 'Low — targeted CSS var additions', notes: 'Apply to: revenue numbers, booking values, "Booked" stage, payment confirmed. Keep purple for all actions.' },
                  { order: '2', title: 'Bigger KPI numbers (48px+)', effort: 'Low — dashboard + booking detail only', notes: '3-tier scale: 52px hero / 36px secondary / 13px supporting. Muted peso sign.' },
                  { order: '3', title: 'Light mode as default', effort: 'Medium — audit all pages, flip CSS var defaults', notes: 'Warm cream #fafaf8. Auto-detect OS preference. Keep dark mode available.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 py-2" style={{ borderTop: i > 0 ? '1px solid rgba(99,102,241,0.15)' : 'none' }}>
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0" style={{ background: 'rgba(124,111,247,0.2)', color: '#a5b4fc' }}>{item.order}</span>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title} <span className="text-xs font-normal ml-2" style={{ color: '#6b7280' }}>{item.effort}</span></p>
                      <p className="text-xs mt-0.5" style={{ color: '#9ca3af' }}>{item.notes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      )}

      {/* Launch Research */}
      {tab === 'launch' && (
        <div className="space-y-10">
          <div className="rounded-2xl p-5" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
            <p className="text-sm font-semibold text-white mb-2">Research basis</p>
            <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
              Deep research across 20+ sources on how solo developers have successfully launched web apps and acquired beta users — specifically for introvert founders targeting Filipino solopreneurs. Sources include Indie Hackers, Baymard Institute, ACM Digital Library (GCash/Maya usability study), DataReportal Philippines 2024, and real launch case studies.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {[
                { val: '92%', label: 'Filipinos trust peer recommendations over ads' },
                { val: '3–8×', label: 'Indie Hackers converts better than Product Hunt' },
                { val: '100 min', label: 'Weekly effort needed — no camera required' },
                { val: '30–50', label: 'Target beta users in first 90 days' },
              ].map(s => (
                <div key={s.val} className="rounded-xl p-3 text-center" style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.15)' }}>
                  <p className="text-xl font-bold" style={{ color: '#818cf8' }}>{s.val}</p>
                  <p className="text-xs mt-1" style={{ color: '#6b7280' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">Where Filipino Service Solopreneurs Actually Are</h2>
            <p className="text-sm mb-5" style={{ color: '#6b7280' }}>Don't spray. Find the exact ponds. These are the highest-density, most relevant Facebook Groups.</p>
            <div className="rounded-2xl overflow-hidden" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
              {[
                { group: 'Photobooth Suppliers Philippines', type: 'Photobooth', why: 'Operators exactly like the founder — highest trust, lowest barrier' },
                { group: 'Photobooth Ideas Philippines', type: 'Photobooth', why: 'Active operators sharing workflows — perfect for value posts' },
                { group: 'Event Photographers and Videographers Philippines', type: 'Photography', why: 'Direct target users, high booking volume, real pain' },
                { group: 'Freelancers Hub Philippines', type: 'General', why: 'Broad Filipino solopreneur community — good for awareness' },
                { group: 'Getting Married Wedding Coordinators & Event Planners', type: 'Events', why: '39,000+ members — coordinators manage 10–30 bookings/month' },
                { group: 'Online Filipino Freelancers', type: 'General', why: 'Original large community, mix of service businesses' },
              ].map((g, i) => (
                <div key={g.group} className="px-5 py-4" style={{ borderTop: i > 0 ? '1px solid #1a1a28' : 'none' }}>
                  <div className="flex items-start justify-between gap-3 mb-1 flex-wrap">
                    <p className="text-sm font-semibold text-white">{g.group}</p>
                    <span className="text-xs px-2 py-0.5 rounded-full shrink-0" style={{ background: 'rgba(99,102,241,0.1)', color: '#a5b4fc' }}>{g.type}</span>
                  </div>
                  <p className="text-sm" style={{ color: '#9ca3af' }}>{g.why}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">What Makes Filipinos Trust a New Tool</h2>
            <p className="text-sm mb-5" style={{ color: '#6b7280' }}>Filipino purchase behavior research — what converts vs. what kills trust.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl p-5" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
                <p className="text-sm font-semibold mb-3" style={{ color: '#34d399' }}>✓ What builds trust</p>
                <div className="space-y-2">
                  {[
                    'Peer recommendation from same profession ("si Maria gamit na niya")',
                    'Founder is visibly Filipino — "Pinoy-built" is a real differentiator',
                    'Transparent pricing in pesos, no surprises',
                    'Quick DM replies — responsiveness = reliability in PH culture',
                    'Specific social proof: "1,200+ Filipino solopreneurs" not generic',
                    'Tagalog/Taglish in copy — signals community membership',
                    'Being from outside Metro Manila builds trust with provincial users',
                  ].map((t, i) => (
                    <p key={i} className="text-xs leading-relaxed" style={{ color: '#9ca3af' }}>• {t}</p>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl p-5" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
                <p className="text-sm font-semibold mb-3" style={{ color: '#f87171' }}>✕ What kills trust</p>
                <div className="space-y-2">
                  {[
                    'Asking for phone number at signup (scam signal in PH)',
                    'Anonymous tool with no face or name behind it',
                    'AI-generated or foreign-looking testimonials',
                    '"Book a demo" CTAs — Filipino solopreneurs don\'t do sales calls',
                    'English-only corporate copy that sounds formal',
                    'Stock photos of foreign-looking people',
                    'Bait-and-switch pricing revealed after signup',
                  ].map((t, i) => (
                    <p key={i} className="text-xs leading-relaxed" style={{ color: '#9ca3af' }}>• {t}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">The 90-Day Beta User Playbook</h2>
            <p className="text-sm mb-5" style={{ color: '#6b7280' }}>100 minutes/week. No camera. All written. All async. Introvert-compatible.</p>
            <div className="rounded-2xl overflow-hidden" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
              {[
                {
                  phase: 'Days 1–14', goal: '5 beta users', color: '#ef4444',
                  body: 'Personal outreach only. List 10 people you know — photographers, photobooth operators, coordinators. Message each personally in Messenger: "Kumusta? Paano mo nini-manage ang bookings mo?" Have a real conversation. After they describe their pain: "Eto yung ginawa ko — libre i-try." No pitch, no link first.',
                },
                {
                  phase: 'Days 15–30', goal: 'Community seeding', color: '#f97316',
                  body: 'Join 3 Facebook groups. Spend week 1 lurking — understand the vocabulary. Start answering questions helpfully with zero product mention for 2 weeks. Post one free resource (booking contract template, rate sheet) in each group.',
                },
                {
                  phase: 'Days 31–60', goal: '10 more beta users', color: '#fbbf24',
                  body: 'Soft product intro post after you\'ve given value: "Filipino developer ako from Zamboanga. Nagawa ko na simple na booking tracker para sa photographers. Open beta, libre. Gusto ninyong subukan?" Respond to every comment in Taglish.',
                },
                {
                  phase: 'Days 61–90', goal: '30–50 beta users', color: '#10b981',
                  body: 'Ask first users for referrals: "May kakilala kang photographer na puwede naming tulungan?" Post one honest founder story on Indie Hackers (23% conversion rate vs 3% for Product Hunt). Create a small Messenger group for beta testers — Filipinos are communal and will help each other.',
                },
              ].map((p, i) => (
                <div key={p.phase} className="px-5 py-4 flex gap-4" style={{ borderTop: i > 0 ? '1px solid #1a1a28' : 'none' }}>
                  <div className="shrink-0">
                    <p className="text-xs font-bold" style={{ color: p.color }}>{p.phase}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#4a4a6a' }}>Goal: {p.goal}</p>
                  </div>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: '#9ca3af' }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">Why Introverts Actually Have an Advantage</h2>
            <div className="rounded-2xl overflow-hidden" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
              {[
                { title: 'Written 1-on-1 is the highest-converting channel', body: 'Every successful indie hacker got their first 10 users from direct personal conversations — not platforms. This is 1-on-1 written Messenger chat, not stage performance. Introverts prefer this format naturally.' },
                { title: 'Taglish writing is your superpower', body: 'You write how your users talk. Pure English sounds corporate. Pure Filipino sounds overly informal. Taglish signals "community member." Your natural writing voice is your marketing voice.' },
                { title: 'Being from Zamboanga is a trust accelerator', body: 'Most Philippine tech is Metro Manila-centric. Provincial founders are trusted more by non-Manila users. Non-Manila is the majority of your market. Mentioning "Zamboangueño ako" in a Filipino group immediately creates regional solidarity.' },
                { title: 'INFJ empathy = copywriting superpower', body: 'INFJs understand their users\' inner world better than those users can articulate it. Use that to write posts that make people feel seen, not sold to. "Pagod ka na bang mag-reply sa lahat ng DM tapos nakakalimutan mo pa?" — that\'s INFJ copy.' },
                { title: 'You don\'t need to market yourself — market the problem', body: 'You\'re not asking people to care about you. You\'re asking Filipino photographers if they\'re tired of losing track of leads in Messenger threads. That\'s a completely different ask.' },
              ].map((item, i) => (
                <div key={item.title} className="px-5 py-4" style={{ borderTop: i > 0 ? '1px solid #1a1a28' : 'none' }}>
                  <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-5" style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}>
            <p className="text-sm font-semibold text-white mb-3">Weekly Rhythm (100 min/week)</p>
            <div className="space-y-2">
              {[
                { day: 'Mon', task: 'Reply to DMs/comments from last week', time: '20 min' },
                { day: 'Tue', task: 'Post one value resource or helpful answer in 1–2 groups', time: '30 min' },
                { day: 'Thu', task: '2–3 personal DMs to potential users or follow-up with existing beta users', time: '20 min' },
                { day: 'Sat', task: 'Review analytics. Note what users are doing. Ship one small improvement.', time: '30 min' },
              ].map((r, i) => (
                <div key={r.day} className="flex items-center gap-3 py-1.5" style={{ borderTop: i > 0 ? '1px solid rgba(99,102,241,0.1)' : 'none' }}>
                  <span className="text-xs font-bold w-8 shrink-0" style={{ color: '#a5b4fc' }}>{r.day}</span>
                  <span className="text-xs flex-1" style={{ color: '#9ca3af' }}>{r.task}</span>
                  <span className="text-xs shrink-0" style={{ color: '#4a4a6a' }}>{r.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Market Research */}
      {tab === 'market' && (
        <div className="space-y-10">
          <div className="rounded-2xl p-5" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
            <p className="text-sm font-semibold text-white mb-2">Executive Summary</p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: '#9ca3af' }}>
              The Philippine CRM market is projected to reach <strong className="text-white">USD 134.7 million by 2025</strong>, growing at <strong className="text-white">13.19% CAGR</strong> through 2029. Almost none of that growth targets small Filipino service businesses at the ₱800–₱1,200/month price point. <strong className="text-white">Craftifyle is the only Filipino-built CRM purpose-built for the local service business niche.</strong> The window is real and currently uncontested. The main risk is not competition from above — it is the inertia of Messenger + Google Sheets from below.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {[{ val: '$134.7M', label: 'PH CRM market size' }, { val: '13.19%', label: 'Annual growth rate' }, { val: '47–70%', label: 'CRM deployments that FAIL in PH' }, { val: '0', label: 'Direct competitors in this niche' }].map(s => (
                <div key={s.val} className="rounded-xl p-3 text-center" style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.15)' }}>
                  <p className="text-xl font-bold" style={{ color: '#818cf8' }}>{s.val}</p>
                  <p className="text-xs mt-1" style={{ color: '#6b7280' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">Direct Competitors</h2>
            <p className="text-sm mb-5" style={{ color: '#6b7280' }}>Tools that overlap with Craftifyle's core use case — none are serious threats</p>
            <div className="rounded-2xl overflow-hidden" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
              {[
                { name: 'Studio Ninja', price: '₱900–₱2,240/mo', presence: 'Some PH photographers', threat: 'Low', body: 'USD only, no SMS, support degraded post-acquisition. Photography-only — no photobooth, florist, caterer support.' },
                { name: 'Dubsado', price: '₱1,120–₱2,240/mo', presence: 'Small VA/freelancer community', threat: 'Low', body: 'Notoriously complex to set up. USD only, no GCash, built for US freelancers not PH event suppliers.' },
                { name: 'HoneyBook', price: '₱1,624–₱6,104/mo', presence: 'NOT AVAILABLE IN PH', threat: 'None', body: 'Officially US/Canada only. Cannot legally be used by Philippine businesses for client billing.' },
                { name: 'Check Cherry', price: '₱2,184+/mo', presence: 'Zero PH presence', threat: 'Low', body: '3× Craftifyle price, no AI, no SMS, no local payment integration. Photobooth-specific but USD.' },
                { name: 'Eventchy', price: 'Marketplace fee', presence: 'Metro Manila only', threat: 'None', body: 'A marketplace (lead gen), NOT a CRM. Leads still go to Messenger after. Complementary to Craftifyle — not competing. Potential partnership.' },
                { name: 'Zoho / HubSpot / Salesforce', price: '₱784–₱2,240+/user', presence: 'Enterprise/agencies only', threat: 'None', body: 'Generic B2B tools for teams. Will never build photobooth-specific features, peso invoicing, or GCash context. 47–70% of PH deployments fail due to poor fit.' },
              ].map((c, i) => (
                <div key={c.name} className="px-5 py-4" style={{ borderTop: i > 0 ? '1px solid #1a1a28' : 'none' }}>
                  <div className="flex items-start justify-between gap-3 mb-1.5 flex-wrap">
                    <div>
                      <p className="text-sm font-semibold text-white">{c.name}</p>
                      <p className="text-xs" style={{ color: '#a5b4fc' }}>{c.price} · {c.presence}</p>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full shrink-0" style={{ background: c.threat === 'None' ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)', color: c.threat === 'None' ? '#34d399' : '#fbbf24' }}>Threat: {c.threat}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">The Real Competition — Indirect</h2>
            <p className="text-sm mb-5" style={{ color: '#6b7280' }}>This is the actual fight. Not Zoho. This.</p>
            <div className="rounded-2xl overflow-hidden" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
              {[
                { name: 'Facebook Messenger + manual replies', threat: '🔴 Critical', body: 'Most Filipino event suppliers run their entire business from a chat window. Research confirmed: the #1 cause of lost leads in PH is response latency — inquiry arrives, nobody replies fast enough, lead moves to competitor. Crafty AI + SMS follow-up directly solves this.' },
                { name: 'Google Sheets / Excel', threat: '🟠 High', body: 'Free, familiar, good enough for 2–5 bookings/month. Breaks down at 10+ active leads. That transition moment is Craftifyle\'s primary acquisition opportunity.' },
                { name: 'Meta Business Suite', threat: '🟡 Medium', body: 'Some operators use it for auto-replies. Zero pipeline, zero invoicing, zero contracts. Users still fall back to Messenger for actual conversations.' },
              ].map((c, i) => (
                <div key={c.name} className="px-5 py-4" style={{ borderTop: i > 0 ? '1px solid #1a1a28' : 'none' }}>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-semibold text-white">{c.name}</p>
                    <span className="text-xs" style={{ color: '#9ca3af' }}>{c.threat}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-2">Positioning Playbook</h2>
            <div className="space-y-3">
              {[
                { vs: 'vs. Messenger + Sheets', line: '"Your Messenger is full of leads you forgot to follow up on. Craftifyle remembers so you don\'t have to."', color: '#ef4444' },
                { vs: 'vs. Studio Ninja / Dubsado', line: '"Studio Ninja is $27/month in dollars. Craftifyle is ₱800 in pesos. And it actually sends SMS."', color: '#f97316' },
                { vs: 'vs. Zoho / HubSpot', line: '"Zoho gives you 50 blank fields and wishes you good luck. Craftifyle comes pre-built for photobooth businesses."', color: '#fbbf24' },
                { vs: 'vs. Eventchy', line: 'Don\'t compete — partner. "Eventchy gets you found. Craftifyle gets you booked and paid."', color: '#10b981' },
                { vs: 'vs. Salesforce', line: '"Salesforce just opened in Manila. We\'ve been in Zamboanga since day one, building for the businesses Salesforce will never notice."', color: '#6366f1' },
              ].map(p => (
                <div key={p.vs} className="rounded-xl p-4" style={{ background: '#111118', border: `1px solid ${p.color}30` }}>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: p.color }}>{p.vs}</p>
                  <p className="text-sm italic leading-relaxed" style={{ color: '#e2e2f0' }}>{p.line}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-6" style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}>
            <p className="text-sm font-semibold text-white mb-3">The Unique Position No Competitor Has</p>
            {['Filipino-built, peso-priced, peso-billed — no international competitor does this', 'Purpose-built for photobooth/photographer/event supplier workflow — not a generic sales pipeline', 'AI-powered (Crafty AI) — no competitor offers AI at this price point in PH', 'SMS follow-up through PH telcos — directly addresses the #1 lead-loss cause in the Philippines', 'Built from Zamboanga — serving the rest of PH that Metro Manila ignores', 'Eventchy partnership opportunity — marketplace sends leads, Craftifyle manages them'].map((p, i) => (
              <div key={i} className="flex items-start gap-2 mb-2">
                <span className="text-sm shrink-0 mt-0.5" style={{ color: '#6366f1' }}>✓</span>
                <p className="text-sm" style={{ color: '#9ca3af' }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
