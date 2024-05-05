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
      <div className="xs:px-12 px-4 transition-all duration-300 sm:mx-auto sm:max-w-screen-2xl md:px-16">
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
