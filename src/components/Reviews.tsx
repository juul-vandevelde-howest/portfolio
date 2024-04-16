'use client'

import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import Section from './Section'
import { useState } from 'react'

function Reviews() {
  interface Review {
    text: string
    author: string
  }

  const reviews: Review[] = [
    {
      text: "Juul Van de Velde is a web development master, seamlessly blending functionality and design. With expertise in both front-end and back-end technologies, he crafts user-friendly experiences with precision. Juul's work showcases versatility, innovation, and a commitment to exceeding client expectations.",
      author: 'ChatGPT',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
      author: 'Mom',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
      author: 'Dad',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1,
    )
  }

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % reviews.length)
  }

  return (
    <Section title="WHAT<br />OTHERS SAY" id="reviews">
      <div className="mb-40 mt-20 flex flex-row justify-center gap-12">
        <div className="w-1/2 border-2 border-foreground p-16">
          <div className="pb-12 text-xl">{reviews[currentIndex].text}</div>
          <div className="text-3xl italic">{reviews[currentIndex].author}</div>
        </div>
        <div className="flex w-1/3 flex-col justify-between">
          <div className="border-2 border-foreground p-8">
            <div className="bg-gradient-to-b from-foreground to-transparent to-60% bg-clip-text pb-12 text-transparent">
              {reviews[(currentIndex + 1) % reviews.length].text
                .slice(0, 100)
                .split(' ')
                .slice(0, -1)
                .join(' ')}{' '}
              ...
            </div>
            <div className="text-xl italic">
              {reviews[(currentIndex + 1) % reviews.length].author}
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <button onClick={handlePrevious}>
              <ArrowLeft size={64} />
            </button>
            <button onClick={handleNext}>
              <ArrowRight size={64} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Reviews
