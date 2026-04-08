import AnimatedSection from './AnimatedSection'
import { FaCouch, FaHouseChimney, FaCity, FaPalette, FaSprayCanSparkles, FaDroplet, FaCircleCheck, FaArrowRight, FaBrush } from 'react-icons/fa6'

const services = [
  {
    icon: FaCouch, color: '#FF6B35', title: 'Interior Painting', popular: true,
    desc: 'Transform any room with flawless wall, ceiling, and trim painting using premium paints.',
    items: ['Walls & Ceilings', 'Trim, Doors & Molding', 'Cabinet Refinishing', 'Color Consultation'],
  },
  {
    icon: FaHouseChimney, color: '#00E5A0', title: 'Exterior Painting',
    desc: 'Boost curb appeal with weather-resistant coatings that stand the test of time.',
    items: ['Siding & Stucco', 'Decks & Fences', 'Power Washing', 'Surface Prep & Repair'],
  },
  {
    icon: FaCity, color: '#A855F7', title: 'Commercial Painting',
    desc: 'Offices, retail, restaurants — we work around your schedule to minimize disruption.',
    items: ['Office & Retail Spaces', 'Restaurants & Hotels', 'After-Hours Available', 'HOA & Property Mgmt'],
  },
  {
    icon: FaPalette, color: '#FFD93D', title: 'Specialty Finishes',
    desc: 'Add character with decorative faux finishes, textured walls, metallic accents & murals.',
    items: ['Faux & Textured Finishes', 'Accent Walls', 'Epoxy Floor Coatings', 'Wallpaper Installation'],
  },
  {
    icon: FaSprayCanSparkles, color: '#F43F5E', title: 'Staining & Finishing',
    desc: 'Expert wood staining for decks, fences, pergolas — enhancing the natural beauty of wood.',
    items: ['Deck Staining', 'Fence & Pergola', 'Wood Restoration', 'Sealant Application'],
  },
  {
    icon: FaDroplet, color: '#38BDF8', title: 'Pressure Washing',
    desc: 'Restore surfaces to like-new condition. Essential prep before painting or standalone service.',
    items: ['Driveways & Walkways', 'Siding & Brick', 'Deck & Patio', 'Pre-Paint Prep'],
  },
]

export default function Services() {
  return (
    <section className="py-24 bg-dark-2 relative overflow-hidden" id="services">
      {/* Background GIF */}
      <div className="absolute inset-0 z-0">
        <img src="https://media.giphy.com/media/l1BgTdNrZFmbpFPOM/giphy.gif" alt="" className="w-full h-full object-cover opacity-8 saturate-150" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-2 via-dark-2/85 to-dark-2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block px-5 py-2 bg-primary/12 border border-primary/20 text-primary font-heading text-sm font-semibold rounded-full mb-3.5">
            <FaBrush className="inline mr-1.5 text-xs" /> Our Services
          </span>
          <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-black tracking-tight text-white mb-3">
            Everything Your Property <span className="neon-text">Needs</span>
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            From a single room refresh to a complete commercial makeover, we handle it all with expertise.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <div className="glass-card service-card relative p-7 sm:p-8 flex flex-col h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-[14px] flex items-center justify-center text-xl mb-5 transition-all hover:scale-110"
                  style={{
                    background: `color-mix(in srgb, ${s.color} 15%, transparent)`,
                    color: s.color,
                    boxShadow: `0 0 20px color-mix(in srgb, ${s.color} 15%, transparent)`,
                  }}>
                  <s.icon />
                </div>

                {s.popular && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-primary/15 border border-primary/30 text-primary font-heading text-[0.68rem] font-bold rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                )}

                <h4 className="text-xl font-bold mb-2.5">{s.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed mb-5">{s.desc}</p>

                <ul className="space-y-2 mb-5 flex-grow">
                  {s.items.map(item => (
                    <li key={item} className="text-sm text-white/60 flex items-center gap-2.5">
                      <FaCircleCheck className="text-accent-green text-xs shrink-0" /> {item}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="font-heading font-semibold text-sm text-primary hover:text-neon-2 inline-flex items-center gap-1 mt-auto group transition-colors">
                  Get a Quote <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
