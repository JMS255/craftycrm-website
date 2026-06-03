const resources = [
  {
    id: 'filipino-solopreneur-crm',
    emoji: '📊',
    title: 'The Filipino Service Business Owner: A Market Research Brief',
    desc: 'Deep research on the ₱134.7M Philippine CRM market, why 47–70% of CRM deployments fail, and the exact gap Crafty CRM fills. Includes competitive analysis and positioning playbook.',
    tags: ['Market Research', 'Philippines', 'CRM'],
    pages: '4 pages',
    pdf: '/downloads/crafty-crm-market-research.pdf',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.2)',
    href: '/resources/filipino-solopreneur-crm',
    highlights: [
      '$134.7M PH CRM market growing at 13.19% CAGR',
      '0 direct competitors in the Filipino service solopreneur niche',
      'The real competition is Messenger + Google Sheets — not Zoho',
      'Why 47–70% of CRM deployments in PH fail (and how to avoid it)',
    ],
  },
  {
    id: 'launch-playbook',
    emoji: '🚀',
    title: 'How to Get Your First 100 Beta Users as a Solo Filipino Developer',
    desc: 'A 90-day, introvert-friendly launch playbook based on research across 20+ sources. Facebook groups, Taglish content strategy, give-first tactics, and the weekly 100-minute rhythm.',
    tags: ['Launch Strategy', 'Marketing', 'Indie Dev'],
    pages: '4 pages',
    pdf: '/downloads/crafty-crm-launch-playbook.pdf',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.2)',
    href: '/resources/launch-playbook',
    highlights: [
      'Exact Facebook groups where Filipino photographers + event suppliers hang out',
      'The 5 things that make Filipinos trust a new tool (and 7 that kill trust)',
      '90-day phased plan: 5 users → 10 users → 50 users',
      'Why introverts actually have an advantage in the Filipino market',
    ],
  },
  {
    id: 'mobile-ux-philippines',
    emoji: '📱',
    title: 'Mobile UX for Philippine Service Businesses: A Research Brief',
    desc: '10 research-backed findings on designing for 360px Android screens, outdoor use, thumb zones, touch targets, and why light mode wins in the Filipino context.',
    tags: ['Mobile UX', 'Philippines', 'Design'],
    pages: '3 pages',
    pdf: '/downloads/crafty-crm-mobile-ux-ph.pdf',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.2)',
    href: '/resources/mobile-ux-philippines',
    highlights: [
      '360×800px is the most common mobile screen in PH — not 390px',
      'Minimum 44px touch targets (Apple HIG) — why it matters for outdoor users',
      'Why light mode outperforms dark mode for Filipino service workers',
      'Thumb zone research for 6.6–6.9" screens (most common PH device size)',
    ],
  },
]

export default function ResourcesPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 pt-28 pb-20">
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs px-2.5 py-1 rounded-full font-medium"
            style={{ background: 'rgba(99,102,241,0.15)', color: '#a5b4fc' }}>
            Free — No email required
          </span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-3">Free Research Resources</h1>
        <p style={{ color: '#6b7280' }}>
          Research briefs and playbooks based on real data. Built for Filipino service solopreneurs,
          indie developers, and product teams building for the Philippine market. Download, share, use freely.
        </p>
      </div>

      <div className="space-y-6">
        {resources.map(r => (
          <div key={r.id} className="rounded-2xl p-6" style={{ background: '#111118', border: `1px solid ${r.border}` }}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                style={{ background: r.bg }}>
                {r.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  {r.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: r.bg, color: r.color }}>{t}</span>
                  ))}
                  <span className="text-xs" style={{ color: '#4a4a6a' }}>{r.pages}</span>
                </div>
                <h2 className="text-lg font-bold text-white mb-2">{r.title}</h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#9ca3af' }}>{r.desc}</p>

                <div className="space-y-1.5 mb-5">
                  {r.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-xs mt-0.5 shrink-0" style={{ color: r.color }}>✓</span>
                      <p className="text-xs leading-relaxed" style={{ color: '#787895' }}>{h}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  <a href={r.href}
                    className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-xl transition-opacity hover:opacity-80"
                    style={{ background: 'transparent', color: r.color, border: `1px solid ${r.border}` }}>
                    Read online →
                  </a>
                  <a href={r.pdf} download
                    className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl transition-opacity hover:opacity-80"
                    style={{ background: r.bg, color: r.color, border: `1px solid ${r.border}` }}>
                    📥 Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl p-6 text-center" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
        <p className="text-sm font-semibold text-white mb-2">More resources coming</p>
        <p className="text-sm" style={{ color: '#6b7280' }}>
          We publish new research as we build. Follow{' '}
          <span style={{ color: '#a5b4fc' }}>@craftifylecrm</span> or{' '}
          <a href="/changelog" style={{ color: '#a5b4fc' }}>check the changelog</a> for updates.
        </p>
      </div>
    </div>
  )
}
