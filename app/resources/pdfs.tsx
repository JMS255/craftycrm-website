'use client'

import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer'

const colors = {
  heading: '#111118',
  body: '#374151',
  muted: '#6b7280',
  accent: '#4338ca',
  success: '#15803d',
  warning: '#92400e',
  border: '#e5e7eb',
  cardBg: '#f9fafb',
  tagBg: '#eff6ff',
  tagText: '#3730a3',
}

const s = StyleSheet.create({
  page: { fontFamily: 'Helvetica', fontSize: 10, color: colors.body, backgroundColor: '#ffffff', paddingTop: 48, paddingBottom: 48, paddingHorizontal: 56 },
  header: { marginBottom: 28, borderBottom: `1 solid ${colors.border}`, paddingBottom: 20 },
  tag: { backgroundColor: colors.tagBg, color: colors.tagText, fontSize: 8, fontWeight: 'bold', padding: '3 8', borderRadius: 4, alignSelf: 'flex-start', marginBottom: 10 },
  h1: { fontSize: 22, fontWeight: 'bold', color: colors.heading, marginBottom: 8, lineHeight: 1.3 },
  intro: { fontSize: 10, color: colors.muted, lineHeight: 1.6 },
  section: { marginBottom: 20 },
  h2: { fontSize: 13, fontWeight: 'bold', color: colors.heading, marginBottom: 10, paddingBottom: 4, borderBottom: `1 solid ${colors.border}` },
  card: { backgroundColor: colors.cardBg, border: `1 solid ${colors.border}`, borderRadius: 4, padding: 10, marginBottom: 6 },
  cardTitle: { fontSize: 10, fontWeight: 'bold', color: colors.heading, marginBottom: 3 },
  cardBody: { fontSize: 9.5, color: colors.body, lineHeight: 1.55 },
  checkRow: { flexDirection: 'row', gap: 6, marginBottom: 4 },
  checkMark: { fontSize: 9, color: colors.success, width: 10 },
  crossMark: { fontSize: 9, color: '#dc2626', width: 10 },
  checkText: { fontSize: 9.5, color: colors.body, flex: 1, lineHeight: 1.5 },
  footer: { marginTop: 28, borderTop: `1 solid ${colors.border}`, paddingTop: 12, flexDirection: 'row', justifyContent: 'space-between' },
  footerText: { fontSize: 8.5, color: colors.muted },
  footerLink: { fontSize: 8.5, color: colors.accent },
  numBadge: { width: 18, height: 18, backgroundColor: colors.tagBg, borderRadius: 3, alignItems: 'center', justifyContent: 'center', marginRight: 8, flexShrink: 0 },
  numText: { fontSize: 8.5, fontWeight: 'bold', color: colors.tagText },
  numRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 6 },
  numContent: { flex: 1 },
  twoCol: { flexDirection: 'row', gap: 10, marginBottom: 6 },
  col: { flex: 1, backgroundColor: colors.cardBg, border: `1 solid ${colors.border}`, borderRadius: 4, padding: 10 },
  colTitle: { fontSize: 9.5, fontWeight: 'bold', marginBottom: 6 },
  statGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 12 },
  statBox: { backgroundColor: colors.tagBg, border: `1 solid #bfdbfe`, borderRadius: 4, padding: '6 10', width: '47%' },
  statVal: { fontSize: 14, fontWeight: 'bold', color: colors.accent },
  statLabel: { fontSize: 8, color: colors.muted, marginTop: 2, lineHeight: 1.4 },
})

function Footer({ title }: { title: string }) {
  return (
    <View style={s.footer} fixed>
      <Text style={s.footerText}>{title} · Crafty CRM Research · June 2026</Text>
      <Link style={s.footerLink} src="https://craftifyle-crm-system.vercel.app">craftifyle-crm-system.vercel.app</Link>
    </View>
  )
}

