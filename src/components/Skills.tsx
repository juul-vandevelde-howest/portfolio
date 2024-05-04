'use client'

import { useState } from 'react'
import Image from 'next/image'
import Section from './Section'
import UIUX from '../../public/assets/ui-design.jpg'
import dog from '../../public/assets/doggo.jpg'
import frontend from '../../public/assets/frontend.jpg'
import backend from '../../public/assets/backend.jpg'
import flutter from '../../public/assets/flutter.jpg'

function Skills() {
  const [currentHover, setCurrentHover] = useState<string | null>(null)

  const skills = [
    {
      name: 'UX/UI Design',
      image: UIUX,
      span: 'figma / adobe xd / wireframing / testing',
      alt: 'pastel colored UX wireframes',
    },
    {
      name: 'Frontend Development',
      image: frontend,
      span: 'html / css / typescript / react / next.js',
      alt: 'A laptop showing a code editor with a website design',
    },
    {
      name: 'Backend Development',
      image: backend,
      span: '.net / azure / firebase / node.js',
      alt: 'An AI generated image of a data center',
    },
    {
      name: 'Flutter Development',
      image: flutter,
      span: 'dart / flutter',
      alt: 'A laptop and a phone showing a flutter app design',
    },
  ]

  return (
    <Section title="what i do" id="skills">
      <div className="flex flex-row items-center sm:my-12 sm:gap-9 md:my-14 md:gap-14 lg:my-16 lg:gap-16 xl:my-20 xl:gap-20">
        <div className="w-1/2">
          {skills.map(skill => (
            <Image
              key={skill.name}
              src={skill.image}
              alt={skill.alt}
              className={`mb-2 ${currentHover === skill.name ? 'block' : 'hidden'}`}
              placeholder="blur"
              priority={true}
            />
          ))}
          <Image
            src={dog}
            alt="A dog with glasses doing work on an ipad"
            className={`mb-2 ${currentHover ? 'hidden' : 'block'}`}
            placeholder="blur"
          />
          <span className="text-nowrap uppercase italic tracking-widest lg:text-lg xl:text-2xl">
            {currentHover
              ? skills.find(skill => skill.name === currentHover)?.span
              : 'hover over a topic to see my skills'}
          </span>
        </div>
        <ul className="cursor-default font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          {skills.map(skill => (
            <li
              key={skill.name}
              className="text-stone-500 hover:text-foreground sm:py-2 md:py-3 lg:py-4"
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
