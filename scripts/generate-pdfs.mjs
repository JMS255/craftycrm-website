import { renderToFile, Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer'
import { createWriteStream } from 'fs'
import { mkdir } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import React from 'react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '..', 'public', 'downloads')
await mkdir(outDir, { recursive: true })

const colors = {
  heading: '#111118', body: '#374151', muted: '#6b7280',
  accent: '#4338ca', success: '#15803d', border: '#e5e7eb',
  cardBg: '#f9fafb', tagBg: '#eff6ff', tagText: '#3730a3',
}

const s = StyleSheet.create({
  page: { fontFamily: 'Helvetica', fontSize: 10, color: colors.body, backgroundColor: '#ffffff', paddingTop: 48, paddingBottom: 48, paddingHorizontal: 56 },
  header: { marginBottom: 28, borderBottomWidth: 1, borderBottomColor: colors.border, paddingBottom: 20 },
  tag: { backgroundColor: colors.tagBg, color: colors.tagText, fontSize: 8, fontWeight: 'bold', padding: '3 8', borderRadius: 4, alignSelf: 'flex-start', marginBottom: 10 },
  h1: { fontSize: 22, fontWeight: 'bold', color: colors.heading, marginBottom: 8, lineHeight: 1.3 },
  intro: { fontSize: 10, color: colors.muted, lineHeight: 1.6 },
  section: { marginBottom: 20 },
  h2: { fontSize: 13, fontWeight: 'bold', color: colors.heading, marginBottom: 10, paddingBottom: 4, borderBottomWidth: 1, borderBottomColor: colors.border },
  card: { backgroundColor: colors.cardBg, borderWidth: 1, borderColor: colors.border, borderRadius: 4, padding: 10, marginBottom: 6 },
  cardTitle: { fontSize: 10, fontWeight: 'bold', color: colors.heading, marginBottom: 3 },
  cardBody: { fontSize: 9.5, color: colors.body, lineHeight: 1.55 },
  footer: { marginTop: 28, borderTopWidth: 1, borderTopColor: colors.border, paddingTop: 12, flexDirection: 'row', justifyContent: 'space-between' },
  footerText: { fontSize: 8.5, color: colors.muted },
  footerLink: { fontSize: 8.5, color: colors.accent },
  statGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 12 },
  statBox: { backgroundColor: colors.tagBg, borderWidth: 1, borderColor: '#bfdbfe', borderRadius: 4, padding: '6 10', width: '47%' },
  statVal: { fontSize: 14, fontWeight: 'bold', color: colors.accent },
  statLabel: { fontSize: 8, color: colors.muted, marginTop: 2, lineHeight: 1.4 },
  numRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 8 },
  numBadge: { width: 18, height: 18, borderRadius: 3, alignItems: 'center', justifyContent: 'center', marginRight: 8, flexShrink: 0 },
  numText: { fontSize: 8.5, fontWeight: 'bold' },
  numContent: { flex: 1 },
})

const e = React.createElement

function Footer({ title }) {
  return e(View, { style: s.footer, fixed: true },
    e(Text, { style: s.footerText }, `${title} · Crafty CRM Research · June 2026`),
    e(Link, { style: s.footerLink, src: 'https://craftifyle-crm-system.vercel.app' }, 'craftifyle-crm-system.vercel.app')
  )
}

