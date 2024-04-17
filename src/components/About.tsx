'use client'

import { Copy } from '@phosphor-icons/react'
import Image from 'next/image'
import { useState } from 'react'
import Contact from './Contact'

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
    <section id="about" className="mb-20 grid grid-cols-2 pt-20">
      <div className="mr-8 flex flex-col justify-between">
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
        <div className="sticky bottom-8 whitespace-nowrap bg-clip-text text-right text-8xl font-bold">
          FULL STACK DEVELOPER
        </div>
        {/* <div className="sticky bottom-8  flex flex-col text-right font-bold lg:text-4xl xl:text-5xl">
          Full
          <br />
          Stack
          <br />
          Developer
        </div> */}
        {/* <Contact /> */}
        {/* <button
          className="flex flex-row items-center justify-start whitespace-nowrap text-8xl font-bold italic"
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
            <div className="flex flex-row items-center justify-start gap-5">
              {isCopied ? (
                'EMAIL COPIED :)'
              ) : (
                <>
                  COPY EMAIL <Copy size={96} weight="fill" />
                </>
              )}
            </div>
          ) : (
            'REACH OUT ->'
          )}
        </button> */}
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
