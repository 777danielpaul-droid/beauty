import { motion } from 'motion/react'

export default function Contact() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-4xl font-bold text-black dark:text-white"
        >
          Contact
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-black/60 dark:text-white/60"
        >
          Reach out — we're always exploring the intersection of chaos and
          beauty.
        </motion.p>
      </div>
    </section>
  )
}
