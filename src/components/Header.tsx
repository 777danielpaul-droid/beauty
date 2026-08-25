import { Link, NavLink } from 'react-router'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { cn } from '../lib/utils'

const NAV_ITEMS = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
]

function GlassSVGFilter() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute -top-1/2 left-0 h-1/2 w-[400px] -translate-y-1/2 opacity-[0.55] blur-[4px]"
    >
      <defs>
        <linearGradient id="gradient-1" x1="0" x2="100%" y1="0" y2="100%">
          <stop stopColor="#7DD3FE" offset="0%" />
          <stop stopColor="#FECACA" offset="100%" />
        </linearGradient>
        <linearGradient id="gradient-2" x1="0" x2="100%" y1="0" y2="100%">
          <stop stopColor="#FECACA" offset="0%" />
          <stop stopColor="#7DD3FE" offset="100%" />
        </linearGradient>
        <filter
          id="liquid-glass-filter-header"
          filterUnits="40"
          x="0"
          y="0"
          width="100"
          height="100"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 20 -10"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" mode="normal" />
        </filter>
        <mask id="mask" x="0" y="0" width="100" height="100">
          <use href="#circle" fill="white" />
        </mask>
      </defs>
      <rect
        aria-hidden="true"
        className="-z-1 absolute inset-0 h-full w-full"
        fill="url(#gradient-1)"
      />
      <rect
        aria-hidden="true"
        className="-z-1 absolute inset-0 h-full w-full"
        fill="url(#gradient-2)"
        style={{
          mask: 'var(--mask)',
          maskImage: 'url(#mask)',
        }}
      />
      <circle id="circle" cx="500" cy="0" r="500" fill="black" />
      <use
        href="#circle"
        fill="black"
        style={{
          filter: 'url(#liquid-glass-filter-header)',
        }}
      />
    </svg>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <GlassSVGFilter />
      <nav className="relative mx-auto flex h-14 items-center justify-between rounded-2xl border border-white/20 bg-white/5 px-6 backdrop-blur-xl">
        <Link to="/" className="text-xl font-bold text-white">
          <span className="gradient-text bg-gradient-to-r from-emerald-300 to-violet-300 bg-clip-text text-transparent">
            CHAOS
          </span>
        </Link>

        <div className="flex items-center gap-2">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'relative rounded-xl px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white',
                  isActive && 'text-white',
                )
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute inset-0 -z-10 rounded-xl bg-white/10"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
