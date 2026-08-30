import { useLocation } from 'react-router'

export default function DnaPage() {
  const { pathname } = useLocation()

  if (pathname !== '/dna') {
    return null
  }

  return (
    <main className="fixed inset-0 top-14 h-[calc(100dvh-56px)] w-full">
      <iframe
        src="/dna.html"
        className="h-full w-full border-0"
        allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
        loading="eager"
      />
    </main>
  )
}
