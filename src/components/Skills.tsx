import Image from 'next/image'
import Section from './Section'

function Skills() {
  return (
    <Section title="WHAT I DO" id="skills">
      <div className="my-20 flex flex-row items-center justify-center gap-20">
        <div className="w-1/2">
          <Image
            src="/assets/backend-development.png"
            alt="A datacenter"
            width={656}
            height={437}
            className="w-full rounded pb-2"
          />
          <span className="text-2xl uppercase italic tracking-widest">
            html / css / typescript / react / next.js
          </span>
        </div>
        <ul className="text-5xl font-bold">
          <li className="text-secondary hover:text-foreground mb-8">
            UX/UI Design
          </li>
          <li className="text-secondary hover:text-foreground mb-8">
            Frontend Development
          </li>
          <li className="text-secondary hover:text-foreground mb-8">
            Backend Development
          </li>
          <li className="text-secondary hover:text-foreground mb-8">
            Flutter Development
          </li>
        </ul>
      </div>
    </Section>
  )
}

export default Skills
