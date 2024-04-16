'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

function Contact() {
  const firstText = useRef(null)
  const secondText = useRef(null)
  const thirdText = useRef(null)
  const fourthText = useRef(null)
  const slider = useRef(null)

  let xPercent = 0

  useEffect(() => {
    if (secondText.current) {
      gsap.set(secondText.current, {
        left: (secondText.current as HTMLElement).getBoundingClientRect().width,
      })
    }
    if (thirdText.current) {
      gsap.set(thirdText.current, {
        left: (thirdText.current as HTMLElement).getBoundingClientRect().width,
      })
    }
    if (fourthText.current) {
      gsap.set(fourthText.current, {
        left: (fourthText.current as HTMLElement).getBoundingClientRect().width,
      })
    }
    requestAnimationFrame(animate)
  })

  const animate = () => {
    if (xPercent > 0) {
      xPercent = -100
    }
    gsap.set(firstText.current, { xPercent: xPercent })
    gsap.set(secondText.current, { xPercent: xPercent })
    gsap.set(thirdText.current, { xPercent: xPercent })
    gsap.set(fourthText.current, { xPercent: xPercent })
    requestAnimationFrame(animate)
    xPercent += 0.05
  }

  return (
    <div
      ref={slider}
      className="-mx-16 mb-40 flex cursor-pointer overflow-hidden whitespace-nowrap text-8xl font-bold italic"
      onMouseEnter={() => {
        gsap.to(slider.current, { duration: 1, xPercent: -100 })
      }}
      onMouseLeave={() => {
        gsap.to(slider.current, { duration: 1, xPercent: 0 })
      }}
    >
      <p ref={firstText} className="inline-block pr-8">
        REACH OUT -
      </p>
      <p ref={secondText} className="inline-block pr-8">
        REACH OUT -
      </p>
      <p ref={thirdText} className="inline-block pr-8">
        REACH OUT -
      </p>
      <p ref={fourthText} className="inline-block pr-8">
        REACH OUT -
      </p>
    </div>
  )
}

export default Contact
