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
          {/* <button
            className="flex flex-row items-center justify-start whitespace-nowrap font-bold italic lg:mt-14 lg:text-4xl xl:mt-20 xl:text-5xl"
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
          </button> */}
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
