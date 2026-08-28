import { NavLink } from 'react-router'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { cn } from '../lib/utils'
import { Sun, Moon } from 'lucide-react'

const NAV_ITEMS = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [inverted, setInverted] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (inverted) {
      root.classList.add('invert-all')
    } else {
      root.classList.remove('invert-all')
    }
  }, [inverted])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <nav className="mx-auto flex h-14 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'rounded-xl px-4 py-2 text-sm font-medium text-black/60 dark:text-white/60 transition-colors hover:text-black dark:hover:text-white',
                  isActive && 'text-black dark:text-white',
                )
              }
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Invert colors"
          title="Invert colors"
          onClick={() => setInverted(!inverted)}
          className={cn(
            'rounded-xl p-2 text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors',
            inverted && 'text-black dark:text-white',
          )}
        >
          <motion.span
            animate={{ rotate: inverted ? 180 : 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="inline-block"
          >
            {inverted ? <Moon size={18} /> : <Sun size={18} />}
          </motion.span>
        </button>
      </nav>
    </header>
  )
}
