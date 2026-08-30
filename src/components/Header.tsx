import { NavLink } from 'react-router'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { cn } from '../lib/utils'
import { Sun, Moon, Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { name: 'home', to: '/' },
  { name: 'dna', to: '/dna' },
  { name: 'experimente', to: '/experimente' },
  { name: 'produkte', to: '/produkte' },
  { name: 'welten', to: '/welten' },
  { name: 'kontakt', to: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [inverted, setInverted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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
        {/* Burger menu — always visible */}
        <button
          type="button"
          aria-label="Toggle menu"
          title="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls={menuOpen ? 'mobile-menu-panel' : undefined}
          onClick={() => setMenuOpen((prev) => !prev)}
          className={cn(
            'rounded-xl p-2 text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors',
          )}
        >
          <Menu size={20} />
        </button>

        {/* Right side: invert toggle */}
        <motion.button
          type="button"
          aria-label="Invert colors"
          title="Invert colors"
          onClick={() => setInverted((prev) => !prev)}
          className={cn(
            'rounded-xl p-2 text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors',
            inverted && 'text-black dark:text-white',
          )}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={{ rotate: inverted ? 180 : 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="inline-block"
          >
            {inverted ? <Moon size={18} /> : <Sun size={18} />}
          </motion.span>
        </motion.button>
      </nav>

      {/* Mobile side panel with menu items */}
      <motion.nav
        id="mobile-menu-panel"
        initial={{ x: '-100%' }}
        animate={{ x: menuOpen ? '0%' : '-100%' }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed top-0 left-0 h-screen w-64 bg-black/90 backdrop-blur-xl border-r border-white/10 z-[60] flex flex-col pt-20 px-6 gap-6"
      >
        {/* Close button */}
        <button
          type="button"
          aria-label="Close menu"
          title="Close menu"
          onClick={() => setMenuOpen(false)}
          className="self-end rounded-xl p-2 text-white/60 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              cn(
                'text-xl font-light text-white/80 hover:text-white transition-colors',
                isActive && 'text-white',
              )
            }
          >
            {item.name}
          </NavLink>
        ))}
      </motion.nav>

      {/* Backdrop when menu open */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-[55]"
        />
      )}
    </header>
  )
}
