import { useState, useEffect } from 'react'
import { FaPaintRoller, FaPhone, FaBars, FaXmark } from 'react-icons/fa6'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#work' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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
          <div className="w-11 h-11 bg-gradient-to-br from-primary to-neon-2 rounded-xl flex items-center justify-center text-white text-lg shadow-[0_0_20px_rgba(255,107,53,0.3)] group-hover:scale-105 transition-transform">
            <FaPaintRoller />
          </div>
          <div>
            <span className="block font-heading font-extrabold text-xl text-white leading-tight">Ariel's</span>
            <span className="block text-[0.62rem] font-semibold text-white/40 uppercase tracking-[1.5px]">Painting Contracting</span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href} className="font-heading font-medium text-sm text-white/65 hover:text-white hover:bg-white/6 px-4 py-2 rounded-lg transition-all">
              {l.label}
            </a>
          ))}
          <a href="tel:+1234567890" className="btn-glow rounded-full px-5 py-2.5 text-sm ml-3 flex items-center gap-2">
            <FaPhone className="text-xs" /> Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white text-xl p-2">
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-dark-1/96 backdrop-blur-xl border border-white/6 rounded-2xl mx-4 mt-3 p-5 animate-in fade-in slide-in-from-top-2">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={handleClick} className="block font-heading font-medium text-white/65 hover:text-white py-3 border-b border-white/5 last:border-0 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="tel:+1234567890" onClick={handleClick} className="btn-glow rounded-full px-5 py-3 text-sm mt-4 flex items-center justify-center gap-2 w-full">
            <FaPhone className="text-xs" /> Call Now
          </a>
        </div>
      )}
    </nav>
  )
}
