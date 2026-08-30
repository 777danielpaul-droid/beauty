import { motion } from 'motion/react'
import TypewriterTitle from '../components/TypewriterTitle'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection />
    </>
  )
}

function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Gradient background — no video, keep clean */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0f] to-black" />

      {/* Hero content — centered */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 text-center">
        <TypewriterTitle
          sequences={[
            { text: "pixel.fireworx", deleteAfter: true, pauseAfter: 3000 },
            {
              text: "WHATEVER YOU CAN IMAGINE, I WILL BUILD IT.",
              deleteAfter: true, pauseAfter: 3000,
            },
            {
              text: "I turn ideas into working digital products.",
              deleteAfter: false,
            },
          ]}
          typingSpeed={120}
          startDelay={600}
          autoLoop={false}
          naturalVariance={true}
          textClassName="text-2xl sm:text-3xl whitespace-normal text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]"
          cursorClassName="bg-white"
          className="py-0"
        />
      </div>
    </section>
  )
}
