import Image from 'next/image'

function About() {
  return (
    <section id="about" className="mb-20 grid grid-cols-2 pt-20">
      <div>
        <article className="m-16 mb-4 flex flex-col gap-20 text-2xl font-light">
          <p className="max-w-sm">
            Multimedia & Creative Technologies <strong>student</strong> based in
            Belgium
          </p>
          <p className="ml-auto max-w-sm">
            <strong>Crafting pastries</strong> on weekends while pursuing my
            passion for technology and design
          </p>
          <p className="max-w-sm">
            Driven by a <strong>love for progress</strong>, learning, and
            innovation in every endeavor
          </p>
        </article>
        <div className="sticky bottom-8 mr-8 flex flex-col text-right text-5xl font-bold">
          Full
          <br />
          Stack
          <br />
          Developer
        </div>
        <button className="ml-24 h-48 w-48 rounded-full bg-black text-xl text-white">
          Reach out -&gt;
        </button>
      </div>
      <Image
        src="/assets/juul.png"
        alt="Picture of Juul Van de Velde working in a bakery"
        width={679}
        height={904}
        priority={true}
        className="w-full object-cover"
      />
    </section>
  )
}

export default About
