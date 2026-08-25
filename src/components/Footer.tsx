import { Link } from 'react-router'
import { motion } from 'motion/react'

export default function Footer() {
  return (
    <footer className="relative z-40 mx-auto mb-8 max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-6 py-6 backdrop-blur-xl">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-sm text-white/50">
            © 2026 Chaos Engine. Crafted in the noise.
          </p>
        </motion.div>

        <nav className="flex items-center gap-4 text-sm text-white/60">
          <Link
            to="/"
            className="transition-colors hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="transition-colors hover:text-white"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="transition-colors hover:text-white"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}
