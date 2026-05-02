import AnimatedSection from './AnimatedSection'
import { FaPhoneVolume, FaFileInvoiceDollar, FaPaintRoller, FaCircleCheck, FaListCheck } from 'react-icons/fa6'
import { useLang } from '../i18n/LanguageContext'

const stepIcons = [FaPhoneVolume, FaFileInvoiceDollar, FaPaintRoller, FaCircleCheck]
const stepNums = ['01', '02', '03', '04']

export default function Process() {
  const { t } = useLang()

  return (
    <section className="py-24 bg-dark-2 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block px-5 py-2 bg-primary/12 border border-primary/20 text-primary font-heading text-sm font-semibold rounded-full mb-3.5">
            <FaListCheck className="inline mr-1.5 text-xs" /> {t.process.badge}
          </span>
          <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-black tracking-tight text-white mb-3">
            {t.process.title} <span className="neon-text">{t.process.titleHighlight}</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">{t.process.sub}</p>
        </AnimatedSection>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="hidden lg:block absolute top-[44px] left-[12.5%] right-[12.5%] h-px pointer-events-none" style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,107,53,0.5) 15%, rgba(255,217,61,0.5) 50%, rgba(255,107,53,0.5) 85%, transparent 100%)'
          }} />

          {t.process.steps.map((s, i) => {
            const Icon = stepIcons[i]
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-card relative pt-10 pb-8 px-6 text-center h-full hover:border-primary/30 hover:shadow-[0_0_30px_rgba(255,107,53,0.12)]">
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-neon-2 rounded-full font-heading font-extrabold text-xs text-white shadow-[0_0_20px_rgba(255,107,53,0.4)]">
                    {stepNums[i]}
                  </div>
                  <div className="relative z-10 w-16 h-16 mx-auto mb-5 rounded-[18px] bg-dark-3 border border-primary/30 flex items-center justify-center text-2xl text-primary shadow-[0_0_24px_rgba(255,107,53,0.15)]">
                    <Icon />
                  </div>
                  <h5 className="text-lg font-bold mb-2.5">{s.title}</h5>
                  <p className="text-white/70 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
