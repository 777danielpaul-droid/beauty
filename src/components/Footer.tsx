import { Link } from 'react-router'
import { motion } from 'motion/react'

export default function Footer() {
  return (
    <footer className="relative z-40 mx-auto mb-8 flex flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-black/50 dark:text-white/50 md:flex-row">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p>&copy; 2026 Chaos Engine. Crafted in the noise.</p>
      </motion.div>

      <nav className="flex items-center gap-4">
        <Link to="/" className="transition-colors hover:text-black dark:hover:text-white">Home</Link>
        <Link to="/about" className="transition-colors hover:text-black dark:hover:text-white">About</Link>
        <Link to="/contact" className="transition-colors hover:text-black dark:hover:text-white">Contact</Link>
      </nav>
    </footer>
  )
}
