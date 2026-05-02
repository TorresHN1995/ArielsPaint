export default function BrandLogo({ className = '' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="brand-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#FFD93D" />
        </linearGradient>
      </defs>
      <path
        d="M20 6 L31 30 L26 30 L24 25 L16 25 L14 30 L9 30 Z M17.6 21 L22.4 21 L20 14.5 Z"
        fill="url(#brand-grad)"
      />
      <circle cx="29.5" cy="33" r="2.2" fill="url(#brand-grad)" opacity="0.85" />
      <circle cx="32.5" cy="36.5" r="1.2" fill="url(#brand-grad)" opacity="0.55" />
    </svg>
  )
}
