import { FaPaintRoller } from 'react-icons/fa6'

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Gallery', href: '#work' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
  'Interior Painting', 'Exterior Painting', 'Commercial', 'Specialty Finishes', 'Pressure Washing',
]

export default function Footer() {
  return (
    <footer className="bg-dark-1 border-t border-white/5 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <a href="#hero" className="flex items-center gap-2 mb-4 group">
              <div className="w-9 h-9 bg-gradient-to-br from-primary to-neon-2 rounded-[10px] flex items-center justify-center text-white text-sm shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                <FaPaintRoller />
              </div>
              <div>
                <span className="block font-heading font-extrabold text-white text-lg leading-tight">Ariel's</span>
                <span className="block text-[0.62rem] font-semibold text-white/40 uppercase tracking-[1.5px]">Painting Contracting</span>
              </div>
            </a>
            <p className="text-white/35 text-sm leading-relaxed">
              Professional painting services that transform spaces. Quality, reliability, and craftsmanship in every brushstroke.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-white font-heading font-bold text-sm mb-4">Quick Links</h6>
            <ul className="space-y-2.5">
              {quickLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/35 text-sm hover:text-primary hover:pl-1 transition-all">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h6 className="text-white font-heading font-bold text-sm mb-4">Services</h6>
            <ul className="space-y-2.5">
              {serviceLinks.map(s => (
                <li key={s}>
                  <a href="#services" className="text-white/35 text-sm hover:text-primary hover:pl-1 transition-all">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="text-white font-heading font-bold text-sm mb-4">Contact</h6>
            <ul className="space-y-2.5 text-white/35 text-sm">
              <li className="flex items-center gap-2"><span className="text-primary">&#9742;</span> (123) 456-7890</li>
              <li className="flex items-center gap-2"><span className="text-primary">&#9993;</span> info@arielspaintingcontracting.com</li>
              <li className="flex items-center gap-2"><span className="text-primary">&#9200;</span> Mon-Fri 7AM-6PM</li>
            </ul>
          </div>
        </div>

        <hr className="border-white/8" />
        <div className="flex flex-col sm:flex-row justify-between items-center py-5 gap-2">
          <p className="text-white/35 text-xs">&copy; 2026 Ariel's Painting Contracting. All rights reserved.</p>
          <p className="text-white/35 text-xs">Licensed & Insured | Serving the Greater Metro Area</p>
        </div>
      </div>
    </footer>
  )
}