// ── Launch Playbook PDF ─────────────────────────────────────────
export function LaunchPlaybookPDF() {
  return (
    <Document title="How to Get Your First 100 Beta Users as a Solo Filipino Developer" author="Crafty CRM">
      <Page size="A4" style={s.page}>
        <View style={s.header}>
          <Text style={s.tag}>Launch Strategy · June 2026</Text>
          <Text style={s.h1}>How to Get Your First 100 Beta Users{'\n'}as a Solo Filipino Developer</Text>
          <Text style={s.intro}>A 90-day, introvert-friendly playbook based on research across 20+ sources including Indie Hackers launch data, Filipino purchase behavior studies, and ACM Digital Library research on GCash/Maya usability. Published by Crafty CRM — Filipino-built CRM for service solopreneurs.</Text>
          <View style={s.statGrid}>
            {[['92%', 'Filipinos trust peer recommendations over ads'], ['3–8×', 'Indie Hackers converts better than Product Hunt'], ['100 min', 'Weekly effort needed — no camera required'], ['30–50', 'Target beta users in 90 days']].map(([v, l]) => (
              <View key={v} style={s.statBox}><Text style={s.statVal}>{v}</Text><Text style={s.statLabel}>{l}</Text></View>
            ))}
          </View>
        </View>

        {[
          { title: '1. The Honest Landscape', items: [
            { h: 'Product Hunt is not your first move', b: "Product Hunt's feature rate collapsed to ~10% after a 2024 algorithm change. Without a pre-built audience, you're shouting into a lobby full of people also shouting." },
            { h: 'Indie Hackers converts 3–8× better', b: 'OpenHunts study of 387 launches: 23.1% conversion rate vs 3.1% for Product Hunt. Requires 4–6 months of consistent participation, not a one-day launch.' },
            { h: 'Your first 10 users always come from personal, direct contact', b: 'This is good news for introverts — 1-on-1 written Messenger chat, not stage performance.' },
          ]},
          { title: '2. Where Your Users Are (Facebook Groups)', items: [
            { h: 'Photobooth Suppliers Philippines', b: 'Operators exactly like the founder — highest trust, lowest barrier. Your beachhead group.' },
            { h: 'Event Photographers and Videographers Philippines', b: 'Direct target users with high booking volume and the exact pain your product solves.' },
            { h: 'Getting Married Wedding Coordinators & Event Planners', b: '39,000+ members. Coordinators manage 10–30 bookings/month — exactly when Messenger + GSheets breaks down.' },
            { h: 'Freelancers Hub Philippines + FLIP 2.0', b: 'Broader Filipino solopreneur communities. Good for awareness after establishing yourself in niche groups.' },
          ]},
          { title: '3. The 90-Day Beta User Plan', items: [
            { h: 'Days 1–14 — Personal ask (Goal: 5 users)', b: "List 10 people you know. Message each in Messenger: 'Kumusta? Paano mo nini-manage ang bookings mo?' Have a real conversation first. After they describe their pain: 'Eto yung ginawa ko — libre i-try.'" },
            { h: 'Days 15–30 — Community seeding', b: 'Join 3 groups. Lurk week 1. Answer questions helpfully with zero product mention. Share one free resource (booking contract template, rate sheet).' },
            { h: 'Days 31–60 — Soft intro (Goal: 10 more users)', b: '"Filipino developer ako from Zamboanga. Open beta na, libre. Gusto ninyong subukan?" Respond to every comment in Taglish.' },
            { h: 'Days 61–90 — Referrals + Indie Hackers (Goal: 30–50 users)', b: "Ask first users: 'May kakilala kang photographer na puwede naming tulungan?' Post one honest founder story on Indie Hackers (23% conversion rate)." },
          ]},
        ].map(sec => (
          <View key={sec.title} style={s.section}>
            <Text style={s.h2}>{sec.title}</Text>
            {sec.items.map((item, i) => (
              <View key={i} style={s.card}>
                <Text style={s.cardTitle}>{item.h}</Text>
                <Text style={s.cardBody}>{item.b}</Text>
              </View>
            ))}
          </View>
        ))}

        <View style={s.section}>
          <Text style={s.h2}>4. Why Introverts Have an Advantage</Text>
          {[
            { h: 'Written 1-on-1 is the highest-converting channel', b: 'Every successful indie hacker got their first 10 users from direct personal conversations — written Messenger chat, not stage performance.' },
            { h: 'Taglish writing IS your marketing voice', b: "You write how your users talk. Pure English sounds corporate. Your natural writing voice converts better than polished ad copy." },
            { h: "INFJ empathy = copywriting superpower", b: "You understand your users' inner world better than they can articulate it. 'Pagod ka na bang mag-reply sa lahat ng DM tapos nakakalimutan mo pa?' — that's felt, not manufactured." },
            { h: "You don't market yourself — you market the problem", b: "You're not asking people to care about you. You're asking Filipino photographers if they're tired of losing track of leads in Messenger threads. Completely different ask." },
          ].map((item, i) => (
            <View key={i} style={s.card}>
              <Text style={s.cardTitle}>{item.h}</Text>
              <Text style={s.cardBody}>{item.b}</Text>
            </View>
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.h2}>5. Weekly 100-Minute Rhythm</Text>
          {[['Mon', '20 min', 'Reply to DMs and comments from the previous week'],['Tue', '30 min', 'Post one value resource or helpful answer in 1–2 Facebook groups. No product mention.'],['Thu', '20 min', '2–3 personal DMs to potential users or follow-up with existing beta users'],['Sat', '30 min', 'Review analytics. Note what users do vs what they say. Ship one small improvement.']].map(([day, time, task]) => (
            <View key={day} style={[s.card, { flexDirection: 'row', gap: 10 }]}>
              <Text style={{ fontSize: 9.5, fontWeight: 'bold', color: colors.accent, width: 24 }}>{day}</Text>
              <Text style={{ fontSize: 8.5, color: colors.muted, width: 36 }}>{time}</Text>
              <Text style={{ fontSize: 9.5, color: colors.body, flex: 1 }}>{task}</Text>
            </View>
          ))}
        </View>

        <Footer title="How to Get Your First 100 Beta Users" />
      </Page>
    </Document>
  )
}

// ── Market Research PDF ─────────────────────────────────────────
export function MarketResearchPDF() {
  return (
    <Document title="The Filipino Service Business Owner: A Market Research Brief" author="Crafty CRM">
      <Page size="A4" style={s.page}>
        <View style={s.header}>
          <Text style={s.tag}>Market Research · June 2026</Text>
          <Text style={s.h1}>The Filipino Service Business Owner:{'\n'}A Market Research Brief</Text>
          <Text style={s.intro}>The Philippine CRM market opportunity, competitive landscape, and why Filipino service solopreneurs are massively underserved. Based on DataReportal Philippines 2024, IDC PH CRM Market data, and ACM Digital Library research on Filipino fintech adoption.</Text>
          <View style={s.statGrid}>
            {[['$134.7M', 'PH CRM market size'], ['13.19%', 'Annual growth rate'], ['47–70%', 'CRM deployments that FAIL in PH'], ['0', 'Direct competitors in this niche']].map(([v, l]) => (
              <View key={v} style={s.statBox}><Text style={s.statVal}>{v}</Text><Text style={s.statLabel}>{l}</Text></View>
            ))}
          </View>
        </View>

        {[
          { title: '1. Market Overview', items: [
            { h: 'The Philippine CRM market is $134.7M and growing at 13.19% CAGR', b: 'Projected to reach $220M by 2029. Almost none of this growth targets small Filipino service businesses at the ₱800–₱1,200/month price point.' },
            { h: '47–70% of CRM deployments in the Philippines fail', b: "Primary cause: poor tool fit. Tools designed for Western enterprise sales teams require complex setup that service solopreneurs don't have time for." },
            { h: 'Zero direct competitors in the Filipino service solopreneur niche', b: 'HoneyBook is US/Canada only. Studio Ninja charges USD only. Dubsado was built for US freelancers. No Filipino-built CRM exists at peso pricing for this segment.' },
          ]},
          { title: '2. The Real Competition (Not Zoho — This)', items: [
            { h: 'Facebook Messenger + manual replies (Critical threat)', b: 'Most Filipino event suppliers run their entire business from a Messenger chat window. The #1 cause of lost leads: response latency.' },
            { h: 'Google Sheets + Excel (High threat)', b: 'Free, familiar, good enough for 2–5 bookings/month. Breaks down at 10+ active leads. The transition moment is the primary acquisition opportunity.' },
            { h: 'Eventchy (Not a competitor — a partner)', b: '"Eventchy gets you found. Crafty CRM gets you booked and paid." Leads still arrive via Messenger after a client finds you on Eventchy.' },
          ]},
          { title: '3. When Filipino Solopreneurs Switch Tools', items: [
            { h: 'A lost booking', b: 'They forgot to follow up, missed a date, or double-booked. The pain is acute and memorable — highest-intent moment for CRM adoption.' },
            { h: 'A client complaint', b: '"Sabi mo June 15, hindi June 5!" The chaos became visible to a client. Professional embarrassment is a powerful motivator.' },
            { h: 'Crossing the 10-booking threshold', b: 'Handling 8–10 simultaneous inquiries. GSheets no longer scales emotionally. The cognitive load becomes unbearable.' },
            { h: 'A peer testimonial', b: '"May gamit na akong tool, mas okay na." Social proof from a trusted peer in the same industry triggers the switch.' },
          ]},
          { title: '4. Positioning That Converts', items: [
            { h: 'vs. Messenger + Sheets', b: '"Your Messenger is full of leads you forgot to follow up on. Crafty CRM remembers so you don\'t have to."' },
            { h: 'vs. Studio Ninja / Dubsado', b: '"Studio Ninja is $27/month in dollars. Crafty CRM is ₱800 in pesos. And it actually sends SMS."' },
            { h: 'vs. Zoho / HubSpot', b: '"Zoho gives you 50 blank fields and wishes you good luck. Crafty CRM comes pre-built for photobooth businesses."' },
          ]},
        ].map(sec => (
          <View key={sec.title} style={s.section}>
            <Text style={s.h2}>{sec.title}</Text>
            {sec.items.map((item, i) => (
              <View key={i} style={s.card}>
                <Text style={s.cardTitle}>{item.h}</Text>
                <Text style={s.cardBody}>{item.b}</Text>
              </View>
            ))}
          </View>
        ))}

        <Footer title="The Filipino Service Business Owner" />
      </Page>
    </Document>
  )
}

// ── Mobile UX PDF ───────────────────────────────────────────────
export function MobileUXPDF() {
  return (
    <Document title="Mobile UX for Philippine Service Businesses" author="Crafty CRM">
      <Page size="A4" style={s.page}>
        <View style={s.header}>
          <Text style={s.tag}>Mobile UX · June 2026</Text>
          <Text style={s.h1}>Mobile UX for Philippine Service Businesses:{'\n'}A Research Brief</Text>
          <Text style={s.intro}>10 research-backed findings for designing mobile apps for Filipino service solopreneurs. Based on Statcounter PH data, Apple HIG, Google Material Design, Nielsen Norman Group research, and ACM Digital Library studies on Filipino app usage.</Text>
        </View>

        <View style={s.section}>
          {[
            { n: '1', title: '360×800px is the target screen — not 390px', color: '#4338ca', body: 'Statcounter PH data: 360×800 is the most common mobile resolution in the Philippines (~40% of market). Budget Android phones at PHP 3,000–6,000 (Redmi, Realme, Vivo). Content area at 360px with standard padding is only 328px.' },
            { n: '2', title: 'Minimum 44px touch targets — 48px preferred', color: '#15803d', body: 'Apple HIG: 44×44px minimum. Google Material Design: 48×48px preferred. Budget Android users checking phones at events (rough hands, bright light, one-handed) need generous targets.' },
            { n: '3', title: 'KPI numbers must be abbreviated on mobile', color: '#92400e', body: 'At 328px content width split into 3 columns, "₱27,150" at 30px font overflows. "₱27.1k" fits perfectly. GCash uses this pattern. Always use abbreviated formats (₱27.1k, ₱3.5k) for dashboard KPIs.' },
            { n: '4', title: 'Light mode wins outdoors', color: '#1e40af', body: "In bright sunlight, displays can't get dark enough vs ambient brightness. Light mode maintains contrast. Piepenbrock 2013: users read faster and more accurately in light mode. Every major PH app defaults to light." },
            { n: '5', title: 'Bottom navigation — 5 tabs with icons + labels', color: '#6d28d9', body: 'AppMySite 2025: 5 tabs is optimal. Icons alone confuse ~20% of users — always pair with labels. Bottom 50% of screen = natural thumb zone. Put primary actions there.' },
            { n: '6', title: 'Forms: single column, label above field, 44px minimum height', color: '#0f766e', body: 'Nielsen Norman Group: single column ONLY on mobile — no side-by-side fields. Progressive disclosure (4 fields default, expand for more) reduces abandonment significantly.' },
            { n: '7', title: 'Body text minimum 16px on mobile', color: '#b45309', body: 'WCAG and Apple/Google guidelines: 16px minimum for body text. Outdoor use in bright venues degrades contrast and perceived size. Below 16px is an accessibility failure for this audience.' },
            { n: '8', title: 'Optimistic UI is critical for provincial PH networks', color: '#dc2626', body: 'Provincial Philippine mobile networks have intermittent 4G with 2–4 second lag. Optimistic UI (update locally first, sync in background) prevents double-taps and duplicate entries.' },
            { n: '9', title: 'Safe area insets must be respected on iPhones', color: '#0284c7', body: 'iPhone X and newer have a 34px home indicator safe area. Use env(safe-area-inset-bottom) with viewport-fit=cover. Without this, fixed bottom navigation leaves a visible gap.' },
            { n: '10', title: 'Keep animations under 300ms on budget Android phones', color: '#7c3aed', body: 'Redmi/Realme devices run on MediaTek chips with limited GPU resources. Use only transform and opacity (GPU-accelerated). Complex animations cause visible jank.' },
          ].map((item) => (
            <View key={item.n} style={[s.numRow, { marginBottom: 8 }]}>
              <View style={[s.numBadge, { backgroundColor: item.color + '18' }]}>
                <Text style={[s.numText, { color: item.color }]}>{item.n}</Text>
              </View>
              <View style={s.numContent}>
                <Text style={s.cardTitle}>{item.title}</Text>
                <Text style={s.cardBody}>{item.body}</Text>
              </View>
            </View>
          ))}
        </View>

        <Footer title="Mobile UX for Philippine Service Businesses" />
      </Page>
    </Document>
  )
}
