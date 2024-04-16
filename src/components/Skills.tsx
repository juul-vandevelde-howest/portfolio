import Image from 'next/image'
import Section from './Section'

function Skills() {
  return (
    <Section title="WHAT I DO" id="skills">
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
    </Section>
  )
}

export default Skills
