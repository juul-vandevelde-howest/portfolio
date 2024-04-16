import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Reviews from '@/components/Reviews'
import Skills from '@/components/Skills'
import Works from '@/components/Works'

export default function Home() {
  return (
    // TODO: padding x-16 zonder scroll te verpesten
    <main className="mx-auto max-w-screen-2xl bg-background px-16 text-foreground transition-all duration-300">
      <Header />
      <About />
      <Skills />
      <Works />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  )
}