// ── Launch Playbook ────────────────────────────────────────────
const launchDoc = e(Document, { title: 'How to Get Your First 100 Beta Users as a Solo Filipino Developer', author: 'Crafty CRM' },
  e(Page, { size: 'A4', style: s.page },
    e(View, { style: s.header },
      e(Text, { style: s.tag }, 'Launch Strategy · June 2026'),
      e(Text, { style: s.h1 }, 'How to Get Your First 100 Beta Users\nas a Solo Filipino Developer'),
      e(Text, { style: s.intro }, 'A 90-day, introvert-friendly playbook based on research across 20+ sources including Indie Hackers launch data, Filipino purchase behavior studies, and ACM Digital Library research on GCash/Maya usability. Published by Crafty CRM.'),
      e(View, { style: s.statGrid },
        ...[ ['92%','Filipinos trust peer recommendations over ads'], ['3–8×','Indie Hackers converts better than Product Hunt'], ['100 min','Weekly effort needed — no camera required'], ['30–50','Target beta users in 90 days'] ].map(([v,l]) =>
          e(View, { key: v, style: s.statBox }, e(Text, { style: s.statVal }, v), e(Text, { style: s.statLabel }, l))
        )
      )
    ),
    ...[
      { title: '1. The Honest Landscape', items: [
        { h: 'Product Hunt is not your first move', b: "Product Hunt's feature rate collapsed to ~10% after a 2024 algorithm change. Without a pre-built audience, you're shouting into a lobby full of people also shouting." },
        { h: 'Indie Hackers converts 3–8× better', b: 'OpenHunts study of 387 launches: 23.1% conversion rate vs 3.1% for Product Hunt. Requires 4–6 months of participation, not a one-day launch.' },
        { h: 'Your first 10 users come from personal, direct contact', b: 'This is good news for introverts — 1-on-1 written Messenger chat, not stage performance.' },
      ]},
      { title: '2. Where Your Users Are (Facebook Groups)', items: [
        { h: 'Photobooth Suppliers Philippines', b: 'Operators exactly like the founder — highest trust, lowest barrier. Your beachhead group.' },
        { h: 'Event Photographers and Videographers Philippines', b: 'Direct target users with high booking volume and the exact pain your product solves.' },
        { h: 'Getting Married Wedding Coordinators & Event Planners', b: '39,000+ members. Coordinators manage 10–30 bookings/month — exactly when Messenger + GSheets breaks down.' },
      ]},
      { title: '3. The 90-Day Beta User Plan', items: [
        { h: 'Days 1–14 — Personal ask (Goal: 5 users)', b: "Message 10 people you know: 'Kumusta? Paano mo nini-manage ang bookings mo?' Have a real conversation. After they describe their pain: 'Eto yung ginawa ko — libre i-try.'" },
        { h: 'Days 15–30 — Community seeding', b: 'Join 3 groups. Lurk week 1. Answer questions helpfully, zero product mention. Share one free resource (booking contract template).' },
        { h: 'Days 31–60 — Soft intro (Goal: 10 more users)', b: '"Filipino developer ako from Zamboanga. Open beta na, libre. Gusto ninyong subukan?" Respond to every comment in Taglish.' },
        { h: 'Days 61–90 — Referrals (Goal: 30–50 users)', b: "Ask first users: 'May kakilala kang photographer na puwede naming tulungan?' Post founder story on Indie Hackers (23% conversion rate)." },
      ]},
      { title: '4. Why Introverts Have an Advantage', items: [
        { h: 'Written 1-on-1 is the highest-converting channel', b: 'Every successful indie hacker got their first 10 users from direct personal conversations — written Messenger chat, not stage performance.' },
        { h: 'Taglish writing IS your marketing voice', b: 'You write how your users talk. Pure English sounds corporate. Your natural voice converts better than polished ad copy.' },
        { h: "You don't market yourself — you market the problem", b: "You're not asking people to care about you. You're asking Filipino photographers if they're tired of losing leads in Messenger threads. Completely different ask." },
      ]},
    ].map(sec =>
      e(View, { key: sec.title, style: s.section },
        e(Text, { style: s.h2 }, sec.title),
        ...sec.items.map((item, i) =>
          e(View, { key: i, style: s.card },
            e(Text, { style: s.cardTitle }, item.h),
            e(Text, { style: s.cardBody }, item.b)
          )
        )
      )
    ),
    e(Footer, { title: 'How to Get Your First 100 Beta Users' })
  )
)

