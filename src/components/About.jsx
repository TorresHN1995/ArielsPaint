import AnimatedSection from './AnimatedSection'
import { FaTrophy, FaThumbsUp, FaUsers, FaShieldHalved, FaHandHoldingDollar, FaClock, FaBroom, FaEnvelope } from 'react-icons/fa6'

const features = [
  { icon: FaShieldHalved, title: 'Licensed & Insured', sub: 'Full coverage for peace of mind' },
  { icon: FaHandHoldingDollar, title: 'Free Estimates', sub: 'Transparent, no hidden fees' },
  { icon: FaClock, title: 'On-Time Delivery', sub: 'We respect your schedule' },
  { icon: FaBroom, title: 'Clean Workspace', sub: 'We leave it spotless' },
]

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-b from-dark-1 via-dark-3 to-dark-1 relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <AnimatedSection variant="fadeRight" className="relative min-h-[380px] lg:min-h-[460px]">
            <div className="relative w-full h-[300px] sm:h-[400px] rounded-3xl overflow-hidden">
              <img src="https://media.giphy.com/media/6HqQWmuTQheEidhVE9/giphy.gif" alt="Painting work" className="w-full h-full object-cover brightness-80 saturate-[1.2]" />
              <div className="absolute inset-0 border-2 border-primary/30 rounded-3xl pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,0.4)]" />
            </div>

            {/* Float cards */}
            <div className="absolute bottom-[30px] left-0 sm:-left-2.5 animate-float flex items-center gap-3 bg-dark-1/85 backdrop-blur-2xl border border-white/10 rounded-2xl px-5 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.3)] z-10">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-neon-2 text-white flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                <FaTrophy />
              </div>
              <div>
                <strong className="block font-heading text-lg text-white">15+ Years</strong>
                <small className="text-white/50 text-xs">of Excellence</small>
              </div>
            </div>

            <div className="absolute top-[30px] right-0 sm:-right-2.5 animate-float-slow flex items-center gap-3 bg-dark-1/85 backdrop-blur-2xl border border-white/10 rounded-2xl px-5 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.3)] z-10">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-neon-2 text-white flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                <FaThumbsUp />
              </div>
              <div>
                <strong className="block font-heading text-lg text-white">100%</strong>
                <small className="text-white/50 text-xs">Satisfaction</small>
              </div>
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection variant="fadeLeft">
            <span className="inline-block px-5 py-2 bg-primary/12 border border-primary/20 text-primary font-heading text-sm font-semibold rounded-full mb-3.5">
              <FaUsers className="inline mr-1.5 text-xs" /> Why Choose Us
            </span>
            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-black tracking-tight text-white mb-4">
              Your Vision, Our <span className="neon-text">Expertise</span>
            </h2>
            <p className="text-white/75 text-lg mb-3">
              At Ariel's Painting Contracting, we don't just paint walls — we transform spaces. With over 15 years of experience, our team delivers results that exceed expectations.
            </p>
            <p className="text-white/50 mb-6">
              We believe in doing things right: thorough preparation, premium materials, clean workmanship, and honest communication from start to finish.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {features.map(({ icon: Icon, title, sub }) => (
                <div key={title} className="flex items-start gap-3.5 p-4 bg-white/4 border border-white/6 rounded-[14px] hover:bg-white/8 hover:border-primary/20 hover:-translate-y-0.5 transition-all">
                  <div className="w-[38px] h-[38px] min-w-[38px] rounded-[10px] bg-primary/12 text-primary flex items-center justify-center text-sm">
                    <Icon />
                  </div>
                  <div>
                    <strong className="font-heading text-sm text-white block">{title}</strong>
                    <small className="text-white/40 text-xs">{sub}</small>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-glow text-base rounded-full px-8 py-3.5 inline-flex items-center gap-2">
              <FaEnvelope /> Get In Touch
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
