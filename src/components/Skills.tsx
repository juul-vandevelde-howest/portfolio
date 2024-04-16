'use client'

import { useState } from 'react'
import Image from 'next/image'
import Section from './Section'

function Skills() {
  const [currentHover, setCurrentHover] = useState<string | null>(null)

  const skills = [
    {
      name: 'UX/UI Design',
      image: '/assets/ui-design.jpg',
      span: 'figma / adobe xd / wireframing / user testing',
      alt: 'A designer working on a laptop',
    },
    {
      name: 'Frontend Development',
      image: '/assets/frontend.jpg',
      span: 'html / css / typescript / react / next.js',
      alt: 'A developer working on a laptop',
    },
    {
      name: 'Backend Development',
      image: '/assets/backend.png',
      span: '.net / azure / firebase / node.js',
      alt: 'A developer working on a laptop',
    },
    {
      name: 'Flutter Development',
      image: '/assets/flutter.jpg',
      span: 'dart / flutter',
      alt: 'A developer working on a laptop',
    },
  ]

  const currentSkill = skills.find(skill => skill.name === currentHover)

  return (
    <Section title="WHAT I DO" id="skills">
      <div className="my-20 flex flex-row items-center justify-center gap-20">
        <div className="w-1/2">
          <Image
            src={currentSkill ? currentSkill.image : '/assets/backend.png'}
            alt="A datacenter"
            width={800}
            height={400}
            className="mb-2 max-w-3xl rounded"
          />
          <span className="text-2xl uppercase italic tracking-widest">
            {currentSkill
              ? currentSkill.span
              : 'html / css / typescript / react / next.js'}
          </span>
        </div>
        <ul className="cursor-default text-5xl font-bold">
          {skills.map(skill => (
            <li
              key={skill.name}
              className="py-4 text-secondary hover:text-foreground"
              onMouseEnter={() => setCurrentHover(skill.name)}
              onMouseLeave={() => setCurrentHover(null)}
            >
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default Skills
