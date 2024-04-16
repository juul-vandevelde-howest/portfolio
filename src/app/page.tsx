import About from '@/components/About'
import Header from '@/components/Header'
import Reviews from '@/components/Reviews'
import Skills from '@/components/Skills'
import Works from '@/components/Works'

export default function Home() {
  return (
    <main className="mx-16">
      <Header />
      <About />
      <Skills />
      <Works />
      <Reviews />
    </main>
  )
}
