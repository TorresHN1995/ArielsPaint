import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import AnimatedSection from './AnimatedSection'
import { FaStar, FaQuoteLeft } from 'react-icons/fa6'
import { useLang } from '../i18n/LanguageContext'

const names = ['Sarah Mitchell', 'Michael Torres', 'Jennifer & David Park', 'Robert & Lisa Chen']
const initials = ['SM', 'MT', 'JP', 'RC']
const colors = ['#FF6B35', '#00E5A0', '#A855F7', '#F43F5E']

export default function Testimonials() {
  const { t } = useLang()

  return (
    <section className="py-24 bg-dark-2 relative overflow-hidden" id="reviews">
      <div className="absolute inset-0 z-0">
        <img src="https://media0.giphy.com/media/Rrtx49xjABxmTjtBLa/giphy.gif" alt="" className="w-full h-full object-cover opacity-8 saturate-150" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-2 via-dark-2/85 to-dark-2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block px-5 py-2 bg-primary/12 border border-primary/20 text-primary font-heading text-sm font-semibold rounded-full mb-3.5">
            <FaQuoteLeft className="inline mr-1.5 text-xs" /> {t.testimonials.badge}
          </span>
          <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-black tracking-tight text-white mb-3">
            {t.testimonials.title} <span className="neon-text">{t.testimonials.titleHighlight}</span>
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">{t.testimonials.sub}</p>
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
                <div className="glass-card p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-5 text-yellow-400 text-sm">
                    {[...Array(5)].map((_, j) => <FaStar key={j} />)}
                  </div>
                  <p className="text-white/65 text-base leading-relaxed italic mb-6 flex-grow">"{r.text}"</p>
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-[46px] h-[46px] rounded-full flex items-center justify-center text-white font-heading font-bold text-sm shrink-0"
                      style={{ background: colors[i], boxShadow: `0 0 15px ${colors[i]}4D` }}
                    >
                      {initials[i]}
                    </div>
                    <div>
                      <strong className="font-heading text-sm text-white block">{names[i]}</strong>
                      <small className="text-white/40 text-xs">{r.role}</small>
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
