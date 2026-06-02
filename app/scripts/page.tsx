'use client'

import { useState } from 'react'
import Link from 'next/link'

const scripts = [
  {
    id: 'deposit',
    title: 'Deposit Reminder',
    when: 'Send 24–48 hrs after booking confirmation, before deposit is paid',
    color: '#7c6ff7',
    bg: 'rgba(124,111,247,0.08)',
    border: 'rgba(124,111,247,0.2)',
    text: `Hi [Name]! Good [morning/afternoon] po! 😊

Just wanted to follow up sa inyong reservation para sa [Event Type] on [Date]. Para ma-secure ang inyong slot, kailangan po namin ng ₱[Deposit Amount] na reservation fee.

GCash: [Your GCash Number] ([Your Name])

Kapag na-send na, pwede kayong mag-screenshot para i-confirm namin. Salamat po at excited na kaming mag-serve sa inyo! 🎉`,
  },
  {
    id: 'balance',
    title: 'Balance Collection',
    when: 'Send 5–7 days before the event when balance is still unpaid',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.2)',
    text: `Hi [Name]! Kamusta? 😊

Malapit na ang inyong [Event Type] sa [Date] — excited na kami! Reminder lang po na may remaining balance kayo na ₱[Balance Amount].

Pwede po bang i-settle ito bago mag-event? Mas stress-free para sa ating lahat. 😄

GCash: [Your GCash Number] ([Your Name])

Kung may katanungan kayo, nandito lang kami! Salamat po! 🙏`,
  },
  {
    id: 'quote-followup',
    title: 'Quote Follow-Up',
    when: 'Send 3 days after sending your price quote with no reply',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.2)',
    text: `Hi [Name]! Just checking in lang po. 😊

Nagpadala kami ng quote para sa inyong [Event Type] pero hindi pa kami nakarinig mula sa inyo. Okay lang po ba?

Kung may katanungan kayo sa presyo o sa package, pwede tayong mag-usap — flexible kami!

Available pa rin kami sa [Date] pero limited ang slots namin, kaya gusto naming i-confirm agad para sa inyo.

Salamat po! 🙏`,
  },
  {
    id: 'inquiry-followup',
    title: 'Inquiry Follow-Up',
    when: 'Send 2–3 days after first contact when there\'s no reply',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.2)',
    text: `Hi [Name]! 😊

Nakita namin ang inyong mensahe tungkol sa [Event Type] on [Date]. Excited kaming makapag-serve sa inyo!

Para makapag-reserve na kayo, kailangan lang namin ng:
• Confirmed event date
• Approximate guest count
• Package preference

Magpadala lang po kayo ng reply dito o sa aming page. Nandito lang kami! 🎉`,
  },
  {
    id: 'post-event',
    title: 'Post-Event Thank You + Review Request',
    when: 'Send 1–2 days after the event',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.2)',
    text: `Hi [Name]! 😊

Gusto naming sabihing MARAMING SALAMAT sa trust ninyo sa amin para sa inyong [Event Type]!

Nag-enjoy talaga kaming mag-serve sa inyo at sa inyong mga bisita. Sana naging special ang bawat sandali!

Kung may time kayo, malaking tulong po sa amin kung pwede kayong mag-leave ng review o mag-share ng inyong experience sa inyong mga friends. Nakakatulong ito sa ibang pamilya na naghahanap ng serbisyo para sa kanilang espesyal na okasyon. 🙏

Salamat ulit at sana ay magkita-kita tayo sa susunod! 🎉`,
  },
]

export default function ScriptsPage() {
  const [copied, setCopied] = useState<string | null>(null)

  function copyScript(id: string, text: string) {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="max-w-2xl mx-auto px-5 pt-28 pb-20">

      {/* Header */}
      <div className="mb-4">
        <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-4"
          style={{ background: 'rgba(124,111,247,0.12)', color: '#a5b4fc', border: '1px solid rgba(124,111,247,0.2)' }}>
          Free Resource
        </span>
        <h1 className="text-3xl font-bold text-white mb-3">Taglish Follow-Up Script Pack</h1>
        <p style={{ color: '#6b7280' }}>
          5 ready-to-copy Messenger scripts for Filipino photobooth operators and event suppliers.
          No signup needed — just copy, edit the brackets, and send.
        </p>
      </div>

      {/* How to use */}
      <div className="rounded-2xl p-5 mb-10" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
        <p className="text-sm font-semibold text-white mb-2">How to use these</p>
        <ol className="space-y-1.5">
          {[
            'Copy the script by clicking the button',
            'Replace [Name], [Date], [Amount] with the actual details',
            'Paste into Messenger and send',
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#9ca3af' }}>
              <span className="shrink-0 w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold mt-0.5"
                style={{ background: 'rgba(124,111,247,0.15)', color: '#a5b4fc' }}>{i + 1}</span>
              {step}
            </li>
          ))}
        </ol>
      </div>

      {/* Scripts */}
      <div className="space-y-6">
        {scripts.map(s => (
          <div key={s.id} className="rounded-2xl overflow-hidden" style={{ background: '#111118', border: `1px solid ${s.border}` }}>
            {/* Script header */}
            <div className="px-5 py-4 flex items-start justify-between gap-4" style={{ borderBottom: '1px solid #1a1a28' }}>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-full"
                    style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}>
                    {s.title}
                  </span>
                </div>
                <p className="text-xs mt-2" style={{ color: '#6b7280' }}>📅 {s.when}</p>
              </div>
              <button
                onClick={() => copyScript(s.id, s.text)}
                className="shrink-0 text-xs px-4 py-2 rounded-lg font-semibold transition-all"
                style={{
                  background: copied === s.id ? 'rgba(16,185,129,0.15)' : s.bg,
                  color: copied === s.id ? '#34d399' : s.color,
                  border: `1px solid ${copied === s.id ? 'rgba(16,185,129,0.3)' : s.border}`,
                }}
              >
                {copied === s.id ? '✓ Copied!' : 'Copy Script'}
              </button>
            </div>
            {/* Script body */}
            <pre className="px-5 py-4 text-sm leading-relaxed whitespace-pre-wrap font-sans"
              style={{ color: '#9ca3af' }}>
              {s.text}
            </pre>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 rounded-2xl p-8 text-center" style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
        <p className="text-lg font-bold text-white mb-2">Tired of sending these manually?</p>
        <p className="text-sm mb-6" style={{ color: '#6b7280' }}>
          Craftifyle tracks which leads need follow-up and reminds you automatically.
          Crafty AI can even reply in Taglish while you're at an event.
        </p>
        <Link href="https://craftifyle-crm-system.vercel.app/signup"
          className="inline-block px-7 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', boxShadow: '0 0 32px rgba(99,102,241,0.25)' }}>
          Get Craftifyle free — beta access →
        </Link>
        <p className="text-xs mt-3" style={{ color: '#4a4a6a' }}>
          Libre habang beta. No credit card. Built in Zamboanga City 🇵🇭
        </p>
      </div>

    </div>
  )
}