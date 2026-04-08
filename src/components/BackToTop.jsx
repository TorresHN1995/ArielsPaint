import { useState, useEffect } from 'react'
import { FaChevronUp } from 'react-icons/fa6'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-[88px] right-8 w-[50px] h-[50px] bg-gradient-to-br from-primary to-neon-2 text-white rounded-full flex items-center justify-center text-base cursor-pointer shadow-[0_0_30px_rgba(255,107,53,0.5)] z-50 transition-all duration-400 hover:-translate-y-1 ${
        visible ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-5'
      }`}
    >
      <FaChevronUp />
    </button>
  )
}
