import AnimatedSection from './AnimatedSection'
import { FaPaperPlane } from 'react-icons/fa6'
import { useLang } from '../i18n/LanguageContext'

export default function CTA() {
  const { t } = useLang()

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600&q=70&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-1 via-primary/15 to-dark-1" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, rgba(255,107,53,0.18) 0%, transparent 60%)'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="zoomIn" className="text-center py-20 sm:py-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
            {t.cta.title1}<br />{t.cta.title2}
          </h2>
          <p className="text-lg sm:text-xl text-white/85 mb-8 max-w-lg mx-auto">{t.cta.sub}</p>
          <a href="#contact" className="btn-glow text-base sm:text-lg rounded-full px-8 sm:px-10 py-4 inline-flex items-center gap-2 shadow-2xl">
            <FaPaperPlane /> {t.cta.btn}
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
