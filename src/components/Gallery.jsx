import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { FaCamera, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { useLang } from '../i18n/LanguageContext'

const filterKeys = ['all', 'interior', 'exterior', 'commercial']
const cats = ['interior', 'exterior', 'commercial', 'interior', 'exterior', 'commercial']

const galleryImages = [
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1564540583246-934409427776?w=800&q=80&auto=format&fit=crop',
]

export default function Gallery() {
  const { t } = useLang()
  const [active, setActive] = useState('all')

  const projects = t.gallery.projects.map((p, i) => ({ ...p, cat: cats[i], img: galleryImages[i] }))
  const filtered = active === 'all' ? projects : projects.filter(p => p.cat === active)

  return (
    <section className="py-24 bg-gradient-to-b from-dark-1 via-dark-3 to-dark-1" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block px-5 py-2 bg-primary/12 border border-primary/25 text-primary font-heading text-sm font-semibold rounded-full mb-3.5">
            <FaCamera className="inline mr-1.5 text-xs" /> {t.gallery.badge}
          </span>
          <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-black tracking-tight text-white mb-3">
            {t.gallery.title} <span className="neon-text">{t.gallery.titleHighlight}</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">{t.gallery.sub}</p>
        </AnimatedSection>

        <AnimatedSection className="flex justify-center gap-2 mb-8 flex-wrap">
          {filterKeys.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`font-heading font-semibold text-sm px-6 py-2.5 rounded-full border transition-all capitalize ${
                active === f
                  ? 'bg-gradient-to-r from-primary to-neon-2 text-white border-transparent shadow-[0_0_30px_rgba(255,107,53,0.5)]'
                  : 'bg-white/6 border-white/12 text-white/80 hover:bg-white/12 hover:text-white'
              }`}
            >
              {t.gallery.filters[f]}
            </button>
          ))}
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map(p => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
              >
                <div className="relative h-[260px] sm:h-[300px] rounded-2xl overflow-hidden cursor-pointer group transition-all hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.5)] border border-white/10">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-1 via-dark-1/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-400" />

                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-primary/95 text-white font-heading text-[0.7rem] font-bold rounded-full uppercase tracking-wide backdrop-blur-md shadow-lg">
                      {t.gallery.filters[p.cat]}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 transition-all">
                    <FaArrowUpRightFromSquare />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                    <h5 className="text-lg font-bold text-white mb-1 leading-tight">{p.title}</h5>
                    <p className="text-white/80 text-sm">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
