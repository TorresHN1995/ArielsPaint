import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import AnimatedSection from './AnimatedSection'
import { FaStar, FaQuoteLeft } from 'react-icons/fa6'
import { useLang } from '../i18n/LanguageContext'

const names = ['Sarah Mitchell', 'Michael Torres', 'Jennifer & David Park', 'Robert & Lisa Chen']
const photos = [
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg',
  'https://randomuser.me/api/portraits/men/52.jpg',
]
const ringColors = ['#FF6B35', '#00E5A0', '#FF6B35', '#00E5A0']

export default function Testimonials() {
  const { t } = useLang()

  return (
    <section className="py-28 bg-dark-2 relative overflow-hidden" id="reviews">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px]" style={{
          background: 'radial-gradient(ellipse, rgba(255,107,53,0.10) 0%, transparent 70%)'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block px-5 py-2 bg-primary/12 border border-primary/20 text-primary font-heading text-sm font-semibold rounded-full mb-3.5">
            <FaQuoteLeft className="inline mr-1.5 text-xs" /> {t.testimonials.badge}
          </span>
          <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-black tracking-tight text-white mb-3">
            {t.testimonials.title} <span className="neon-text">{t.testimonials.titleHighlight}</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">{t.testimonials.sub}</p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="pb-14"
          >
            {t.testimonials.reviews.map((r, i) => (
              <SwiperSlide key={i}>
                <div className="glass-card p-8 h-full flex flex-col relative">
                  <FaQuoteLeft className="absolute top-6 right-6 text-primary/20 text-3xl" />
                  <div className="flex gap-1 mb-5 text-yellow-400 text-sm">
                    {[...Array(5)].map((_, j) => <FaStar key={j} />)}
                  </div>
                  <p className="text-white/85 text-base leading-relaxed mb-6 flex-grow">"{r.text}"</p>
                  <div className="flex items-center gap-3.5 pt-5 border-t border-white/10">
                    <div
                      className="w-[52px] h-[52px] rounded-full overflow-hidden shrink-0"
                      style={{ boxShadow: `0 0 0 2px ${ringColors[i]}, 0 0 0 4px #111118, 0 0 16px ${ringColors[i]}40` }}
                    >
                      <img src={photos[i]} alt={names[i]} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div>
                      <strong className="font-heading text-sm text-white block">{names[i]}</strong>
                      <small className="text-white/65 text-xs">{r.role}</small>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimatedSection>
      </div>
    </section>
  )
}
