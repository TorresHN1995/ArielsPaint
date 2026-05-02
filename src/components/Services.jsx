import AnimatedSection from './AnimatedSection'
import { FaCouch, FaHouseChimney, FaCity, FaPalette, FaSprayCanSparkles, FaDroplet, FaCircleCheck, FaArrowRight, FaBrush } from 'react-icons/fa6'
import { useLang } from '../i18n/LanguageContext'

const iconMap = [FaCouch, FaHouseChimney, FaCity, FaPalette, FaSprayCanSparkles, FaDroplet]
const colorMap = ['#FF6B35', '#00E5A0', '#FFD93D', '#FF6B35', '#00E5A0', '#FFD93D']
const keys = ['interior', 'exterior', 'commercial', 'specialty', 'staining', 'pressure']

export default function Services() {
  const { t } = useLang()

  return (
    <section className="py-28 bg-dark-2 relative overflow-hidden" id="services">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full" style={{
          background: 'radial-gradient(circle, rgba(255,107,53,0.12) 0%, transparent 70%)'
        }} />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full" style={{
          background: 'radial-gradient(circle, rgba(0,229,160,0.08) 0%, transparent 70%)'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block px-5 py-2 bg-primary/12 border border-primary/20 text-primary font-heading text-sm font-semibold rounded-full mb-3.5">
            <FaBrush className="inline mr-1.5 text-xs" /> {t.services.badge}
          </span>
          <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-black tracking-tight text-white mb-3">
            {t.services.title} <span className="neon-text">{t.services.titleHighlight}</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">{t.services.sub}</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {keys.map((key, i) => {
            const Icon = iconMap[i]
            const color = colorMap[i]
            const s = t.services[key]
            return (
              <AnimatedSection key={key} delay={i * 0.1}>
                <div className="glass-card service-card relative p-7 sm:p-8 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-[14px] flex items-center justify-center text-xl mb-5 transition-all hover:scale-110"
                    style={{
                      background: `color-mix(in srgb, ${color} 15%, transparent)`,
                      color: color,
                      boxShadow: `0 0 20px color-mix(in srgb, ${color} 15%, transparent)`,
                    }}>
                    <Icon />
                  </div>

                  {i === 0 && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-primary/15 border border-primary/30 text-primary font-heading text-[0.68rem] font-bold rounded-full uppercase tracking-wide">
                      {t.services.mostPopular}
                    </span>
                  )}

                  <h4 className="text-xl font-bold mb-2.5">{s.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed mb-5">{s.desc}</p>

                  <ul className="space-y-2 mb-5 flex-grow">
                    {s.items.map(item => (
                      <li key={item} className="text-sm text-white/75 flex items-center gap-2.5">
                        <FaCircleCheck className="text-accent-green text-xs shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className="font-heading font-semibold text-sm text-primary hover:text-neon-2 inline-flex items-center gap-1 mt-auto group transition-colors">
                    {t.services.getQuote} <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
