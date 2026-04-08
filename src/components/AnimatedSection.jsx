import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const fadeRight = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const fadeLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
}

const variants = { fadeUp, fadeRight, fadeLeft, zoomIn, stagger }

export default function AnimatedSection({ children, variant = 'fadeUp', className = '', delay = 0, ...props }) {
  const v = variants[variant] || fadeUp
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: v.hidden,
        visible: { ...v.visible, transition: { ...v.visible?.transition, delay } },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export { fadeUp, fadeRight, fadeLeft, zoomIn, stagger }
