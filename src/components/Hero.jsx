import { motion } from 'framer-motion'
import { FaCalendarCheck, FaImages, FaShieldHalved, FaAward, FaHeart, FaHouse, FaBuilding, FaTree, FaStar, FaGoogle } from 'react-icons/fa6'
import { useLang } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLang()

  const trustPills = [
    { icon: FaShieldHalved, text: t.hero.trustLicensed },
    { icon: FaAward, text: t.hero.trustYears },
    { icon: FaHeart, text: t.hero.trustClients },
  ]

  const floatCards = [
    { icon: FaHouse, label: t.hero.cardInterior, sub: t.hero.cardInteriorSub, color: '#FF6B35', pos: 'top-[6%] -right-2', anim: 'animate-float' },
    { icon: FaBuilding, label: t.hero.cardCommercial, sub: t.hero.cardCommercialSub, color: '#00E5A0', pos: 'bottom-[10%] -left-4', anim: 'animate-float-d2' },
    { icon: FaTree, label: t.hero.cardExterior, sub: t.hero.cardExteriorSub, color: '#FFD93D', pos: 'bottom-[40%] -right-4', anim: 'animate-float-d4' },
  ]

  return (
    <header className="relative min-h-screen overflow-hidden bg-dark-1" id="hero">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse at 15% 50%, rgba(255,107,53,0.18) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 30%, rgba(255,217,61,0.08) 0%, transparent 45%),
            radial-gradient(ellipse at 50% 95%, rgba(0,229,160,0.06) 0%, transparent 40%),
            linear-gradient(180deg, #0A0A0F 0%, #111118 100%)
          `
        }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
            <motion.div
              className="lg:col-span-7 pt-24 pb-6 lg:py-0"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 border border-primary/25 text-neon-2 font-heading text-sm font-semibold rounded-full mb-5">
                <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse-dot" />
                {t.hero.badge}
              </div>

              <h1 className="text-[clamp(2.6rem,7vw,5.5rem)] font-black leading-[1.05] tracking-[-2px] text-white mb-6">
                {t.hero.titlePre} <span className="neon-text">{t.hero.titleHighlight}</span> {t.hero.titlePost}
              </h1>

              <p className="text-white/75 text-lg sm:text-xl max-w-lg leading-relaxed mb-8">
                {t.hero.desc} <em className="text-white/90">{t.hero.descWow}</em>
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <a href="#contact" className="btn-glow text-base rounded-full px-8 py-3.5 flex items-center gap-2">
                  <FaCalendarCheck /> {t.hero.btnEstimate}
                </a>
                <a href="#work" className="bg-white/8 backdrop-blur-xl border border-white/15 text-white font-heading font-semibold text-base rounded-full px-8 py-3.5 flex items-center gap-2 hover:bg-white/15 hover:border-white/30 hover:-translate-y-0.5 transition-all">
                  <FaImages /> {t.hero.btnWork}
                </a>
              </div>

              <div className="flex items-center gap-4 mb-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5 text-yellow-400">
                    {[...Array(5)].map((_, i) => <FaStar key={i} className="text-sm" />)}
                  </div>
                  <span className="text-white font-bold text-sm">5.0</span>
                </div>
                <span className="flex items-center gap-1.5 text-white/65 text-sm">
                  <FaGoogle className="text-xs" /> {t.hero.rating}
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {trustPills.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 px-4 py-2 bg-white/6 border border-white/12 rounded-full text-white/75 text-sm font-medium">
                    <Icon className="text-neon-2 text-xs" /> {text}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5 relative h-[420px] sm:h-[480px] lg:h-[540px]"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="absolute inset-0 rounded-[28px] overflow-hidden border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.5)]">
                <img
                  src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=900&q=80&auto=format&fit=crop"
                  alt="Freshly painted modern interior"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-dark-1/60 via-transparent to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-[28px]" />
              </div>

              {floatCards.map(({ icon: Icon, label, sub, color, pos, anim }) => (
                <div key={label} className={`absolute ${pos} ${anim} flex items-center gap-3 bg-dark-2/90 backdrop-blur-xl border border-white/12 rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 text-white shadow-[0_12px_40px_rgba(0,0,0,0.4)]`}>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-base sm:text-lg text-white shrink-0" style={{ background: color, boxShadow: `0 0 18px ${color}55` }}>
                    <Icon />
                  </div>
                  <div>
                    <strong className="block font-heading text-sm sm:text-base leading-tight">{label}</strong>
                    <small className="text-white/55 text-[0.7rem] sm:text-xs">{sub}</small>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  )
}
