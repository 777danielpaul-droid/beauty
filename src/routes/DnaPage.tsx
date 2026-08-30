import { motion } from 'motion/react'

export default function DnaPage() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0f] to-black" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-4xl font-bold text-white"
        >
          DNA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-white/60"
        >
          In this section, we explore the double helix — where biology meets design.
        </motion.p>
      </div>
    </section>
  )
}
