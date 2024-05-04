import Image from 'next/image'
import foldImage from '../../public/assets/juul.jpg'

function About() {
  return (
    <section
      id="about"
      className="relative grid grid-cols-2 pt-20 md:mb-14 lg:mb-16 xl:mb-20"
    >
      <div className="mr-8">
        <article className="flex flex-col font-light sm:gap-10 md:gap-14 md:text-lg lg:gap-16 lg:text-xl xl:gap-20 xl:text-2xl">
          <p>
            Multimedia & Creative
            <br />
            Technologies <strong>student</strong> based in
            <br />
            Belgium
          </p>
          <p className="ml-auto inline">
            <strong>Crafting pastries</strong> on weekends
            <br />
            while pursuing my passion for
            <br />
            technology and design
          </p>
          <p>
            Driven by a <strong>love for progress</strong>,<br />
            learning, and innovation in every
            <br />
            endeavor
          </p>
        </article>
        <div className="text-gradient absolute z-50 w-full whitespace-nowrap font-bold uppercase italic sm:pt-10 sm:text-5xl md:pt-14 md:text-6xl lg:pt-16 lg:text-7xl xl:pt-20 xl:text-8xl">
          full stack developer
        </div>
      </div>
      <Image
        src={foldImage}
        alt="Picture of Juul Van de Velde working in a bakery"
        priority={true}
        className="w-full object-cover"
        placeholder="blur"
      />
    </section>
  )
}

export default About
