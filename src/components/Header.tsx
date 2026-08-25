import { Link, NavLink } from 'react-router'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { cn } from '../lib/utils'

const NAV_ITEMS = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
]

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
      <nav className="mx-auto flex h-14 items-center justify-between px-6">
        <Link to="/" className="text-xl font-bold">
          <span className="gradient-text bg-gradient-to-r from-emerald-300 via-teal-200 to-violet-300 bg-clip-text text-transparent">
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
                  'rounded-xl px-4 py-2 text-sm font-medium text-black/60 dark:text-white/60 transition-colors hover:text-black dark:hover:text-white',
                  isActive && 'text-black dark:text-white',
                )
              }
            />
          ))}
        </div>
      </nav>
    </header>
  )
}
