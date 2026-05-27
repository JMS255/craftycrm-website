import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t mt-24" style={{ borderColor: '#1e1e2e' }}>
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>C</div>
              <span className="font-semibold text-sm text-white">Crafty CRM</span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: '#4a4a6a' }}>
              The CRM built for Filipino service businesses. Built in Zamboanga City, PH.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#4a4a6a' }}>Product</p>
            <div className="space-y-2">
              {[['/#features','Features'],['/#pricing','Pricing'],['/changelog','Changelog'],['/roadmap','Roadmap']].map(([href,label]) => (
                <Link key={href} href={href} className="block text-sm hover:text-white transition-colors" style={{ color: '#6b7280' }}>{label}</Link>
              ))}
            </div>
          </div>

          {/* Docs */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#4a4a6a' }}>Docs</p>
            <div className="space-y-2">
              {[['/docs','Getting Started'],['/docs#leads','Leads'],['/docs#bookings','Bookings'],['/docs#finances','Finances']].map(([href,label]) => (
                <Link key={href} href={href} className="block text-sm hover:text-white transition-colors" style={{ color: '#6b7280' }}>{label}</Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#4a4a6a' }}>Links</p>
            <div className="space-y-2">
              {[['https://craftifyle-crm-system.vercel.app/signup','Get Beta Access'],['https://craftifyle-crm-system.vercel.app/login','Sign In'],['mailto:jamesignacio255@gmail.com','Contact James']].map(([href,label]) => (
                <Link key={href} href={href} className="block text-sm hover:text-white transition-colors" style={{ color: '#6b7280' }}>{label}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderColor: '#1e1e2e' }}>
          <p className="text-xs" style={{ color: '#4a4a6a' }}>© 2026 Crafty CRM · Built by James Ignacio · Zamboanga City, PH</p>
          <p className="text-xs" style={{ color: '#4a4a6a' }}>Currently in Beta · Free access for early users</p>
        </div>
      </div>
    </footer>
  )
}
