import { useState } from 'react'
import AnimatedSection from './AnimatedSection'
import { FaMessage, FaPhone, FaEnvelope, FaLocationDot, FaClock, FaPaperPlane, FaLock, FaSpinner, FaCheck } from 'react-icons/fa6'
import { useLang } from '../i18n/LanguageContext'

const contactIcons = [FaPhone, FaEnvelope, FaLocationDot, FaClock]
const contactHrefs = ['tel:+19083032770', 'mailto:info@arielspaintingcontracting.com', null, null]
const contactValues = ['908-303-2770', 'info@arielspaintingcontracting.com', null, null]

const inputClass = 'w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-white font-[var(--font-body)] placeholder:text-white/25 focus:bg-white/6 focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all'

export default function Contact() {
  const { t } = useLang()
  const [status, setStatus] = useState('idle')

  const contactLabels = [t.contact.phone, t.contact.email, t.contact.serviceArea, t.contact.hours]
  const contactDisplayValues = [
    contactValues[0],
    contactValues[1],
    t.contact.serviceAreaValue,
    t.contact.hoursValue,
  ]

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
          <AnimatedSection variant="fadeRight" className="lg:col-span-2">
            <span className="inline-block px-5 py-2 bg-primary/12 border border-primary/20 text-primary font-heading text-sm font-semibold rounded-full mb-3.5">
              <FaMessage className="inline mr-1.5 text-xs" /> {t.contact.badge}
            </span>
            <h2 className="text-[clamp(2rem,4.5vw,3.2rem)] font-black tracking-tight text-white mb-3">
              {t.contact.title} <span className="neon-text">{t.contact.titleHighlight}</span>
            </h2>
            <p className="text-white/75 mb-8">{t.contact.sub}</p>

            <div className="space-y-5 mb-8">
              {contactLabels.map((label, i) => {
                const Icon = contactIcons[i]
                const href = contactHrefs[i]
                const value = contactDisplayValues[i]
                return (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-12 h-12 min-w-[48px] rounded-[14px] bg-primary/10 border border-primary/15 text-primary flex items-center justify-center">
                      <Icon />
                    </div>
                    <div>
                      <strong className="font-heading text-sm text-white block">{label}</strong>
                      {href ? (
                        <a href={href} className="text-sm text-white/75 hover:text-primary transition-colors">{value}</a>
                      ) : (
                        <span className="text-sm text-white/75">{value}</span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fadeLeft" className="lg:col-span-3">
            <div className="glass-card p-8 sm:p-9">
              <h4 className="text-white text-xl font-bold mb-1">{t.contact.formTitle}</h4>
              <p className="text-white/75 text-sm mb-6">{t.contact.formSub}</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-heading font-semibold text-sm text-white/80 mb-1.5">{t.contact.firstName} *</label>
                    <input type="text" placeholder="John" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block font-heading font-semibold text-sm text-white/80 mb-1.5">{t.contact.lastName} *</label>
                    <input type="text" placeholder="Doe" required className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-heading font-semibold text-sm text-white/80 mb-1.5">{t.contact.emailLabel} *</label>
                    <input type="email" placeholder="john@example.com" required className={inputClass} />
                  </div>
                  <div>
                    <label className="block font-heading font-semibold text-sm text-white/80 mb-1.5">{t.contact.phoneLabel} *</label>
                    <input type="tel" placeholder="(123) 456-7890" required className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="block font-heading font-semibold text-sm text-white/80 mb-1.5">{t.contact.address}</label>
                  <input type="text" placeholder={t.contact.addressPlaceholder} className={inputClass} />
                </div>

                <div>
                  <label className="block font-heading font-semibold text-sm text-white/80 mb-1.5">{t.contact.projectDetails}</label>
                  <textarea rows={4} placeholder={t.contact.projectPlaceholder} className={`${inputClass} resize-none`} />
                </div>

                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className={`btn-glow text-base rounded-full w-full py-3.5 flex items-center justify-center gap-2 ${
                    status === 'sent' ? '!bg-gradient-to-r !from-accent-green !to-accent-blue !shadow-[0_0_30px_rgba(0,229,160,0.4)]' : ''
                  }`}
                >
                  {status === 'idle' && <><FaPaperPlane /> {t.contact.sendRequest}</>}
                  {status === 'sending' && <><FaSpinner className="animate-spin" /> {t.contact.sending}</>}
                  {status === 'sent' && <><FaCheck /> {t.contact.sent}</>}
                </button>

                <p className="text-center text-xs text-white/75 flex items-center justify-center gap-1">
                  <FaLock className="text-[10px]" /> {t.contact.secure}
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
