'use client'

import { Copy } from '@phosphor-icons/react'
import Image from 'next/image'
import { useState } from 'react'

function About() {
  const [isHovered, setIsHovered] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setIsCopied(false)
  }

  const handleClick = () => {
    navigator.clipboard.writeText('vandeveldejuul@protonmail.com')
    setIsCopied(true)
  }

  return (
    <section id="about" className="relative mb-20 grid grid-cols-2 pt-20">
      <div className="mr-8">
        <article className="flex flex-col font-light lg:gap-16 lg:text-xl xl:gap-20 xl:text-2xl">
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
        <div className="text-gradient absolute z-50 w-full whitespace-nowrap pt-20 text-8xl font-bold uppercase italic">
          full stack developer
          <button
            className="mt-20 flex flex-row items-center justify-start whitespace-nowrap text-5xl font-bold italic"
            onClick={() => {
              handleClick()
            }}
            onMouseEnter={() => {
              handleMouseEnter()
            }}
            onMouseLeave={() => {
              handleMouseLeave()
            }}
          >
            {isHovered ? (
              <div className="flex flex-row items-center justify-start gap-2 uppercase">
                {isCopied ? (
                  'email copied :)'
                ) : (
                  <>
                    copy email <Copy size={46} weight="fill" />
                  </>
                )}
              </div>
            ) : (
              <div className="uppercase">reach out -&gt;</div>
            )}
          </button>
        </div>
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
