const sections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: '🚀',
    content: [
      {
        heading: 'Sign up',
        body: 'Go to the signup page and create your free account. Once signed in, Crafty walks you through a quick 2-minute onboarding — paste a real client DM and watch it extract the lead for you, then set your business name and type. You can reopen the onboarding anytime from your profile.',
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
  {
    id: 'whats-new',
    title: 'What\'s New',
    icon: '✅',
    content: [
      {
        heading: 'Delete leads and bookings',
        body: 'You can now delete any lead or booking directly from its detail page. A red Delete button appears in the header next to Edit. A confirmation dialog prevents accidental deletes. No more going to the database manually.',
      },
      {
        heading: 'Lost leads hidden by default',
        body: 'Leads marked as "Lost" no longer clutter the default list view. They\'re still there — just select the "Lost" filter to see them. Keeps your active pipeline clean without losing the history.',
      },
      {
        heading: 'Crafty AI chat animations',
        body: 'The chat widget now feels alive. The panel slides up when you open it and slides back down when you close it. The typing indicator shows three bouncing dots instead of plain text. New messages animate in. Suggestion chips stagger in one by one. The FAB button has a subtle glow pulse so it\'s easier to notice.',
      },
      {
        heading: 'Mobile UX improvements',
        body: 'Touch targets across the app are now at least 44px — easier to tap on any phone. The revenue KPI numbers scale down on small screens so they fit without overflow. Phone fields open the dial pad, number fields open the number pad. Lead rows are taller and the full row is tappable. The bottom nav is solid and anchored — no more floating look.',
      },
      {
        heading: 'Personalized onboarding flow',
        body: 'When you sign up, Crafty walks you through a 3-screen setup. First, paste a real client DM and watch Crafty extract the lead in real time — name, event, date, venue revealed line by line. Then set your business name and type (7 categories). Then your dashboard unlocks. The whole thing takes under 2 minutes.',
      },
      {
        heading: 'First-session Crafty toasts',
        body: 'In your first 30 minutes, Crafty quietly celebrates with you as you hit milestones — adding your first lead, making your first stage change, logging your first activity, creating your first booking. Small toasts appear from the Crafty button, use your actual client names, and each fires exactly once.',
      },
      {
        heading: 'Balance Due This Week — dashboard alert',
        body: 'The dashboard now shows an amber "💰 Balance Due This Week" card listing every confirmed booking where the event is within 7 days and the balance hasn\'t been collected. Click any row to go straight to the booking. Never miss a collection again.',
      },
      {
        heading: 'Swipe-to-action on mobile lead cards',
        body: 'On mobile, swipe a lead card right to mark it as Contacted, or swipe left to archive it as Lost. A colored overlay shows the action as you swipe. An undo button appears for 4 seconds after every swipe so you can reverse it instantly.',
      },
      {
        heading: 'Onboarding checklist on dashboard',
        body: 'New users now see a 3-step checklist pinned to the dashboard after their first lead: Add a lead · Try Crafty AI · Set up your profile. Progress bar fills as each step is completed. Dismisses permanently when done.',
      },
      {
        heading: 'Stage hints on lead detail',
        body: 'The pipeline progress bar on every lead detail page now shows a contextual hint below it — telling you exactly what to do next at each stage. "You\'ve made contact. Follow up in 2–3 days if no reply yet." No more wondering what the next step is.',
      },
      {
        heading: 'Paste DM → Crafty creates the lead',
        body: 'Open the chat widget → ⚡ Do Something tab → click the 📋 button. Paste the raw client DM ("Hi! Available ba kayo July 20? Birthday ng anak ko, 80 guests"). Crafty extracts the details and creates the lead. No form, no manual typing.',
      },
      {
        heading: 'Cold Lead Alerts',
        body: 'The Leads page now shows a 🔥 banner at the top listing every lead in Contacted, Quoted, or Negotiating status that has been silent for 5+ days. Color-coded: Warm (5–6 days), Cold (7–13 days), Very Cold (14+ days). Each row shows the exact days of silence.',
      },
      {
        heading: 'Convert lead to booking via Crafty',
        body: 'Tell Crafty in CRM Actions mode: "Convert Maria Santos to a booking, she paid her deposit." Crafty finds the lead, pulls the event date, venue, and package, creates the booking, marks the deposit paid, and updates the lead status to Booked — all in one message.',
      },
      {
        heading: 'Revenue dashboard card',
        body: 'The main dashboard now shows a 3-column card for the current month: Confirmed (total of all bookings), Collected (deposit + balance payments received), and Outstanding (what\'s still owed). Updates automatically as payments are logged.',
      },
      {
        heading: 'Kanban board view',
        body: 'The Leads page now has a Board/List toggle at the top right. Board mode shows 6 columns (New → Contacted → Quoted → Negotiating → Booked → Lost). Drag any lead card to a new column to move it through the pipeline on desktop. On mobile, use the stage tabs and Move buttons.',
      },
      {
        heading: 'Booking confirmation smart link',
        body: 'On any booking detail page, click the 🔗 Share Link button. It copies a public URL you can send to your client. They open it and see the event name, date, venue, package price, payment status, your GCash number, and your cancellation terms. No login required.',
      },
      {
        heading: 'AI next-action badges',
        body: 'Every lead in list view, mobile cards, and the kanban board now shows a rule-based action badge: "⚡ Event in 3d — confirm!", "🔔 Follow up now" (quoted/negotiating, 7+ days silent), "📞 First contact needed" (new, 3+ days old), "⚠ Event passed — close it". Removes the mental overhead of deciding what to do for each lead.',
      },
      {
        heading: 'Overdue payment alerts',
        body: 'The Bookings page now shows a red banner listing all bookings where the event date has passed but the balance hasn\'t been collected. Each booking row also shows a payment status badge: Unpaid, Deposit Paid, Fully Paid, or Overdue.',
      },
      {
        heading: 'Free launch + market research resources',
        body: 'Crafty CRM publishes free research briefs based on real data at craftycrm.vercel.app/resources. Current downloads: "How to Get Your First 100 Beta Users as a Solo Filipino Developer," "The Filipino Service Business Owner: A Market Research Brief," and "Mobile UX for Philippine Service Businesses." No email required — just open and save as PDF.',
      },
      {
        heading: 'Install as a mobile app',
        body: 'Crafty CRM is a PWA — you can install it directly to your phone\'s home screen. On Android: open in Chrome, tap the 3-dot menu, tap "Add to Home Screen." On iPhone: open in Safari, tap the Share button, tap "Add to Home Screen." It launches full screen with no browser bar, like a native app.',
      },
    ],
  },
  {
    id: 'coming-soon',
    title: 'Coming Soon',
    icon: '⚡',
    content: [
      {
        heading: 'GCash / PayMongo payment links',
        body: 'Auto-generate a real payment link per booking. When the client pays, a webhook automatically marks the deposit as paid in the CRM.',
      },
      {
        heading: 'Booking contracts + e-sign',
        body: 'Send a digital contract to your client. They tap "I agree" and the timestamp is stored on the booking. Prevents cancellation disputes.',
      },
      {
        heading: 'Team mode',
        body: 'Add staff members with role-based access — photographer, coordinator, admin. Each person sees only what they need.',
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
