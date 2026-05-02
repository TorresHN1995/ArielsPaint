import { useLang } from '../i18n/LanguageContext'
import BrandLogo from './BrandLogo'

export default function Footer() {
  const { t } = useLang()

  const quickLinks = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.gallery, href: '#work' },
    { label: t.nav.reviews, href: '#reviews' },
    { label: t.nav.contact, href: '#contact' },
  ]

  const serviceLinks = [
    t.services.interior.title,
    t.services.exterior.title,
    t.services.commercial.title,
    t.services.specialty.title,
    t.services.pressure.title,
  ]

  return (
    <footer className="bg-dark-1 border-t border-white/5 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <a href="#hero" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 bg-dark-3 border border-white/10 rounded-[10px] flex items-center justify-center shadow-[0_0_18px_rgba(255,107,53,0.25)]">
                <BrandLogo className="w-6 h-6" />
              </div>
              <div>
                <span className="block font-heading font-extrabold text-white text-lg leading-tight">Ariel's</span>
                <span className="block text-[0.62rem] font-semibold text-white/55 uppercase tracking-[1.5px]">Painting Contracting</span>
              </div>
            </a>
            <p className="text-white/65 text-sm leading-relaxed">{t.footer.desc}</p>
          </div>

          <div>
            <h6 className="text-white font-heading font-bold text-sm mb-4">{t.footer.quickLinks}</h6>
            <ul className="space-y-2.5">
              {quickLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/60 text-sm hover:text-primary hover:pl-1 transition-all">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-white font-heading font-bold text-sm mb-4">{t.footer.servicesTitle}</h6>
            <ul className="space-y-2.5">
              {serviceLinks.map(s => (
                <li key={s}>
                  <a href="#services" className="text-white/60 text-sm hover:text-primary hover:pl-1 transition-all">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-white font-heading font-bold text-sm mb-4">{t.footer.contactTitle}</h6>
            <ul className="space-y-2.5 text-white/60 text-sm">
              <li className="flex items-center gap-2"><span className="text-primary">&#9742;</span> (123) 456-7890</li>
              <li className="flex items-center gap-2"><span className="text-primary">&#9993;</span> info@arielspaintingcontracting.com</li>
              <li className="flex items-center gap-2"><span className="text-primary">&#9200;</span> {t.contact.hoursValue}</li>
            </ul>
          </div>
        </div>

        <hr className="border-white/8" />
        <div className="flex flex-col sm:flex-row justify-between items-center py-5 gap-2">
          <p className="text-white/60 text-xs">{t.footer.copyright}</p>
          <p className="text-white/60 text-xs">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
