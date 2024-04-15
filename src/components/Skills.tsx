import Image from 'next/image'

function Skills() {
  return (
    <section id="skills" className="mb-20 h-dvh pt-20">
      <h1 className="text-8xl font-bold italic">WHAT I DO</h1>
      <div className="mx-14 my-20 flex flex-row items-center gap-20">
        <div className="w-1/2">
          <Image
            src="/assets/backend-development.png"
            alt="A datacenter"
            width={656}
            height={437}
            className="rounded pb-2 w-full"
          />
          <span className="text-2xl uppercase italic tracking-widest">
            html / css / typescript / react / next.js
          </span>
        </div>
        <ul className="text-5xl font-bold">
          <li className="mb-8 text-stone-400 hover:text-stone-950">
            UX/UI Design
          </li>
          <li className="mb-8 text-stone-400 hover:text-stone-950">
            Frontend Development
          </li>
          <li className="mb-8 text-stone-400 hover:text-stone-950">
            Backend Development
          </li>
          <li className="mb-8 text-stone-400 hover:text-stone-950">
            Flutter Development
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills
