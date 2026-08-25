import { motion } from 'motion/react'

export default function About() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-4xl font-bold text-black dark:text-white"
        >
          About
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="leading-relaxed text-black/60 dark:text-white/60"
        >
          This project showcases a Canvas particle flow field background — an
          organic noise-driven simulation of thousands of glowing streams. The
          visual layers are composed with a liquid-glass header and footer.
        </motion.p>
      </div>
    </section>
  )
}
