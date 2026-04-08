import { useState } from 'react'
import AnimatedSection from './AnimatedSection'
import { FaMessage, FaPhone, FaEnvelope, FaLocationDot, FaClock, FaPaperPlane, FaLock, FaSpinner, FaCheck } from 'react-icons/fa6'
import { FaFacebookF, FaInstagram, FaGoogle, FaYelp } from 'react-icons/fa6'

const contactInfo = [
  { icon: FaPhone, label: 'Phone', value: '(123) 456-7890', href: 'tel:+1234567890' },
  { icon: FaEnvelope, label: 'Email', value: 'info@arielspaintingcontracting.com', href: 'mailto:info@arielspaintingcontracting.com' },
  { icon: FaLocationDot, label: 'Service Area', value: 'Greater Metro Area & Surrounding Communities' },
  { icon: FaClock, label: 'Hours', value: 'Mon-Fri: 7AM-6PM | Sat: 8AM-2PM' },
]

const socials = [
  { icon: FaFacebookF, href: '#' },
  { icon: FaInstagram, href: '#' },
  { icon: FaGoogle, href: '#' },
  { icon: FaYelp, href: '#' },
]

const inputClass = 'w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-white font-[var(--font-body)] placeholder:text-white/25 focus:bg-white/6 focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setTimeout(() => {
        setStatus('idle')
        e.target.reset()
      }, 3000)
    }, 1500)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-dark-1 via-dark-3 to-dark-1" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Left info */}
          <AnimatedSection variant="fadeRight" className="lg:col-span-2">
            <span className="inline-block px-5 py-2 bg-primary/12 border border-primary/20 text-primary font-heading text-sm font-semibold rounded-full mb-3.5">
              <FaMessage className="inline mr-1.5 text-xs" /> Contact Us
            </span>
            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-black tracking-tight text-white mb-3">
              Let's Start Your <span className="neon-text">Project</span>
            </h2>
            <p className="text-white/50 mb-8">
              Ready for a fresh coat? Reach out for a free consultation. We respond within 24 hours.
            </p>

            <div className="space-y-5 mb-8">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-12 h-12 min-w-[48px] rounded-[14px] bg-primary/10 border border-primary/15 text-primary flex items-center justify-center">
                    <Icon />
                  </div>
                  <div>
                    <strong className="font-heading text-sm text-white block">{label}</strong>
                    {href ? (
                      <a href={href} className="text-sm text-white/50 hover:text-primary transition-colors">{value}</a>
                    ) : (
                      <span className="text-sm text-white/50">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-6" />
            <p className="text-white font-semibold mb-3 text-sm">Follow Us</p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-gradient-to-br hover:from-primary hover:to-neon-2 hover:border-transparent hover:text-white hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,107,53,0.5)] transition-all">
                  <Icon />
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection variant="fadeLeft" className="lg:col-span-3">
            <div className="glass-card p-8 sm:p-9">
              <h4 className="text-white text-xl font-bold mb-1">Request a Free Estimate</h4>
              <p className="text-white/50 text-sm mb-6">Fill out the form and we'll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-heading font-semibold text-sm text-white/80 mb-1.5">First Name *</label>
                    <input type="text" placeholder="John" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block font-heading font-semibold text-sm text-white/80 mb-1.5">Last Name *</label>
                    <input type="text" placeholder="Doe" required className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-heading font-semibold text-sm text-white/80 mb-1.5">Email *</label>
                    <input type="email" placeholder="john@example.com" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block font-heading font-semibold text-sm text-white/80 mb-1.5">Phone *</label>
                    <input type="tel" placeholder="(123) 456-7890" required className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="block font-heading font-semibold text-sm text-white/80 mb-1.5">Service Needed</label>
                  <select className={`${inputClass} appearance-none`} style={{ background: 'rgba(255,255,255,0.04)' }}>
                    <option value="" className="bg-dark-3 text-white">Select a service...</option>
                    <option className="bg-dark-3 text-white">Interior Painting</option>
                    <option className="bg-dark-3 text-white">Exterior Painting</option>
                    <option className="bg-dark-3 text-white">Commercial Painting</option>
                    <option className="bg-dark-3 text-white">Specialty Finishes</option>
                    <option className="bg-dark-3 text-white">Staining & Finishing</option>
                    <option className="bg-dark-3 text-white">Pressure Washing</option>
                    <option className="bg-dark-3 text-white">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-heading font-semibold text-sm text-white/80 mb-1.5">Project Details</label>
                  <textarea rows={4} placeholder="Tell us about your project..." className={`${inputClass} resize-none`} />
                </div>

                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className={`btn-glow text-base rounded-full w-full py-3.5 flex items-center justify-center gap-2 ${
                    status === 'sent' ? '!bg-gradient-to-r !from-accent-green !to-accent-blue !shadow-[0_0_30px_rgba(0,229,160,0.4)]' : ''
                  }`}
                >
                  {status === 'idle' && <><FaPaperPlane /> Send Request</>}
                  {status === 'sending' && <><FaSpinner className="animate-spin" /> Sending...</>}
                  {status === 'sent' && <><FaCheck /> Sent Successfully!</>}
                </button>

                <p className="text-center text-xs text-white/50 flex items-center justify-center gap-1">
                  <FaLock className="text-[10px]" /> Your information is secure and never shared.
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
