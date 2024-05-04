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
      text: 'For our new website, we had contacted Juul Van de Velde. He sensed perfectly what we wanted and quickly came up with a beautiful design. For us it was important that the customer can clearly see that we deliver a premium product and that feeling had to be reflected in the website. No maze but simplicity and a clear message, if you want a heat pump you have to come to us 😊 In this he succeeded very well. People are finding their way to our product and the new site has given an extra boost to our sales.',
      author: 'Ecoterm WP',
    },
    {
      text: 'Juul is the ideal help in building your website. He creates calm and confidence. He brings your message to its essence. In all simplicity, pure, clear and contemporary. He is a professional in optimizing, taking security into account.',
      author: 'Mom',
    },
    {
      text: "Juul Van de Velde is a web development master, seamlessly blending functionality and design. With expertise in both front-end and back-end technologies, he crafts user-friendly experiences with precision. Juul's work showcases versatility, innovation, and a commitment to exceeding client expectations.",
      author: 'ChatGPT',
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
    <Section title="what<br />others say" id="reviews">
      <div className="flex flex-row sm:mb-24 sm:mt-12 sm:gap-6 md:mb-28 md:mt-14 md:gap-8 lg:mb-32 lg:mt-16 lg:gap-10 xl:mb-40 xl:mt-20 xl:gap-12">
        <div className="w-7/12 border-2 border-foreground sm:p-10 md:p-11 lg:p-12 xl:p-16">
          <div className="sm:pb-8 md:pb-9 md:text-base lg:pb-10 lg:text-lg xl:pb-12 xl:text-xl">
            {reviews[currentIndex].text}
          </div>
          <div className="italic sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            {reviews[currentIndex].author}
          </div>
        </div>
        <div className="flex w-5/12 flex-col justify-between">
          <div className="border-2 border-foreground p-8">
            <div className="bg-gradient-to-b from-foreground to-60% bg-clip-text pb-12 text-transparent">
              {reviews[(currentIndex + 1) % reviews.length].text
                .slice(0, 100)
                .split(' ')
                .slice(0, -1)
                .join(' ')}{' '}
              ...
            </div>
            <div className="italic lg:text-lg xl:text-xl">
              {reviews[(currentIndex + 1) % reviews.length].author}
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <button onClick={handlePrevious} aria-label="Previous review">
              <ArrowLeft size={64} />
            </button>
            <button onClick={handleNext} aria-label="Next review">
              <ArrowRight size={64} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Reviews
