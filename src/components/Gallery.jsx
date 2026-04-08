import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { FaCamera } from 'react-icons/fa6'

const filters = ['all', 'interior', 'exterior', 'commercial']

const projects = [
  { cat: 'interior', title: 'Modern Living Room', desc: 'Warm neutral tones with bold accent wall', grad: 'from-primary to-neon-2' },
  { cat: 'exterior', title: 'Colonial Home Refresh', desc: 'Complete exterior repaint with new trim', grad: 'from-accent-blue to-[#818CF8]' },
  { cat: 'commercial', title: 'Office Renovation', desc: 'Modern workspace transformation', grad: 'from-accent-green to-accent-blue' },
  { cat: 'interior', title: 'Kitchen Cabinets', desc: 'White shaker cabinet refinishing', grad: 'from-accent-pink to-accent-purple' },
  { cat: 'exterior', title: 'Deck & Fence Staining', desc: 'Cedar restoration and sealing', grad: 'from-neon-2 to-primary' },
  { cat: 'commercial', title: 'Restaurant Interior', desc: 'Vibrant dining atmosphere', grad: 'from-accent-purple to-accent-pink' },
]

export default function Gallery() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? projects : projects.filter(p => p.cat === active)

  return (
    <section className="py-24 bg-gradient-to-b from-dark-1 via-dark-3 to-dark-1" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block px-5 py-2 bg-primary/12 border border-primary/20 text-primary font-heading text-sm font-semibold rounded-full mb-3.5">
            <FaCamera className="inline mr-1.5 text-xs" /> Portfolio
          </span>
          <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-black tracking-tight text-white mb-3">
            Our Recent <span className="neon-text">Projects</span>
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            See the quality and craftsmanship that sets us apart.
          </p>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection className="flex justify-center gap-2 mb-8 flex-wrap">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`font-heading font-semibold text-sm px-6 py-2.5 rounded-full border transition-all capitalize ${
                active === f
                  ? 'bg-gradient-to-r from-primary to-neon-2 text-white border-transparent shadow-[0_0_30px_rgba(255,107,53,0.5)]'
                  : 'bg-white/6 border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </AnimatedSection>

        {/* Grid */}
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
                <div className={`relative h-[260px] sm:h-[300px] rounded-2xl overflow-hidden bg-gradient-to-br ${p.grad} cursor-pointer group transition-all hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]`}>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-dark-1/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <span className="inline-block w-fit px-3.5 py-1 bg-primary text-white font-heading text-[0.7rem] font-bold rounded-full uppercase tracking-wide mb-2">
                      {p.cat}
                    </span>
                    <h5 className="text-lg font-bold text-white mb-1">{p.title}</h5>
                    <p className="text-white/60 text-sm">{p.desc}</p>
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