// ── Market Research ────────────────────────────────────────────
const marketDoc = e(Document, { title: 'The Filipino Service Business Owner: A Market Research Brief', author: 'Crafty CRM' },
  e(Page, { size: 'A4', style: s.page },
    e(View, { style: s.header },
      e(Text, { style: s.tag }, 'Market Research · June 2026'),
      e(Text, { style: s.h1 }, 'The Filipino Service Business Owner:\nA Market Research Brief'),
      e(Text, { style: s.intro }, 'The Philippine CRM market opportunity, competitive landscape, and why Filipino service solopreneurs are massively underserved. Based on DataReportal Philippines 2024 and IDC PH CRM Market data.'),
      e(View, { style: s.statGrid },
        ...[ ['$134.7M','PH CRM market size'], ['13.19%','Annual growth rate'], ['47–70%','CRM deployments that FAIL in PH'], ['0','Direct competitors in this niche'] ].map(([v,l]) =>
          e(View, { key: v, style: s.statBox }, e(Text, { style: s.statVal }, v), e(Text, { style: s.statLabel }, l))
        )
      )
    ),
    ...[
      { title: '1. Market Overview', items: [
        { h: 'The Philippine CRM market is $134.7M growing at 13.19% CAGR', b: 'Projected to reach $220M by 2029. Almost none of this growth targets small Filipino service businesses at the ₱800–₱1,200/month price point.' },
        { h: '47–70% of CRM deployments in PH fail', b: 'Primary cause: poor tool fit. Tools designed for Western enterprise sales teams require complex setup that service solopreneurs have no time for.' },
        { h: 'Zero direct competitors in the Filipino service solopreneur niche', b: 'HoneyBook is US/Canada only. Studio Ninja charges USD only. Dubsado was built for US freelancers. No Filipino-built CRM exists at peso pricing.' },
      ]},
      { title: '2. The Real Competition (Not Zoho — This)', items: [
        { h: 'Facebook Messenger + manual replies (Critical threat)', b: 'The #1 cause of lost leads: response latency. An inquiry arrives, nobody replies fast enough, and the lead moves to a faster competitor.' },
        { h: 'Google Sheets + Excel (High threat)', b: 'Free, familiar, good enough for 2–5 bookings/month. Breaks down at 10+ active leads. This transition moment is the primary acquisition opportunity.' },
        { h: 'Eventchy (Partner, not competitor)', b: '"Eventchy gets you found. Crafty CRM gets you booked and paid." Leads still arrive via Messenger after a client finds you on Eventchy.' },
      ]},
      { title: '3. When Filipino Solopreneurs Switch Tools', items: [
        { h: 'A lost booking', b: 'They forgot to follow up, missed a date, or double-booked. Acute, memorable pain — the highest-intent moment for CRM adoption.' },
        { h: 'Crossing the 10-booking threshold', b: 'Handling 8–10 simultaneous inquiries. GSheets no longer scales emotionally. Cognitive load becomes unbearable.' },
        { h: 'A peer testimonial', b: '"May gamit na akong tool, mas okay na." Social proof from a trusted peer in the same industry triggers the switch.' },
      ]},
      { title: '4. Positioning That Converts', items: [
        { h: 'vs. Messenger + Sheets', b: '"Your Messenger is full of leads you forgot to follow up on. Crafty CRM remembers so you don\'t have to."' },
        { h: 'vs. Studio Ninja / Dubsado', b: '"Studio Ninja is $27/month in dollars. Crafty CRM is ₱800 in pesos. And it actually sends SMS."' },
        { h: 'vs. Zoho / HubSpot', b: '"Zoho gives you 50 blank fields. Crafty CRM comes pre-built for photobooth businesses."' },
      ]},
    ].map(sec =>
      e(View, { key: sec.title, style: s.section },
        e(Text, { style: s.h2 }, sec.title),
        ...sec.items.map((item, i) =>
          e(View, { key: i, style: s.card },
            e(Text, { style: s.cardTitle }, item.h),
            e(Text, { style: s.cardBody }, item.b)
          )
        )
      )
    ),
    e(Footer, { title: 'The Filipino Service Business Owner' })
  )
)

