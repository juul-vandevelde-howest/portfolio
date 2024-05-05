'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

function Contact() {
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

  const firstText = useRef(null)
  const secondText = useRef(null)
  const thirdText = useRef(null)
  const fourthText = useRef(null)
  const slider = useRef(null)
  const xPercentRef = useRef(0)

  const animate = useCallback(() => {
    if (xPercentRef.current > 0) {
      xPercentRef.current = -100
    }
    if (firstText.current)
      gsap.set(firstText.current, { xPercent: xPercentRef.current })
    if (secondText.current)
      gsap.set(secondText.current, { xPercent: xPercentRef.current })
    if (thirdText.current)
      gsap.set(thirdText.current, { xPercent: xPercentRef.current })
    if (fourthText.current)
      gsap.set(fourthText.current, { xPercent: xPercentRef.current })
    requestAnimationFrame(animate)
    xPercentRef.current += 0.05
  }, [])

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
  }, [animate])

  return (
    <div
      id="contact"
      ref={slider}
      className={`flex cursor-pointer overflow-hidden whitespace-nowrap font-bold italic text-4xl mb-14 sm:mb-24 sm:text-5xl md:mb-28 md:text-6xl lg:mb-32 lg:text-7xl xl:mb-40 xl:text-8xl ${isHovered && 'justify-center'}`}
      onMouseEnter={() => {
        handleMouseEnter()
      }}
      onMouseLeave={() => {
        handleMouseLeave()
      }}
    >
      {!isHovered ? (
        <>
          <p ref={firstText} className="m-0 inline-block pr-8 uppercase">
            reach out -
          </p>
          <p ref={secondText} className="m-0 inline-block pr-8 uppercase">
            reach out -
          </p>
          <p ref={thirdText} className="m-0 inline-block pr-8 uppercase">
            reach out -
          </p>
          <p ref={fourthText} className="m-0 inline-block pr-8 uppercase">
            reach out -
          </p>
        </>
      ) : (
        <button className="w-full uppercase italic" onClick={handleClick}>
          {isCopied ? 'email copied :)' : 'click to copy email'}
        </button>
      )}
    </div>
  )
}

export default Contact
