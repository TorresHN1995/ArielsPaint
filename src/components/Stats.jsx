import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../i18n/LanguageContext'

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2200
          const start = performance.now()
          const tick = (now) => {
            const t = Math.min((now - start) / duration, 1)
            setCount(Math.round(target * (1 - Math.pow(1 - t, 4))))
            if (t < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      <span className="font-heading text-5xl sm:text-6xl font-black text-white leading-none">{count}</span>
      <span className="font-heading text-3xl font-bold text-white/60">{suffix}</span>
    </span>
  )
}

export default function Stats() {
  const { t } = useLang()

  const stats = [
    { target: 500, suffix: '+', label: t.stats.projects },
    { target: 15, suffix: '+', label: t.stats.years },
    { target: 100, suffix: '%', label: t.stats.satisfaction },
    { target: 50, suffix: '+', label: t.stats.reviews },
  ]

  return (
    <section className="relative z-10 bg-dark-3 border-y border-primary/20 py-12 overflow-hidden">
      <div className="absolute inset-0 opacity-90" style={{
        background: 'linear-gradient(95deg, #FF6B35 0%, #FF8F35 55%, #E8A93B 100%)'
      }} />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.18) 100%)'
      }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Counter target={s.target} suffix={s.suffix} />
              <p className="text-white/85 text-xs font-semibold uppercase tracking-[1.5px] mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
