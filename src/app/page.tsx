import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Reviews from '@/components/Reviews'
import Skills from '@/components/Skills'
import Works from '@/components/Works'

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <div className="mx-auto max-w-screen-2xl px-16  transition-all duration-300">
        <Header />
        <About />
        <Skills />
        <Works />
        <Reviews />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
