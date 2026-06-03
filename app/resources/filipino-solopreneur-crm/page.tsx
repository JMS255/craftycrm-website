'use client'

export default function FilipinoSolopreneurCRMPage() {
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
          style={{ background: 'rgba(99,102,241,0.12)', color: '#a5b4fc' }}>
          Market Research · June 2026
        </span>
        <h1 className="text-3xl font-bold text-white mb-3">The Filipino Service Business Owner: A Market Research Brief</h1>
        <p style={{ color: '#6b7280' }}>
          The Philippine CRM market opportunity, competitive landscape, and why Filipino service solopreneurs
          are massively underserved. Based on DataReportal Philippines 2024, IDC PH CRM Market data, and
          ACM Digital Library research on Filipino fintech adoption.
        </p>
      </div>

      {[
        {
          title: '1. Market Overview',
          items: [
            { h: 'The Philippine CRM market is $134.7M and growing at 13.19% CAGR', b: 'Projected to reach $220M by 2029. Almost none of this growth targets small Filipino service businesses at the ₱800–₱1,200/month price point. The SMB segment is the fastest-growing but most underserved.' },
            { h: '47–70% of CRM deployments in the Philippines fail', b: 'Primary cause: poor tool fit. Tools designed for Western enterprise sales teams (Zoho, HubSpot, Salesforce) require complex setup that service solopreneurs don\'t have time for, in a language and workflow that doesn\'t match how they work.' },
            { h: 'Zero direct competitors in the Filipino service solopreneur niche', b: 'HoneyBook is officially US/Canada only. Studio Ninja charges USD only. Dubsado was built for US freelancers. Crafty CRM is the only Filipino-built CRM purpose-built for local service businesses at peso pricing.' },
          ],
        },
        {
          title: '2. The Real Competition',
          items: [
            { h: 'Facebook Messenger + manual replies (Critical threat)', b: 'Most Filipino event suppliers run their entire business from a Messenger chat window. The #1 cause of lost leads: response latency. An inquiry arrives, nobody replies fast enough, and the lead moves to a competitor who replied faster.' },
            { h: 'Google Sheets + Excel (High threat)', b: 'Free, familiar, and good enough for 2–5 bookings/month. Breaks down at 10+ active leads. The transition moment — when GSheets becomes unmanageable — is the primary acquisition opportunity for any CRM targeting this segment.' },
            { h: 'Eventchy (Not a competitor — a partner)', b: 'Eventchy is a marketplace that generates leads, not a CRM. Leads still arrive via Messenger after a client finds you on Eventchy. Positioning: "Eventchy gets you found. Crafty CRM gets you booked and paid."' },
          ],
        },
        {
          title: '3. When Filipino Solopreneurs Switch Tools',
          items: [
            { h: 'A lost booking', b: 'They forgot to follow up, missed a date, or double-booked. The pain is acute and memorable. This is the highest-intent moment for CRM adoption.' },
            { h: 'A client complaint', b: '"Sabi mo June 15, hindi June 5!" The chaos became visible to a client. Professional embarrassment is a powerful motivator.' },
            { h: 'Business growth crossing the 10-booking threshold', b: 'Suddenly handling 8–10 simultaneous inquiries. GSheets doesn\'t scale emotionally. The cognitive load becomes unbearable.' },
            { h: 'A peer testimonial', b: '"May gamit na akong tool, mas okay na" (I\'m using a tool now, much better). Social proof from a trusted peer in the same industry triggers the switch.' },
          ],
        },
        {
          title: '4. Target Market Expansion Path',
          items: [
            { h: 'Beachhead: Photobooth operators', b: 'James Ignacio\'s own business. Intimate knowledge of the workflow, pricing, and pain. Zamboanga City as the base — serves as a proof point for all provincial Philippine service businesses.' },
            { h: 'Adjacent: Photographers + videographers', b: 'Same booking/payment/inquiry workflow. Same Messenger dependency. Same Zamboanga/provincial underservice. Highest-volume niche after photobooth.' },
            { h: 'Expansion: All Filipino event service solopreneurs', b: 'Florists, caterers, event stylists, wedding coordinators, hair and makeup artists, emcees. Any solo service business managing leads + bookings + invoices via Messenger.' },
            { h: 'Long-term: Filipino service solopreneurs of any type', b: '₱134.7M market opportunity. "Filipino-built, peso-priced, pre-built for your business type." Pricing: Free → ₱800/mo Starter → ₱1,200/mo Pro → Custom bespoke builds (₱30K–₱80K).' },
          ],
        },
        {
          title: '5. Positioning That Converts',
          items: [
            { h: 'vs. Messenger + Sheets: "Your Messenger is full of leads you forgot to follow up on. Crafty CRM remembers so you don\'t have to."', b: 'Lead with the pain, not the product. Filipino solopreneurs don\'t know what a CRM is — they know they\'re losing bookings.' },
            { h: 'vs. Studio Ninja / Dubsado: "Studio Ninja is $27/month in dollars. Crafty CRM is ₱800 in pesos. And it actually sends SMS."', b: 'Price parity argument with local anchoring. The peso framing makes the comparison visceral.' },
            { h: 'vs. Zoho / HubSpot: "Zoho gives you 50 blank fields and wishes you good luck. Crafty CRM comes pre-built for photobooth businesses."', b: 'Setup friction is why 47–70% of PH CRM deployments fail. Out-of-box readiness is the core product promise.' },
          ],
        },
      ].map((section, si) => (
        <div key={si} className="mb-10">
          <h2 className="text-xl font-bold text-white mb-4" style={{ borderBottom: '1px solid #1e1e2e', paddingBottom: '0.75rem' }}>{section.title}</h2>
          <div className="space-y-4">
            {section.items.map((item, ii) => (
              <div key={ii} className="rounded-xl p-4" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
                <p className="text-sm font-semibold text-white mb-1.5">{item.h}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>{item.b}</p>
              </div>
            ))}
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
