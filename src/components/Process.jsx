import AnimatedSection from './AnimatedSection'
import { FaPhoneVolume, FaFileInvoiceDollar, FaPaintRoller, FaCircleCheck, FaListCheck } from 'react-icons/fa6'

const steps = [
  { icon: FaPhoneVolume, num: '01', title: 'Free Consultation', desc: 'Call us or fill out our form. We schedule a convenient visit to discuss your project.' },
  { icon: FaFileInvoiceDollar, num: '02', title: 'Detailed Quote', desc: "Clear, itemized estimate. No surprises — you know exactly what you're paying for." },
  { icon: FaPaintRoller, num: '03', title: 'Expert Painting', desc: 'Our skilled team handles prep, protection, and painting with precision and care.' },
  { icon: FaCircleCheck, num: '04', title: 'Final Walkthrough', desc: 'We walk through together. Every detail perfect. Satisfaction guaranteed.' },
]

export default function Process() {
  return (
    <section className="py-24 bg-dark-2 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block px-5 py-2 bg-primary/12 border border-primary/20 text-primary font-heading text-sm font-semibold rounded-full mb-3.5">
            <FaListCheck className="inline mr-1.5 text-xs" /> How It Works
          </span>
          <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-black tracking-tight text-white mb-3">
            Simple 4-Step <span className="neon-text">Process</span>
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            From first call to final walkthrough — effortless.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 0.1}>
              <div className="glass-card relative pt-10 pb-8 px-6 text-center h-full hover:border-primary/20 hover:shadow-[0_0_30px_rgba(255,107,53,0.08)]">
                {/* Number badge */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-neon-2 rounded-full font-heading font-extrabold text-xs text-white shadow-[0_0_20px_rgba(255,107,53,0.4)]">
                  {s.num}
                </div>

                <div className="w-16 h-16 mx-auto mb-5 rounded-[18px] bg-primary/10 border border-primary/15 flex items-center justify-center text-2xl text-primary">
                  <s.icon />
                </div>

                <h5 className="text-lg font-bold mb-2.5">{s.title}</h5>
                <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
