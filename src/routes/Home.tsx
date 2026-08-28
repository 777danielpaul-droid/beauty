import { motion } from 'motion/react'
import FlowField from '../components/FlowField'
import TypewriterTitle from '../components/TypewriterTitle'

export default function Home() {
  return (
    <>
      {/* Hero: Video-only section */}
      <HeroSection />

      {/* FlowField as animated background for the text section */}
      <FlowField theme="aurora" density="medium" className="min-h-screen">
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg text-white/60"
          >
            This project explores the boundary between chaos and order — where
            organic noise fields collide with precise digital geometry, creating
            emergent beauty from simple rules.
          </motion.p>
        </div>
      </FlowField>
    </>
  )
}

function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 15.7s hero video — full screen background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/flowfield-hero-clip.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40" />

      {/* Hero content — centered */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <TypewriterTitle
          sequences={[{ text: "fireworx", deleteAfter: false }]}
          typingSpeed={140}
          startDelay={600}
          autoLoop={false}
          naturalVariance={true}
          textClassName="text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]"
          cursorClassName="bg-white"
          className="py-0"
        />
      </div>
    </section>
  )
}
