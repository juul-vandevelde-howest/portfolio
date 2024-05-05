import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import About from '@/components/About'
const Skills = dynamic(() => import('@/components/Skills'), { ssr: true })
const Works = dynamic(() => import('@/components/Works'), { ssr: true })
const Reviews = dynamic(() => import('@/components/Reviews'), { ssr: true })
const Contact = dynamic(() => import('@/components/Contact'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })

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
