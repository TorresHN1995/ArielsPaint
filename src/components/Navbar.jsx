import { useState, useEffect } from 'react'
import { FaPhone, FaBars, FaXmark } from 'react-icons/fa6'
import { useLang } from '../i18n/LanguageContext'
import BrandLogo from './BrandLogo'

export default function Navbar() {
  const { lang, t, toggleLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const links = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.gallery, href: '#work' },
    { label: t.nav.reviews, href: '#reviews' },
    { label: t.nav.contact, href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => setOpen(false)

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
      scrolled
        ? 'bg-dark-1/92 backdrop-blur-2xl border-b border-white/5 py-2'
        : 'bg-transparent py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-11 h-11 bg-dark-3 border border-white/10 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,107,53,0.25)] group-hover:scale-105 transition-transform">
            <BrandLogo className="w-7 h-7" />
          </div>
          <div>
            <span className="block font-heading font-extrabold text-xl text-white leading-tight">Ariel's</span>
            <span className="block text-[0.62rem] font-semibold text-white/55 uppercase tracking-[1.5px]">Painting Contracting</span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href} className="font-heading font-medium text-sm text-white/80 hover:text-white hover:bg-white/6 px-4 py-2 rounded-lg transition-all">
              {l.label}
            </a>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="ml-2 px-3 py-2 rounded-lg text-sm font-heading font-semibold text-white/80 hover:text-white hover:bg-white/6 transition-all flex items-center gap-1.5"
            title={lang === 'en' ? 'Cambiar a Espanol' : 'Switch to English'}
          >
            <span className="text-base">{lang === 'en' ? '🇺🇸' : '🇪🇸'}</span>
            <span className="uppercase">{lang}</span>
          </button>

          <a href="tel:+1234567890" className="btn-glow rounded-full px-5 py-2.5 text-sm ml-2 flex items-center gap-2">
            <FaPhone className="text-xs" /> {t.nav.callNow}
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white text-xl p-2">
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-dark-1/96 backdrop-blur-xl border border-white/6 rounded-2xl mx-4 mt-3 p-5">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={handleClick} className="block font-heading font-medium text-white/80 hover:text-white py-3 border-b border-white/5 last:border-0 transition-colors">
              {l.label}
            </a>
          ))}
          {/* Mobile language toggle */}
          <button
            onClick={toggleLang}
            className="w-full text-left font-heading font-medium text-white/80 hover:text-white py-3 border-b border-white/5 transition-colors flex items-center gap-2"
          >
            <span className="text-base">{lang === 'en' ? '🇪🇸' : '🇺🇸'}</span>
            {lang === 'en' ? 'Espanol' : 'English'}
          </button>
          <a href="tel:+1234567890" onClick={handleClick} className="btn-glow rounded-full px-5 py-3 text-sm mt-4 flex items-center justify-center gap-2 w-full">
            <FaPhone className="text-xs" /> {t.nav.callNow}
          </a>
        </div>
      )}
    </nav>
  )
}
