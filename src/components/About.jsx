import AnimatedSection from './AnimatedSection'
import { FaTrophy, FaThumbsUp, FaUsers, FaShieldHalved, FaHandHoldingDollar, FaCertificate, FaAward, FaEnvelope } from 'react-icons/fa6'
import { useLang } from '../i18n/LanguageContext'
import aboutImg from '../assets/about.jpg'

const featureIcons = [FaShieldHalved, FaHandHoldingDollar, FaCertificate, FaAward]

export default function About() {
  const { t } = useLang()

  return (
    <section className="py-24 sm:py-28 bg-gradient-to-b from-dark-1 via-dark-3 to-dark-1 relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection variant="fadeRight" className="relative min-h-[380px] lg:min-h-[460px]">
            <div className="relative w-full h-[320px] sm:h-[440px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.5)]">
              <img
                src={aboutImg}
                alt="Ariel's painter rolling fresh paint on an interior wall"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-dark-1/40 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-[30px] left-0 sm:-left-2.5 animate-float flex items-center gap-3 bg-dark-1/90 backdrop-blur-2xl border border-white/12 rounded-2xl px-5 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.4)] z-10">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-[#FFB23D] text-white flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,107,53,0.4)]">
                <FaTrophy />
              </div>
              <div>
                <strong className="block font-heading text-lg text-white leading-tight">{t.about.floatYears}</strong>
                <small className="text-white/70 text-xs">{t.about.floatYearsSub}</small>
              </div>
            </div>

            <div className="absolute top-[30px] right-0 sm:-right-2.5 animate-float-slow flex items-center gap-3 bg-dark-1/90 backdrop-blur-2xl border border-white/12 rounded-2xl px-5 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.4)] z-10">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent-green to-accent-blue text-white flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,229,160,0.4)]">
                <FaThumbsUp />
              </div>
              <div>
                <strong className="block font-heading text-lg text-white leading-tight">{t.about.floatSatisfaction}</strong>
                <small className="text-white/70 text-xs">{t.about.floatSatisfactionSub}</small>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fadeLeft">
            <span className="inline-block px-5 py-2 bg-primary/12 border border-primary/20 text-primary font-heading text-sm font-semibold rounded-full mb-3.5">
              <FaUsers className="inline mr-1.5 text-xs" /> {t.about.badge}
            </span>
            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-black tracking-tight text-white mb-4">
              {t.about.title} <span className="neon-text">{t.about.titleHighlight}</span>
            </h2>
            <p className="text-white/85 text-lg mb-3">{t.about.p1}</p>
            <p className="text-white/70 mb-6">{t.about.p2}</p>

            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {t.about.features.map((feat, i) => {
                const Icon = featureIcons[i]
                return (
                  <div key={feat.title} className="flex items-start gap-3.5 p-4 bg-white/4 border border-white/6 rounded-[14px] hover:bg-white/8 hover:border-primary/20 hover:-translate-y-0.5 transition-all">
                    <div className="w-[38px] h-[38px] min-w-[38px] rounded-[10px] bg-primary/12 text-primary flex items-center justify-center text-sm">
                      <Icon />
                    </div>
                    <div>
                      <strong className="font-heading text-sm text-white block">{feat.title}</strong>
                      <small className="text-white/65 text-xs">{feat.sub}</small>
                    </div>
                  </div>
                )
              })}
            </div>

            <a href="#contact" className="btn-glow text-base rounded-full px-8 py-3.5 inline-flex items-center gap-2">
              <FaEnvelope /> {t.about.btn}
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
