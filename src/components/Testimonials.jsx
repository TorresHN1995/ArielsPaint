import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import AnimatedSection from './AnimatedSection'
import { FaStar, FaQuoteLeft } from 'react-icons/fa6'

const reviews = [
  {
    text: "Ariel's team transformed our entire home. The attention to detail was incredible — every edge, every corner was perfect. Professional, clean, and ahead of schedule!",
    name: 'Sarah Mitchell', role: 'Homeowner - Interior', initials: 'SM', color: '#FF6B35',
  },
  {
    text: "We hired Ariel's for our restaurant renovation and couldn't be happier. They worked around our schedule, completed on time, and the space looks absolutely stunning!",
    name: 'Michael Torres', role: 'Restaurant Owner', initials: 'MT', color: '#00E5A0',
  },
  {
    text: 'From initial estimate to final walkthrough — exceptional. They helped us choose perfect colors and the execution was flawless. Our home has never looked better!',
    name: 'Jennifer & David Park', role: 'Full Repaint', initials: 'JP', color: '#A855F7',
  },
  {
    text: 'Outstanding exterior work! Our house looks brand new. The crew was respectful, thorough, and the price was very fair. Already recommended to three neighbors.',
    name: 'Robert & Lisa Chen', role: 'Exterior Painting', initials: 'RC', color: '#F43F5E',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-dark-2 relative overflow-hidden" id="reviews">
      {/* Background GIF */}
      <div className="absolute inset-0 z-0">
        <img src="https://media0.giphy.com/media/Rrtx49xjABxmTjtBLa/giphy.gif" alt="" className="w-full h-full object-cover opacity-8 saturate-150" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-2 via-dark-2/85 to-dark-2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block px-5 py-2 bg-primary/12 border border-primary/20 text-primary font-heading text-sm font-semibold rounded-full mb-3.5">
            <FaQuoteLeft className="inline mr-1.5 text-xs" /> Testimonials
          </span>
          <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-black tracking-tight text-white mb-3">
            Loved by <span className="neon-text">Homeowners</span>
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">Real reviews from real clients.</p>
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
            {reviews.map(r => (
              <SwiperSlide key={r.name}>
                <div className="glass-card p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-5 text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                  </div>
                  <p className="text-white/65 text-base leading-relaxed italic mb-6 flex-grow">"{r.text}"</p>
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-[46px] h-[46px] rounded-full flex items-center justify-center text-white font-heading font-bold text-sm shrink-0"
                      style={{ background: r.color, boxShadow: `0 0 15px ${r.color}4D` }}
                    >
                      {r.initials}
                    </div>
                    <div>
                      <strong className="font-heading text-sm text-white block">{r.name}</strong>
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
