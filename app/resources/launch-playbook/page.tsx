'use client'

export default function LaunchPlaybookPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 pt-28 pb-20">
      {/* Print button — hidden in print */}
      <div className="flex items-center justify-between mb-8 print:hidden">
        <a href="/resources" className="text-sm" style={{ color: '#a5b4fc' }}>← Back to Resources</a>
        <button onClick={() => window.print()}
          className="text-sm px-4 py-2 rounded-xl font-medium"
          style={{ background: 'rgba(99,102,241,0.15)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.3)' }}>
          📥 Save as PDF
        </button>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs px-2.5 py-1 rounded-full font-medium"
            style={{ background: 'rgba(16,185,129,0.12)', color: '#34d399' }}>
            Launch Strategy · June 2026
          </span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-3">How to Get Your First 100 Beta Users as a Solo Filipino Developer</h1>
        <p style={{ color: '#6b7280' }}>
          A 90-day, introvert-friendly playbook based on research across 20+ sources including Indie Hackers launch data,
          Filipino purchase behavior studies, and ACM Digital Library research on GCash/Maya usability.
          Published by Crafty CRM — Filipino-built CRM for service solopreneurs.
        </p>
      </div>

      {[
        {
          title: '1. The Honest Landscape',
          content: [
            { heading: 'Product Hunt is not your first move', body: 'Product Hunt\'s feature rate collapsed to ~10% after a 2024 algorithm change. Without a pre-built audience, you\'re shouting into a lobby full of people also shouting. It amplifies what already exists.' },
            { heading: 'Indie Hackers converts 3–8× better', body: 'OpenHunts study of 387 launches: 23.1% conversion rate vs 3.1% for Product Hunt. But it requires 4–6 months of consistent participation, not a one-day launch.' },
            { heading: 'Your first 10 users always come from personal, direct contact', body: 'This is good news for introverts — it\'s 1-on-1 written conversations, not stage performance.' },
          ],
        },
        {
          title: '2. Where Your Users Are',
          content: [
            { heading: 'Photobooth Suppliers Philippines', body: 'Operators exactly like you — highest trust, lowest barrier to entry. This is your beachhead group.' },
            { heading: 'Event Photographers and Videographers Philippines', body: 'Direct target users with high booking volume and the exact pain your product solves.' },
            { heading: 'Getting Married Wedding Coordinators & Event Planners', body: '39,000+ members. Coordinators manage 10–30 bookings per month — exactly when Messenger + GSheets starts breaking down.' },
            { heading: 'Freelancers Hub Philippines + FLIP 2.0', body: 'Broader Filipino solopreneur communities. Good for awareness after you\'ve established yourself in niche groups.' },
            { heading: 'Zamboanga/Mindanao regional groups', body: 'Being local is a trust advantage. "Kababayan ko \'to" (he\'s a townmate) accelerates trust — search for "Zamboanga Entrepreneurs," "Mindanao Business Network."' },
          ],
        },
        {
          title: '3. What Makes Filipinos Trust a New Tool',
          content: [
            { heading: 'Peer recommendation from same profession (92% trust rate)', body: '"Si Maria gamit na niya" (Maria is already using it) from a fellow photographer is more powerful than any ad. 92% of Filipinos trust peer recommendations over advertising.' },
            { heading: '"Pinoy-built" is a real differentiator', body: 'Filipino consumers have a documented preference for local products. Fear of foreign tools being "too complicated" or "hindi para sa atin" (not for us) is real. Being from Zamboanga makes you relatable to everyone outside Metro Manila — the majority of your market.' },
            { heading: 'Transparency about being early-stage', body: '"Kasama natin siya" (he\'s one of us) beats polish. Filipinos are forgiving of bugs when they feel personally connected to the builder.' },
            { heading: 'Price clarity in pesos', body: 'No hidden costs, no bait-and-switch. Filipino buyers distrust surprises. If it\'s free to try, say so directly.' },
            { heading: 'What kills trust: asking for phone number at signup', body: 'High abandonment (6.3% drop-off) and associates with GCash scam patterns in Filipino users\' minds. Don\'t ask for it.' },
          ],
        },
        {
          title: '4. The 90-Day Beta User Plan',
          content: [
            { heading: 'Days 1–14 — Personal ask only (Goal: 5 users)', body: 'List 10 people you know — photographers, photobooth operators, coordinators. Message each in Messenger: "Kumusta? Paano mo nini-manage ang bookings mo?" Have a real conversation first. After they describe their pain: "Eto yung ginawa ko — libre i-try." No pitch, no link first.' },
            { heading: 'Days 15–30 — Community seeding (Goal: lurk + give)', body: 'Join 3 groups. Spend week 1 lurking. Start answering questions helpfully with zero product mention. Post one free resource (booking contract template, rate sheet) in each group.' },
            { heading: 'Days 31–60 — Soft intro post (Goal: 10 more users)', body: 'After you\'ve given value: "Filipino developer ako from Zamboanga. Open beta na, libre. Gusto ninyong subukan?" Respond to every comment in Taglish.' },
            { heading: 'Days 61–90 — Referrals + Indie Hackers (Goal: 30–50 users)', body: 'Ask first users: "May kakilala kang photographer na puwede naming tulungan?" Post one honest founder story on Indie Hackers. Create a small Messenger group for beta testers.' },
          ],
        },
        {
          title: '5. The Weekly 100-Minute Rhythm',
          content: [
            { heading: 'Monday (20 min)', body: 'Reply to DMs and comments from the previous week.' },
            { heading: 'Tuesday (30 min)', body: 'Post one value resource or helpful answer in 1–2 Facebook groups. No product mention needed.' },
            { heading: 'Thursday (20 min)', body: '2–3 personal DMs to potential users or follow-up messages to existing beta users.' },
            { heading: 'Saturday (30 min)', body: 'Review analytics. Note what users are doing vs. what they say. Ship one small improvement based on behavior.' },
          ],
        },
        {
          title: '6. Why Introverts Have an Advantage',
          content: [
            { heading: 'Written 1-on-1 is the highest-converting channel', body: 'Every successful indie hacker got their first 10 users from direct personal conversations. This is written Messenger chat — not stage performance.' },
            { heading: 'Taglish writing IS your marketing voice', body: 'You write how your users talk. Pure English sounds corporate. Your natural writing voice converts better than polished ad copy.' },
            { heading: 'INFJ empathy = copywriting superpower', body: 'You understand your users\' inner world better than they can articulate it. "Pagod ka na bang mag-reply sa lahat ng DM tapos nakakalimutan mo pa?" — that\'s felt, not manufactured.' },
            { heading: 'You don\'t market yourself — you market the problem', body: 'You\'re not asking people to care about you. You\'re asking Filipino photographers if they\'re tired of losing track of leads in Messenger threads. Completely different ask.' },
          ],
        },
      ].map((section, si) => (
        <div key={si} className="mb-10">
          <h2 className="text-xl font-bold text-white mb-4" style={{ borderBottom: '1px solid #1e1e2e', paddingBottom: '0.75rem' }}>{section.title}</h2>
          <div className="space-y-4">
            {section.content.map((item, ii) => (
              <div key={ii} className="rounded-xl p-4" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
                <p className="text-sm font-semibold text-white mb-1.5">{item.heading}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="rounded-2xl p-5 mt-8" style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}>
        <p className="text-sm font-semibold text-white mb-1">About Crafty CRM</p>
        <p className="text-sm" style={{ color: '#9ca3af' }}>
          Filipino-built CRM for photographers, photobooth operators, and event service solopreneurs.
          Free to try, peso-priced, built in Zamboanga City.{' '}
          <a href="https://craftifyle-crm-system.vercel.app/signup" style={{ color: '#a5b4fc' }}>
            craftifyle-crm-system.vercel.app
          </a>
        </p>
      </div>

      <style>{`
        @media print {
          body { background: white !important; color: black !important; }
          .print\\:hidden { display: none !important; }
        }
      `}</style>
    </div>
  )
}
