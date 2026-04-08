import AnimatedSection from './AnimatedSection'
import { FaPaperPlane } from 'react-icons/fa6'
import { useLang } from '../i18n/LanguageContext'

export default function CTA() {
  const { t } = useLang()

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://media.giphy.com/media/1k2WcKGkRB9i1oQfYI/giphy.gif" alt="" className="w-full h-full object-cover opacity-15 saturate-[1.4] brightness-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-1 via-primary/20 to-dark-1" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="zoomIn" className="text-center py-20 sm:py-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
            {t.cta.title1}<br />{t.cta.title2}
          </h2>
          <p className="text-lg sm:text-xl text-white/75 mb-8 max-w-lg mx-auto">{t.cta.sub}</p>
          <a href="#contact" className="btn-glow text-base sm:text-lg rounded-full px-8 sm:px-10 py-4 inline-flex items-center gap-2 shadow-2xl">
            <FaPaperPlane /> {t.cta.btn}
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