// ── Mobile UX ─────────────────────────────────────────────────
const mobileItems = [
  { n:'1', color:'#4338ca', h:'360×800px is the target screen — not 390px', b:'Statcounter PH: 360×800 is the most common mobile resolution (~40% of PH market). Budget Android phones at PHP 3,000–6,000 (Redmi, Realme, Vivo). Content area is only 328px wide.' },
  { n:'2', color:'#15803d', h:'Minimum 44px touch targets — 48px preferred', b:'Apple HIG: 44×44px minimum. Google Material: 48×48px preferred. Budget Android users at events need generous targets.' },
  { n:'3', color:'#92400e', h:'KPI numbers must be abbreviated on mobile', b:'At 328px width, "₱27,150" overflows. "₱27.1k" fits perfectly. GCash uses this pattern. Always use abbreviated formats for dashboard KPIs.' },
  { n:'4', color:'#1e40af', h:'Light mode wins outdoors', b:"In bright sunlight, displays can't get dark enough vs ambient brightness. Piepenbrock 2013: users read faster in light mode. Every major PH app defaults to light." },
  { n:'5', color:'#6d28d9', h:'Bottom navigation — 5 tabs with icons + labels', b:'AppMySite 2025: 5 tabs is optimal. Icons alone confuse ~20% of users. Bottom 50% of screen = natural thumb zone. Put primary actions there.' },
  { n:'6', color:'#0f766e', h:'Forms: single column, label above, 44px minimum height', b:'Nielsen Norman Group: single column ONLY on mobile. Progressive disclosure (4 fields default, expand for more) reduces form abandonment.' },
  { n:'7', color:'#b45309', h:'Body text minimum 16px on mobile', b:'WCAG and Apple/Google: 16px minimum for body text. Outdoor use degrades contrast and perceived size. Below 16px is an accessibility failure.' },
  { n:'8', color:'#dc2626', h:'Optimistic UI is critical for provincial PH networks', b:'Provincial PH networks have intermittent 4G with 2–4 second lag. Update locally first, sync in background. Prevents double-taps and duplicate entries.' },
  { n:'9', color:'#0284c7', h:'Safe area insets must be respected on iPhones', b:'iPhone X+ have a 34px home indicator safe area. Use env(safe-area-inset-bottom) with viewport-fit=cover. Without this, fixed bottom nav leaves a visible gap.' },
  { n:'10', color:'#7c3aed', h:'Keep animations under 300ms on budget Android phones', b:'Redmi/Realme devices have limited GPU resources. Use only transform and opacity (GPU-accelerated). Complex animations cause visible jank.' },
]

const mobileDoc = e(Document, { title: 'Mobile UX for Philippine Service Businesses', author: 'Crafty CRM' },
  e(Page, { size: 'A4', style: s.page },
    e(View, { style: s.header },
      e(Text, { style: s.tag }, 'Mobile UX · June 2026'),
      e(Text, { style: s.h1 }, 'Mobile UX for Philippine Service Businesses:\nA Research Brief'),
      e(Text, { style: s.intro }, '10 research-backed findings for designing mobile apps for Filipino service solopreneurs. Based on Statcounter PH data, Apple HIG, Google Material Design, Nielsen Norman Group research, and ACM Digital Library studies on Filipino app usage.')
    ),
    e(View, { style: s.section },
      ...mobileItems.map(item =>
        e(View, { key: item.n, style: s.numRow },
          e(View, { style: [s.numBadge, { backgroundColor: item.color + '18' }] },
            e(Text, { style: [s.numText, { color: item.color }] }, item.n)
          ),
          e(View, { style: s.numContent },
            e(Text, { style: s.cardTitle }, item.h),
            e(Text, { style: s.cardBody }, item.b)
          )
        )
      )
    ),
    e(Footer, { title: 'Mobile UX for Philippine Service Businesses' })
  )
)

// Generate all PDFs
console.log('Generating PDFs...')
await renderToFile(launchDoc, path.join(outDir, 'crafty-crm-launch-playbook.pdf'))
console.log('✓ launch-playbook.pdf')
await renderToFile(marketDoc, path.join(outDir, 'crafty-crm-market-research.pdf'))
console.log('✓ market-research.pdf')
await renderToFile(mobileDoc, path.join(outDir, 'crafty-crm-mobile-ux-ph.pdf'))
console.log('✓ mobile-ux-ph.pdf')
console.log('Done! PDFs saved to public/downloads/')
