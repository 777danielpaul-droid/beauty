import { motion } from 'motion/react'
import FlowField from '../components/FlowField'

export default function Home() {
  return (
    <>
      {/* Hero: Video-only section */}
      <HeroSection />

      {/* FlowField as background for the rest of the page */}
      <FlowField theme="aurora" density="medium" className="min-h-screen">
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-3xl font-bold text-black dark:text-white"
          >
            Chaos Engine
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-black/60 dark:text-white/60"
          >
            Scroll down to see the noise field animate beneath you.
          </motion.p>
        </div>
      </FlowField>
    </>
  )
}

function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/flowfield-hero-clip.mp4" type="video/mp4" />
      </video>

      {/* Hero content — centered, neon style */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          className="max-w-4xl font-bold text-5xl text-black dark:text-white sm:text-6xl md:text-7xl"
        >
          Chaos finds its
          <br />
          <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-violet-300 bg-clip-text text-transparent">
            own beauty
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
          className="mt-6 max-w-md text-lg text-black/80 dark:text-white/80"
        >
          Thousands of particles drift through an organic noise field, painting
          luminous trails that shift and spiral endlessly.
        </motion.p>
      </div>
    </section>
  )
}
