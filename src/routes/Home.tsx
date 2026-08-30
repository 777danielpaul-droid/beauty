import TypewriterTitle from '../components/TypewriterTitle'

export default function Home() {
  return <HeroSection />
}

function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero video — 15.7s full screen background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-[110%] translate-x-[-5vw] object-cover object-[62%_50%] sm:w-full sm:translate-x-0 sm:object-center"
      >
        <source src="/videos/flowfield-hero-clip.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40" />

      {/* Hero content — centered */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 text-center max-w-xl">
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
