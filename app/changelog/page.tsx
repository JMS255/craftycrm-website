const releases = [
  {
    version: '0.8.0',
    date: 'June 2, 2026',
    tag: 'Sprint 3 Complete',
    tagColor: '#a78bfa',
    changes: [
      { type: 'new', text: 'Messenger inbox (/inbox) — all Messenger conversations in one view. Split into "Needs a reply" (client sent last) and "Crafty handled". Shows last message preview, lead stage, time ago. Red border on rows needing attention.' },
      { type: 'new', text: 'Booking contracts + e-sign — Copy Contract Link from any booking. Client opens the page, reads 6-clause service agreement, types full name, taps "I Agree". Timestamp stored on booking.' },
      { type: 'new', text: 'Team mode — invite staff by email. They click a link, accept, and can see Leads + Bookings. Staff cannot access Finances, Ads, or Settings.' },
      { type: 'new', text: 'Facebook Login — "Continue with Facebook" button live on login and signup as primary CTA. Activate by configuring Supabase OAuth + Facebook Developer App.' },
      { type: 'new', text: 'PayMongo payment links — built and hidden. Activate when PayMongo account is set up. Client pays via GCash/Maya/card, deposit auto-marked paid via webhook.' },
      { type: 'improved', text: 'Optimistic UI — Mark Paid, booking status, lead stage changes, and activity logging all update instantly. DB syncs in background. Reverts on error.' },
    ],
  },
  {
    version: '0.7.0',
    date: 'June 2, 2026',
    tag: 'Hormozi Sprint',
    tagColor: '#f59e0b',
    changes: [
      { type: 'new', text: 'Balance Due This Week — amber alert card on dashboard listing bookings with event ≤7 days away and unpaid balance. Click to go straight to the booking.' },
      { type: 'new', text: 'Swipe-to-action on mobile lead cards — swipe right to mark Contacted, swipe left to archive as Lost. 4-second undo snackbar after every action.' },
      { type: 'new', text: 'Onboarding checklist on dashboard — 3-step card (Add lead · Try Crafty · Set up profile) shown after first lead. Progress bar, dismisses permanently when complete.' },
      { type: 'new', text: 'Stage hints on lead detail — contextual next-step hint shown below the pipeline progress bar at every stage.' },
      { type: 'new', text: '/scripts page — free Taglish Follow-Up Script Pack with 5 copy-ready Messenger scripts. No signup. Shareable in FB groups.' },
      { type: 'improved', text: 'Homepage — cost-of-inaction hero copy, Grand Slam value stack section (₱6,800+ value shown at free), Taglish libre paradox CTA, outcome-focused steps.' },
      { type: 'improved', text: 'Mobile nav — backdrop-blur glass effect, safe-area-inset-bottom for iPhone notch, active tab indicator line.' },
      { type: 'improved', text: 'Crafty chat tabs renamed — "💬 Ask for Advice" and "⚡ Do Something" for clarity.' },
      { type: 'fix', text: 'Packages & Pricing save stuck on "Saving…" — replaced upsert (deadlock on new rows) with delete-then-insert. Added try/finally so the saving state always resets.' },
      { type: 'fix', text: 'Packages save crash "Cannot read properties of null (reading trim)" — optional chaining on description field.' },
      { type: 'fix', text: 'Onboarding checklist not dismissing after all steps done — now auto-dismisses 2 seconds after completion.' },
      { type: 'fix', text: 'Mobile nav dark background showing in light mode — now theme-aware via CSS variables.' },
      { type: 'improved', text: 'Mobile nav active tab — replaced top indicator line with subtle background fill, cleaner look.' },
      { type: 'fix', text: 'Revenue strip numbers overflowing/truncating on mobile — replaced full numbers with abbreviated format (₱27,150 → ₱27.1k). Fits 3 columns cleanly on 360px screens (most common PH budget Android).' },
      { type: 'improved', text: 'Booking mobile card touch targets — increased from py-3 to py-4 (44px+ per Apple HIG minimum). Easier to tap on budget Android phones.' },
    ],
  },
  {
    version: '0.6.0',
    date: 'June 2, 2026',
    tag: 'Full Redesign',
    tagColor: '#7c6ff7',
    changes: [
      { type: 'new', text: 'Packages & Pricing page (/settings) — configure base packages and add-ons from the app. Crafty AI reads them from the database on every request, no code change needed.' },
      { type: 'improved', text: 'Dashboard — greeting with time-of-day, revenue hero strip at top (confirmed / collected / outstanding), Today\'s Actions with colored left border per urgency level, pipeline snapshot segmented bar, upcoming events with date badge. Charts and monthly breakdown moved to bottom.' },
      { type: 'improved', text: 'Leads list — avatar initial circles colored by stage, colored left border per row showing stage at a glance, simplified 5-column table, action badge under client name.' },
      { type: 'improved', text: 'Kanban — wider cards (w-64), client avatar in card, stage color on drop zones, column count badge.' },
      { type: 'improved', text: 'Lead detail — 2-column desktop layout (client info + activity log left, actions right), visual pipeline progress bar with numbered steps and connector lines, timeline activity log with left border thread, Convert to Booking as collapsible card.' },
      { type: 'improved', text: 'Booking detail — payment progress bar showing % collected, deposit/balance rows with larger numbers, all hardcoded colors replaced.' },
      { type: 'improved', text: 'Sidebar — replaced emoji nav icons with consistent SVG icons at 18px.' },
      { type: 'improved', text: 'Mobile nav — 5 tabs with SVG icons (Home, Leads, +, Bookings, Profile). Removed Ads from mobile — secondary feature.' },
      { type: 'fix', text: 'Sign out was completely inaccessible on mobile — no button existed. Added sign out + theme toggle to Profile page for mobile users.' },
      { type: 'fix', text: 'Dashboard was capped at max-w-5xl leaving dead whitespace on wide screens. Now fills full content area.' },
    ],
  },
  {
    version: '0.5.0',
    date: 'June 2, 2026',
    tag: 'UI Redesign',
    tagColor: '#7c6ff7',
    changes: [
      { type: 'improved', text: 'New accent color #7c6ff7 — warmer violet replacing default indigo across all interactive elements' },
      { type: 'improved', text: 'Design token unification — all pages now use CSS variables instead of hardcoded Tailwind gray classes' },
      { type: 'improved', text: 'Global dark surface ladder — Page #09090f, Card #0f0f17, Sidebar #141420, Hover #1a1a2a, Active #1f1f33' },
      { type: 'improved', text: 'Global table system — no vertical borders, clean sticky headers, row hover state, .tabular number class' },
      { type: 'improved', text: 'Typography — h1–h4 get weight 600 + letter-spacing -0.015em; body text 15px; ALL CAPS labels 11px/0.08em' },
      { type: 'improved', text: 'Button system — press scale on click, visible focus ring, 10px border radius across all buttons' },
      { type: 'improved', text: 'Card detail — inset top border box-shadow + 1px lift on hover on all .card elements' },
      { type: 'improved', text: 'Mobile nav — backdrop-blur + safe-area-inset padding; active tab uses new accent with bg tint' },
      { type: 'improved', text: '150ms transitions everywhere (was 300ms)' },
      { type: 'improved', text: '.card and .section-label utility classes added to globals.css for consistent use across pages' },
    ],
  },
  {
    version: '0.4.0',
    date: 'June 1, 2026',
    tag: 'Sprint 2',
    tagColor: '#6366f1',
    changes: [
      { type: 'new', text: 'Crafty CRM Actions mode — natural language interface: tell Crafty to add leads, update bookings, log payments, and query revenue. Writes directly to DB.' },
      { type: 'new', text: 'Paste DM — copy-paste a raw Messenger inquiry into the chat widget; Crafty extracts details and creates the lead. No form needed.' },
      { type: 'new', text: 'Convert lead to booking via Crafty — one message closes the deal. Crafty finds the lead, pulls event details, creates the booking, marks deposit paid.' },
      { type: 'new', text: 'Kanban board view — drag-and-drop leads across 6 pipeline stages (desktop). Mobile: tab bar + single-column + Move buttons.' },
      { type: 'new', text: 'AI next-action badges — rule-based urgency label on every lead: "Event in Xd", "Follow up now", "First contact needed", "Event passed".' },
      { type: 'new', text: 'Cold lead alerts banner — leads silent 5+ days shown at top of Leads page, color-coded Warm / Cold / Very Cold.' },
      { type: 'new', text: 'Revenue dashboard card — Confirmed / Collected / Outstanding for current month. Updates as payments are logged.' },
      { type: 'new', text: 'Dashboard charts — bookings per month bar chart + lead source donut chart (recharts).' },
      { type: 'new', text: 'Today\'s Actions card — top 3 urgent leads on dashboard, click to navigate to lead detail.' },
      { type: 'new', text: 'Quick-prompt chips — Paste DM, What needs attention, Revenue, Draft follow-up chips fire Crafty prompts via CustomEvent.' },
      { type: 'new', text: 'Onboarding checklist for new users — 3-step progress bar, dismissible, shown when account has no leads.' },
      { type: 'new', text: 'Progressive lead form — 4 fields by default, "Add more details +" expands rest.' },
      { type: 'new', text: 'Mobile Quick Add — "+" button in bottom nav opens sheet: Add Lead, Paste DM, Log Payment.' },
      { type: 'new', text: 'Follow-up templates on lead detail — 3 Taglish message templates + Open Messenger deep link button.' },
      { type: 'new', text: 'PackagePicker component — 4 package cards + toggleable add-ons, auto-calculates total. Add-ons flow into invoice as line items.' },
      { type: 'new', text: 'Booking confirmation smart link — public /confirm/[token] page: event details, payment breakdown, GCash info, terms. No login required.' },
      { type: 'new', text: 'Overdue alert banner on Bookings page — event passed, balance unpaid.' },
      { type: 'new', text: 'Payment status badges per booking row — Unpaid / Deposit Paid / Fully Paid / Overdue.' },
      { type: 'new', text: 'Micro-animation on Mark Paid — green flash confirmation banner.' },
      { type: 'new', text: 'SMS follow-up via Semaphore PH — cron sends Taglish SMS to leads with phone numbers and no Messenger.' },
      { type: 'new', text: 'Open beta ready — delete INVITE_CODE env var in Vercel to open signups publicly.' },
      { type: 'new', text: 'Custom empty states on Leads and Bookings pages — illustrated CTAs, Paste DM as #1 entry point on empty leads.' },
    ],
  },
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
