import { FaWhatsapp } from 'react-icons/fa6'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/19083032770"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-8 right-8 w-[56px] h-[56px] bg-[#25D366] text-white rounded-full flex items-center justify-center text-2xl z-50 shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:-translate-y-1 hover:shadow-[0_6px_32px_rgba(37,211,102,0.6)] transition-all duration-300"
    >
      <FaWhatsapp />
    </a>
  )
}
