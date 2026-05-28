'use client'

import { useState } from 'react'
import Image from 'next/image'

const tabs = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: '📊',
    desc: 'See all your leads, conversion rate, upcoming events, and monthly performance at a glance.',
    file: '/screenshots/dashboard.png',
  },
  {
    id: 'leads',
    label: 'Leads',
    icon: '◎',
    desc: 'Every inquiry in one place. Filter by stage, search by name, and track where each client is in your pipeline.',
    file: '/screenshots/leads.png',
  },
  {
    id: 'lead-detail',
    label: 'Lead Detail',
    icon: '📋',
    desc: 'Full lead profile with event details, activity log, AI reply draft, and one-click convert to booking.',
    file: '/screenshots/lead-detail.png',
  },
  {
    id: 'bookings',
    label: 'Bookings',
    icon: '◈',
    desc: 'Track confirmed events, deposits, balances, and payment status. Know exactly who still owes you money.',
    file: '/screenshots/bookings.png',
  },
  {
    id: 'invoice',
    label: 'Invoice',
    icon: '🧾',
    desc: 'Professional invoices generated instantly from any booking. Print or save as PDF in one click.',
    file: '/screenshots/invoice.png',
  },
]

export default function ScreenshotGallery() {
  const [active, setActive] = useState(tabs[0])

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setActive(t)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all"
            style={{
              background: active.id === t.id ? 'rgba(99,102,241,0.15)' : 'transparent',
              border: `1px solid ${active.id === t.id ? 'rgba(99,102,241,0.4)' : '#1e1e2e'}`,
              color: active.id === t.id ? '#a5b4fc' : '#6b7280',
            }}>
            <span>{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>

      {/* Description */}
      <p className="text-center text-sm mb-6" style={{ color: '#6b7280' }}>
        {active.desc}
      </p>

      {/* Screenshot */}
      <div className="relative rounded-2xl overflow-hidden"
        style={{ border: '1px solid #1e1e2e', background: '#111118', boxShadow: '0 0 60px rgba(99,102,241,0.08)' }}>
        {/* Browser chrome bar */}
        <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid #1e1e2e', background: '#0a0a0f' }}>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ background: '#ef4444', opacity: 0.6 }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#f59e0b', opacity: 0.6 }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#10b981', opacity: 0.6 }} />
          </div>
          <div className="flex-1 mx-4">
            <div className="h-5 rounded-md flex items-center px-3 mx-auto max-w-xs"
              style={{ background: '#111118', border: '1px solid #1e1e2e' }}>
              <span className="text-xs" style={{ color: '#4a4a6a' }}>craftifyle-crm-system.vercel.app</span>
            </div>
          </div>
        </div>

        {/* Screenshot image */}
        <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
          <Image
            src={active.file}
            alt={`Crafty CRM ${active.label} screenshot`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      </div>
    </div>
  )
}
