'use client'

export default function MobileUXPhilippinesPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 pt-28 pb-20">
      <div className="flex items-center justify-between mb-8 print:hidden">
        <a href="/resources" className="text-sm" style={{ color: '#a5b4fc' }}>← Back to Resources</a>
        <button onClick={() => window.print()}
          className="text-sm px-4 py-2 rounded-xl font-medium"
          style={{ background: 'rgba(99,102,241,0.15)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.3)' }}>
          📥 Save as PDF
        </button>
      </div>

      <div className="mb-8">
        <span className="text-xs px-2.5 py-1 rounded-full font-medium inline-block mb-3"
          style={{ background: 'rgba(245,158,11,0.12)', color: '#fbbf24' }}>
          Mobile UX · June 2026
        </span>
        <h1 className="text-3xl font-bold text-white mb-3">Mobile UX for Philippine Service Businesses: A Research Brief</h1>
        <p style={{ color: '#6b7280' }}>
          10 research-backed findings for designing mobile apps for Filipino service solopreneurs.
          Based on Statcounter PH data, Apple HIG, Google Material Design, Nielsen Norman Group research,
          and ACM Digital Library studies on Filipino app usage.
        </p>
      </div>

      {[
        { n: '1', title: '360×800px is the target screen — not 390px', color: '#6366f1', body: 'Statcounter PH data: 360×800 is the most common mobile resolution in the Philippines (~40% of market). These are budget Android phones at PHP 3,000–6,000 (Redmi, Realme, Vivo). At 360px with 16px padding each side, the content area is only 328px. Every layout must be tested at this width before shipping.' },
        { n: '2', title: 'Minimum 44px touch targets — 48px preferred', color: '#10b981', body: 'Apple Human Interface Guidelines: 44×44px minimum for all tappable elements. Google Material Design: 48×48px preferred. Budget Android users checking phones at events (rough hands, bright light, one-handed) need generous targets. py-3 (44px total) is minimum; py-4 is safer.' },
        { n: '3', title: 'KPI numbers must be abbreviated on mobile', color: '#f59e0b', body: 'At 328px content width split into 3 equal columns (~100px each), a full number "₱27,150" at readable 30px font needs ~160px — it overflows. "₱27.1k" at the same size needs ~60px. GCash uses this pattern for secondary stats. Always use abbreviated formats (₱27.1k, ₱3.5k) for dashboard KPIs on mobile.' },
        { n: '4', title: 'Light mode wins outdoors', color: '#60a5fa', body: 'In bright sunlight (outdoor weddings, birthday venues), displays cannot get dark enough relative to ambient brightness. Light mode maintains contrast because white reflects ambient light. Piepenbrock 2013 (Ergonomics): users read text faster and more accurately in light mode. Every major PH app defaults to light: GCash, Maya, Shopee, Grab, Facebook.' },
        { n: '5', title: 'Bottom navigation — 5 tabs with icons + labels', color: '#a78bfa', body: 'AppMySite 2025 research: 5 tabs is optimal for app complexity. Icons alone confuse ~20% of users — always pair with labels. Active state must use both color change AND a visual indicator. Tap targets 48×48px. The bottom 50% of a 6.6" screen is the natural thumb zone — put primary actions there.' },
        { n: '6', title: 'Forms: single column, label above field, 44px minimum height', color: '#34d399', body: 'Nielsen Norman Group mobile checklist: single column ONLY on mobile — no side-by-side fields. Label above field (floating labels reduce discoverability). Minimum field height 44px. Progressive disclosure (show 4 fields default, expand for more) reduces form abandonment significantly.' },
        { n: '7', title: 'Body text minimum 16px on mobile', color: '#f97316', body: 'WCAG and Apple/Google guidelines: minimum 16px for body text on mobile. 14px for secondary labels. 12px only for badges and timestamps — never for actionable content. Outdoor use in bright venues degrades contrast and perceived size. Below 16px body text is a guaranteed accessibility failure for this audience.' },
        { n: '8', title: 'Optimistic UI is critical for provincial Philippine networks', color: '#ef4444', body: 'Provincial Philippine mobile networks (outside Metro Manila) have intermittent 4G with 2–4 second lag on data operations. Optimistic UI (update locally first, sync in background) prevents double-taps and duplicate entries when the UI appears frozen. Mark Paid, stage changes, and activity logging are the highest-risk actions.' },
        { n: '9', title: 'Safe area insets must be respected on iPhones', color: '#06b6d4', body: 'iPhone X and newer have a 34px home indicator safe area at the bottom. Use env(safe-area-inset-bottom) in CSS with viewport-fit=cover in the meta tag. Without this, fixed bottom navigation obscures the home indicator or leaves a visible gap.' },
        { n: '10', title: 'Budget Android phones have slower CPUs — keep animations under 300ms', color: '#8b5cf6', body: 'Redmi/Realme devices common in the Philippines run on MediaTek chips with limited GPU resources. Use only transform and opacity for animations (GPU-accelerated). Keep all transitions under 300ms. Complex animations (parallax, blur effects) cause visible jank on these devices.' },
      ].map((item, i) => (
        <div key={i} className="rounded-xl p-4 mb-4 flex gap-4" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0"
            style={{ background: item.color + '20', color: item.color }}>{item.n}</div>
          <div>
            <p className="text-sm font-semibold text-white mb-1.5">{item.title}</p>
            <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>{item.body}</p>
          </div>
        </div>
      ))}

      <div className="rounded-2xl p-5 mt-8" style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}>
        <p className="text-sm font-semibold text-white mb-1">About Crafty CRM</p>
        <p className="text-sm" style={{ color: '#9ca3af' }}>Filipino-built CRM for photographers, photobooth operators, and event service solopreneurs. Free to try, peso-priced, built in Zamboanga City. <a href="https://craftifyle-crm-system.vercel.app/signup" style={{ color: '#a5b4fc' }}>craftifyle-crm-system.vercel.app</a></p>
      </div>

      <style>{`@media print { body { background: white !important; color: black !important; } .print\\:hidden { display: none !important; } }`}</style>
    </div>
  )
}
