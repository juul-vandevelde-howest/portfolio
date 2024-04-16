'use client'

import { Check, Copy } from '@phosphor-icons/react'
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
        <button
          className="ml-24 h-48 w-48 rounded-full bg-foreground text-xl text-background"
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
            <div className="flex flex-row items-center justify-center gap-2">
              {isCopied ? (
                <>Email copied</>
              ) : (
                <>
                  Copy email <Copy size={24} />
                </>
              )}
            </div>
          ) : (
            'Reach out ->'
          )}
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
