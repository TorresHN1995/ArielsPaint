import { motion } from 'framer-motion'
import { FaCalendarCheck, FaImages, FaShieldHalved, FaAward, FaHeart, FaHouse, FaBuilding, FaTree, FaStar } from 'react-icons/fa6'

const trustPills = [
  { icon: FaShieldHalved, text: 'Licensed & Insured' },
  { icon: FaAward, text: '15+ Years' },
  { icon: FaHeart, text: '500+ Clients' },
]

const floatCards = [
  { icon: FaHouse, label: 'Interior', sub: 'Walls, Ceilings, Trim', color: '#FF6B35', pos: 'top-[8%] right-[10%]', anim: 'animate-float' },
  { icon: FaBuilding, label: 'Commercial', sub: 'Offices, Retail', color: '#00E5A0', pos: 'top-[40%] left-[5%]', anim: 'animate-float-d2' },
  { icon: FaTree, label: 'Exterior', sub: 'Siding, Decks, Fences', color: '#FFD93D', pos: 'bottom-[12%] right-[5%]', anim: 'animate-float-d4' },
]

export default function Hero() {
  return (
    <header className="relative min-h-screen overflow-hidden bg-dark-1" id="hero">
      {/* Background GIFs */}
      <div className="absolute inset-0 z-0">
        <img src="https://media.giphy.com/media/y4bYCV5GxAdi8zPzQh/giphy.gif" alt="" className="w-full h-full object-cover opacity-12 saturate-[1.3]" />
        <img src="https://media.giphy.com/media/iEw1RZrUxNgQLdG38g/giphy.gif" alt="" className="absolute bottom-0 right-0 w-[45%] h-[60%] object-cover opacity-8 rounded-tl-[30px]" style={{ maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)' }} />
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse at 15% 50%, rgba(255,107,53,0.15) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 20%, rgba(168,85,247,0.08) 0%, transparent 45%),
            radial-gradient(ellipse at 50% 90%, rgba(0,229,160,0.06) 0%, transparent 40%),
            linear-gradient(180deg, rgba(10,10,15,0.6) 0%, rgba(10,10,15,0.4) 50%, #0A0A0F 100%)
          `
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-12 gap-8 items-center w-full">
            {/* Left content */}
            <motion.div
              className="lg:col-span-7 pt-20 pb-10 lg:py-0"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 border border-primary/20 text-neon-2 font-heading text-sm font-semibold rounded-full mb-5">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse-dot" />
                Top Rated Painting Contractor
              </div>

              <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-black leading-[1.05] tracking-[-2px] text-white mb-6">
                We Bring <span className="neon-text">Color</span> to Your World
              </h1>

              <p className="text-white/55 text-lg sm:text-xl max-w-lg leading-relaxed mb-8">
                Professional painting services for homes and businesses. Exceptional quality, transparent pricing, and results that make you say <em>"wow."</em>
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a href="#contact" className="btn-glow text-base rounded-full px-8 py-3.5 flex items-center gap-2">
                  <FaCalendarCheck /> Free Estimate
                </a>
                <a href="#work" className="bg-white/8 backdrop-blur-xl border border-white/12 text-white font-heading font-semibold text-base rounded-full px-8 py-3.5 flex items-center gap-2 hover:bg-white/15 hover:border-white/25 hover:-translate-y-0.5 transition-all">
                  <FaImages /> See Our Work
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                {trustPills.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 px-4 py-2 bg-white/4 border border-white/8 rounded-full text-white/50 text-sm font-medium">
                    <Icon className="text-neon-2 text-xs" /> {text}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right floating cards */}
            <motion.div
              className="lg:col-span-5 hidden lg:block relative h-[480px]"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {floatCards.map(({ icon: Icon, label, sub, color, pos, anim }) => (
                <div key={label} className={`absolute ${pos} ${anim} flex items-center gap-3.5 bg-white/6 backdrop-blur-2xl border border-white/10 rounded-2xl px-6 py-4.5 text-white shadow-[0_8px_32px_rgba(0,0,0,0.25)]`}>
                  <div className="w-12 h-12 rounded-[14px] flex items-center justify-center text-xl text-white shrink-0" style={{ background: color, boxShadow: `0 0 20px ${color}40` }}>
                    <Icon />
                  </div>
                  <div>
                    <strong className="block font-heading text-base">{label}</strong>
                    <small className="text-white/45 text-xs">{sub}</small>
                  </div>
                </div>
              ))}

              {/* Rating card */}
              <div className="absolute top-[26%] left-[45%] animate-float-d3 flex flex-col items-center bg-white/6 backdrop-blur-2xl border border-white/10 rounded-2xl px-6 py-4 text-white shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
                <div className="flex gap-1 text-yellow-400 mb-1">
                  {[...Array(5)].map((_, i) => <FaStar key={i} className="text-sm" />)}
                </div>
                <span className="text-sm font-semibold">5.0 Average Rating</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  )
}
