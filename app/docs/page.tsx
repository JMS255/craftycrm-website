const sections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: '🚀',
    content: [
      {
        heading: 'Sign up',
        body: 'Go to the signup page and enter your invite code. Once signed in, the onboarding tutorial will walk you through the main features. You can reopen it anytime by clicking the ? button in the sidebar.',
      },
      {
        heading: 'Set up your profile',
        body: 'Click your name at the bottom of the sidebar (or the Profile tab on mobile) to set your full name, business name, and city. This appears throughout the CRM.',
      },
    ],
  },
  {
    id: 'leads',
    title: 'Leads',
    icon: '◎',
    content: [
      {
        heading: 'What is a lead?',
        body: 'A lead is anyone who has inquired about your services but hasn\'t confirmed a booking yet. Every client starts as a lead.',
      },
      {
        heading: 'Adding a lead',
        body: 'Click "+ New Lead" on the dashboard or go to Leads → New Lead. Fill in their contact info, event details, and source. You don\'t need to fill everything — name is the only required field.',
      },
      {
        heading: 'Pipeline stages',
        body: 'Move leads through stages: New → Contacted → Quoted → Negotiating → Booked → Lost. Click any stage on the lead detail page to update it instantly.',
      },
      {
        heading: 'Activities',
        body: 'Log every interaction on a lead — notes, calls, messages, and follow-ups. Set a follow-up date to remind yourself to check back.',
      },
      {
        heading: 'Converting to a booking',
        body: 'When a lead confirms, click "Convert to Booking" on the lead detail page. Fill in the event name, time, package, and deposit amount.',
      },
    ],
  },
  {
    id: 'bookings',
    title: 'Bookings',
    icon: '◈',
    content: [
      {
        heading: 'What is a booking?',
        body: 'A booking is a confirmed event with a client. It has an event date, venue, package price, deposit, and balance.',
      },
      {
        heading: 'Tracking payments',
        body: 'Mark deposits and balances as paid directly on the booking page. The dashboard upcoming events shows which bookings have balance due.',
      },
      {
        heading: 'Invoice',
        body: 'Click "Invoice" on any booking to open a printable invoice with your business details, event info, GCash payment details, and balance due. Use Ctrl+P or the Print button to save as PDF.',
      },
      {
        heading: 'Google Calendar sync',
        body: 'Click "Add to Calendar" on a booking to sync it to Google Calendar. It creates a 4-hour event at the event start time. Click "Update Calendar" after any changes.',
      },
    ],
  },
  {
    id: 'finances',
    title: 'Finances',
    icon: '◇',
    content: [
      {
        heading: 'Personal vs. business income',
        body: 'The Finances page tracks your personal income and expenses — separate from your booking revenue. Use it for personal gigs, tips, bills, food, and transport.',
      },
      {
        heading: 'Adding entries',
        body: 'Click "+ Income" or "+ Expense", fill in the description, amount, date, and category. Entries are grouped by month.',
      },
      {
        heading: 'Monthly summary',
        body: 'Each month shows total income, total expenses, and net profit. Expand any month to see individual entries.',
      },
    ],
  },
  {
    id: 'ads',
    title: 'Ad Performance',
    icon: '◉',
    content: [
      {
        heading: 'How ad tracking works',
        body: 'When you run a Facebook Traffic ad, set the destination URL to your Messenger link with a ref tag: m.me/yourpage?ref=ad_name. When someone clicks and messages you, Crafty AI captures the ref tag and logs it on the lead.',
      },
      {
        heading: 'Viewing results',
        body: 'The Ad Performance page groups leads by their ad_ref tag. You can see how many leads, bookings, and revenue came from each ad campaign.',
      },
      {
        heading: 'Important note',
        body: 'Ad tracking only works with Traffic objective campaigns, not Chat Builder campaigns. The ref tag must be in the destination URL.',
      },
    ],
  },
  {
    id: 'crafty-ai',
    title: 'Crafty AI',
    icon: '🤖',
    content: [
      {
        heading: 'What Crafty AI does',
        body: 'Crafty is an AI assistant connected to your Facebook Messenger page. It automatically replies to client inquiries in Taglish, asks discovery questions, recommends packages, and guides clients to pay a deposit.',
      },
      {
        heading: 'Auto lead creation',
        body: 'Every Messenger conversation is automatically analyzed. Crafty extracts the client\'s name, event type, date, venue, pax count, phone, and email — and creates or updates a lead in your CRM.',
      },
      {
        heading: 'Auto booking on PAID',
        body: 'When a client says "PAID" in the conversation, Crafty automatically creates a booking with ₱1,000 deposit marked as paid and syncs it to Google Calendar.',
      },
      {
        heading: 'Takeover toggle',
        body: 'On any lead\'s detail page, you can toggle Crafty AI off to manually take over the conversation. Toggle it back on to let Crafty resume.',
      },
      {
        heading: 'CRM Actions mode',
        body: 'Click the "⚡ CRM Actions" tab inside the chat widget to switch from business advisor to CRM assistant. In this mode, you can tell Crafty to add leads, update bookings, log payments, and query revenue — all in plain language. Example: "Add lead: Maria Santos, birthday June 28, ₱6,500 bundle." Crafty writes directly to your database and confirms what it did.',
      },
      {
        heading: 'Note',
        body: 'Crafty AI Messenger is currently configured for James\'s photobooth business. Custom Crafty AI setup for other businesses is coming in a future update.',
      },
    ],
  },
]

export default function DocsPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 pt-28 pb-20">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-white mb-2">Documentation</h1>
        <p style={{ color: '#6b7280' }}>Everything you need to know to get the most out of Crafty CRM.</p>
      </div>

      {/* Quick nav */}
      <div className="flex flex-wrap gap-2 mb-12">
        {sections.map(s => (
          <a key={s.id} href={`#${s.id}`}
            className="text-xs px-3 py-1.5 rounded-full font-medium transition-colors hover:text-white"
            style={{ background: '#111118', border: '1px solid #1e1e2e', color: '#6b7280' }}>
            {s.icon} {s.title}
          </a>
        ))}
      </div>

      <div className="space-y-14">
        {sections.map(s => (
          <section key={s.id} id={s.id}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{s.icon}</span>
              <h2 className="text-xl font-bold text-white">{s.title}</h2>
            </div>
            <div className="space-y-5">
              {s.content.map((c, i) => (
                <div key={i} className="rounded-2xl p-5" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
                  <h3 className="font-semibold text-white mb-2">{c.heading}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>{c.body}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
