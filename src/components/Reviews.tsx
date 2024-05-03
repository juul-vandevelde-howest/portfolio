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
      text: 'Juul is the ideal help in building your website. He creates calm and confidence. He brings your message to its essence. In all simplicity, pure, clear and contemporary. He is a professional in optimizing, taking security into account.',
      author: 'Mom',
    },
    {
      text: 'For our new website, we had contacted Juul Van de Velde. He sensed perfectly what we wanted and quickly came up with a beautiful design. For us it was important that the customer can clearly see that we deliver a premium product and that feeling had to be reflected in the website. No maze but simplicity and a clear message, if you want a heat pump you have to come to us 😊 In this he succeeded very well.  People are finding their way to our product and the new site has given an extra boost to our sales.',
      author: 'Ecoterm WP',
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
      <div className="mb-40 mt-20 flex flex-row gap-12">
        <div className="w-7/12 border-2 border-foreground p-16">
          <div className="pb-12 text-xl">{reviews[currentIndex].text}</div>
          <div className="text-3xl italic">{reviews[currentIndex].author}</div>
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
