import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { target: 500, suffix: '+', label: 'Projects Done' },
  { target: 15, suffix: '+', label: 'Years Experience' },
  { target: 100, suffix: '%', label: 'Satisfaction Rate' },
  { target: 50, suffix: '+', label: '5-Star Reviews' },
]

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
  return (
    <section className="relative z-10 bg-gradient-to-r from-primary via-[#FF8F35] to-neon-2 py-11 shadow-[0_0_60px_rgba(255,107,53,0.3)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <p className="text-white/70 text-xs font-semibold uppercase tracking-[1.5px] mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
